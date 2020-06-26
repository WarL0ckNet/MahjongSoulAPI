# MahjongSoul protocol documentation

## NotifyRoomGameStart

#|Field name|Field type
-|-|-
1|game_url|string
2|connect_token|string
3|game_uuid|string
4|location|string

## NotifyMatchGameStart

#|Field name|Field type
-|-|-
1|game_url|string
2|connect_token|string
3|game_uuid|string
4|match_mode_id|uint32
5|location|string

## NotifyRoomPlayerReady

#|Field name|Field type
-|-|-
1|account_id|uint32
2|ready|bool

## NotifyRoomPlayerDressing

#|Field name|Field type
-|-|-
1|account_id|uint32
2|dressing|bool

## NotifyRoomPlayerUpdate

#|Field name|Field type
-|-|-
1|update_list|[PlayerBaseView](#PlayerBaseView)
2|remove_list|uint32
3|owner_id|uint32
4|robot_count|uint32

## NotifyRoomKickOut

No fields

## NotifyMatchTimeout

No fields

## NotifyFriendStateChange

#|Field name|Field type
-|-|-
1|target_id|uint32
2|active_state|[AccountActiveState](#AccountActiveState)

## NotifyFriendViewChange

#|Field name|Field type
-|-|-
1|target_id|uint32
2|base|[PlayerBaseView](#PlayerBaseView)

## NotifyFriendChange

#|Field name|Field type
-|-|-
1|account_id|uint32
2|type|uint32
3|friend|[Friend](#Friend)

## NotifyNewFriendApply

#|Field name|Field type
-|-|-
1|account_id|uint32
2|apply_time|uint32
3|removed_id|uint32

## NotifyClientMessage

#|Field name|Field type
-|-|-
1|sender|[PlayerBaseView](#PlayerBaseView)
2|type|uint32
3|content|string

## NotifyAccountUpdate

#|Field name|Field type
-|-|-
1|update|[AccountUpdate](#AccountUpdate)

## NotifyAnotherLogin

No fields

## NotifyAccountLogout

No fields

## NotifyAnnouncementUpdate

#|Field name|Field type
-|-|-
1|announcements|[Announcement](#Announcement)
2|sort|uint32

## NotifyNewMail

#|Field name|Field type
-|-|-
1|mail|[Mail](#Mail)

## NotifyDeleteMail

#|Field name|Field type
-|-|-
1|mail_id_list|uint32

## NotifyReviveCoinUpdate

#|Field name|Field type
-|-|-
1|has_gained|bool

## NotifyDailyTaskUpdate

#|Field name|Field type
-|-|-
1|progresses|[TaskProgress](#TaskProgress)
2|max_daily_task_count|uint32
3|refresh_count|uint32

## NotifyActivityTaskUpdate

#|Field name|Field type
-|-|-
1|progresses|[TaskProgress](#TaskProgress)

## NotifyActivityPeriodTaskUpdate

#|Field name|Field type
-|-|-
1|progresses|[TaskProgress](#TaskProgress)

## NotifyAccountRandomTaskUpdate

#|Field name|Field type
-|-|-
1|progresses|[TaskProgress](#TaskProgress)

## NotifyNewComment

No fields

## NotifyRollingNotice

#|Field name|Field type
-|-|-
1|notice|[RollingNotice](#RollingNotice)

## NotifyGiftSendRefresh

No fields

## NotifyShopUpdate

#|Field name|Field type
-|-|-
1|shop_info|[ShopInfo](#ShopInfo)

## NotifyVipLevelChange

#|Field name|Field type
-|-|-
1|gift_limit|uint32
2|friend_max_count|uint32
3|zhp_free_refresh_limit|uint32
4|zhp_cost_refresh_limit|uint32
5|buddy_bonus|[float](#float)
6|record_collect_limit|uint32

## NotifyServerSetting

#|Field name|Field type
-|-|-
1|settings|[ServerSettings](#ServerSettings)

## NotifyPayResult

#|Field name|Field type
-|-|-
1|pay_result|uint32
2|order_id|string
3|goods_id|uint32
4|new_month_ticket|uint32
5|resource_modify|[ResourceModify](#ResourceModify)

## NotifyCustomContestAccountMsg

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|account_id|uint32
3|sender|string
4|content|string
5|verified|uint32

## NotifyCustomContestSystemMsg

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|type|uint32
3|uuid|string
4|game_start|[CustomizedContestGameStart](#CustomizedContestGameStart)
5|game_end|[CustomizedContestGameEnd](#CustomizedContestGameEnd)

## NotifyCustomContestState

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|state|uint32

## NotifyActivityChange

#|Field name|Field type
-|-|-
1|new_activities|[Activity](#Activity)
2|end_activities|uint32

## NotifyAFKResult

#|Field name|Field type
-|-|-
1|type|uint32
2|ban_end_time|uint32
3|game_uuid|string

## Error

#|Field name|Field type
-|-|-
1|code|uint32
2|u32_params|uint32
3|str_params|string
4|json_param|string

## Wrapper

#|Field name|Field type
-|-|-
1|name|string
2|data|[bytes](#bytes)

## NetworkEndpoint

#|Field name|Field type
-|-|-
1|family|string
2|address|string
3|port|uint32

## ReqCommon

No fields

## ResCommon

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ResAccountUpdate

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|update|[AccountUpdate](#AccountUpdate)

## AntiAddiction

#|Field name|Field type
-|-|-
1|online_duration|uint32

## AccountMahjongStatistic

#|Field name|Field type
-|-|-
1|final_position_counts|uint32
2|recent_round|[RoundSummary](#RoundSummary)
3|recent_hu|[HuSummary](#HuSummary)
4|highest_hu|[HighestHuRecord](#HighestHuRecord)
6|recent_20_hu_summary|[Liqi20Summary](#Liqi20Summary)
7|recent_10_hu_summary|[LiQi10Summary](#LiQi10Summary)
8|recent_10_game_result|[GameResult](#GameResult)

## AccountStatisticData

#|Field name|Field type
-|-|-
1|mahjong_category|uint32
2|game_category|uint32
3|statistic|[AccountMahjongStatistic](#AccountMahjongStatistic)

## AccountLevel

#|Field name|Field type
-|-|-
1|id|uint32
2|score|uint32

## ViewSlot

#|Field name|Field type
-|-|-
1|slot|uint32
2|item_id|uint32

## Account

#|Field name|Field type
-|-|-
1|account_id|uint32
2|nickname|string
3|login_time|uint32
4|logout_time|uint32
5|room_id|uint32
6|anti_addiction|[AntiAddiction](#AntiAddiction)
7|title|uint32
8|signature|string
9|email|string
10|email_verify|uint32
11|gold|uint32
12|diamond|uint32
13|avatar_id|uint32
14|vip|uint32
15|birthday|int32
16|phone|string
17|phone_verify|uint32
18|platform_diamond|[PlatformDiamond](#PlatformDiamond)
21|level|[AccountLevel](#AccountLevel)
22|level3|[AccountLevel](#AccountLevel)
23|avatar_frame|uint32
24|skin_ticket|uint32
25|platform_skin_ticket|[PlatformSkinTicket](#PlatformSkinTicket)
26|verified|uint32

## AccountOwnerData

#|Field name|Field type
-|-|-
1|unlock_characters|uint32

## AccountUpdate

#|Field name|Field type
-|-|-
1|numerical|[NumericalUpdate](#NumericalUpdate)
2|character|[CharacterUpdate](#CharacterUpdate)
3|bag|[BagUpdate](#BagUpdate)
4|achievement|[AchievementUpdate](#AchievementUpdate)
5|shilian|[AccountShiLian](#AccountShiLian)
6|daily_task|[DailyTaskUpdate](#DailyTaskUpdate)
7|title|[TitleUpdate](#TitleUpdate)
8|new_recharged_list|uint32
9|activity_task|[TaskUpdate](#TaskUpdate)
10|activity_flip_task|[TaskUpdate](#TaskUpdate)
11|activity_period_task|[TaskUpdate](#TaskUpdate)
12|activity_random_task|[TaskUpdate](#TaskUpdate)

## GameMetaData

#|Field name|Field type
-|-|-
1|room_id|uint32
2|mode_id|uint32
3|contest_uid|uint32

## AccountPlayingGame

#|Field name|Field type
-|-|-
1|game_uuid|string
2|category|uint32
3|meta|[GameMetaData](#GameMetaData)

## AccountCacheView

#|Field name|Field type
-|-|-
1|cache_version|uint32
2|account_id|uint32
3|nickname|string
4|login_time|uint32
5|logout_time|uint32
6|is_online|bool
7|room_id|uint32
8|title|uint32
9|avatar_id|uint32
10|vip|uint32
11|level|[AccountLevel](#AccountLevel)
12|playing_game|[AccountPlayingGame](#AccountPlayingGame)
13|level3|[AccountLevel](#AccountLevel)
14|avatar_frame|uint32
15|verified|uint32
16|ban_deadline|uint32
17|comment_ban|uint32

## PlayerBaseView

#|Field name|Field type
-|-|-
1|account_id|uint32
2|avatar_id|uint32
3|title|uint32
4|nickname|string
5|level|[AccountLevel](#AccountLevel)
6|level3|[AccountLevel](#AccountLevel)
7|avatar_frame|uint32
8|verified|uint32

## PlayerGameView

#|Field name|Field type
-|-|-
1|account_id|uint32
2|avatar_id|uint32
3|title|uint32
4|nickname|string
5|level|[AccountLevel](#AccountLevel)
6|character|[Character](#Character)
7|level3|[AccountLevel](#AccountLevel)
8|avatar_frame|uint32
9|verified|uint32
10|views|[ViewSlot](#ViewSlot)

## GameMode

#|Field name|Field type
-|-|-
1|mode|uint32
4|ai|bool
5|extendinfo|string
6|detail_rule|[GameDetailRule](#GameDetailRule)
7|testing_environment|[GameTestingEnvironmentSet](#GameTestingEnvironmentSet)

## GameTestingEnvironmentSet

#|Field name|Field type
-|-|-
1|paixing|uint32
2|left_count|uint32

## GameDetailRule

#|Field name|Field type
-|-|-
1|time_fixed|uint32
2|time_add|uint32
3|dora_count|uint32
4|shiduan|uint32
5|init_point|uint32
6|fandian|uint32
7|can_jifei|bool
8|tianbian_value|uint32
9|liqibang_value|uint32
10|changbang_value|uint32
11|noting_fafu_1|uint32
12|noting_fafu_2|uint32
13|noting_fafu_3|uint32
14|have_liujumanguan|bool
15|have_qieshangmanguan|bool
16|have_biao_dora|bool
17|have_gang_biao_dora|bool
18|ming_dora_immediately_open|bool
19|have_li_dora|bool
20|have_gang_li_dora|bool
21|have_sifenglianda|bool
22|have_sigangsanle|bool
23|have_sijializhi|bool
24|have_jiuzhongjiupai|bool
25|have_sanjiahele|bool
26|have_toutiao|bool
27|have_helelianzhuang|bool
28|have_helezhongju|bool
29|have_tingpailianzhuang|bool
30|have_tingpaizhongju|bool
31|have_yifa|bool
32|have_nanruxiru|bool
33|jingsuanyuandian|uint32
34|shunweima_2|int32
35|shunweima_3|int32
36|shunweima_4|int32
37|bianjietishi|bool
38|ai_level|uint32
39|have_zimosun|bool
40|disable_multi_yukaman|bool
41|fanfu|uint32
42|guyi_mode|uint32
43|dora3_mode|uint32
44|begin_open_mode|uint32
45|jiuchao_mode|uint32
46|muyu_mode|uint32
47|open_hand|uint32

## Room

#|Field name|Field type
-|-|-
1|room_id|uint32
2|owner_id|uint32
3|mode|[GameMode](#GameMode)
4|max_player_count|uint32
5|persons|[PlayerGameView](#PlayerGameView)
6|ready_list|uint32
7|is_playing|bool
8|public_live|bool
9|robot_count|uint32
10|tournament_id|uint32

## GameEndResult

#|Field name|Field type
-|-|-
1|players|[PlayerItem](#PlayerItem)

## GameConnectInfo

#|Field name|Field type
-|-|-
2|connect_token|string
3|game_uuid|string
4|location|string

## ItemGainRecord

#|Field name|Field type
-|-|-
1|item_id|uint32
2|count|uint32

## ItemGainRecords

#|Field name|Field type
-|-|-
1|record_time|uint32
2|limit_source_id|uint32
3|records|[ItemGainRecord](#ItemGainRecord)

## Item

#|Field name|Field type
-|-|-
1|item_id|uint32
2|stack|uint32

## Bag

#|Field name|Field type
-|-|-
1|items|[Item](#Item)
2|daily_gain_record|[ItemGainRecords](#ItemGainRecords)

## BagUpdate

#|Field name|Field type
-|-|-
1|update_items|[Item](#Item)
2|update_daily_gain_record|[ItemGainRecords](#ItemGainRecords)

## RewardSlot

#|Field name|Field type
-|-|-
1|id|uint32
2|count|uint32

## OpenResult

#|Field name|Field type
-|-|-
1|reward|[RewardSlot](#RewardSlot)
2|replace|[RewardSlot](#RewardSlot)

## RewardPlusResult

#|Field name|Field type
-|-|-
1|id|uint32
2|count|uint32
3|exchange|[Exchange](#Exchange)

## ExecuteReward

#|Field name|Field type
-|-|-
1|reward|[RewardSlot](#RewardSlot)
2|replace|[RewardSlot](#RewardSlot)
3|replace_count|uint32

## Mail

#|Field name|Field type
-|-|-
1|mail_id|uint32
2|state|uint32
3|take_attachment|bool
4|title|string
5|content|string
6|attachments|[RewardSlot](#RewardSlot)
7|create_time|uint32
8|expire_time|uint32
9|reference_id|uint32

## AchievementProgress

#|Field name|Field type
-|-|-
1|id|uint32
2|counter|uint32
3|achieved|bool
4|date|uint32

## AccountStatisticByGameMode

#|Field name|Field type
-|-|-
1|mode|uint32
2|game_count_sum|uint32
3|game_final_position|uint32
4|fly_count|uint32
5|gold_earn_sum|[float](#float)
6|round_count_sum|uint32
7|dadian_sum|[float](#float)
8|round_end|[RoundEndData](#RoundEndData)
9|ming_count_sum|uint32
10|liqi_count_sum|uint32
11|xun_count_sum|uint32
12|highest_lianzhuang|uint32
13|score_earn_sum|uint32
14|rank_score|[RankScore](#RankScore)

## AccountStatisticByFan

#|Field name|Field type
-|-|-
1|fan_id|uint32
2|sum|uint32

## AccountFanAchieved

#|Field name|Field type
-|-|-
1|mahjong_category|uint32
2|fan|[AccountStatisticByFan](#AccountStatisticByFan)
3|liujumanguan|uint32

## AccountDetailStatistic

#|Field name|Field type
-|-|-
1|game_mode|[AccountStatisticByGameMode](#AccountStatisticByGameMode)
2|fan|[AccountStatisticByFan](#AccountStatisticByFan)
3|liujumanguan|uint32
4|fan_achieved|[AccountFanAchieved](#AccountFanAchieved)

## AccountDetailStatisticByCategory

#|Field name|Field type
-|-|-
1|category|uint32
2|detail_statistic|[AccountDetailStatistic](#AccountDetailStatistic)

## AccountDetailStatisticV2

#|Field name|Field type
-|-|-
1|friend_room_statistic|[AccountDetailStatistic](#AccountDetailStatistic)
2|rank_statistic|[RankStatistic](#RankStatistic)
3|customized_contest_statistic|[CustomizedContestStatistic](#CustomizedContestStatistic)
4|leisure_match_statistic|[AccountDetailStatistic](#AccountDetailStatistic)

## AccountShiLian

#|Field name|Field type
-|-|-
1|step|uint32
2|state|uint32

## ClientDeviceInfo

#|Field name|Field type
-|-|-
1|device_type|string
2|os|string
3|os_version|string
4|browser|string

## GamePlayerState

## Announcement

#|Field name|Field type
-|-|-
1|id|uint32
2|title|string
3|content|string

## TaskProgress

#|Field name|Field type
-|-|-
1|id|uint32
2|counter|uint32
3|achieved|bool
4|rewarded|bool

## GameConfig

#|Field name|Field type
-|-|-
1|category|uint32
2|mode|[GameMode](#GameMode)
3|meta|[GameMetaData](#GameMetaData)

## AccountActiveState

#|Field name|Field type
-|-|-
1|account_id|uint32
2|login_time|uint32
3|logout_time|uint32
4|is_online|bool
5|playing|[AccountPlayingGame](#AccountPlayingGame)

## Friend

#|Field name|Field type
-|-|-
1|base|[PlayerBaseView](#PlayerBaseView)
2|state|[AccountActiveState](#AccountActiveState)

## GameLiveUnit

#|Field name|Field type
-|-|-
1|timestamp|uint32
2|action_category|uint32
3|action_data|[bytes](#bytes)

## GameLiveSegment

#|Field name|Field type
-|-|-
1|actions|[GameLiveUnit](#GameLiveUnit)

## GameLiveSegmentUri

#|Field name|Field type
-|-|-
1|segment_id|uint32
2|segment_uri|string

## GameLiveHead

#|Field name|Field type
-|-|-
1|uuid|string
2|start_time|uint32
3|game_config|[GameConfig](#GameConfig)
4|players|[PlayerGameView](#PlayerGameView)
5|seat_list|uint32

## GameNewRoundState

#|Field name|Field type
-|-|-
1|seat_states|uint32

## GameEndAction

#|Field name|Field type
-|-|-
1|state|uint32

## GameNoopAction

No fields

## CommentItem

#|Field name|Field type
-|-|-
1|comment_id|uint32
2|timestamp|uint32
3|commenter|[PlayerBaseView](#PlayerBaseView)
4|content|string
5|is_banned|uint32

## RollingNotice

#|Field name|Field type
-|-|-
1|id|uint32
2|content|string
3|start_time|uint32
4|end_time|uint32
5|repeat_interval|uint32

## BillingGoods

#|Field name|Field type
-|-|-
1|id|string
2|name|string
3|desc|string
4|icon|string
5|resource_id|uint32
6|resource_count|uint32

## BillShortcut

#|Field name|Field type
-|-|-
1|id|uint32
2|count|uint32
3|dealPrice|uint32

## BillingProduct

#|Field name|Field type
-|-|-
1|goods|[BillingGoods](#BillingGoods)
2|currency_code|string
3|currency_price|uint32
4|sort_weight|uint32

## Character

#|Field name|Field type
-|-|-
1|charid|uint32
2|level|uint32
3|exp|uint32
4|views|[ViewSlot](#ViewSlot)
5|skin|uint32
6|is_upgraded|bool
7|extra_emoji|uint32

## BuyRecord

#|Field name|Field type
-|-|-
1|id|uint32
2|count|uint32

## ZHPShop

#|Field name|Field type
-|-|-
1|goods|uint32
2|buy_records|[BuyRecord](#BuyRecord)
3|free_refresh|[RefreshCount](#RefreshCount)
4|cost_refresh|[RefreshCount](#RefreshCount)

## MonthTicketInfo

#|Field name|Field type
-|-|-
1|id|uint32
2|end_time|uint32
3|last_pay_time|uint32

## ShopInfo

#|Field name|Field type
-|-|-
1|zhp|[ZHPShop](#ZHPShop)
2|buy_records|[BuyRecord](#BuyRecord)
3|last_refresh_time|uint32

## ChangeNicknameRecord

#|Field name|Field type
-|-|-
1|from|string
2|to|string
3|time|uint32

## ServerSettings

#|Field name|Field type
-|-|-
3|payment_setting|[PaymentSetting](#PaymentSetting)

## PaymentSetting

#|Field name|Field type
-|-|-
1|open_payment|uint32
2|payment_info_show_type|uint32
3|payment_info|string
4|wechat|[WechatData](#WechatData)
5|alipay|[AlipayData](#AlipayData)

## AccountSetting

#|Field name|Field type
-|-|-
1|key|uint32
2|value|uint32

## ChestData

#|Field name|Field type
-|-|-
1|chest_id|uint32
2|total_open_count|uint32
3|consume_count|uint32
4|face_black_count|uint32

## ChestDataV2

#|Field name|Field type
-|-|-
1|chest_id|uint32
2|total_open_count|uint32
3|face_black_count|uint32

## FaithData

#|Field name|Field type
-|-|-
1|faith_id|uint32
2|total_open_count|uint32
3|consume_count|uint32
4|modify_count|int32

## CustomizedContestBase

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|contest_id|uint32
3|contest_name|string
4|state|uint32
5|creator_id|uint32
6|create_time|uint32
7|start_time|uint32
8|finish_time|uint32
9|open|bool
10|contest_type|uint32

## CustomizedContestExtend

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|public_notice|string

## CustomizedContestAbstract

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|contest_id|uint32
3|contest_name|string
4|state|uint32
5|creator_id|uint32
6|create_time|uint32
7|start_time|uint32
8|finish_time|uint32
9|open|bool
10|public_notice|string

## CustomizedContestDetail

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|contest_id|uint32
3|contest_name|string
4|state|uint32
5|creator_id|uint32
6|create_time|uint32
7|start_time|uint32
8|finish_time|uint32
9|open|bool
10|rank_rule|uint32
11|game_mode|[GameMode](#GameMode)
12|private_notice|string
13|observer_switch|uint32

## CustomizedContestPlayerReport

#|Field name|Field type
-|-|-
1|rank_rule|uint32
2|rank|uint32
3|point|int32
4|game_ranks|uint32
5|total_game_count|uint32

## RecordGame

#|Field name|Field type
-|-|-
1|uuid|string
2|start_time|uint32
3|end_time|uint32
5|config|[GameConfig](#GameConfig)
11|accounts|[AccountInfo](#AccountInfo)
12|result|[GameEndResult](#GameEndResult)

## CustomizedContestGameStart

#|Field name|Field type
-|-|-
1|players|[Item](#Item)

## CustomizedContestGameEnd

#|Field name|Field type
-|-|-
1|players|[Item](#Item)

## Activity

#|Field name|Field type
-|-|-
1|activity_id|uint32
2|start_time|uint32
3|end_time|uint32
4|type|string

## ExchangeRecord

#|Field name|Field type
-|-|-
1|exchange_id|uint32
2|count|uint32

## ActivityAccumulatedPointData

#|Field name|Field type
-|-|-
1|activity_id|uint32
2|point|int32
3|gained_reward_list|uint32

## ActivityRankPointData

#|Field name|Field type
-|-|-
1|leaderboard_id|uint32
2|point|int32
3|gained_reward|bool
4|gainable_time|uint32

## GameRoundHuData

#|Field name|Field type
-|-|-
1|hupai|[HuPai](#HuPai)
2|fans|[Fan](#Fan)
3|score|uint32
4|xun|uint32
5|title_id|uint32
6|fan_sum|uint32
7|fu_sum|uint32
8|yakuman_count|uint32
9|biao_dora_count|uint32
10|red_dora_count|uint32
11|li_dora_count|uint32
12|babei_count|uint32
13|xuan_shang_count|uint32

## GameRoundPlayerResult

#|Field name|Field type
-|-|-
1|type|uint32
2|hands|string
3|ming|string
4|liqi_type|uint32
5|is_fulu|bool
6|is_liujumanguan|bool
7|lian_zhuang|uint32
8|hu|[GameRoundHuData](#GameRoundHuData)

## GameRoundPlayer

#|Field name|Field type
-|-|-
1|score|int32
2|rank|uint32
3|result|[GameRoundPlayerResult](#GameRoundPlayerResult)

## GameRoundSnapshot

#|Field name|Field type
-|-|-
1|ju|uint32
2|ben|uint32
3|players|[GameRoundPlayer](#GameRoundPlayer)

## GameFinalSnapshot

#|Field name|Field type
-|-|-
1|uuid|string
2|state|uint32
3|category|uint32
4|mode|[GameMode](#GameMode)
5|meta|[GameMetaData](#GameMetaData)
6|calculate_param|[CalculateParam](#CalculateParam)
7|create_time|uint32
8|start_time|uint32
9|finish_time|uint32
10|seats|[GameSeat](#GameSeat)
11|rounds|[GameRoundSnapshot](#GameRoundSnapshot)
12|account_views|[PlayerGameView](#PlayerGameView)
13|final_players|[FinalPlayer](#FinalPlayer)
14|afk_info|[AFKInfo](#AFKInfo)

## RecordCollectedData

#|Field name|Field type
-|-|-
1|uuid|string
2|remarks|string
3|start_time|uint32
4|end_time|uint32

## ContestDetailRule

#|Field name|Field type
-|-|-
5|init_point|uint32
6|fandian|uint32
7|can_jifei|bool
8|tianbian_value|uint32
9|liqibang_value|uint32
10|changbang_value|uint32
11|noting_fafu_1|uint32
12|noting_fafu_2|uint32
13|noting_fafu_3|uint32
14|have_liujumanguan|bool
15|have_qieshangmanguan|bool
16|have_biao_dora|bool
17|have_gang_biao_dora|bool
18|ming_dora_immediately_open|bool
19|have_li_dora|bool
20|have_gang_li_dora|bool
21|have_sifenglianda|bool
22|have_sigangsanle|bool
23|have_sijializhi|bool
24|have_jiuzhongjiupai|bool
25|have_sanjiahele|bool
26|have_toutiao|bool
27|have_helelianzhuang|bool
28|have_helezhongju|bool
29|have_tingpailianzhuang|bool
30|have_tingpaizhongju|bool
31|have_yifa|bool
32|have_nanruxiru|bool
33|jingsuanyuandian|uint32
34|shunweima_2|int32
35|shunweima_3|int32
36|shunweima_4|int32
37|bianjietishi|bool
38|ai_level|uint32
39|have_zimosun|bool
40|disable_multi_yukaman|bool
41|guyi_mode|uint32

## ContestDetailRuleV2

#|Field name|Field type
-|-|-
1|game_rule|[ContestDetailRule](#ContestDetailRule)
2|extra_rule|[ExtraRule](#ExtraRule)

## GameRuleSetting

#|Field name|Field type
-|-|-
1|round_type|uint32
2|shiduan|bool
3|dora_count|uint32
4|thinking_type|uint32
5|use_detail_rule|bool
6|detail_rule_v2|[ContestDetailRuleV2](#ContestDetailRuleV2)

## Lobby

* fetchConnectionInfo([ResConnectionInfo](#ResConnectionInfo) return [ReqCommon](#ReqCommon)
* signup([ResSignupAccount](#ResSignupAccount) return [ReqSignupAccount](#ReqSignupAccount)
* login([ResLogin](#ResLogin) return [ReqLogin](#ReqLogin)
* emailLogin([ResLogin](#ResLogin) return [ReqEmailLogin](#ReqEmailLogin)
* oauth2Auth([ResOauth2Auth](#ResOauth2Auth) return [ReqOauth2Auth](#ReqOauth2Auth)
* oauth2Check([ResOauth2Check](#ResOauth2Check) return [ReqOauth2Check](#ReqOauth2Check)
* oauth2Signup([ResOauth2Signup](#ResOauth2Signup) return [ReqOauth2Signup](#ReqOauth2Signup)
* oauth2Login([ResLogin](#ResLogin) return [ReqOauth2Login](#ReqOauth2Login)
* dmmPreLogin([ResDMMPreLogin](#ResDMMPreLogin) return [ReqDMMPreLogin](#ReqDMMPreLogin)
* createPhoneVerifyCode([ResCommon](#ResCommon) return [ReqCreatePhoneVerifyCode](#ReqCreatePhoneVerifyCode)
* createEmailVerifyCode([ResCommon](#ResCommon) return [ReqCreateEmailVerifyCode](#ReqCreateEmailVerifyCode)
* verfifyCodeForSecure([ResVerfiyCodeForSecure](#ResVerfiyCodeForSecure) return [ReqVerifyCodeForSecure](#ReqVerifyCodeForSecure)
* bindPhoneNumber([ResCommon](#ResCommon) return [ReqBindPhoneNumber](#ReqBindPhoneNumber)
* unbindPhoneNumber([ResCommon](#ResCommon) return [ReqUnbindPhoneNumber](#ReqUnbindPhoneNumber)
* fetchPhoneLoginBind([ResFetchPhoneLoginBind](#ResFetchPhoneLoginBind) return [ReqCommon](#ReqCommon)
* createPhoneLoginBind([ResCommon](#ResCommon) return [ReqCreatePhoneLoginBind](#ReqCreatePhoneLoginBind)
* bindEmail([ResCommon](#ResCommon) return [ReqBindEmail](#ReqBindEmail)
* modifyPassword([ResCommon](#ResCommon) return [ReqModifyPassword](#ReqModifyPassword)
* bindAccount([ResCommon](#ResCommon) return [ReqBindAccount](#ReqBindAccount)
* logout([ResLogout](#ResLogout) return [ReqLogout](#ReqLogout)
* heatbeat([ResCommon](#ResCommon) return [ReqHeatBeat](#ReqHeatBeat)
* loginBeat([ResCommon](#ResCommon) return [ReqLoginBeat](#ReqLoginBeat)
* createNickname([ResCommon](#ResCommon) return [ReqCreateNickname](#ReqCreateNickname)
* modifyNickname([ResCommon](#ResCommon) return [ReqModifyNickname](#ReqModifyNickname)
* modifyBirthday([ResCommon](#ResCommon) return [ReqModifyBirthday](#ReqModifyBirthday)
* fetchRoom([ResSelfRoom](#ResSelfRoom) return [ReqCommon](#ReqCommon)
* createRoom([ResCreateRoom](#ResCreateRoom) return [ReqCreateRoom](#ReqCreateRoom)
* joinRoom([ResJoinRoom](#ResJoinRoom) return [ReqJoinRoom](#ReqJoinRoom)
* leaveRoom([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* readyPlay([ResCommon](#ResCommon) return [ReqRoomReady](#ReqRoomReady)
* dressingStatus([ResCommon](#ResCommon) return [ReqRoomDressing](#ReqRoomDressing)
* startRoom([ResCommon](#ResCommon) return [ReqRoomStart](#ReqRoomStart)
* kickPlayer([ResCommon](#ResCommon) return [ReqRoomKick](#ReqRoomKick)
* modifyRoom([ResCommon](#ResCommon) return [ReqModifyRoom](#ReqModifyRoom)
* matchGame([ResCommon](#ResCommon) return [ReqJoinMatchQueue](#ReqJoinMatchQueue)
* cancelMatch([ResCommon](#ResCommon) return [ReqCancelMatchQueue](#ReqCancelMatchQueue)
* fetchAccountInfo([ResAccountInfo](#ResAccountInfo) return [ReqAccountInfo](#ReqAccountInfo)
* changeAvatar([ResCommon](#ResCommon) return [ReqChangeAvatar](#ReqChangeAvatar)
* fetchAccountStatisticInfo([ResAccountStatisticInfo](#ResAccountStatisticInfo) return [ReqAccountStatisticInfo](#ReqAccountStatisticInfo)
* fetchAccountCharacterInfo([ResAccountCharacterInfo](#ResAccountCharacterInfo) return [ReqCommon](#ReqCommon)
* shopPurchase([ResShopPurchase](#ResShopPurchase) return [ReqShopPurchase](#ReqShopPurchase)
* fetchGameRecord([ResGameRecord](#ResGameRecord) return [ReqGameRecord](#ReqGameRecord)
* fetchGameRecordList([ResGameRecordList](#ResGameRecordList) return [ReqGameRecordList](#ReqGameRecordList)
* fetchCollectedGameRecordList([ResCollectedGameRecordList](#ResCollectedGameRecordList) return [ReqCommon](#ReqCommon)
* fetchGameRecordsDetail([ResGameRecordsDetail](#ResGameRecordsDetail) return [ReqGameRecordsDetail](#ReqGameRecordsDetail)
* addCollectedGameRecord([ResAddCollectedGameRecord](#ResAddCollectedGameRecord) return [ReqAddCollectedGameRecord](#ReqAddCollectedGameRecord)
* removeCollectedGameRecord([ResRemoveCollectedGameRecord](#ResRemoveCollectedGameRecord) return [ReqRemoveCollectedGameRecord](#ReqRemoveCollectedGameRecord)
* changeCollectedGameRecordRemarks([ResChangeCollectedGameRecordRemarks](#ResChangeCollectedGameRecordRemarks) return [ReqChangeCollectedGameRecordRemarks](#ReqChangeCollectedGameRecordRemarks)
* fetchLevelLeaderboard([ResLevelLeaderboard](#ResLevelLeaderboard) return [ReqLevelLeaderboard](#ReqLevelLeaderboard)
* fetchMultiAccountBrief([ResMultiAccountBrief](#ResMultiAccountBrief) return [ReqMultiAccountId](#ReqMultiAccountId)
* fetchFriendList([ResFriendList](#ResFriendList) return [ReqCommon](#ReqCommon)
* fetchFriendApplyList([ResFriendApplyList](#ResFriendApplyList) return [ReqCommon](#ReqCommon)
* applyFriend([ResCommon](#ResCommon) return [ReqApplyFriend](#ReqApplyFriend)
* handleFriendApply([ResCommon](#ResCommon) return [ReqHandleFriendApply](#ReqHandleFriendApply)
* removeFriend([ResCommon](#ResCommon) return [ReqRemoveFriend](#ReqRemoveFriend)
* searchAccountById([ResSearchAccountById](#ResSearchAccountById) return [ReqSearchAccountById](#ReqSearchAccountById)
* searchAccountByPattern([ResSearchAccountByPattern](#ResSearchAccountByPattern) return [ReqSearchAccountByPattern](#ReqSearchAccountByPattern)
* fetchAccountState([ResAccountStates](#ResAccountStates) return [ReqAccountList](#ReqAccountList)
* fetchBagInfo([ResBagInfo](#ResBagInfo) return [ReqCommon](#ReqCommon)
* useBagItem([ResCommon](#ResCommon) return [ReqUseBagItem](#ReqUseBagItem)
* openManualItem([ResCommon](#ResCommon) return [ReqOpenManualItem](#ReqOpenManualItem)
* openRandomRewardItem([ResOpenRandomRewardItem](#ResOpenRandomRewardItem) return [ReqOpenRandomRewardItem](#ReqOpenRandomRewardItem)
* composeShard([ResCommon](#ResCommon) return [ReqComposeShard](#ReqComposeShard)
* fetchAnnouncement([ResAnnouncement](#ResAnnouncement) return [ReqCommon](#ReqCommon)
* readAnnouncement([ResCommon](#ResCommon) return [ReqReadAnnouncement](#ReqReadAnnouncement)
* fetchMailInfo([ResMailInfo](#ResMailInfo) return [ReqCommon](#ReqCommon)
* readMail([ResCommon](#ResCommon) return [ReqReadMail](#ReqReadMail)
* deleteMail([ResCommon](#ResCommon) return [ReqDeleteMail](#ReqDeleteMail)
* takeAttachmentFromMail([ResCommon](#ResCommon) return [ReqTakeAttachment](#ReqTakeAttachment)
* fetchAchievement([ResAchievement](#ResAchievement) return [ReqCommon](#ReqCommon)
* buyShiLian([ResCommon](#ResCommon) return [ReqBuyShiLian](#ReqBuyShiLian)
* matchShiLian([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* goNextShiLian([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* updateClientValue([ResCommon](#ResCommon) return [ReqUpdateClientValue](#ReqUpdateClientValue)
* fetchClientValue([ResClientValue](#ResClientValue) return [ReqCommon](#ReqCommon)
* clientMessage([ResCommon](#ResCommon) return [ReqClientMessage](#ReqClientMessage)
* fetchCurrentMatchInfo([ResCurrentMatchInfo](#ResCurrentMatchInfo) return [ReqCurrentMatchInfo](#ReqCurrentMatchInfo)
* userComplain([ResCommon](#ResCommon) return [ReqUserComplain](#ReqUserComplain)
* fetchReviveCoinInfo([ResReviveCoinInfo](#ResReviveCoinInfo) return [ReqCommon](#ReqCommon)
* gainReviveCoin([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* fetchDailyTask([ResDailyTask](#ResDailyTask) return [ReqCommon](#ReqCommon)
* refreshDailyTask([ResRefreshDailyTask](#ResRefreshDailyTask) return [ReqRefreshDailyTask](#ReqRefreshDailyTask)
* useGiftCode([ResUseGiftCode](#ResUseGiftCode) return [ReqUseGiftCode](#ReqUseGiftCode)
* fetchTitleList([ResTitleList](#ResTitleList) return [ReqCommon](#ReqCommon)
* useTitle([ResCommon](#ResCommon) return [ReqUseTitle](#ReqUseTitle)
* sendClientMessage([ResCommon](#ResCommon) return [ReqSendClientMessage](#ReqSendClientMessage)
* fetchGameLiveInfo([ResGameLiveInfo](#ResGameLiveInfo) return [ReqGameLiveInfo](#ReqGameLiveInfo)
* fetchGameLiveLeftSegment([ResGameLiveLeftSegment](#ResGameLiveLeftSegment) return [ReqGameLiveLeftSegment](#ReqGameLiveLeftSegment)
* fetchGameLiveList([ResGameLiveList](#ResGameLiveList) return [ReqGameLiveList](#ReqGameLiveList)
* fetchCommentSetting([ResCommentSetting](#ResCommentSetting) return [ReqCommon](#ReqCommon)
* updateCommentSetting([ResCommon](#ResCommon) return [ReqUpdateCommentSetting](#ReqUpdateCommentSetting)
* fetchCommentList([ResFetchCommentList](#ResFetchCommentList) return [ReqFetchCommentList](#ReqFetchCommentList)
* fetchCommentContent([ResFetchCommentContent](#ResFetchCommentContent) return [ReqFetchCommentContent](#ReqFetchCommentContent)
* leaveComment([ResCommon](#ResCommon) return [ReqLeaveComment](#ReqLeaveComment)
* deleteComment([ResCommon](#ResCommon) return [ReqDeleteComment](#ReqDeleteComment)
* updateReadComment([ResCommon](#ResCommon) return [ReqUpdateReadComment](#ReqUpdateReadComment)
* fetchRollingNotice([ReqRollingNotice](#ReqRollingNotice) return [ReqCommon](#ReqCommon)
* fetchServerTime([ResServerTime](#ResServerTime) return [ReqCommon](#ReqCommon)
* fetchPlatformProducts([ResPlatformBillingProducts](#ResPlatformBillingProducts) return [ReqPlatformBillingProducts](#ReqPlatformBillingProducts)
* cancelGooglePlayOrder([ResCommon](#ResCommon) return [ReqCancelGooglePlayOrder](#ReqCancelGooglePlayOrder)
* openChest([ResOpenChest](#ResOpenChest) return [ReqOpenChest](#ReqOpenChest)
* buyFromChestShop([ResBuyFromChestShop](#ResBuyFromChestShop) return [ReqBuyFromChestShop](#ReqBuyFromChestShop)
* fetchDailySignInInfo([ResDailySignInInfo](#ResDailySignInInfo) return [ReqCommon](#ReqCommon)
* doDailySignIn([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* doActivitySignIn([ResDoActivitySignIn](#ResDoActivitySignIn) return [ReqDoActivitySignIn](#ReqDoActivitySignIn)
* fetchCharacterInfo([ResCharacterInfo](#ResCharacterInfo) return [ReqCommon](#ReqCommon)
* changeMainCharacter([ResCommon](#ResCommon) return [ReqChangeMainCharacter](#ReqChangeMainCharacter)
* changeCharacterSkin([ResCommon](#ResCommon) return [ReqChangeCharacterSkin](#ReqChangeCharacterSkin)
* changeCharacterView([ResCommon](#ResCommon) return [ReqChangeCharacterView](#ReqChangeCharacterView)
* sendGiftToCharacter([ResSendGiftToCharacter](#ResSendGiftToCharacter) return [ReqSendGiftToCharacter](#ReqSendGiftToCharacter)
* sellItem([ResCommon](#ResCommon) return [ReqSellItem](#ReqSellItem)
* fetchCommonView([ResCommonView](#ResCommonView) return [ReqCommon](#ReqCommon)
* changeCommonView([ResCommon](#ResCommon) return [ReqChangeCommonView](#ReqChangeCommonView)
* saveCommonViews([ResCommon](#ResCommon) return [ReqSaveCommonViews](#ReqSaveCommonViews)
* fetchCommonViews([ResCommonViews](#ResCommonViews) return [ReqCommonViews](#ReqCommonViews)
* fetchAllCommonViews([ResAllcommonViews](#ResAllcommonViews) return [ReqCommon](#ReqCommon)
* useCommonView([ResCommon](#ResCommon) return [ReqUseCommonView](#ReqUseCommonView)
* upgradeCharacter([ResUpgradeCharacter](#ResUpgradeCharacter) return [ReqUpgradeCharacter](#ReqUpgradeCharacter)
* addFinishedEnding([ResCommon](#ResCommon) return [ReqFinishedEnding](#ReqFinishedEnding)
* receiveEndingReward([ResCommon](#ResCommon) return [ReqFinishedEnding](#ReqFinishedEnding)
* gameMasterCommand([ResCommon](#ResCommon) return [ReqGMCommand](#ReqGMCommand)
* fetchShopInfo([ResShopInfo](#ResShopInfo) return [ReqCommon](#ReqCommon)
* buyFromShop([ResBuyFromShop](#ResBuyFromShop) return [ReqBuyFromShop](#ReqBuyFromShop)
* buyFromZHP([ResCommon](#ResCommon) return [ReqBuyFromZHP](#ReqBuyFromZHP)
* refreshZHPShop([ResRefreshZHPShop](#ResRefreshZHPShop) return [ReqReshZHPShop](#ReqReshZHPShop)
* fetchMonthTicketInfo([ResMonthTicketInfo](#ResMonthTicketInfo) return [ReqCommon](#ReqCommon)
* payMonthTicket([ResPayMonthTicket](#ResPayMonthTicket) return [ReqPayMonthTicket](#ReqPayMonthTicket)
* exchangeCurrency([ResCommon](#ResCommon) return [ReqExchangeCurrency](#ReqExchangeCurrency)
* exchangeChestStone([ResCommon](#ResCommon) return [ReqExchangeCurrency](#ReqExchangeCurrency)
* exchangeDiamond([ResCommon](#ResCommon) return [ReqExchangeCurrency](#ReqExchangeCurrency)
* fetchServerSettings([ResServerSettings](#ResServerSettings) return [ReqCommon](#ReqCommon)
* fetchAccountSettings([ResAccountSettings](#ResAccountSettings) return [ReqCommon](#ReqCommon)
* updateAccountSettings([ResCommon](#ResCommon) return [ReqUpdateAccountSettings](#ReqUpdateAccountSettings)
* fetchModNicknameTime([ResModNicknameTime](#ResModNicknameTime) return [ReqCommon](#ReqCommon)
* createWechatNativeOrder([ResCreateWechatNativeOrder](#ResCreateWechatNativeOrder) return [ReqCreateWechatNativeOrder](#ReqCreateWechatNativeOrder)
* createWechatAppOrder([ResCreateWechatAppOrder](#ResCreateWechatAppOrder) return [ReqCreateWechatAppOrder](#ReqCreateWechatAppOrder)
* createAlipayOrder([ResCreateAlipayOrder](#ResCreateAlipayOrder) return [ReqCreateAlipayOrder](#ReqCreateAlipayOrder)
* createAlipayScanOrder([ResCreateAlipayScanOrder](#ResCreateAlipayScanOrder) return [ReqCreateAlipayScanOrder](#ReqCreateAlipayScanOrder)
* createAlipayAppOrder([ResCreateAlipayAppOrder](#ResCreateAlipayAppOrder) return [ReqCreateAlipayAppOrder](#ReqCreateAlipayAppOrder)
* createJPCreditCardOrder([ResCreateJPCreditCardOrder](#ResCreateJPCreditCardOrder) return [ReqCreateJPCreditCardOrder](#ReqCreateJPCreditCardOrder)
* createJPPaypalOrder([ResCreateJPPaypalOrder](#ResCreateJPPaypalOrder) return [ReqCreateJPPaypalOrder](#ReqCreateJPPaypalOrder)
* createJPAuOrder([ResCreateJPAuOrder](#ResCreateJPAuOrder) return [ReqCreateJPAuOrder](#ReqCreateJPAuOrder)
* createJPDocomoOrder([ResCreateJPDocomoOrder](#ResCreateJPDocomoOrder) return [ReqCreateJPDocomoOrder](#ReqCreateJPDocomoOrder)
* createJPWebMoneyOrder([ResCreateJPWebMoneyOrder](#ResCreateJPWebMoneyOrder) return [ReqCreateJPWebMoneyOrder](#ReqCreateJPWebMoneyOrder)
* createJPSoftbankOrder([ResCreateJPSoftbankOrder](#ResCreateJPSoftbankOrder) return [ReqCreateJPSoftbankOrder](#ReqCreateJPSoftbankOrder)
* createENPaypalOrder([ResCreateENPaypalOrder](#ResCreateENPaypalOrder) return [ReqCreateENPaypalOrder](#ReqCreateENPaypalOrder)
* createENMasterCardOrder([ResCreateENMasterCardOrder](#ResCreateENMasterCardOrder) return [ReqCreateENMasterCardOrder](#ReqCreateENMasterCardOrder)
* createENVisaOrder([ResCreateENVisaOrder](#ResCreateENVisaOrder) return [ReqCreateENVisaOrder](#ReqCreateENVisaOrder)
* createENJCBOrder([ResCreateENJCBOrder](#ResCreateENJCBOrder) return [ReqCreateENJCBOrder](#ReqCreateENJCBOrder)
* createENAlipayOrder([ResCreateENAlipayOrder](#ResCreateENAlipayOrder) return [ReqCreateENAlipayOrder](#ReqCreateENAlipayOrder)
* createDMMOrder([ResCreateDmmOrder](#ResCreateDmmOrder) return [ReqCreateDMMOrder](#ReqCreateDMMOrder)
* createIAPOrder([ResCreateIAPOrder](#ResCreateIAPOrder) return [ReqCreateIAPOrder](#ReqCreateIAPOrder)
* createMyCardAndroidOrder([ResCreateMyCardOrder](#ResCreateMyCardOrder) return [ReqCreateMyCardOrder](#ReqCreateMyCardOrder)
* createMyCardWebOrder([ResCreateMyCardOrder](#ResCreateMyCardOrder) return [ReqCreateMyCardOrder](#ReqCreateMyCardOrder)
* verifyMyCardOrder([ResCommon](#ResCommon) return [ReqVerifyMyCardOrder](#ReqVerifyMyCardOrder)
* verificationIAPOrder([ResVerificationIAPOrder](#ResVerificationIAPOrder) return [ReqVerificationIAPOrder](#ReqVerificationIAPOrder)
* createYostarSDKOrder([ResCreateYostarOrder](#ResCreateYostarOrder) return [ReqCreateYostarOrder](#ReqCreateYostarOrder)
* createBillingOrder([ResCreateBillingOrder](#ResCreateBillingOrder) return [ReqCreateBillingOrder](#ReqCreateBillingOrder)
* solveGooglePlayOrder([ResCommon](#ResCommon) return [ReqSolveGooglePlayOrder](#ReqSolveGooglePlayOrder)
* solveGooglePayOrderV3([ResCommon](#ResCommon) return [ReqSolveGooglePlayOrderV3](#ReqSolveGooglePlayOrderV3)
* fetchMisc([ResMisc](#ResMisc) return [ReqCommon](#ReqCommon)
* modifySignature([ResCommon](#ResCommon) return [ReqModifySignature](#ReqModifySignature)
* fetchIDCardInfo([ResIDCardInfo](#ResIDCardInfo) return [ReqCommon](#ReqCommon)
* updateIDCardInfo([ResCommon](#ResCommon) return [ReqUpdateIDCardInfo](#ReqUpdateIDCardInfo)
* fetchVipReward([ResVipReward](#ResVipReward) return [ReqCommon](#ReqCommon)
* gainVipReward([ResCommon](#ResCommon) return [ReqGainVipReward](#ReqGainVipReward)
* fetchCustomizedContestList([ResFetchCustomizedContestList](#ResFetchCustomizedContestList) return [ReqFetchCustomizedContestList](#ReqFetchCustomizedContestList)
* fetchCustomizedContestExtendInfo([ResFetchCustomizedContestExtendInfo](#ResFetchCustomizedContestExtendInfo) return [ReqFetchCustomizedContestExtendInfo](#ReqFetchCustomizedContestExtendInfo)
* fetchCustomizedContestAuthInfo([ResFetchCustomizedContestAuthInfo](#ResFetchCustomizedContestAuthInfo) return [ReqFetchCustomizedContestAuthInfo](#ReqFetchCustomizedContestAuthInfo)
* enterCustomizedContest([ResEnterCustomizedContest](#ResEnterCustomizedContest) return [ReqEnterCustomizedContest](#ReqEnterCustomizedContest)
* leaveCustomizedContest([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* fetchCustomizedContestOnlineInfo([ResFetchCustomizedContestOnlineInfo](#ResFetchCustomizedContestOnlineInfo) return [ReqFetchCustomizedContestOnlineInfo](#ReqFetchCustomizedContestOnlineInfo)
* fetchCustomizedContestByContestId([ResFetchCustomizedContestByContestId](#ResFetchCustomizedContestByContestId) return [ReqFetchCustomizedContestByContestId](#ReqFetchCustomizedContestByContestId)
* startCustomizedContest([ResCommon](#ResCommon) return [ReqStartCustomizedContest](#ReqStartCustomizedContest)
* stopCustomizedContest([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* joinCustomizedContestChatRoom([ResJoinCustomizedContestChatRoom](#ResJoinCustomizedContestChatRoom) return [ReqJoinCustomizedContestChatRoom](#ReqJoinCustomizedContestChatRoom)
* leaveCustomizedContestChatRoom([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* sayChatMessage([ResCommon](#ResCommon) return [ReqSayChatMessage](#ReqSayChatMessage)
* fetchCustomizedContestGameRecords([ResFetchCustomizedContestGameRecords](#ResFetchCustomizedContestGameRecords) return [ReqFetchCustomizedContestGameRecords](#ReqFetchCustomizedContestGameRecords)
* fetchCustomizedContestGameLiveList([ResFetchCustomizedContestGameLiveList](#ResFetchCustomizedContestGameLiveList) return [ReqFetchCustomizedContestGameLiveList](#ReqFetchCustomizedContestGameLiveList)
* followCustomizedContest([ResCommon](#ResCommon) return [ReqTargetCustomizedContest](#ReqTargetCustomizedContest)
* unfollowCustomizedContest([ResCommon](#ResCommon) return [ReqTargetCustomizedContest](#ReqTargetCustomizedContest)
* fetchActivityList([ResActivityList](#ResActivityList) return [ReqCommon](#ReqCommon)
* fetchAccountActivityData([ResAccountActivityData](#ResAccountActivityData) return [ReqCommon](#ReqCommon)
* exchangeActivityItem([ResExchangeActivityItem](#ResExchangeActivityItem) return [ReqExchangeActivityItem](#ReqExchangeActivityItem)
* completeActivityTask([ResCommon](#ResCommon) return [ReqCompleteActivityTask](#ReqCompleteActivityTask)
* completeActivityFlipTask([ResCommon](#ResCommon) return [ReqCompleteActivityTask](#ReqCompleteActivityTask)
* completePeriodActivityTask([ResCommon](#ResCommon) return [ReqCompleteActivityTask](#ReqCompleteActivityTask)
* completeRandomActivityTask([ResCommon](#ResCommon) return [ReqCompleteActivityTask](#ReqCompleteActivityTask)
* receiveActivityFlipTask([ResReceiveActivityFlipTask](#ResReceiveActivityFlipTask) return [ReqReceiveActivityFlipTask](#ReqReceiveActivityFlipTask)
* fetchActivityFlipInfo([ResFetchActivityFlipInfo](#ResFetchActivityFlipInfo) return [ReqFetchActivityFlipInfo](#ReqFetchActivityFlipInfo)
* gainAccumulatedPointActivityReward([ResCommon](#ResCommon) return [ReqGainAccumulatedPointActivityReward](#ReqGainAccumulatedPointActivityReward)
* fetchRankPointLeaderboard([ResFetchRankPointLeaderboard](#ResFetchRankPointLeaderboard) return [ReqFetchRankPointLeaderboard](#ReqFetchRankPointLeaderboard)
* gainRankPointReward([ResCommon](#ResCommon) return [ReqGainRankPointReward](#ReqGainRankPointReward)
* richmanActivityNextMove([ResRichmanNextMove](#ResRichmanNextMove) return [ReqRichmanNextMove](#ReqRichmanNextMove)
* richmanAcitivitySpecialMove([ResRichmanNextMove](#ResRichmanNextMove) return [ReqRichmanSpecialMove](#ReqRichmanSpecialMove)
* richmanActivityChestInfo([ResRichmanChestInfo](#ResRichmanChestInfo) return [ReqRichmanChestInfo](#ReqRichmanChestInfo)
* createGameObserveAuth([ResCreateGameObserveAuth](#ResCreateGameObserveAuth) return [ReqCreateGameObserveAuth](#ReqCreateGameObserveAuth)
* refreshGameObserveAuth([ResRefreshGameObserveAuth](#ResRefreshGameObserveAuth) return [ReqRefreshGameObserveAuth](#ReqRefreshGameObserveAuth)
## ResConnectionInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|client_endpoint|[NetworkEndpoint](#NetworkEndpoint)

## ReqSignupAccount

#|Field name|Field type
-|-|-
1|account|string
2|password|string
3|code|string
4|type|uint32

## ResSignupAccount

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ReqLogin

#|Field name|Field type
-|-|-
1|account|string
2|password|string
3|reconnect|bool
4|device|[ClientDeviceInfo](#ClientDeviceInfo)
5|random_key|string
6|client_version|string
7|gen_access_token|bool
8|currency_platforms|uint32
9|type|uint32

## ResLogin

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|account_id|uint32
3|account|[Account](#Account)
4|game_info|[GameConnectInfo](#GameConnectInfo)
5|has_unread_announcement|bool
6|access_token|string
7|signup_time|uint32
8|is_id_card_authed|bool

## ReqEmailLogin

#|Field name|Field type
-|-|-
1|email|string
2|password|string
3|reconnect|bool
4|device|[ClientDeviceInfo](#ClientDeviceInfo)
5|random_key|string
6|client_version|string
7|gen_access_token|bool
8|currency_platforms|uint32

## ReqBindAccount

#|Field name|Field type
-|-|-
1|account|string
2|password|string

## ReqCreatePhoneVerifyCode

#|Field name|Field type
-|-|-
1|phone|string
2|usage|uint32

## ReqCreateEmailVerifyCode

#|Field name|Field type
-|-|-
1|email|string
2|usage|uint32

## ReqVerifyCodeForSecure

#|Field name|Field type
-|-|-
1|code|string
2|operation|uint32

## ResVerfiyCodeForSecure

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|secure_token|string

## ReqBindPhoneNumber

#|Field name|Field type
-|-|-
1|code|string
2|phone|string
3|password|string
4|multi_bind_version|bool

## ReqUnbindPhoneNumber

#|Field name|Field type
-|-|-
1|code|string
2|phone|string
3|password|string

## ResFetchPhoneLoginBind

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|phone_login|uint32

## ReqCreatePhoneLoginBind

#|Field name|Field type
-|-|-
1|password|string

## ReqBindEmail

#|Field name|Field type
-|-|-
1|email|string
2|code|string
3|password|string

## ReqModifyPassword

#|Field name|Field type
-|-|-
1|new_password|string
2|old_password|string
3|secure_token|string

## ReqOauth2Auth

#|Field name|Field type
-|-|-
1|type|uint32
2|code|string
3|uid|string

## ResOauth2Auth

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|access_token|string

## ReqOauth2Check

#|Field name|Field type
-|-|-
1|type|uint32
2|access_token|string

## ResOauth2Check

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|has_account|bool

## ReqOauth2Signup

#|Field name|Field type
-|-|-
1|type|uint32
2|access_token|string
3|email|string
4|advertise_str|string

## ResOauth2Signup

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ReqOauth2Login

#|Field name|Field type
-|-|-
1|type|uint32
2|access_token|string
3|reconnect|bool
4|device|[ClientDeviceInfo](#ClientDeviceInfo)
5|random_key|string
6|client_version|string
8|currency_platforms|uint32

## ReqDMMPreLogin

#|Field name|Field type
-|-|-
1|finish_url|string

## ResDMMPreLogin

#|Field name|Field type
-|-|-
1|parameter|string

## ReqLogout

No fields

## ResLogout

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ReqHeatBeat

#|Field name|Field type
-|-|-
1|no_operation_counter|uint32

## ReqLoginBeat

#|Field name|Field type
-|-|-
1|contract|string

## ReqJoinMatchQueue

#|Field name|Field type
-|-|-
1|match_mode|uint32

## ReqCancelMatchQueue

#|Field name|Field type
-|-|-
1|match_mode|uint32

## ReqAccountInfo

#|Field name|Field type
-|-|-
1|account_id|uint32

## ResAccountInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|account|[Account](#Account)
3|room|[Room](#Room)

## ReqCreateNickname

#|Field name|Field type
-|-|-
1|nickname|string
2|advertise_str|string

## ReqModifyNickname

#|Field name|Field type
-|-|-
1|nickname|string
2|use_item_id|uint32

## ReqModifyBirthday

#|Field name|Field type
-|-|-
1|birthday|int32

## ResSelfRoom

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|room|[Room](#Room)

## ReqCreateRoom

#|Field name|Field type
-|-|-
1|player_count|uint32
2|mode|[GameMode](#GameMode)
3|public_live|bool

## ResCreateRoom

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|room|[Room](#Room)

## ReqJoinRoom

#|Field name|Field type
-|-|-
1|room_id|uint32

## ResJoinRoom

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|room|[Room](#Room)

## ReqRoomReady

#|Field name|Field type
-|-|-
1|ready|bool

## ReqRoomDressing

#|Field name|Field type
-|-|-
1|dressing|bool

## ReqRoomStart

No fields

## ReqRoomKick

#|Field name|Field type
-|-|-
1|account_id|uint32

## ReqModifyRoom

#|Field name|Field type
-|-|-
1|robot_count|uint32

## ReqChangeAvatar

#|Field name|Field type
-|-|-
1|avatar_id|uint32

## ReqAccountStatisticInfo

#|Field name|Field type
-|-|-
1|account_id|uint32

## ResAccountStatisticInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|statistic_data|[AccountStatisticData](#AccountStatisticData)
3|detail_data|[AccountDetailStatisticV2](#AccountDetailStatisticV2)

## ResAccountCharacterInfo

#|Field name|Field type
-|-|-
1|unlock_list|uint32

## ReqShopPurchase

#|Field name|Field type
-|-|-
1|type|string
2|id|uint32

## ResShopPurchase

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|update|[AccountUpdate](#AccountUpdate)

## ReqGameRecord

#|Field name|Field type
-|-|-
1|game_uuid|string

## ResGameRecord

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
3|head|[RecordGame](#RecordGame)
4|data|[bytes](#bytes)
5|data_url|string

## ReqGameRecordList

#|Field name|Field type
-|-|-
1|start|uint32
2|count|uint32
3|type|uint32

## ResGameRecordList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|total_count|uint32
3|record_list|[RecordGame](#RecordGame)

## ResCollectedGameRecordList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|record_list|[RecordCollectedData](#RecordCollectedData)
3|record_collect_limit|uint32

## ReqGameRecordsDetail

#|Field name|Field type
-|-|-
1|uuid_list|string

## ResGameRecordsDetail

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|record_list|[RecordGame](#RecordGame)

## ReqAddCollectedGameRecord

#|Field name|Field type
-|-|-
1|uuid|string
2|remarks|string
3|start_time|uint32
4|end_time|uint32

## ResAddCollectedGameRecord

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ReqRemoveCollectedGameRecord

#|Field name|Field type
-|-|-
1|uuid|string

## ResRemoveCollectedGameRecord

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ReqChangeCollectedGameRecordRemarks

#|Field name|Field type
-|-|-
1|uuid|string
2|remarks|string

## ResChangeCollectedGameRecordRemarks

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ReqLevelLeaderboard

#|Field name|Field type
-|-|-
1|type|uint32

## ResLevelLeaderboard

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|items|[Item](#Item)
3|self_rank|uint32

## ReqMultiAccountId

#|Field name|Field type
-|-|-
1|account_id_list|uint32

## ResMultiAccountBrief

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|players|[PlayerBaseView](#PlayerBaseView)

## ResFriendList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|friends|[Friend](#Friend)
3|friend_max_count|uint32

## ResFriendApplyList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|applies|[FriendApply](#FriendApply)

## ReqApplyFriend

#|Field name|Field type
-|-|-
1|target_id|uint32

## ReqHandleFriendApply

#|Field name|Field type
-|-|-
1|target_id|uint32
2|method|uint32

## ReqRemoveFriend

#|Field name|Field type
-|-|-
1|target_id|uint32

## ReqSearchAccountByPattern

#|Field name|Field type
-|-|-
1|search_next|bool
2|pattern|string

## ResSearchAccountByPattern

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|is_finished|bool
3|match_accounts|uint32
4|decode_id|uint32

## ReqAccountList

#|Field name|Field type
-|-|-
1|account_id_list|uint32

## ResAccountStates

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|states|[AccountActiveState](#AccountActiveState)

## ReqSearchAccountById

#|Field name|Field type
-|-|-
1|account_id|uint32

## ResSearchAccountById

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|player|[PlayerBaseView](#PlayerBaseView)

## ResBagInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|bag|[Bag](#Bag)

## ReqUseBagItem

#|Field name|Field type
-|-|-
1|item_id|uint32

## ReqOpenManualItem

#|Field name|Field type
-|-|-
1|item_id|uint32
2|count|uint32
3|select_id|uint32

## ReqOpenRandomRewardItem

#|Field name|Field type
-|-|-
1|item_id|uint32

## ResOpenRandomRewardItem

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|results|[OpenResult](#OpenResult)

## ReqComposeShard

#|Field name|Field type
-|-|-
1|item_id|uint32

## ResAnnouncement

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|announcements|[Announcement](#Announcement)
3|sort|uint32
4|read_list|uint32

## ResMailInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|mails|[Mail](#Mail)

## ReqReadMail

#|Field name|Field type
-|-|-
1|mail_id|uint32

## ReqDeleteMail

#|Field name|Field type
-|-|-
1|mail_id|uint32

## ReqTakeAttachment

#|Field name|Field type
-|-|-
1|mail_id|uint32

## ResAchievement

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|progresses|[AchievementProgress](#AchievementProgress)

## ResTitleList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|title_list|uint32

## ReqUseTitle

#|Field name|Field type
-|-|-
1|title|uint32

## ReqBuyShiLian

#|Field name|Field type
-|-|-
1|type|uint32

## ReqUpdateClientValue

#|Field name|Field type
-|-|-
1|key|uint32
2|value|uint32

## ResClientValue

#|Field name|Field type
-|-|-
1|datas|[Value](#Value)
2|recharged_count|uint32

## ReqClientMessage

#|Field name|Field type
-|-|-
1|timestamp|uint32
2|message|string

## ReqCurrentMatchInfo

#|Field name|Field type
-|-|-
1|mode_list|uint32

## ResCurrentMatchInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|matches|[CurrentMatchInfo](#CurrentMatchInfo)

## ReqUserComplain

#|Field name|Field type
-|-|-
1|target_id|uint32
2|type|uint32

## ReqReadAnnouncement

#|Field name|Field type
-|-|-
1|announcement_id|uint32

## ResReviveCoinInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|has_gained|bool

## ResDailyTask

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|progresses|[TaskProgress](#TaskProgress)
3|has_refresh_count|bool
4|max_daily_task_count|uint32
5|refresh_count|uint32

## ReqRefreshDailyTask

#|Field name|Field type
-|-|-
1|task_id|uint32

## ResRefreshDailyTask

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|progress|[TaskProgress](#TaskProgress)
3|refresh_count|uint32

## ReqUseGiftCode

#|Field name|Field type
-|-|-
1|code|string

## ResUseGiftCode

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
6|rewards|[RewardSlot](#RewardSlot)

## ReqSendClientMessage

#|Field name|Field type
-|-|-
1|target_id|uint32
2|type|uint32
3|content|string

## ReqGameLiveInfo

#|Field name|Field type
-|-|-
1|game_uuid|string

## ResGameLiveInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|left_start_seconds|uint32
3|live_head|[GameLiveHead](#GameLiveHead)
4|segments|[GameLiveSegmentUri](#GameLiveSegmentUri)
5|now_millisecond|uint32

## ReqGameLiveLeftSegment

#|Field name|Field type
-|-|-
1|game_uuid|string
2|last_segment_id|uint32

## ResGameLiveLeftSegment

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|live_state|uint32
4|segments|[GameLiveSegmentUri](#GameLiveSegmentUri)
5|now_millisecond|uint32
6|segment_end_millisecond|uint32

## ReqGameLiveList

#|Field name|Field type
-|-|-
1|filter_id|uint32

## ResGameLiveList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|live_list|[GameLiveHead](#GameLiveHead)

## ResCommentSetting

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|comment_allow|uint32

## ReqUpdateCommentSetting

#|Field name|Field type
-|-|-
1|comment_allow|uint32

## ReqFetchCommentList

#|Field name|Field type
-|-|-
1|target_id|uint32

## ResFetchCommentList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|comment_allow|uint32
3|comment_id_list|uint32
4|last_read_id|uint32

## ReqFetchCommentContent

#|Field name|Field type
-|-|-
1|target_id|uint32
2|comment_id_list|uint32

## ResFetchCommentContent

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|comments|[CommentItem](#CommentItem)

## ReqLeaveComment

#|Field name|Field type
-|-|-
1|target_id|uint32
2|content|string

## ReqDeleteComment

#|Field name|Field type
-|-|-
1|target_id|uint32
2|delete_list|uint32

## ReqUpdateReadComment

#|Field name|Field type
-|-|-
1|read_id|uint32

## ReqRollingNotice

#|Field name|Field type
-|-|-
1|notice|[RollingNotice](#RollingNotice)

## ResServerTime

#|Field name|Field type
-|-|-
1|server_time|uint32

## ReqPlatformBillingProducts

#|Field name|Field type
-|-|-
1|shelves_id|uint32

## ResPlatformBillingProducts

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|products|[BillingProduct](#BillingProduct)

## ReqCreateBillingOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|payment_platform|uint32
3|client_type|uint32
4|account_id|uint32

## ResCreateBillingOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqSolveGooglePlayOrder

#|Field name|Field type
-|-|-
2|inapp_purchase_data|string
3|inapp_data_signature|string

## ReqSolveGooglePlayOrderV3

#|Field name|Field type
-|-|-
1|order_id|string
2|transaction_id|string
3|token|string
4|account_id|uint32

## ReqCancelGooglePlayOrder

#|Field name|Field type
-|-|-
1|order_id|string

## ReqCreateWechatNativeOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|account_ip|string

## ResCreateWechatNativeOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|qrcode_buffer|string
3|order_id|string

## ReqCreateWechatAppOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|account_ip|string

## ResCreateWechatAppOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|call_wechat_app_param|[CallWechatAppParam](#CallWechatAppParam)

## ReqCreateAlipayOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|alipay_trade_type|string
5|return_url|string

## ResCreateAlipayOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|alipay_url|string

## ReqCreateAlipayScanOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32

## ResCreateAlipayScanOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|qrcode_buffer|string
3|order_id|string
4|qr_code|string

## ReqCreateAlipayAppOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32

## ResCreateAlipayAppOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|alipay_url|string

## ReqCreateJPCreditCardOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateJPCreditCardOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateJPPaypalOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateJPPaypalOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateJPAuOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateJPAuOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateJPDocomoOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateJPDocomoOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateJPWebMoneyOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateJPWebMoneyOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateJPSoftbankOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateJPSoftbankOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateYostarOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|order_type|uint32

## ResCreateYostarOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateENPaypalOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateENPaypalOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateENJCBOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateENJCBOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateENMasterCardOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateENMasterCardOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateENVisaOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateENVisaOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateENAlipayOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|return_url|string
5|access_token|string

## ResCreateENAlipayOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqCreateDMMOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|account_id|uint32
3|client_type|uint32

## ResCreateDmmOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string
3|transaction_id|string
4|dmm_user_id|string
5|token|string
6|callback_url|string
9|request_time|string
10|dmm_app_id|string

## ReqCreateIAPOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32
4|access_token|string

## ResCreateIAPOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|order_id|string

## ReqVerificationIAPOrder

#|Field name|Field type
-|-|-
1|order_id|string
2|transaction_id|string
3|receipt_data|string
4|account_id|uint32

## ResVerificationIAPOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)

## ReqCreateMyCardOrder

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|client_type|uint32
3|account_id|uint32

## ResCreateMyCardOrder

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|auth_code|string
3|order_id|string

## ReqVerifyMyCardOrder

#|Field name|Field type
-|-|-
1|order_id|string
2|account_id|uint32

## ReqOpenChest

#|Field name|Field type
-|-|-
1|chest_id|uint32
2|count|uint32
3|use_ticket|bool

## ResOpenChest

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|results|[OpenResult](#OpenResult)
3|total_open_count|uint32
4|faith_count|uint32

## ReqBuyFromChestShop

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|count|uint32

## ResBuyFromChestShop

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|chest_id|uint32
3|consume_count|uint32
4|faith_count|uint32

## ResDailySignInInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|sign_in_days|uint32

## ReqDoActivitySignIn

#|Field name|Field type
-|-|-
2|activity_id|uint32

## ResDoActivitySignIn

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|rewards|[RewardData](#RewardData)
3|sign_in_count|uint32

## ResCharacterInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|characters|[Character](#Character)
3|skins|uint32
4|main_character_id|uint32
5|send_gift_count|uint32
6|send_gift_limit|uint32
7|finished_endings|uint32
8|rewarded_endings|uint32

## ReqChangeMainCharacter

#|Field name|Field type
-|-|-
1|character_id|uint32

## ReqChangeCharacterSkin

#|Field name|Field type
-|-|-
1|character_id|uint32
2|skin|uint32

## ReqChangeCharacterView

#|Field name|Field type
-|-|-
1|character_id|uint32
2|slot|uint32
3|item_id|uint32

## ReqSendGiftToCharacter

#|Field name|Field type
-|-|-
1|character_id|uint32
2|gifts|[Gift](#Gift)

## ResSendGiftToCharacter

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|level|uint32
3|exp|uint32

## ReqSellItem

#|Field name|Field type
-|-|-
1|sells|[Item](#Item)

## ResCommonView

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|slots|[Slot](#Slot)

## ReqChangeCommonView

#|Field name|Field type
-|-|-
1|slot|uint32
2|value|uint32

## ReqSaveCommonViews

#|Field name|Field type
-|-|-
1|views|[ViewSlot](#ViewSlot)
2|save_index|uint32
3|is_use|uint32

## ReqCommonViews

#|Field name|Field type
-|-|-
1|index|uint32

## ResCommonViews

#|Field name|Field type
-|-|-
1|views|[ViewSlot](#ViewSlot)

## ResAllcommonViews

#|Field name|Field type
-|-|-
1|views|[Views](#Views)
2|use|uint32
3|error|[Error](#Error)

## ReqUseCommonView

#|Field name|Field type
-|-|-
3|index|uint32

## ReqUpgradeCharacter

#|Field name|Field type
-|-|-
1|character_id|uint32

## ResUpgradeCharacter

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|character|[Character](#Character)

## ReqFinishedEnding

#|Field name|Field type
-|-|-
1|character_id|uint32
2|story_id|uint32
3|ending_id|uint32

## ReqGMCommand

#|Field name|Field type
-|-|-
1|command|string

## ResShopInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|shop_info|[ShopInfo](#ShopInfo)

## ReqBuyFromShop

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|count|uint32
3|bill_short_cut|[BillShortcut](#BillShortcut)
4|deal_price|uint32

## ResBuyFromShop

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|rewards|[RewardSlot](#RewardSlot)

## ReqBuyFromZHP

#|Field name|Field type
-|-|-
1|goods_id|uint32
2|count|uint32

## ReqPayMonthTicket

#|Field name|Field type
-|-|-
1|ticket_id|uint32

## ResPayMonthTicket

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|resource_id|uint32
3|resource_count|uint32

## ReqReshZHPShop

#|Field name|Field type
-|-|-
1|free_refresh|uint32
2|cost_refresh|uint32

## ResRefreshZHPShop

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|zhp|[ZHPShop](#ZHPShop)

## ResMonthTicketInfo

#|Field name|Field type
-|-|-
1|month_ticket_info|[MonthTicketInfo](#MonthTicketInfo)

## ReqExchangeCurrency

#|Field name|Field type
-|-|-
1|id|uint32
2|count|uint32

## ResServerSettings

#|Field name|Field type
-|-|-
1|settings|[ServerSettings](#ServerSettings)

## ResAccountSettings

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|settings|[AccountSetting](#AccountSetting)

## ReqUpdateAccountSettings

#|Field name|Field type
-|-|-
1|setting|[AccountSetting](#AccountSetting)

## ResModNicknameTime

#|Field name|Field type
-|-|-
1|last_mod_time|uint32

## ResMisc

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|recharged_list|uint32
3|faiths|[MiscFaithData](#MiscFaithData)

## ReqModifySignature

#|Field name|Field type
-|-|-
1|signature|string

## ResIDCardInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|is_authed|bool
3|country|string

## ReqUpdateIDCardInfo

#|Field name|Field type
-|-|-
1|fullname|string
2|card_no|string

## ResVipReward

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|gained_vip_levels|uint32

## ReqGainVipReward

#|Field name|Field type
-|-|-
1|vip_level|uint32

## ReqFetchCustomizedContestList

#|Field name|Field type
-|-|-
1|start|uint32
2|count|uint32

## ResFetchCustomizedContestList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|contests|[CustomizedContestBase](#CustomizedContestBase)
3|follow_contests|[CustomizedContestBase](#CustomizedContestBase)

## ReqFetchCustomizedContestExtendInfo

#|Field name|Field type
-|-|-
1|uid_list|uint32

## ResFetchCustomizedContestExtendInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|extend_list|[CustomizedContestExtend](#CustomizedContestExtend)

## ReqFetchCustomizedContestAuthInfo

#|Field name|Field type
-|-|-
1|unique_id|uint32

## ResFetchCustomizedContestAuthInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|observer_level|uint32

## ReqEnterCustomizedContest

#|Field name|Field type
-|-|-
1|unique_id|uint32

## ResEnterCustomizedContest

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|detail_info|[CustomizedContestDetail](#CustomizedContestDetail)
3|player_report|[CustomizedContestPlayerReport](#CustomizedContestPlayerReport)
4|is_followed|bool

## ReqFetchCustomizedContestOnlineInfo

#|Field name|Field type
-|-|-
1|unique_id|uint32

## ResFetchCustomizedContestOnlineInfo

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|online_player|uint32

## ReqFetchCustomizedContestByContestId

#|Field name|Field type
-|-|-
1|contest_id|uint32

## ResFetchCustomizedContestByContestId

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|contest_info|[CustomizedContestAbstract](#CustomizedContestAbstract)

## ReqStartCustomizedContest

#|Field name|Field type
-|-|-
1|unique_id|uint32

## ReqJoinCustomizedContestChatRoom

#|Field name|Field type
-|-|-
1|unique_id|uint32

## ResJoinCustomizedContestChatRoom

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|chat_history|[bytes](#bytes)

## ReqSayChatMessage

#|Field name|Field type
-|-|-
1|content|string

## ReqFetchCustomizedContestGameLiveList

#|Field name|Field type
-|-|-
1|unique_id|uint32

## ResFetchCustomizedContestGameLiveList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|live_list|[GameLiveHead](#GameLiveHead)

## ReqFetchCustomizedContestGameRecords

#|Field name|Field type
-|-|-
1|unique_id|uint32
2|last_index|uint32

## ResFetchCustomizedContestGameRecords

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|next_index|uint32
3|record_list|[RecordGame](#RecordGame)

## ReqTargetCustomizedContest

#|Field name|Field type
-|-|-
1|unique_id|uint32

## ResActivityList

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|activities|[Activity](#Activity)

## ResAccountActivityData

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|exchange_records|[ExchangeRecord](#ExchangeRecord)
3|task_progress_list|[TaskProgress](#TaskProgress)
4|accumulated_point_list|[ActivityAccumulatedPointData](#ActivityAccumulatedPointData)
5|rank_data_list|[ActivityRankPointData](#ActivityRankPointData)
6|flip_task_progress_list|[TaskProgress](#TaskProgress)
7|sign_in_data|[ActivitySignInData](#ActivitySignInData)
8|richman_data|[ActivityRichmanData](#ActivityRichmanData)
9|period_task_progress_list|[TaskProgress](#TaskProgress)
10|random_task_progress_list|[TaskProgress](#TaskProgress)

## ReqExchangeActivityItem

#|Field name|Field type
-|-|-
1|exchange_id|uint32

## ResExchangeActivityItem

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|execute_reward|[ExecuteReward](#ExecuteReward)

## ReqCompleteActivityTask

#|Field name|Field type
-|-|-
1|task_id|uint32

## ReqReceiveActivityFlipTask

#|Field name|Field type
-|-|-
1|task_id|uint32

## ResReceiveActivityFlipTask

#|Field name|Field type
-|-|-
1|count|uint32
2|error|[Error](#Error)

## ReqFetchActivityFlipInfo

#|Field name|Field type
-|-|-
1|activity_id|uint32

## ResFetchActivityFlipInfo

#|Field name|Field type
-|-|-
1|rewards|uint32
2|count|uint32
3|error|[Error](#Error)

## ReqGainAccumulatedPointActivityReward

#|Field name|Field type
-|-|-
1|activity_id|uint32
2|reward_id|uint32

## ReqFetchRankPointLeaderboard

#|Field name|Field type
-|-|-
1|leaderboard_id|uint32

## ResFetchRankPointLeaderboard

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|items|[Item](#Item)
3|last_refresh_time|uint32

## ReqGainRankPointReward

#|Field name|Field type
-|-|-
1|leaderboard_id|uint32
2|activity_id|uint32

## ReqRichmanNextMove

#|Field name|Field type
-|-|-
1|activity_id|uint32

## ResRichmanNextMove

#|Field name|Field type
-|-|-
1|paths|[PathData](#PathData)
2|dice|uint32
3|location|uint32
4|finished_count|uint32
5|step|uint32
6|buff|[BuffData](#BuffData)
7|bank_save|uint32
8|chest_position|uint32
9|exp|uint32
10|bank_save_add|uint32
11|error|[Error](#Error)

## ReqRichmanSpecialMove

#|Field name|Field type
-|-|-
1|activity_id|uint32
2|step|uint32

## ReqRichmanChestInfo

#|Field name|Field type
-|-|-
1|activity_id|uint32

## ResRichmanChestInfo

#|Field name|Field type
-|-|-
1|items|[ItemData](#ItemData)
2|error|[Error](#Error)

## ReqCreateGameObserveAuth

#|Field name|Field type
-|-|-
1|game_uuid|string

## ResCreateGameObserveAuth

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|token|string
3|location|string

## ReqRefreshGameObserveAuth

#|Field name|Field type
-|-|-
1|token|string

## ResRefreshGameObserveAuth

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|ttl|uint32

## ActionMJStart

No fields

## NewRoundOpenedTiles

#|Field name|Field type
-|-|-
1|seat|uint32
2|tiles|string
3|count|uint32

## MuyuInfo

#|Field name|Field type
-|-|-
1|seat|uint32
2|count|uint32
3|count_max|uint32
4|id|uint32

## ActionNewRound

#|Field name|Field type
-|-|-
1|chang|uint32
2|ju|uint32
3|ben|uint32
4|tiles|string
5|dora|string
6|scores|int32
7|operation|[OptionalOperationList](#OptionalOperationList)
8|liqibang|uint32
9|tingpais0|[TingPaiDiscardInfo](#TingPaiDiscardInfo)
10|tingpais1|[TingPaiInfo](#TingPaiInfo)
11|al|bool
12|md5|string
13|left_tile_count|uint32
14|doras|string
15|opens|[NewRoundOpenedTiles](#NewRoundOpenedTiles)
16|muyu|[MuyuInfo](#MuyuInfo)

## RecordNewRound

#|Field name|Field type
-|-|-
1|chang|uint32
2|ju|uint32
3|ben|uint32
4|dora|string
5|scores|int32
6|liqibang|uint32
7|tiles0|string
8|tiles1|string
9|tiles2|string
10|tiles3|string
11|tingpai|[TingPai](#TingPai)
12|operation|[OptionalOperationList](#OptionalOperationList)
13|md5|string
14|paishan|string
15|left_tile_count|uint32
16|doras|string
17|opens|[NewRoundOpenedTiles](#NewRoundOpenedTiles)
18|muyu|[MuyuInfo](#MuyuInfo)

## GameSnapshot

#|Field name|Field type
-|-|-
1|chang|uint32
2|ju|uint32
3|ben|uint32
4|index_player|uint32
5|left_tile_count|uint32
6|hands|string
7|doras|string
8|liqibang|uint32
9|players|[PlayerSnapshot](#PlayerSnapshot)
10|zhenting|bool

## ActionPrototype

#|Field name|Field type
-|-|-
1|step|uint32
2|name|string
3|data|[bytes](#bytes)

## GameDetailRecords

#|Field name|Field type
-|-|-
1|records|[bytes](#bytes)

## OptionalOperation

#|Field name|Field type
-|-|-
1|type|uint32
2|combination|string

## OptionalOperationList

#|Field name|Field type
-|-|-
1|seat|uint32
2|operation_list|[OptionalOperation](#OptionalOperation)
4|time_add|uint32
5|time_fixed|uint32

## LiQiSuccess

#|Field name|Field type
-|-|-
1|seat|uint32
2|score|int32
3|liqibang|uint32

## FanInfo

#|Field name|Field type
-|-|-
1|name|string
2|val|uint32
3|id|uint32

## HuleInfo

#|Field name|Field type
-|-|-
1|hand|string
2|ming|string
3|hu_tile|string
4|seat|uint32
5|zimo|bool
6|qinjia|bool
7|liqi|bool
8|doras|string
9|li_doras|string
10|yiman|bool
11|count|uint32
12|fans|[FanInfo](#FanInfo)
13|fu|uint32
14|title|string
15|point_rong|uint32
16|point_zimo_qin|uint32
17|point_zimo_xian|uint32
18|title_id|uint32
19|point_sum|uint32

## TingPaiInfo

#|Field name|Field type
-|-|-
1|tile|string
2|haveyi|bool
3|yiman|bool
4|count|uint32
5|fu|uint32
6|biao_dora_count|uint32
7|yiman_zimo|bool
8|count_zimo|uint32
9|fu_zimo|uint32

## TingPaiDiscardInfo

#|Field name|Field type
-|-|-
1|tile|string
2|zhenting|bool
3|infos|[TingPaiInfo](#TingPaiInfo)

## GameEnd

#|Field name|Field type
-|-|-
1|scores|int32

## ActionDiscardTile

#|Field name|Field type
-|-|-
1|seat|uint32
2|tile|string
3|is_liqi|bool
4|operation|[OptionalOperationList](#OptionalOperationList)
5|moqie|bool
6|zhenting|bool
7|tingpais|[TingPaiInfo](#TingPaiInfo)
8|doras|string
9|is_wliqi|bool
10|tile_state|uint32
11|muyu|[MuyuInfo](#MuyuInfo)

## RecordDiscardTile

#|Field name|Field type
-|-|-
1|seat|uint32
2|tile|string
3|is_liqi|bool
5|moqie|bool
6|zhenting|bool
7|tingpais|[TingPaiInfo](#TingPaiInfo)
8|doras|string
9|is_wliqi|bool
10|operations|[OptionalOperationList](#OptionalOperationList)
11|tile_state|uint32
12|muyu|[MuyuInfo](#MuyuInfo)

## ActionDealTile

#|Field name|Field type
-|-|-
1|seat|uint32
2|tile|string
3|left_tile_count|uint32
4|operation|[OptionalOperationList](#OptionalOperationList)
5|liqi|[LiQiSuccess](#LiQiSuccess)
6|doras|string
7|zhenting|bool
8|tingpais|[TingPaiDiscardInfo](#TingPaiDiscardInfo)
9|tile_state|uint32
10|muyu|[MuyuInfo](#MuyuInfo)

## RecordDealTile

#|Field name|Field type
-|-|-
1|seat|uint32
2|tile|string
3|left_tile_count|uint32
5|liqi|[LiQiSuccess](#LiQiSuccess)
6|doras|string
7|zhenting|bool
8|operation|[OptionalOperationList](#OptionalOperationList)
9|tile_state|uint32
11|muyu|[MuyuInfo](#MuyuInfo)

## ActionChiPengGang

#|Field name|Field type
-|-|-
1|seat|uint32
2|type|uint32
3|tiles|string
4|froms|uint32
5|liqi|[LiQiSuccess](#LiQiSuccess)
6|operation|[OptionalOperationList](#OptionalOperationList)
7|zhenting|bool
8|tingpais|[TingPaiDiscardInfo](#TingPaiDiscardInfo)
9|tile_states|uint32
10|muyu|[MuyuInfo](#MuyuInfo)

## RecordChiPengGang

#|Field name|Field type
-|-|-
1|seat|uint32
2|type|uint32
3|tiles|string
4|froms|uint32
5|liqi|[LiQiSuccess](#LiQiSuccess)
7|zhenting|bool
8|operation|[OptionalOperationList](#OptionalOperationList)
9|tile_states|uint32
10|muyu|[MuyuInfo](#MuyuInfo)

## ActionAnGangAddGang

#|Field name|Field type
-|-|-
1|seat|uint32
2|type|uint32
3|tiles|string
4|operation|[OptionalOperationList](#OptionalOperationList)
6|doras|string
7|zhenting|bool
8|tingpais|[TingPaiInfo](#TingPaiInfo)
9|muyu|[MuyuInfo](#MuyuInfo)

## RecordAnGangAddGang

#|Field name|Field type
-|-|-
1|seat|uint32
2|type|uint32
3|tiles|string
6|doras|string
7|operations|[OptionalOperationList](#OptionalOperationList)
8|muyu|[MuyuInfo](#MuyuInfo)

## ActionBaBei

#|Field name|Field type
-|-|-
1|seat|uint32
4|operation|[OptionalOperationList](#OptionalOperationList)
6|doras|string
7|zhenting|bool
8|tingpais|[TingPaiInfo](#TingPaiInfo)
9|moqie|bool
10|tile_state|uint32
11|muyu|[MuyuInfo](#MuyuInfo)

## RecordBaBei

#|Field name|Field type
-|-|-
1|seat|uint32
6|doras|string
7|operations|[OptionalOperationList](#OptionalOperationList)
8|moqie|bool
10|tile_state|uint32
11|muyu|[MuyuInfo](#MuyuInfo)

## ActionHule

#|Field name|Field type
-|-|-
1|hules|[HuleInfo](#HuleInfo)
2|old_scores|int32
3|delta_scores|int32
4|wait_timeout|uint32
5|scores|int32
6|gameend|[GameEnd](#GameEnd)
7|doras|string
8|muyu|[MuyuInfo](#MuyuInfo)

## RecordHule

#|Field name|Field type
-|-|-
1|hules|[HuleInfo](#HuleInfo)
2|old_scores|int32
3|delta_scores|int32
4|wait_timeout|uint32
5|scores|int32
6|gameend|[GameEnd](#GameEnd)
7|doras|string
8|muyu|[MuyuInfo](#MuyuInfo)

## ActionLiuJu

#|Field name|Field type
-|-|-
1|type|uint32
2|gameend|[GameEnd](#GameEnd)
3|seat|uint32
4|tiles|string
5|liqi|[LiQiSuccess](#LiQiSuccess)
6|allplayertiles|string
7|muyu|[MuyuInfo](#MuyuInfo)

## RecordLiuJu

#|Field name|Field type
-|-|-
1|type|uint32
2|gameend|[GameEnd](#GameEnd)
3|seat|uint32
4|tiles|string
5|liqi|[LiQiSuccess](#LiQiSuccess)
6|allplayertiles|string
7|muyu|[MuyuInfo](#MuyuInfo)

## NoTilePlayerInfo

#|Field name|Field type
-|-|-
3|tingpai|bool
4|hand|string
5|tings|[TingPaiInfo](#TingPaiInfo)

## NoTileScoreInfo

#|Field name|Field type
-|-|-
1|seat|uint32
2|old_scores|int32
3|delta_scores|int32
4|hand|string
5|ming|string
6|doras|string
7|score|uint32

## ActionNoTile

#|Field name|Field type
-|-|-
1|liujumanguan|bool
2|players|[NoTilePlayerInfo](#NoTilePlayerInfo)
3|scores|[NoTileScoreInfo](#NoTileScoreInfo)
4|gameend|bool
5|muyu|[MuyuInfo](#MuyuInfo)

## RecordNoTile

#|Field name|Field type
-|-|-
1|liujumanguan|bool
2|players|[NoTilePlayerInfo](#NoTilePlayerInfo)
3|scores|[NoTileScoreInfo](#NoTileScoreInfo)
4|gameend|bool
5|muyu|[MuyuInfo](#MuyuInfo)

## PlayerLeaving

#|Field name|Field type
-|-|-
1|seat|uint32

## FastTest

* authGame([ResAuthGame](#ResAuthGame) return [ReqAuthGame](#ReqAuthGame)
* enterGame([ResEnterGame](#ResEnterGame) return [ReqCommon](#ReqCommon)
* syncGame([ResSyncGame](#ResSyncGame) return [ReqSyncGame](#ReqSyncGame)
* finishSyncGame([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* terminateGame([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* inputOperation([ResCommon](#ResCommon) return [ReqSelfOperation](#ReqSelfOperation)
* inputChiPengGang([ResCommon](#ResCommon) return [ReqChiPengGang](#ReqChiPengGang)
* confirmNewRound([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* broadcastInGame([ResCommon](#ResCommon) return [ReqBroadcastInGame](#ReqBroadcastInGame)
* inputGameGMCommand([ResCommon](#ResCommon) return [ReqGMCommandInGaming](#ReqGMCommandInGaming)
* fetchGamePlayerState([ResGamePlayerState](#ResGamePlayerState) return [ReqCommon](#ReqCommon)
* checkNetworkDelay([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* clearLeaving([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
* voteGameEnd([ResGameEndVote](#ResGameEndVote) return [ReqVoteGameEnd](#ReqVoteGameEnd)
* authObserve([ResCommon](#ResCommon) return [ReqAuthObserve](#ReqAuthObserve)
* startObserve([ResStartObserve](#ResStartObserve) return [ReqCommon](#ReqCommon)
* stopObserve([ResCommon](#ResCommon) return [ReqCommon](#ReqCommon)
## ReqAuthGame

#|Field name|Field type
-|-|-
1|account_id|uint32
2|token|string
3|game_uuid|string

## ResAuthGame

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|players|[PlayerGameView](#PlayerGameView)
3|seat_list|uint32
4|is_game_start|bool
5|game_config|[GameConfig](#GameConfig)
6|ready_id_list|uint32

## GameRestore

#|Field name|Field type
-|-|-
1|snapshot|[GameSnapshot](#GameSnapshot)
2|actions|[ActionPrototype](#ActionPrototype)
3|passed_waiting_time|uint32
4|game_state|uint32
5|start_time|uint32
6|last_pause_time_ms|uint32

## ResEnterGame

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|is_end|bool
3|step|uint32
4|game_restore|[GameRestore](#GameRestore)

## ReqSyncGame

#|Field name|Field type
-|-|-
1|round_id|string
2|step|uint32

## ResSyncGame

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|is_end|bool
3|step|uint32
4|game_restore|[GameRestore](#GameRestore)

## ReqSelfOperation

#|Field name|Field type
-|-|-
1|type|uint32
2|index|uint32
3|tile|string
4|cancel_operation|bool
5|moqie|bool
6|timeuse|uint32
7|tile_state|int32

## ReqChiPengGang

#|Field name|Field type
-|-|-
1|type|uint32
2|index|uint32
3|cancel_operation|bool
6|timeuse|uint32

## ReqBroadcastInGame

#|Field name|Field type
-|-|-
1|content|string
2|except_self|bool

## ReqGMCommandInGaming

#|Field name|Field type
-|-|-
1|json_data|string

## ResGamePlayerState

#|Field name|Field type
-|-|-
1|error|[Error](#Error)
2|state_list|[GamePlayerState](#GamePlayerState)

## ReqVoteGameEnd

#|Field name|Field type
-|-|-
1|yes|bool

## ResGameEndVote

#|Field name|Field type
-|-|-
1|success|bool
2|vote_cd_end_time|uint32
3|error|[Error](#Error)

## ReqAuthObserve

#|Field name|Field type
-|-|-
1|token|string

## ResStartObserve

#|Field name|Field type
-|-|-
1|head|[GameLiveHead](#GameLiveHead)
2|passed|[GameLiveSegment](#GameLiveSegment)

## NotifyNewGame

#|Field name|Field type
-|-|-
1|game_uuid|string
2|player_list|string

## NotifyPlayerLoadGameReady

#|Field name|Field type
-|-|-
1|ready_id_list|uint32

## NotifyGameBroadcast

#|Field name|Field type
-|-|-
1|seat|uint32
2|content|string

## NotifyGameEndResult

#|Field name|Field type
-|-|-
1|result|[GameEndResult](#GameEndResult)

## NotifyGameTerminate

#|Field name|Field type
-|-|-
1|reason|string

## NotifyPlayerConnectionState

#|Field name|Field type
-|-|-
1|seat|uint32
2|state|[GamePlayerState](#GamePlayerState)

## NotifyAccountLevelChange

#|Field name|Field type
-|-|-
1|origin|[AccountLevel](#AccountLevel)
2|final|[AccountLevel](#AccountLevel)
3|type|uint32

## NotifyGameFinishReward

#|Field name|Field type
-|-|-
1|mode_id|uint32
2|level_change|[LevelChange](#LevelChange)
3|match_chest|[MatchChest](#MatchChest)
4|main_character|[MainCharacter](#MainCharacter)
5|character_gift|[CharacterGift](#CharacterGift)

## NotifyActivityReward

#|Field name|Field type
-|-|-
1|activity_reward|[ActivityReward](#ActivityReward)

## NotifyActivityPoint

#|Field name|Field type
-|-|-
1|activity_points|[ActivityPoint](#ActivityPoint)

## NotifyLeaderboardPoint

#|Field name|Field type
-|-|-
1|leaderboard_points|[LeaderboardPoint](#LeaderboardPoint)

## NotifyGamePause

#|Field name|Field type
-|-|-
1|paused|bool

## NotifyEndGameVote

#|Field name|Field type
-|-|-
1|results|[VoteResult](#VoteResult)
2|start_time|uint32
3|duration_time|uint32

## NotifyObserveData

#|Field name|Field type
-|-|-
1|unit|[GameLiveUnit](#GameLiveUnit)

