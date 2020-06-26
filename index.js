const commandLineArgs = require('command-line-args'),
	commandLineUsage = require('command-line-usage'),
	https = require('https'),
	qstr = require('querystring'),
	url = require('url'),
	fs = require('fs'),
	pbjs = require("protobufjs/cli/pbjs"),
	WebSocketClient = require('websocket').client,
	MS_HOST = 'mahjongsoul.game.yo-star.com',
	opts = [{
		name: 'help',
		alias: 'h',
		description: 'Display this usage guide',
		type: Boolean
	}, {
		name: 'servers',
		alias: 'l',
		description: 'Get server list',
		type: Boolean
	}, {
		name: 'server',
		alias: 's',
		description: 'Use custom server within check',
		type: String
	}, {
		name: 'trueserver',
		alias: 'S',
		description: 'Use custom server without check',
		type: String
	}, {
		name: 'update',
		alias: 'u',
		description: 'Update protocol',
		type: Boolean
	}, {
		name: 'info',
		alias: 'i',
		description: 'Get info',
		type: Boolean
	}, {
		name: 'docs',
		alias: 'd',
		description: 'Generate documentation from liqi.json',
		type: Boolean
	}],
	sections = [{
		header: 'Mahjong Soul RPC client',
		content: 'RPC client for Mahjong Soul API'
	}, {
		header: 'Options',
		optionList: opts
	}],
	args = commandLineArgs(opts);
let ProtoBuf = require("protobufjs");

const getServers = (serv = null, nocheck = false) => {
	return new Promise((resolve, reject) => {
		if (serv && nocheck) {
			resolve([serv]);
		} else {
			let ms_opts = {
				hostname: MS_HOST,
				port: 443,
				path: '/version.json',
				method: 'GET'
			};
			// Запрос версии
			const reqVersion = https.request(ms_opts, (resVersion) => {
				resVersion.on('data', (dataVersion) => {
					let resVers = JSON.parse(dataVersion);
					//console.log('Version:', JSON.stringify(resVers, null, 2));
					ms_opts.path = `/v${resVers.version}/config.json`;
					// Запрос конфигурации
					const reqConfig = https.request(ms_opts, (resConfig) => {
						resConfig.on('data', (dataConfig) => {
							let resCfg = JSON.parse(dataConfig);
							//console.log('Config:', JSON.stringify(resCfg, null, 2));
							const mainland = url.parse(resCfg.ip[0].region_urls[0]);
							ms_opts.hostname = mainland.hostname;
							ms_opts.port = mainland.port;
							ms_opts.data = {
								service: 'ws-gateway',
								protocol: 'ws',
								ssl: 'true'
							};
							ms_opts.path = `${mainland.pathname}?${qstr.stringify(ms_opts.data)}`;
							// Запрос серверов
							const reqServers = https.request(ms_opts, (resServers) => {
								resServers.on('data', (dataServers) => {
									let resServs = JSON.parse(dataServers);
									//console.log('Servers:', JSON.stringify(resServs, null, 2));
									if (serv && !nocheck) {
										if (resServs.servers.indexOf(serv) >= 0) {
											resolve([serv]);
										} else {
											reject(`Wrong server: ${serv}`);
										}
									} else {
										resolve(resServs.servers);
									}
								});
							});
							reqServers.on('error', (e) => {
								reject(`Error: ${e.message}`);
							});
							reqServers.end();
						});
					});
					reqConfig.on('error', (e) => {
						reject(`Error: ${e.message}`);
					});
					reqConfig.end();
				});
			});
			reqVersion.on('error', (e) => {
				reject(`Error: ${e.message}`);
			});
			reqVersion.end();
		}
	});
};

// version URL https://mahjongsoul.game.yo-star.com/version.json
const getLastVersion = () => {
	return new Promise((resolve, reject) => {
		let ms_opts = {
			hostname: MS_HOST,
			port: 443,
			path: '/version.json',
			method: 'GET'
		};
		const reqVersion = https.request(ms_opts, (resVersion) => {
			let dataVersion = '';
			resVersion.on('data', (chunk) => {
				dataVersion += chunk;
			});
			resVersion.on('end', () => {
				let resVers = JSON.parse(dataVersion);
				resolve(resVers.version);
			});
		});
		reqVersion.on('error', (e) => {
			reject(`Error: ${e.message}`);
		});
		reqVersion.end();
	});
};

const sendRequest = (server, package_name, service_name, method_name, params, idx = 1) => {
	return new Promise((resolve, reject) => {
		const proto = ProtoBuf.loadSync('liqi.json'),
			client = new WebSocketClient(),
			service = proto.lookup(`${package_name}.${service_name}`),
			method = service.methods[method_name].resolve(),
			req = method.resolvedRequestType,
			res = method.resolvedResponseType,
			wrapper = proto.lookupType(`${package_name}.Wrapper`);
		let req_str = wrapper.create({
			//name: `${req.name}`,
			name: `${package_name}.${req.name}`,
			//data: params
			data: req.encode(params).finish()
		});
		let meth_str = wrapper.create({
			name: `${package_name}.${service_name}.${method_name}`,
			data: wrapper.encode(params).finish()
				//data: wrapper.encode(req_str).finish()
		});
		let msg = wrapper.encode(meth_str).finish(),
			pkt_type = [Number(2)],
			idx_bytes = to_bytes(idx);
		let header = pkt_type.concat(idx_bytes),
			pkt = Buffer.concat([Buffer.from(header), Buffer.from(msg)]);
		console.log(`method: .${package_name}.${service_name}.${method_name}`);
		console.log(`request: ${JSON.stringify(params, null, 2)}`);
		client.on('connect', function(connection) {
			console.log('WebSocket Client Connected');
			connection.on('error', function(error) {
				reject(error.toString());
			});
			connection.on('close', function() {
				console.log('Connection Closed');
			});
			connection.on('message', function(message) {
				console.log(message);
				if (message.type === 'binary') {
					let r = message.binaryData.slice(3),
						msg = res.decode(r);
					resolve(msg);
					connection.close(connection.CLOSE_REASON_NORMAL, 'Close');
				}
			});
			const sendPacket = (packet) => {
				if (connection.connected) {
					console.log('Send data: ', packet.toString('hex'));
					connection.sendBytes(packet);
				}
			};
			sendPacket(pkt);
		});
		client.connect(`wss://${server}`);

	});
};

const random = (arr) => {
	return arr[Math.floor((Math.random() * arr.length))];
};

const to_bytes = (x) => {
	return [(x & 255), x >> 8];
};

if (!args || args.help) {
	console.log(commandLineUsage(sections));
} else {
	if (args.update) {
		console.log('Protocol update:');
		getLastVersion().then(
			resGameVersion => {
				console.log(`  Game version: ${resGameVersion}`);
				// Resource version URL https://mahjongsoul.game.yo-star.com/resversion(version).json
				const resvers_opts = {
					hostname: MS_HOST,
					port: 443,
					path: `/resversion${resGameVersion}.json`,
					method: 'GET'
				};
				const reqVersion = https.request(resvers_opts, (resVersion) => {
					let dataProto = '';
					resVersion.on('data', (chunk) => {
						dataProto += chunk;
					});
					resVersion.on('end', () => {
						const resJSON = JSON.parse(dataProto),
							liqiVersion = resJSON.res['res/proto/liqi.json'].prefix;
						let res_list = '';
						Object.keys(resJSON.res).forEach((res_id) => {
							res_list += `https://${MS_HOST}/${resJSON.res[res_id].prefix}/${res_id}\n`;
						});
						fs.writeFileSync(`${__dirname}/res_list.txt`, res_list);
						console.log('   Save res_list.txt');
						console.log(`  Liqi version: ${liqiVersion}`);
						// Resource version URL https://mahjongsoul.game.yo-star.com/(versionLiqi)/res/proto/liqi.json
						const proto_opts = {
							hostname: MS_HOST,
							port: 443,
							path: `/${liqiVersion}/res/proto/liqi.json`,
							method: 'GET'
						};
						const reqProto = https.request(proto_opts, (resProto) => {
							let dataProto = '';
							resProto.on('data', (chunk) => {
								dataProto += chunk;
							});
							resProto.on('end', () => {
								let resJSON = JSON.parse(dataProto);
								fs.writeFileSync(`${__dirname}/liqi.json`, JSON.stringify(resJSON, null, 2));
								console.log('   Save liqi.json');
								// Если нужен proto раскомментить
								/*
								pbjs.main(['-t', 'proto3', `${__dirname}/liqi.json`, '-o', `${__dirname}/liqi.proto`], function(err, output) {
									if (err) throw err;
									console.log('   Save to proto');
								});
								*/
							});
						});
						reqProto.on('error', (e) => {
							console.log(`Error: ${e.message}`);
						});
						reqProto.end();

					});
				});
				reqVersion.on('error', (e) => {
					console.log(`Error: ${e.message}`);
				});
				reqVersion.end();
			},
			errGameVersion => {
				console.log(`Error: ${errGameVersion}`);
			}
		);
	}
	if (args.servers) {
		getServers().then(
			resServer => {
				console.log('Server list:');
				for (let i in resServer) {
					console.log(`   ${resServer[i]}`);
				}
				console.log(`Random server: ${random(resServer)}`);
			},
			errServer => {
				console.error(errServer);
			}
		);
	}
	if (args.info) {
		if (!fs.existsSync(`${__dirname}/liqi.json`)) {
			console.log('Protocol file not found. Run update with option --update');
		} else {
			getServers((args.server ? args.server : args.trueserver), args.trueserver).then(
				resServer => {
					let server = random(resServer);
					if (server) {
						console.log(`Use server: ${server}`);
						let idx = Math.floor(60007 * Math.random()),
							params = {
								//account_id: 117411310
								code: '526091',
								operation: 0
							};
						//sendRequest(server, 'lq', 'Lobby', 'fetchConnectionInfo', params, idx).then(
						sendRequest(server, 'lq', 'Lobby', 'verfifyCodeForSecure', params, idx).then(
							resSend => {
								console.log(`Result: ${JSON.stringify(resSend, null, 2)}`);
							},
							errSend => {
								console.error(`Error: ${errSend}`);
							}
						);
					} else {
						console.error(`Wrong server: ${args.server}`);
					}
				},
				errServer => {
					console.error(errServer);
				}
			);
		}
	}
	if (args.docs) {
		if (!fs.existsSync(`${__dirname}/liqi.json`)) {
			console.log('Protocol file not found. Run update with option --update');
		} else {
			const liqi = require(`${__dirname}/liqi.json`),
				types = new RegExp(/uint32|bool|string|int32/);
			let doc = "# MahjongSoul protocol documentation\n\n"
			items = liqi.nested.lq.nested;
			for (const [key, item] of Object.entries(items)) {
				doc += `## ${key}\n\n`;
				if (item.fields) {
					let fields = [];
					for (let [name, field] of Object.entries(item.fields)) {
						fields[field.id] = {
							name: name,
							type: field.type
						};
					}
					if (fields.length > 0) {
						doc += "|#|Field name|Field type|\n|:-:|-|-|\n";
						for (let i = 1; i <= fields.length; i++) {
							if (fields[i]) {
								doc += `|${i}|${fields[i].name}|${(types.test(fields[i].type) ? fields[i].type : '['+fields[i].type+'](#'+fields[i].type+')')}|\n`;
							}
						}
					} else {
						doc += "No fields\n";
					}
					doc += "\n";
				} else if (item.methods) {
					const methods = item.methods;
					for (const [key, method] of Object.entries(methods)) {
						doc += `* ${key}([${method.responseType}](#${method.responseType}) return [${method.requestType}](#${method.requestType})\n`;
					}

				}
			}
			fs.writeFileSync(`${__dirname}/liqi.md`, doc);
			console.log('Save liqi.md');
		}
	}
}