# MahjongSoul protocol documentation

## NotifyRoomGameStart

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_url | string |
| 2 | connect_token | string |
| 3 | game_uuid | string |
| 4 | location | string |

## NotifyMatchGameStart

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_url | string |
| 2 | connect_token | string |
| 3 | game_uuid | string |
| 4 | match_mode_id | uint32 |
| 5 | location | string |

## NotifyRoomPlayerReady

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | ready | bool |

## NotifyRoomPlayerDressing

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | dressing | bool |

## NotifyRoomPlayerUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | update_list | [PlayerBaseView](#playerbaseview) |
| 2 | remove_list | uint32 |
| 3 | owner_id | uint32 |
| 4 | robot_count | uint32 |

## NotifyRoomKickOut

No fields

## NotifyMatchTimeout

No fields

## NotifyFriendStateChange

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | active_state | [AccountActiveState](#accountactivestate) |

## NotifyFriendViewChange

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | base | [PlayerBaseView](#playerbaseview) |

## NotifyFriendChange

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | type | uint32 |
| 3 | friend | [Friend](#friend) |

## NotifyNewFriendApply

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | apply_time | uint32 |
| 3 | removed_id | uint32 |

## NotifyClientMessage

| N | Field name | Field type |
| --- | --- | --- |
| 1 | sender | [PlayerBaseView](#playerbaseview) |
| 2 | type | uint32 |
| 3 | content | string |

## NotifyAccountUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | update | [AccountUpdate](#accountupdate) |

## NotifyAnotherLogin

No fields

## NotifyAccountLogout

No fields

## NotifyAnnouncementUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | announcements | [Announcement](#announcement) |
| 2 | sort | uint32 |

## NotifyNewMail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mail | [Mail](#mail) |

## NotifyDeleteMail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mail_id_list | uint32 |

## NotifyReviveCoinUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | has_gained | bool |

## NotifyDailyTaskUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | progresses | [TaskProgress](#taskprogress) |
| 2 | max_daily_task_count | uint32 |
| 3 | refresh_count | uint32 |

## NotifyActivityTaskUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | progresses | [TaskProgress](#taskprogress) |

## NotifyActivityPeriodTaskUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | progresses | [TaskProgress](#taskprogress) |

## NotifyAccountRandomTaskUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | progresses | [TaskProgress](#taskprogress) |

## NotifyNewComment

No fields

## NotifyRollingNotice

| N | Field name | Field type |
| --- | --- | --- |
| 1 | notice | [RollingNotice](#rollingnotice) |

## NotifyGiftSendRefresh

No fields

## NotifyShopUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | shop_info | [ShopInfo](#shopinfo) |

## NotifyVipLevelChange

| N | Field name | Field type |
| --- | --- | --- |
| 1 | gift_limit | uint32 |
| 2 | friend_max_count | uint32 |
| 3 | zhp_free_refresh_limit | uint32 |
| 4 | zhp_cost_refresh_limit | uint32 |
| 5 | buddy_bonus | [float](#float) |
| 6 | record_collect_limit | uint32 |

## NotifyServerSetting

| N | Field name | Field type |
| --- | --- | --- |
| 1 | settings | [ServerSettings](#serversettings) |

## NotifyPayResult

| N | Field name | Field type |
| --- | --- | --- |
| 1 | pay_result | uint32 |
| 2 | order_id | string |
| 3 | goods_id | uint32 |
| 4 | new_month_ticket | uint32 |
| 5 | resource_modify | [ResourceModify](#resourcemodify) |

## NotifyCustomContestAccountMsg

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | account_id | uint32 |
| 3 | sender | string |
| 4 | content | string |
| 5 | verified | uint32 |

## NotifyCustomContestSystemMsg

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | type | uint32 |
| 3 | uuid | string |
| 4 | game_start | [CustomizedContestGameStart](#customizedcontestgamestart) |
| 5 | game_end | [CustomizedContestGameEnd](#customizedcontestgameend) |

## NotifyCustomContestState

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | state | uint32 |

## NotifyActivityChange

| N | Field name | Field type |
| --- | --- | --- |
| 1 | new_activities | [Activity](#activity) |
| 2 | end_activities | uint32 |

## NotifyAFKResult

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | ban_end_time | uint32 |
| 3 | game_uuid | string |

## Error

| N | Field name | Field type |
| --- | --- | --- |
| 1 | code | uint32 |
| 2 | u32_params | uint32 |
| 3 | str_params | string |
| 4 | json_param | string |

## Wrapper

| N | Field name | Field type |
| --- | --- | --- |
| 1 | name | string |
| 2 | data | [bytes](#bytes) |

## NetworkEndpoint

| N | Field name | Field type |
| --- | --- | --- |
| 1 | family | string |
| 2 | address | string |
| 3 | port | uint32 |

## ReqCommon

No fields

## ResCommon

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ResAccountUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | update | [AccountUpdate](#accountupdate) |

## AntiAddiction

| N | Field name | Field type |
| --- | --- | --- |
| 1 | online_duration | uint32 |

## AccountMahjongStatistic

| N | Field name | Field type |
| --- | --- | --- |
| 1 | final_position_counts | uint32 |
| 2 | recent_round | [RoundSummary](#roundsummary) |
| 3 | recent_hu | [HuSummary](#husummary) |
| 4 | highest_hu | [HighestHuRecord](#highesthurecord) |
| 6 | recent_20_hu_summary | [Liqi20Summary](#liqi20summary) |
| 7 | recent_10_hu_summary | [LiQi10Summary](#liqi10summary) |
| 8 | recent_10_game_result | [GameResult](#gameresult) |

## AccountStatisticData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mahjong_category | uint32 |
| 2 | game_category | uint32 |
| 3 | statistic | [AccountMahjongStatistic](#accountmahjongstatistic) |

## AccountLevel

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | score | uint32 |

## ViewSlot

| N | Field name | Field type |
| --- | --- | --- |
| 1 | slot | uint32 |
| 2 | item_id | uint32 |

## Account

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | nickname | string |
| 3 | login_time | uint32 |
| 4 | logout_time | uint32 |
| 5 | room_id | uint32 |
| 6 | anti_addiction | [AntiAddiction](#antiaddiction) |
| 7 | title | uint32 |
| 8 | signature | string |
| 9 | email | string |
| 10 | email_verify | uint32 |
| 11 | gold | uint32 |
| 12 | diamond | uint32 |
| 13 | avatar_id | uint32 |
| 14 | vip | uint32 |
| 15 | birthday | int32 |
| 16 | phone | string |
| 17 | phone_verify | uint32 |
| 18 | platform_diamond | [PlatformDiamond](#platformdiamond) |
| 21 | level | [AccountLevel](#accountlevel) |
| 22 | level3 | [AccountLevel](#accountlevel) |
| 23 | avatar_frame | uint32 |
| 24 | skin_ticket | uint32 |
| 25 | platform_skin_ticket | [PlatformSkinTicket](#platformskinticket) |
| 26 | verified | uint32 |

## AccountOwnerData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unlock_characters | uint32 |

## AccountUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | numerical | [NumericalUpdate](#numericalupdate) |
| 2 | character | [CharacterUpdate](#characterupdate) |
| 3 | bag | [BagUpdate](#bagupdate) |
| 4 | achievement | [AchievementUpdate](#achievementupdate) |
| 5 | shilian | [AccountShiLian](#accountshilian) |
| 6 | daily_task | [DailyTaskUpdate](#dailytaskupdate) |
| 7 | title | [TitleUpdate](#titleupdate) |
| 8 | new_recharged_list | uint32 |
| 9 | activity_task | [TaskUpdate](#taskupdate) |
| 10 | activity_flip_task | [TaskUpdate](#taskupdate) |
| 11 | activity_period_task | [TaskUpdate](#taskupdate) |
| 12 | activity_random_task | [TaskUpdate](#taskupdate) |

## GameMetaData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | room_id | uint32 |
| 2 | mode_id | uint32 |
| 3 | contest_uid | uint32 |

## AccountPlayingGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_uuid | string |
| 2 | category | uint32 |
| 3 | meta | [GameMetaData](#gamemetadata) |

## AccountCacheView

| N | Field name | Field type |
| --- | --- | --- |
| 1 | cache_version | uint32 |
| 2 | account_id | uint32 |
| 3 | nickname | string |
| 4 | login_time | uint32 |
| 5 | logout_time | uint32 |
| 6 | is_online | bool |
| 7 | room_id | uint32 |
| 8 | title | uint32 |
| 9 | avatar_id | uint32 |
| 10 | vip | uint32 |
| 11 | level | [AccountLevel](#accountlevel) |
| 12 | playing_game | [AccountPlayingGame](#accountplayinggame) |
| 13 | level3 | [AccountLevel](#accountlevel) |
| 14 | avatar_frame | uint32 |
| 15 | verified | uint32 |
| 16 | ban_deadline | uint32 |
| 17 | comment_ban | uint32 |

## PlayerBaseView

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | avatar_id | uint32 |
| 3 | title | uint32 |
| 4 | nickname | string |
| 5 | level | [AccountLevel](#accountlevel) |
| 6 | level3 | [AccountLevel](#accountlevel) |
| 7 | avatar_frame | uint32 |
| 8 | verified | uint32 |

## PlayerGameView

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | avatar_id | uint32 |
| 3 | title | uint32 |
| 4 | nickname | string |
| 5 | level | [AccountLevel](#accountlevel) |
| 6 | character | [Character](#character) |
| 7 | level3 | [AccountLevel](#accountlevel) |
| 8 | avatar_frame | uint32 |
| 9 | verified | uint32 |
| 10 | views | [ViewSlot](#viewslot) |

## GameMode

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mode | uint32 |
| 4 | ai | bool |
| 5 | extendinfo | string |
| 6 | detail_rule | [GameDetailRule](#gamedetailrule) |
| 7 | testing_environment | [GameTestingEnvironmentSet](#gametestingenvironmentset) |

## GameTestingEnvironmentSet

| N | Field name | Field type |
| --- | --- | --- |
| 1 | paixing | uint32 |
| 2 | left_count | uint32 |

## GameDetailRule

| N | Field name | Field type |
| --- | --- | --- |
| 1 | time_fixed | uint32 |
| 2 | time_add | uint32 |
| 3 | dora_count | uint32 |
| 4 | shiduan | uint32 |
| 5 | init_point | uint32 |
| 6 | fandian | uint32 |
| 7 | can_jifei | bool |
| 8 | tianbian_value | uint32 |
| 9 | liqibang_value | uint32 |
| 10 | changbang_value | uint32 |
| 11 | noting_fafu_1 | uint32 |
| 12 | noting_fafu_2 | uint32 |
| 13 | noting_fafu_3 | uint32 |
| 14 | have_liujumanguan | bool |
| 15 | have_qieshangmanguan | bool |
| 16 | have_biao_dora | bool |
| 17 | have_gang_biao_dora | bool |
| 18 | ming_dora_immediately_open | bool |
| 19 | have_li_dora | bool |
| 20 | have_gang_li_dora | bool |
| 21 | have_sifenglianda | bool |
| 22 | have_sigangsanle | bool |
| 23 | have_sijializhi | bool |
| 24 | have_jiuzhongjiupai | bool |
| 25 | have_sanjiahele | bool |
| 26 | have_toutiao | bool |
| 27 | have_helelianzhuang | bool |
| 28 | have_helezhongju | bool |
| 29 | have_tingpailianzhuang | bool |
| 30 | have_tingpaizhongju | bool |
| 31 | have_yifa | bool |
| 32 | have_nanruxiru | bool |
| 33 | jingsuanyuandian | uint32 |
| 34 | shunweima_2 | int32 |
| 35 | shunweima_3 | int32 |
| 36 | shunweima_4 | int32 |
| 37 | bianjietishi | bool |
| 38 | ai_level | uint32 |
| 39 | have_zimosun | bool |
| 40 | disable_multi_yukaman | bool |
| 41 | fanfu | uint32 |
| 42 | guyi_mode | uint32 |
| 43 | dora3_mode | uint32 |
| 44 | begin_open_mode | uint32 |
| 45 | jiuchao_mode | uint32 |
| 46 | muyu_mode | uint32 |
| 47 | open_hand | uint32 |

## Room

| N | Field name | Field type |
| --- | --- | --- |
| 1 | room_id | uint32 |
| 2 | owner_id | uint32 |
| 3 | mode | [GameMode](#gamemode) |
| 4 | max_player_count | uint32 |
| 5 | persons | [PlayerGameView](#playergameview) |
| 6 | ready_list | uint32 |
| 7 | is_playing | bool |
| 8 | public_live | bool |
| 9 | robot_count | uint32 |
| 10 | tournament_id | uint32 |

## GameEndResult

| N | Field name | Field type |
| --- | --- | --- |
| 1 | players | [PlayerItem](#playeritem) |

## GameConnectInfo

| N | Field name | Field type |
| --- | --- | --- |
| 2 | connect_token | string |
| 3 | game_uuid | string |
| 4 | location | string |

## ItemGainRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | item_id | uint32 |
| 2 | count | uint32 |

## ItemGainRecords

| N | Field name | Field type |
| --- | --- | --- |
| 1 | record_time | uint32 |
| 2 | limit_source_id | uint32 |
| 3 | records | [ItemGainRecord](#itemgainrecord) |

## Item

| N | Field name | Field type |
| --- | --- | --- |
| 1 | item_id | uint32 |
| 2 | stack | uint32 |

## Bag

| N | Field name | Field type |
| --- | --- | --- |
| 1 | items | [Item](#item) |
| 2 | daily_gain_record | [ItemGainRecords](#itemgainrecords) |

## BagUpdate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | update_items | [Item](#item) |
| 2 | update_daily_gain_record | [ItemGainRecords](#itemgainrecords) |

## RewardSlot

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | count | uint32 |

## OpenResult

| N | Field name | Field type |
| --- | --- | --- |
| 1 | reward | [RewardSlot](#rewardslot) |
| 2 | replace | [RewardSlot](#rewardslot) |

## RewardPlusResult

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | count | uint32 |
| 3 | exchange | [Exchange](#exchange) |

## ExecuteReward

| N | Field name | Field type |
| --- | --- | --- |
| 1 | reward | [RewardSlot](#rewardslot) |
| 2 | replace | [RewardSlot](#rewardslot) |
| 3 | replace_count | uint32 |

## Mail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mail_id | uint32 |
| 2 | state | uint32 |
| 3 | take_attachment | bool |
| 4 | title | string |
| 5 | content | string |
| 6 | attachments | [RewardSlot](#rewardslot) |
| 7 | create_time | uint32 |
| 8 | expire_time | uint32 |
| 9 | reference_id | uint32 |

## AchievementProgress

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | counter | uint32 |
| 3 | achieved | bool |
| 4 | date | uint32 |

## AccountStatisticByGameMode

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mode | uint32 |
| 2 | game_count_sum | uint32 |
| 3 | game_final_position | uint32 |
| 4 | fly_count | uint32 |
| 5 | gold_earn_sum | [float](#float) |
| 6 | round_count_sum | uint32 |
| 7 | dadian_sum | [float](#float) |
| 8 | round_end | [RoundEndData](#roundenddata) |
| 9 | ming_count_sum | uint32 |
| 10 | liqi_count_sum | uint32 |
| 11 | xun_count_sum | uint32 |
| 12 | highest_lianzhuang | uint32 |
| 13 | score_earn_sum | uint32 |
| 14 | rank_score | [RankScore](#rankscore) |

## AccountStatisticByFan

| N | Field name | Field type |
| --- | --- | --- |
| 1 | fan_id | uint32 |
| 2 | sum | uint32 |

## AccountFanAchieved

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mahjong_category | uint32 |
| 2 | fan | [AccountStatisticByFan](#accountstatisticbyfan) |
| 3 | liujumanguan | uint32 |

## AccountDetailStatistic

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_mode | [AccountStatisticByGameMode](#accountstatisticbygamemode) |
| 2 | fan | [AccountStatisticByFan](#accountstatisticbyfan) |
| 3 | liujumanguan | uint32 |
| 4 | fan_achieved | [AccountFanAchieved](#accountfanachieved) |

## AccountDetailStatisticByCategory

| N | Field name | Field type |
| --- | --- | --- |
| 1 | category | uint32 |
| 2 | detail_statistic | [AccountDetailStatistic](#accountdetailstatistic) |

## AccountDetailStatisticV2

| N | Field name | Field type |
| --- | --- | --- |
| 1 | friend_room_statistic | [AccountDetailStatistic](#accountdetailstatistic) |
| 2 | rank_statistic | [RankStatistic](#rankstatistic) |
| 3 | customized_contest_statistic | [CustomizedContestStatistic](#customizedconteststatistic) |
| 4 | leisure_match_statistic | [AccountDetailStatistic](#accountdetailstatistic) |

## AccountShiLian

| N | Field name | Field type |
| --- | --- | --- |
| 1 | step | uint32 |
| 2 | state | uint32 |

## ClientDeviceInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | device_type | string |
| 2 | os | string |
| 3 | os_version | string |
| 4 | browser | string |

## GamePlayerState

## Announcement

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | title | string |
| 3 | content | string |

## TaskProgress

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | counter | uint32 |
| 3 | achieved | bool |
| 4 | rewarded | bool |

## GameConfig

| N | Field name | Field type |
| --- | --- | --- |
| 1 | category | uint32 |
| 2 | mode | [GameMode](#gamemode) |
| 3 | meta | [GameMetaData](#gamemetadata) |

## AccountActiveState

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | login_time | uint32 |
| 3 | logout_time | uint32 |
| 4 | is_online | bool |
| 5 | playing | [AccountPlayingGame](#accountplayinggame) |

## Friend

| N | Field name | Field type |
| --- | --- | --- |
| 1 | base | [PlayerBaseView](#playerbaseview) |
| 2 | state | [AccountActiveState](#accountactivestate) |

## GameLiveUnit

| N | Field name | Field type |
| --- | --- | --- |
| 1 | timestamp | uint32 |
| 2 | action_category | uint32 |
| 3 | action_data | [bytes](#bytes) |

## GameLiveSegment

| N | Field name | Field type |
| --- | --- | --- |
| 1 | actions | [GameLiveUnit](#gameliveunit) |

## GameLiveSegmentUri

| N | Field name | Field type |
| --- | --- | --- |
| 1 | segment_id | uint32 |
| 2 | segment_uri | string |

## GameLiveHead

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid | string |
| 2 | start_time | uint32 |
| 3 | game_config | [GameConfig](#gameconfig) |
| 4 | players | [PlayerGameView](#playergameview) |
| 5 | seat_list | uint32 |

## GameNewRoundState

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat_states | uint32 |

## GameEndAction

| N | Field name | Field type |
| --- | --- | --- |
| 1 | state | uint32 |

## GameNoopAction

No fields

## CommentItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | comment_id | uint32 |
| 2 | timestamp | uint32 |
| 3 | commenter | [PlayerBaseView](#playerbaseview) |
| 4 | content | string |
| 5 | is_banned | uint32 |

## RollingNotice

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | content | string |
| 3 | start_time | uint32 |
| 4 | end_time | uint32 |
| 5 | repeat_interval | uint32 |

## BillingGoods

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | string |
| 2 | name | string |
| 3 | desc | string |
| 4 | icon | string |
| 5 | resource_id | uint32 |
| 6 | resource_count | uint32 |

## BillShortcut

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | count | uint32 |
| 3 | dealPrice | uint32 |

## BillingProduct

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods | [BillingGoods](#billinggoods) |
| 2 | currency_code | string |
| 3 | currency_price | uint32 |
| 4 | sort_weight | uint32 |

## Character

| N | Field name | Field type |
| --- | --- | --- |
| 1 | charid | uint32 |
| 2 | level | uint32 |
| 3 | exp | uint32 |
| 4 | views | [ViewSlot](#viewslot) |
| 5 | skin | uint32 |
| 6 | is_upgraded | bool |
| 7 | extra_emoji | uint32 |

## BuyRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | count | uint32 |

## ZHPShop

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods | uint32 |
| 2 | buy_records | [BuyRecord](#buyrecord) |
| 3 | free_refresh | [RefreshCount](#refreshcount) |
| 4 | cost_refresh | [RefreshCount](#refreshcount) |

## MonthTicketInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | end_time | uint32 |
| 3 | last_pay_time | uint32 |

## ShopInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | zhp | [ZHPShop](#zhpshop) |
| 2 | buy_records | [BuyRecord](#buyrecord) |
| 3 | last_refresh_time | uint32 |

## ChangeNicknameRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | from | string |
| 2 | to | string |
| 3 | time | uint32 |

## ServerSettings

| N | Field name | Field type |
| --- | --- | --- |
| 3 | payment_setting | [PaymentSetting](#paymentsetting) |

## PaymentSetting

| N | Field name | Field type |
| --- | --- | --- |
| 1 | open_payment | uint32 |
| 2 | payment_info_show_type | uint32 |
| 3 | payment_info | string |
| 4 | wechat | [WechatData](#wechatdata) |
| 5 | alipay | [AlipayData](#alipaydata) |

## AccountSetting

| N | Field name | Field type |
| --- | --- | --- |
| 1 | key | uint32 |
| 2 | value | uint32 |

## ChestData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | chest_id | uint32 |
| 2 | total_open_count | uint32 |
| 3 | consume_count | uint32 |
| 4 | face_black_count | uint32 |

## ChestDataV2

| N | Field name | Field type |
| --- | --- | --- |
| 1 | chest_id | uint32 |
| 2 | total_open_count | uint32 |
| 3 | face_black_count | uint32 |

## FaithData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | faith_id | uint32 |
| 2 | total_open_count | uint32 |
| 3 | consume_count | uint32 |
| 4 | modify_count | int32 |

## CustomizedContestBase

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | contest_id | uint32 |
| 3 | contest_name | string |
| 4 | state | uint32 |
| 5 | creator_id | uint32 |
| 6 | create_time | uint32 |
| 7 | start_time | uint32 |
| 8 | finish_time | uint32 |
| 9 | open | bool |
| 10 | contest_type | uint32 |

## CustomizedContestExtend

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | public_notice | string |

## CustomizedContestAbstract

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | contest_id | uint32 |
| 3 | contest_name | string |
| 4 | state | uint32 |
| 5 | creator_id | uint32 |
| 6 | create_time | uint32 |
| 7 | start_time | uint32 |
| 8 | finish_time | uint32 |
| 9 | open | bool |
| 10 | public_notice | string |

## CustomizedContestDetail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | contest_id | uint32 |
| 3 | contest_name | string |
| 4 | state | uint32 |
| 5 | creator_id | uint32 |
| 6 | create_time | uint32 |
| 7 | start_time | uint32 |
| 8 | finish_time | uint32 |
| 9 | open | bool |
| 10 | rank_rule | uint32 |
| 11 | game_mode | [GameMode](#gamemode) |
| 12 | private_notice | string |
| 13 | observer_switch | uint32 |

## CustomizedContestPlayerReport

| N | Field name | Field type |
| --- | --- | --- |
| 1 | rank_rule | uint32 |
| 2 | rank | uint32 |
| 3 | point | int32 |
| 4 | game_ranks | uint32 |
| 5 | total_game_count | uint32 |

## RecordGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid | string |
| 2 | start_time | uint32 |
| 3 | end_time | uint32 |
| 5 | config | [GameConfig](#gameconfig) |
| 11 | accounts | [AccountInfo](#accountinfo) |
| 12 | result | [GameEndResult](#gameendresult) |

## CustomizedContestGameStart

| N | Field name | Field type |
| --- | --- | --- |
| 1 | players | [Item](#item) |

## CustomizedContestGameEnd

| N | Field name | Field type |
| --- | --- | --- |
| 1 | players | [Item](#item) |

## Activity

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_id | uint32 |
| 2 | start_time | uint32 |
| 3 | end_time | uint32 |
| 4 | type | string |

## ExchangeRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | exchange_id | uint32 |
| 2 | count | uint32 |

## ActivityAccumulatedPointData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_id | uint32 |
| 2 | point | int32 |
| 3 | gained_reward_list | uint32 |

## ActivityRankPointData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | leaderboard_id | uint32 |
| 2 | point | int32 |
| 3 | gained_reward | bool |
| 4 | gainable_time | uint32 |

## GameRoundHuData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | hupai | [HuPai](#hupai) |
| 2 | fans | [Fan](#fan) |
| 3 | score | uint32 |
| 4 | xun | uint32 |
| 5 | title_id | uint32 |
| 6 | fan_sum | uint32 |
| 7 | fu_sum | uint32 |
| 8 | yakuman_count | uint32 |
| 9 | biao_dora_count | uint32 |
| 10 | red_dora_count | uint32 |
| 11 | li_dora_count | uint32 |
| 12 | babei_count | uint32 |
| 13 | xuan_shang_count | uint32 |

## GameRoundPlayerResult

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | hands | string |
| 3 | ming | string |
| 4 | liqi_type | uint32 |
| 5 | is_fulu | bool |
| 6 | is_liujumanguan | bool |
| 7 | lian_zhuang | uint32 |
| 8 | hu | [GameRoundHuData](#gameroundhudata) |

## GameRoundPlayer

| N | Field name | Field type |
| --- | --- | --- |
| 1 | score | int32 |
| 2 | rank | uint32 |
| 3 | result | [GameRoundPlayerResult](#gameroundplayerresult) |

## GameRoundSnapshot

| N | Field name | Field type |
| --- | --- | --- |
| 1 | ju | uint32 |
| 2 | ben | uint32 |
| 3 | players | [GameRoundPlayer](#gameroundplayer) |

## GameFinalSnapshot

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid | string |
| 2 | state | uint32 |
| 3 | category | uint32 |
| 4 | mode | [GameMode](#gamemode) |
| 5 | meta | [GameMetaData](#gamemetadata) |
| 6 | calculate_param | [CalculateParam](#calculateparam) |
| 7 | create_time | uint32 |
| 8 | start_time | uint32 |
| 9 | finish_time | uint32 |
| 10 | seats | [GameSeat](#gameseat) |
| 11 | rounds | [GameRoundSnapshot](#gameroundsnapshot) |
| 12 | account_views | [PlayerGameView](#playergameview) |
| 13 | final_players | [FinalPlayer](#finalplayer) |
| 14 | afk_info | [AFKInfo](#afkinfo) |

## RecordCollectedData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid | string |
| 2 | remarks | string |
| 3 | start_time | uint32 |
| 4 | end_time | uint32 |

## ContestDetailRule

| N | Field name | Field type |
| --- | --- | --- |
| 5 | init_point | uint32 |
| 6 | fandian | uint32 |
| 7 | can_jifei | bool |
| 8 | tianbian_value | uint32 |
| 9 | liqibang_value | uint32 |
| 10 | changbang_value | uint32 |
| 11 | noting_fafu_1 | uint32 |
| 12 | noting_fafu_2 | uint32 |
| 13 | noting_fafu_3 | uint32 |
| 14 | have_liujumanguan | bool |
| 15 | have_qieshangmanguan | bool |
| 16 | have_biao_dora | bool |
| 17 | have_gang_biao_dora | bool |
| 18 | ming_dora_immediately_open | bool |
| 19 | have_li_dora | bool |
| 20 | have_gang_li_dora | bool |
| 21 | have_sifenglianda | bool |
| 22 | have_sigangsanle | bool |
| 23 | have_sijializhi | bool |
| 24 | have_jiuzhongjiupai | bool |
| 25 | have_sanjiahele | bool |
| 26 | have_toutiao | bool |
| 27 | have_helelianzhuang | bool |
| 28 | have_helezhongju | bool |
| 29 | have_tingpailianzhuang | bool |
| 30 | have_tingpaizhongju | bool |
| 31 | have_yifa | bool |
| 32 | have_nanruxiru | bool |
| 33 | jingsuanyuandian | uint32 |
| 34 | shunweima_2 | int32 |
| 35 | shunweima_3 | int32 |
| 36 | shunweima_4 | int32 |
| 37 | bianjietishi | bool |
| 38 | ai_level | uint32 |
| 39 | have_zimosun | bool |
| 40 | disable_multi_yukaman | bool |
| 41 | guyi_mode | uint32 |

## ContestDetailRuleV2

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_rule | [ContestDetailRule](#contestdetailrule) |
| 2 | extra_rule | [ExtraRule](#extrarule) |

## GameRuleSetting

| N | Field name | Field type |
| --- | --- | --- |
| 1 | round_type | uint32 |
| 2 | shiduan | bool |
| 3 | dora_count | uint32 |
| 4 | thinking_type | uint32 |
| 5 | use_detail_rule | bool |
| 6 | detail_rule_v2 | [ContestDetailRuleV2](#contestdetailrulev2) |

## Lobby

* fetchConnectionInfo([ResConnectionInfo](#resconnectioninfo) return [ReqCommon](#reqcommon)
* signup([ResSignupAccount](#ressignupaccount) return [ReqSignupAccount](#reqsignupaccount)
* login([ResLogin](#reslogin) return [ReqLogin](#reqlogin)
* emailLogin([ResLogin](#reslogin) return [ReqEmailLogin](#reqemaillogin)
* oauth2Auth([ResOauth2Auth](#resoauth2auth) return [ReqOauth2Auth](#reqoauth2auth)
* oauth2Check([ResOauth2Check](#resoauth2check) return [ReqOauth2Check](#reqoauth2check)
* oauth2Signup([ResOauth2Signup](#resoauth2signup) return [ReqOauth2Signup](#reqoauth2signup)
* oauth2Login([ResLogin](#reslogin) return [ReqOauth2Login](#reqoauth2login)
* dmmPreLogin([ResDMMPreLogin](#resdmmprelogin) return [ReqDMMPreLogin](#reqdmmprelogin)
* createPhoneVerifyCode([ResCommon](#rescommon) return [ReqCreatePhoneVerifyCode](#reqcreatephoneverifycode)
* createEmailVerifyCode([ResCommon](#rescommon) return [ReqCreateEmailVerifyCode](#reqcreateemailverifycode)
* verfifyCodeForSecure([ResVerfiyCodeForSecure](#resverfiycodeforsecure) return [ReqVerifyCodeForSecure](#reqverifycodeforsecure)
* bindPhoneNumber([ResCommon](#rescommon) return [ReqBindPhoneNumber](#reqbindphonenumber)
* unbindPhoneNumber([ResCommon](#rescommon) return [ReqUnbindPhoneNumber](#requnbindphonenumber)
* fetchPhoneLoginBind([ResFetchPhoneLoginBind](#resfetchphoneloginbind) return [ReqCommon](#reqcommon)
* createPhoneLoginBind([ResCommon](#rescommon) return [ReqCreatePhoneLoginBind](#reqcreatephoneloginbind)
* bindEmail([ResCommon](#rescommon) return [ReqBindEmail](#reqbindemail)
* modifyPassword([ResCommon](#rescommon) return [ReqModifyPassword](#reqmodifypassword)
* bindAccount([ResCommon](#rescommon) return [ReqBindAccount](#reqbindaccount)
* logout([ResLogout](#reslogout) return [ReqLogout](#reqlogout)
* heatbeat([ResCommon](#rescommon) return [ReqHeatBeat](#reqheatbeat)
* loginBeat([ResCommon](#rescommon) return [ReqLoginBeat](#reqloginbeat)
* createNickname([ResCommon](#rescommon) return [ReqCreateNickname](#reqcreatenickname)
* modifyNickname([ResCommon](#rescommon) return [ReqModifyNickname](#reqmodifynickname)
* modifyBirthday([ResCommon](#rescommon) return [ReqModifyBirthday](#reqmodifybirthday)
* fetchRoom([ResSelfRoom](#resselfroom) return [ReqCommon](#reqcommon)
* createRoom([ResCreateRoom](#rescreateroom) return [ReqCreateRoom](#reqcreateroom)
* joinRoom([ResJoinRoom](#resjoinroom) return [ReqJoinRoom](#reqjoinroom)
* leaveRoom([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* readyPlay([ResCommon](#rescommon) return [ReqRoomReady](#reqroomready)
* dressingStatus([ResCommon](#rescommon) return [ReqRoomDressing](#reqroomdressing)
* startRoom([ResCommon](#rescommon) return [ReqRoomStart](#reqroomstart)
* kickPlayer([ResCommon](#rescommon) return [ReqRoomKick](#reqroomkick)
* modifyRoom([ResCommon](#rescommon) return [ReqModifyRoom](#reqmodifyroom)
* matchGame([ResCommon](#rescommon) return [ReqJoinMatchQueue](#reqjoinmatchqueue)
* cancelMatch([ResCommon](#rescommon) return [ReqCancelMatchQueue](#reqcancelmatchqueue)
* fetchAccountInfo([ResAccountInfo](#resaccountinfo) return [ReqAccountInfo](#reqaccountinfo)
* changeAvatar([ResCommon](#rescommon) return [ReqChangeAvatar](#reqchangeavatar)
* fetchAccountStatisticInfo([ResAccountStatisticInfo](#resaccountstatisticinfo) return [ReqAccountStatisticInfo](#reqaccountstatisticinfo)
* fetchAccountCharacterInfo([ResAccountCharacterInfo](#resaccountcharacterinfo) return [ReqCommon](#reqcommon)
* shopPurchase([ResShopPurchase](#resshoppurchase) return [ReqShopPurchase](#reqshoppurchase)
* fetchGameRecord([ResGameRecord](#resgamerecord) return [ReqGameRecord](#reqgamerecord)
* fetchGameRecordList([ResGameRecordList](#resgamerecordlist) return [ReqGameRecordList](#reqgamerecordlist)
* fetchCollectedGameRecordList([ResCollectedGameRecordList](#rescollectedgamerecordlist) return [ReqCommon](#reqcommon)
* fetchGameRecordsDetail([ResGameRecordsDetail](#resgamerecordsdetail) return [ReqGameRecordsDetail](#reqgamerecordsdetail)
* addCollectedGameRecord([ResAddCollectedGameRecord](#resaddcollectedgamerecord) return [ReqAddCollectedGameRecord](#reqaddcollectedgamerecord)
* removeCollectedGameRecord([ResRemoveCollectedGameRecord](#resremovecollectedgamerecord) return [ReqRemoveCollectedGameRecord](#reqremovecollectedgamerecord)
* changeCollectedGameRecordRemarks([ResChangeCollectedGameRecordRemarks](#reschangecollectedgamerecordremarks) return [ReqChangeCollectedGameRecordRemarks](#reqchangecollectedgamerecordremarks)
* fetchLevelLeaderboard([ResLevelLeaderboard](#reslevelleaderboard) return [ReqLevelLeaderboard](#reqlevelleaderboard)
* fetchMultiAccountBrief([ResMultiAccountBrief](#resmultiaccountbrief) return [ReqMultiAccountId](#reqmultiaccountid)
* fetchFriendList([ResFriendList](#resfriendlist) return [ReqCommon](#reqcommon)
* fetchFriendApplyList([ResFriendApplyList](#resfriendapplylist) return [ReqCommon](#reqcommon)
* applyFriend([ResCommon](#rescommon) return [ReqApplyFriend](#reqapplyfriend)
* handleFriendApply([ResCommon](#rescommon) return [ReqHandleFriendApply](#reqhandlefriendapply)
* removeFriend([ResCommon](#rescommon) return [ReqRemoveFriend](#reqremovefriend)
* searchAccountById([ResSearchAccountById](#ressearchaccountbyid) return [ReqSearchAccountById](#reqsearchaccountbyid)
* searchAccountByPattern([ResSearchAccountByPattern](#ressearchaccountbypattern) return [ReqSearchAccountByPattern](#reqsearchaccountbypattern)
* fetchAccountState([ResAccountStates](#resaccountstates) return [ReqAccountList](#reqaccountlist)
* fetchBagInfo([ResBagInfo](#resbaginfo) return [ReqCommon](#reqcommon)
* useBagItem([ResCommon](#rescommon) return [ReqUseBagItem](#requsebagitem)
* openManualItem([ResCommon](#rescommon) return [ReqOpenManualItem](#reqopenmanualitem)
* openRandomRewardItem([ResOpenRandomRewardItem](#resopenrandomrewarditem) return [ReqOpenRandomRewardItem](#reqopenrandomrewarditem)
* composeShard([ResCommon](#rescommon) return [ReqComposeShard](#reqcomposeshard)
* fetchAnnouncement([ResAnnouncement](#resannouncement) return [ReqCommon](#reqcommon)
* readAnnouncement([ResCommon](#rescommon) return [ReqReadAnnouncement](#reqreadannouncement)
* fetchMailInfo([ResMailInfo](#resmailinfo) return [ReqCommon](#reqcommon)
* readMail([ResCommon](#rescommon) return [ReqReadMail](#reqreadmail)
* deleteMail([ResCommon](#rescommon) return [ReqDeleteMail](#reqdeletemail)
* takeAttachmentFromMail([ResCommon](#rescommon) return [ReqTakeAttachment](#reqtakeattachment)
* fetchAchievement([ResAchievement](#resachievement) return [ReqCommon](#reqcommon)
* buyShiLian([ResCommon](#rescommon) return [ReqBuyShiLian](#reqbuyshilian)
* matchShiLian([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* goNextShiLian([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* updateClientValue([ResCommon](#rescommon) return [ReqUpdateClientValue](#requpdateclientvalue)
* fetchClientValue([ResClientValue](#resclientvalue) return [ReqCommon](#reqcommon)
* clientMessage([ResCommon](#rescommon) return [ReqClientMessage](#reqclientmessage)
* fetchCurrentMatchInfo([ResCurrentMatchInfo](#rescurrentmatchinfo) return [ReqCurrentMatchInfo](#reqcurrentmatchinfo)
* userComplain([ResCommon](#rescommon) return [ReqUserComplain](#requsercomplain)
* fetchReviveCoinInfo([ResReviveCoinInfo](#resrevivecoininfo) return [ReqCommon](#reqcommon)
* gainReviveCoin([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* fetchDailyTask([ResDailyTask](#resdailytask) return [ReqCommon](#reqcommon)
* refreshDailyTask([ResRefreshDailyTask](#resrefreshdailytask) return [ReqRefreshDailyTask](#reqrefreshdailytask)
* useGiftCode([ResUseGiftCode](#resusegiftcode) return [ReqUseGiftCode](#requsegiftcode)
* fetchTitleList([ResTitleList](#restitlelist) return [ReqCommon](#reqcommon)
* useTitle([ResCommon](#rescommon) return [ReqUseTitle](#requsetitle)
* sendClientMessage([ResCommon](#rescommon) return [ReqSendClientMessage](#reqsendclientmessage)
* fetchGameLiveInfo([ResGameLiveInfo](#resgameliveinfo) return [ReqGameLiveInfo](#reqgameliveinfo)
* fetchGameLiveLeftSegment([ResGameLiveLeftSegment](#resgameliveleftsegment) return [ReqGameLiveLeftSegment](#reqgameliveleftsegment)
* fetchGameLiveList([ResGameLiveList](#resgamelivelist) return [ReqGameLiveList](#reqgamelivelist)
* fetchCommentSetting([ResCommentSetting](#rescommentsetting) return [ReqCommon](#reqcommon)
* updateCommentSetting([ResCommon](#rescommon) return [ReqUpdateCommentSetting](#requpdatecommentsetting)
* fetchCommentList([ResFetchCommentList](#resfetchcommentlist) return [ReqFetchCommentList](#reqfetchcommentlist)
* fetchCommentContent([ResFetchCommentContent](#resfetchcommentcontent) return [ReqFetchCommentContent](#reqfetchcommentcontent)
* leaveComment([ResCommon](#rescommon) return [ReqLeaveComment](#reqleavecomment)
* deleteComment([ResCommon](#rescommon) return [ReqDeleteComment](#reqdeletecomment)
* updateReadComment([ResCommon](#rescommon) return [ReqUpdateReadComment](#requpdatereadcomment)
* fetchRollingNotice([ReqRollingNotice](#reqrollingnotice) return [ReqCommon](#reqcommon)
* fetchServerTime([ResServerTime](#resservertime) return [ReqCommon](#reqcommon)
* fetchPlatformProducts([ResPlatformBillingProducts](#resplatformbillingproducts) return [ReqPlatformBillingProducts](#reqplatformbillingproducts)
* cancelGooglePlayOrder([ResCommon](#rescommon) return [ReqCancelGooglePlayOrder](#reqcancelgoogleplayorder)
* openChest([ResOpenChest](#resopenchest) return [ReqOpenChest](#reqopenchest)
* buyFromChestShop([ResBuyFromChestShop](#resbuyfromchestshop) return [ReqBuyFromChestShop](#reqbuyfromchestshop)
* fetchDailySignInInfo([ResDailySignInInfo](#resdailysignininfo) return [ReqCommon](#reqcommon)
* doDailySignIn([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* doActivitySignIn([ResDoActivitySignIn](#resdoactivitysignin) return [ReqDoActivitySignIn](#reqdoactivitysignin)
* fetchCharacterInfo([ResCharacterInfo](#rescharacterinfo) return [ReqCommon](#reqcommon)
* changeMainCharacter([ResCommon](#rescommon) return [ReqChangeMainCharacter](#reqchangemaincharacter)
* changeCharacterSkin([ResCommon](#rescommon) return [ReqChangeCharacterSkin](#reqchangecharacterskin)
* changeCharacterView([ResCommon](#rescommon) return [ReqChangeCharacterView](#reqchangecharacterview)
* sendGiftToCharacter([ResSendGiftToCharacter](#ressendgifttocharacter) return [ReqSendGiftToCharacter](#reqsendgifttocharacter)
* sellItem([ResCommon](#rescommon) return [ReqSellItem](#reqsellitem)
* fetchCommonView([ResCommonView](#rescommonview) return [ReqCommon](#reqcommon)
* changeCommonView([ResCommon](#rescommon) return [ReqChangeCommonView](#reqchangecommonview)
* saveCommonViews([ResCommon](#rescommon) return [ReqSaveCommonViews](#reqsavecommonviews)
* fetchCommonViews([ResCommonViews](#rescommonviews) return [ReqCommonViews](#reqcommonviews)
* fetchAllCommonViews([ResAllcommonViews](#resallcommonviews) return [ReqCommon](#reqcommon)
* useCommonView([ResCommon](#rescommon) return [ReqUseCommonView](#requsecommonview)
* upgradeCharacter([ResUpgradeCharacter](#resupgradecharacter) return [ReqUpgradeCharacter](#requpgradecharacter)
* addFinishedEnding([ResCommon](#rescommon) return [ReqFinishedEnding](#reqfinishedending)
* receiveEndingReward([ResCommon](#rescommon) return [ReqFinishedEnding](#reqfinishedending)
* gameMasterCommand([ResCommon](#rescommon) return [ReqGMCommand](#reqgmcommand)
* fetchShopInfo([ResShopInfo](#resshopinfo) return [ReqCommon](#reqcommon)
* buyFromShop([ResBuyFromShop](#resbuyfromshop) return [ReqBuyFromShop](#reqbuyfromshop)
* buyFromZHP([ResCommon](#rescommon) return [ReqBuyFromZHP](#reqbuyfromzhp)
* refreshZHPShop([ResRefreshZHPShop](#resrefreshzhpshop) return [ReqReshZHPShop](#reqreshzhpshop)
* fetchMonthTicketInfo([ResMonthTicketInfo](#resmonthticketinfo) return [ReqCommon](#reqcommon)
* payMonthTicket([ResPayMonthTicket](#respaymonthticket) return [ReqPayMonthTicket](#reqpaymonthticket)
* exchangeCurrency([ResCommon](#rescommon) return [ReqExchangeCurrency](#reqexchangecurrency)
* exchangeChestStone([ResCommon](#rescommon) return [ReqExchangeCurrency](#reqexchangecurrency)
* exchangeDiamond([ResCommon](#rescommon) return [ReqExchangeCurrency](#reqexchangecurrency)
* fetchServerSettings([ResServerSettings](#resserversettings) return [ReqCommon](#reqcommon)
* fetchAccountSettings([ResAccountSettings](#resaccountsettings) return [ReqCommon](#reqcommon)
* updateAccountSettings([ResCommon](#rescommon) return [ReqUpdateAccountSettings](#requpdateaccountsettings)
* fetchModNicknameTime([ResModNicknameTime](#resmodnicknametime) return [ReqCommon](#reqcommon)
* createWechatNativeOrder([ResCreateWechatNativeOrder](#rescreatewechatnativeorder) return [ReqCreateWechatNativeOrder](#reqcreatewechatnativeorder)
* createWechatAppOrder([ResCreateWechatAppOrder](#rescreatewechatapporder) return [ReqCreateWechatAppOrder](#reqcreatewechatapporder)
* createAlipayOrder([ResCreateAlipayOrder](#rescreatealipayorder) return [ReqCreateAlipayOrder](#reqcreatealipayorder)
* createAlipayScanOrder([ResCreateAlipayScanOrder](#rescreatealipayscanorder) return [ReqCreateAlipayScanOrder](#reqcreatealipayscanorder)
* createAlipayAppOrder([ResCreateAlipayAppOrder](#rescreatealipayapporder) return [ReqCreateAlipayAppOrder](#reqcreatealipayapporder)
* createJPCreditCardOrder([ResCreateJPCreditCardOrder](#rescreatejpcreditcardorder) return [ReqCreateJPCreditCardOrder](#reqcreatejpcreditcardorder)
* createJPPaypalOrder([ResCreateJPPaypalOrder](#rescreatejppaypalorder) return [ReqCreateJPPaypalOrder](#reqcreatejppaypalorder)
* createJPAuOrder([ResCreateJPAuOrder](#rescreatejpauorder) return [ReqCreateJPAuOrder](#reqcreatejpauorder)
* createJPDocomoOrder([ResCreateJPDocomoOrder](#rescreatejpdocomoorder) return [ReqCreateJPDocomoOrder](#reqcreatejpdocomoorder)
* createJPWebMoneyOrder([ResCreateJPWebMoneyOrder](#rescreatejpwebmoneyorder) return [ReqCreateJPWebMoneyOrder](#reqcreatejpwebmoneyorder)
* createJPSoftbankOrder([ResCreateJPSoftbankOrder](#rescreatejpsoftbankorder) return [ReqCreateJPSoftbankOrder](#reqcreatejpsoftbankorder)
* createENPaypalOrder([ResCreateENPaypalOrder](#rescreateenpaypalorder) return [ReqCreateENPaypalOrder](#reqcreateenpaypalorder)
* createENMasterCardOrder([ResCreateENMasterCardOrder](#rescreateenmastercardorder) return [ReqCreateENMasterCardOrder](#reqcreateenmastercardorder)
* createENVisaOrder([ResCreateENVisaOrder](#rescreateenvisaorder) return [ReqCreateENVisaOrder](#reqcreateenvisaorder)
* createENJCBOrder([ResCreateENJCBOrder](#rescreateenjcborder) return [ReqCreateENJCBOrder](#reqcreateenjcborder)
* createENAlipayOrder([ResCreateENAlipayOrder](#rescreateenalipayorder) return [ReqCreateENAlipayOrder](#reqcreateenalipayorder)
* createDMMOrder([ResCreateDmmOrder](#rescreatedmmorder) return [ReqCreateDMMOrder](#reqcreatedmmorder)
* createIAPOrder([ResCreateIAPOrder](#rescreateiaporder) return [ReqCreateIAPOrder](#reqcreateiaporder)
* createMyCardAndroidOrder([ResCreateMyCardOrder](#rescreatemycardorder) return [ReqCreateMyCardOrder](#reqcreatemycardorder)
* createMyCardWebOrder([ResCreateMyCardOrder](#rescreatemycardorder) return [ReqCreateMyCardOrder](#reqcreatemycardorder)
* verifyMyCardOrder([ResCommon](#rescommon) return [ReqVerifyMyCardOrder](#reqverifymycardorder)
* verificationIAPOrder([ResVerificationIAPOrder](#resverificationiaporder) return [ReqVerificationIAPOrder](#reqverificationiaporder)
* createYostarSDKOrder([ResCreateYostarOrder](#rescreateyostarorder) return [ReqCreateYostarOrder](#reqcreateyostarorder)
* createBillingOrder([ResCreateBillingOrder](#rescreatebillingorder) return [ReqCreateBillingOrder](#reqcreatebillingorder)
* solveGooglePlayOrder([ResCommon](#rescommon) return [ReqSolveGooglePlayOrder](#reqsolvegoogleplayorder)
* solveGooglePayOrderV3([ResCommon](#rescommon) return [ReqSolveGooglePlayOrderV3](#reqsolvegoogleplayorderv3)
* fetchMisc([ResMisc](#resmisc) return [ReqCommon](#reqcommon)
* modifySignature([ResCommon](#rescommon) return [ReqModifySignature](#reqmodifysignature)
* fetchIDCardInfo([ResIDCardInfo](#residcardinfo) return [ReqCommon](#reqcommon)
* updateIDCardInfo([ResCommon](#rescommon) return [ReqUpdateIDCardInfo](#requpdateidcardinfo)
* fetchVipReward([ResVipReward](#resvipreward) return [ReqCommon](#reqcommon)
* gainVipReward([ResCommon](#rescommon) return [ReqGainVipReward](#reqgainvipreward)
* fetchCustomizedContestList([ResFetchCustomizedContestList](#resfetchcustomizedcontestlist) return [ReqFetchCustomizedContestList](#reqfetchcustomizedcontestlist)
* fetchCustomizedContestExtendInfo([ResFetchCustomizedContestExtendInfo](#resfetchcustomizedcontestextendinfo) return [ReqFetchCustomizedContestExtendInfo](#reqfetchcustomizedcontestextendinfo)
* fetchCustomizedContestAuthInfo([ResFetchCustomizedContestAuthInfo](#resfetchcustomizedcontestauthinfo) return [ReqFetchCustomizedContestAuthInfo](#reqfetchcustomizedcontestauthinfo)
* enterCustomizedContest([ResEnterCustomizedContest](#resentercustomizedcontest) return [ReqEnterCustomizedContest](#reqentercustomizedcontest)
* leaveCustomizedContest([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* fetchCustomizedContestOnlineInfo([ResFetchCustomizedContestOnlineInfo](#resfetchcustomizedcontestonlineinfo) return [ReqFetchCustomizedContestOnlineInfo](#reqfetchcustomizedcontestonlineinfo)
* fetchCustomizedContestByContestId([ResFetchCustomizedContestByContestId](#resfetchcustomizedcontestbycontestid) return [ReqFetchCustomizedContestByContestId](#reqfetchcustomizedcontestbycontestid)
* startCustomizedContest([ResCommon](#rescommon) return [ReqStartCustomizedContest](#reqstartcustomizedcontest)
* stopCustomizedContest([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* joinCustomizedContestChatRoom([ResJoinCustomizedContestChatRoom](#resjoincustomizedcontestchatroom) return [ReqJoinCustomizedContestChatRoom](#reqjoincustomizedcontestchatroom)
* leaveCustomizedContestChatRoom([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* sayChatMessage([ResCommon](#rescommon) return [ReqSayChatMessage](#reqsaychatmessage)
* fetchCustomizedContestGameRecords([ResFetchCustomizedContestGameRecords](#resfetchcustomizedcontestgamerecords) return [ReqFetchCustomizedContestGameRecords](#reqfetchcustomizedcontestgamerecords)
* fetchCustomizedContestGameLiveList([ResFetchCustomizedContestGameLiveList](#resfetchcustomizedcontestgamelivelist) return [ReqFetchCustomizedContestGameLiveList](#reqfetchcustomizedcontestgamelivelist)
* followCustomizedContest([ResCommon](#rescommon) return [ReqTargetCustomizedContest](#reqtargetcustomizedcontest)
* unfollowCustomizedContest([ResCommon](#rescommon) return [ReqTargetCustomizedContest](#reqtargetcustomizedcontest)
* fetchActivityList([ResActivityList](#resactivitylist) return [ReqCommon](#reqcommon)
* fetchAccountActivityData([ResAccountActivityData](#resaccountactivitydata) return [ReqCommon](#reqcommon)
* exchangeActivityItem([ResExchangeActivityItem](#resexchangeactivityitem) return [ReqExchangeActivityItem](#reqexchangeactivityitem)
* completeActivityTask([ResCommon](#rescommon) return [ReqCompleteActivityTask](#reqcompleteactivitytask)
* completeActivityFlipTask([ResCommon](#rescommon) return [ReqCompleteActivityTask](#reqcompleteactivitytask)
* completePeriodActivityTask([ResCommon](#rescommon) return [ReqCompleteActivityTask](#reqcompleteactivitytask)
* completeRandomActivityTask([ResCommon](#rescommon) return [ReqCompleteActivityTask](#reqcompleteactivitytask)
* receiveActivityFlipTask([ResReceiveActivityFlipTask](#resreceiveactivityfliptask) return [ReqReceiveActivityFlipTask](#reqreceiveactivityfliptask)
* fetchActivityFlipInfo([ResFetchActivityFlipInfo](#resfetchactivityflipinfo) return [ReqFetchActivityFlipInfo](#reqfetchactivityflipinfo)
* gainAccumulatedPointActivityReward([ResCommon](#rescommon) return [ReqGainAccumulatedPointActivityReward](#reqgainaccumulatedpointactivityreward)
* fetchRankPointLeaderboard([ResFetchRankPointLeaderboard](#resfetchrankpointleaderboard) return [ReqFetchRankPointLeaderboard](#reqfetchrankpointleaderboard)
* gainRankPointReward([ResCommon](#rescommon) return [ReqGainRankPointReward](#reqgainrankpointreward)
* richmanActivityNextMove([ResRichmanNextMove](#resrichmannextmove) return [ReqRichmanNextMove](#reqrichmannextmove)
* richmanAcitivitySpecialMove([ResRichmanNextMove](#resrichmannextmove) return [ReqRichmanSpecialMove](#reqrichmanspecialmove)
* richmanActivityChestInfo([ResRichmanChestInfo](#resrichmanchestinfo) return [ReqRichmanChestInfo](#reqrichmanchestinfo)
* createGameObserveAuth([ResCreateGameObserveAuth](#rescreategameobserveauth) return [ReqCreateGameObserveAuth](#reqcreategameobserveauth)
* refreshGameObserveAuth([ResRefreshGameObserveAuth](#resrefreshgameobserveauth) return [ReqRefreshGameObserveAuth](#reqrefreshgameobserveauth)
## ResConnectionInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | client_endpoint | [NetworkEndpoint](#networkendpoint) |

## ReqSignupAccount

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account | string |
| 2 | password | string |
| 3 | code | string |
| 4 | type | uint32 |

## ResSignupAccount

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ReqLogin

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account | string |
| 2 | password | string |
| 3 | reconnect | bool |
| 4 | device | [ClientDeviceInfo](#clientdeviceinfo) |
| 5 | random_key | string |
| 6 | client_version | string |
| 7 | gen_access_token | bool |
| 8 | currency_platforms | uint32 |
| 9 | type | uint32 |

## ResLogin

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | account_id | uint32 |
| 3 | account | [Account](#account) |
| 4 | game_info | [GameConnectInfo](#gameconnectinfo) |
| 5 | has_unread_announcement | bool |
| 6 | access_token | string |
| 7 | signup_time | uint32 |
| 8 | is_id_card_authed | bool |

## ReqEmailLogin

| N | Field name | Field type |
| --- | --- | --- |
| 1 | email | string |
| 2 | password | string |
| 3 | reconnect | bool |
| 4 | device | [ClientDeviceInfo](#clientdeviceinfo) |
| 5 | random_key | string |
| 6 | client_version | string |
| 7 | gen_access_token | bool |
| 8 | currency_platforms | uint32 |

## ReqBindAccount

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account | string |
| 2 | password | string |

## ReqCreatePhoneVerifyCode

| N | Field name | Field type |
| --- | --- | --- |
| 1 | phone | string |
| 2 | usage | uint32 |

## ReqCreateEmailVerifyCode

| N | Field name | Field type |
| --- | --- | --- |
| 1 | email | string |
| 2 | usage | uint32 |

## ReqVerifyCodeForSecure

| N | Field name | Field type |
| --- | --- | --- |
| 1 | code | string |
| 2 | operation | uint32 |

## ResVerfiyCodeForSecure

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | secure_token | string |

## ReqBindPhoneNumber

| N | Field name | Field type |
| --- | --- | --- |
| 1 | code | string |
| 2 | phone | string |
| 3 | password | string |
| 4 | multi_bind_version | bool |

## ReqUnbindPhoneNumber

| N | Field name | Field type |
| --- | --- | --- |
| 1 | code | string |
| 2 | phone | string |
| 3 | password | string |

## ResFetchPhoneLoginBind

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | phone_login | uint32 |

## ReqCreatePhoneLoginBind

| N | Field name | Field type |
| --- | --- | --- |
| 1 | password | string |

## ReqBindEmail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | email | string |
| 2 | code | string |
| 3 | password | string |

## ReqModifyPassword

| N | Field name | Field type |
| --- | --- | --- |
| 1 | new_password | string |
| 2 | old_password | string |
| 3 | secure_token | string |

## ReqOauth2Auth

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | code | string |
| 3 | uid | string |

## ResOauth2Auth

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | access_token | string |

## ReqOauth2Check

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | access_token | string |

## ResOauth2Check

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | has_account | bool |

## ReqOauth2Signup

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | access_token | string |
| 3 | email | string |
| 4 | advertise_str | string |

## ResOauth2Signup

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ReqOauth2Login

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | access_token | string |
| 3 | reconnect | bool |
| 4 | device | [ClientDeviceInfo](#clientdeviceinfo) |
| 5 | random_key | string |
| 6 | client_version | string |
| 8 | currency_platforms | uint32 |

## ReqDMMPreLogin

| N | Field name | Field type |
| --- | --- | --- |
| 1 | finish_url | string |

## ResDMMPreLogin

| N | Field name | Field type |
| --- | --- | --- |
| 1 | parameter | string |

## ReqLogout

No fields

## ResLogout

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ReqHeatBeat

| N | Field name | Field type |
| --- | --- | --- |
| 1 | no_operation_counter | uint32 |

## ReqLoginBeat

| N | Field name | Field type |
| --- | --- | --- |
| 1 | contract | string |

## ReqJoinMatchQueue

| N | Field name | Field type |
| --- | --- | --- |
| 1 | match_mode | uint32 |

## ReqCancelMatchQueue

| N | Field name | Field type |
| --- | --- | --- |
| 1 | match_mode | uint32 |

## ReqAccountInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |

## ResAccountInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | account | [Account](#account) |
| 3 | room | [Room](#room) |

## ReqCreateNickname

| N | Field name | Field type |
| --- | --- | --- |
| 1 | nickname | string |
| 2 | advertise_str | string |

## ReqModifyNickname

| N | Field name | Field type |
| --- | --- | --- |
| 1 | nickname | string |
| 2 | use_item_id | uint32 |

## ReqModifyBirthday

| N | Field name | Field type |
| --- | --- | --- |
| 1 | birthday | int32 |

## ResSelfRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | room | [Room](#room) |

## ReqCreateRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | player_count | uint32 |
| 2 | mode | [GameMode](#gamemode) |
| 3 | public_live | bool |

## ResCreateRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | room | [Room](#room) |

## ReqJoinRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | room_id | uint32 |

## ResJoinRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | room | [Room](#room) |

## ReqRoomReady

| N | Field name | Field type |
| --- | --- | --- |
| 1 | ready | bool |

## ReqRoomDressing

| N | Field name | Field type |
| --- | --- | --- |
| 1 | dressing | bool |

## ReqRoomStart

No fields

## ReqRoomKick

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |

## ReqModifyRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | robot_count | uint32 |

## ReqChangeAvatar

| N | Field name | Field type |
| --- | --- | --- |
| 1 | avatar_id | uint32 |

## ReqAccountStatisticInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |

## ResAccountStatisticInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | statistic_data | [AccountStatisticData](#accountstatisticdata) |
| 3 | detail_data | [AccountDetailStatisticV2](#accountdetailstatisticv2) |

## ResAccountCharacterInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unlock_list | uint32 |

## ReqShopPurchase

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | string |
| 2 | id | uint32 |

## ResShopPurchase

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | update | [AccountUpdate](#accountupdate) |

## ReqGameRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_uuid | string |

## ResGameRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 3 | head | [RecordGame](#recordgame) |
| 4 | data | [bytes](#bytes) |
| 5 | data_url | string |

## ReqGameRecordList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | start | uint32 |
| 2 | count | uint32 |
| 3 | type | uint32 |

## ResGameRecordList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | total_count | uint32 |
| 3 | record_list | [RecordGame](#recordgame) |

## ResCollectedGameRecordList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | record_list | [RecordCollectedData](#recordcollecteddata) |
| 3 | record_collect_limit | uint32 |

## ReqGameRecordsDetail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid_list | string |

## ResGameRecordsDetail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | record_list | [RecordGame](#recordgame) |

## ReqAddCollectedGameRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid | string |
| 2 | remarks | string |
| 3 | start_time | uint32 |
| 4 | end_time | uint32 |

## ResAddCollectedGameRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ReqRemoveCollectedGameRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid | string |

## ResRemoveCollectedGameRecord

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ReqChangeCollectedGameRecordRemarks

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uuid | string |
| 2 | remarks | string |

## ResChangeCollectedGameRecordRemarks

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ReqLevelLeaderboard

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |

## ResLevelLeaderboard

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | items | [Item](#item) |
| 3 | self_rank | uint32 |

## ReqMultiAccountId

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id_list | uint32 |

## ResMultiAccountBrief

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | players | [PlayerBaseView](#playerbaseview) |

## ResFriendList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | friends | [Friend](#friend) |
| 3 | friend_max_count | uint32 |

## ResFriendApplyList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | applies | [FriendApply](#friendapply) |

## ReqApplyFriend

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |

## ReqHandleFriendApply

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | method | uint32 |

## ReqRemoveFriend

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |

## ReqSearchAccountByPattern

| N | Field name | Field type |
| --- | --- | --- |
| 1 | search_next | bool |
| 2 | pattern | string |

## ResSearchAccountByPattern

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | is_finished | bool |
| 3 | match_accounts | uint32 |
| 4 | decode_id | uint32 |

## ReqAccountList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id_list | uint32 |

## ResAccountStates

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | states | [AccountActiveState](#accountactivestate) |

## ReqSearchAccountById

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |

## ResSearchAccountById

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | player | [PlayerBaseView](#playerbaseview) |

## ResBagInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | bag | [Bag](#bag) |

## ReqUseBagItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | item_id | uint32 |

## ReqOpenManualItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | item_id | uint32 |
| 2 | count | uint32 |
| 3 | select_id | uint32 |

## ReqOpenRandomRewardItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | item_id | uint32 |

## ResOpenRandomRewardItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | results | [OpenResult](#openresult) |

## ReqComposeShard

| N | Field name | Field type |
| --- | --- | --- |
| 1 | item_id | uint32 |

## ResAnnouncement

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | announcements | [Announcement](#announcement) |
| 3 | sort | uint32 |
| 4 | read_list | uint32 |

## ResMailInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | mails | [Mail](#mail) |

## ReqReadMail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mail_id | uint32 |

## ReqDeleteMail

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mail_id | uint32 |

## ReqTakeAttachment

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mail_id | uint32 |

## ResAchievement

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | progresses | [AchievementProgress](#achievementprogress) |

## ResTitleList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | title_list | uint32 |

## ReqUseTitle

| N | Field name | Field type |
| --- | --- | --- |
| 1 | title | uint32 |

## ReqBuyShiLian

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |

## ReqUpdateClientValue

| N | Field name | Field type |
| --- | --- | --- |
| 1 | key | uint32 |
| 2 | value | uint32 |

## ResClientValue

| N | Field name | Field type |
| --- | --- | --- |
| 1 | datas | [Value](#value) |
| 2 | recharged_count | uint32 |

## ReqClientMessage

| N | Field name | Field type |
| --- | --- | --- |
| 1 | timestamp | uint32 |
| 2 | message | string |

## ReqCurrentMatchInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mode_list | uint32 |

## ResCurrentMatchInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | matches | [CurrentMatchInfo](#currentmatchinfo) |

## ReqUserComplain

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | type | uint32 |

## ReqReadAnnouncement

| N | Field name | Field type |
| --- | --- | --- |
| 1 | announcement_id | uint32 |

## ResReviveCoinInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | has_gained | bool |

## ResDailyTask

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | progresses | [TaskProgress](#taskprogress) |
| 3 | has_refresh_count | bool |
| 4 | max_daily_task_count | uint32 |
| 5 | refresh_count | uint32 |

## ReqRefreshDailyTask

| N | Field name | Field type |
| --- | --- | --- |
| 1 | task_id | uint32 |

## ResRefreshDailyTask

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | progress | [TaskProgress](#taskprogress) |
| 3 | refresh_count | uint32 |

## ReqUseGiftCode

| N | Field name | Field type |
| --- | --- | --- |
| 1 | code | string |

## ResUseGiftCode

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 6 | rewards | [RewardSlot](#rewardslot) |

## ReqSendClientMessage

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | type | uint32 |
| 3 | content | string |

## ReqGameLiveInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_uuid | string |

## ResGameLiveInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | left_start_seconds | uint32 |
| 3 | live_head | [GameLiveHead](#gamelivehead) |
| 4 | segments | [GameLiveSegmentUri](#gamelivesegmenturi) |
| 5 | now_millisecond | uint32 |

## ReqGameLiveLeftSegment

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_uuid | string |
| 2 | last_segment_id | uint32 |

## ResGameLiveLeftSegment

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | live_state | uint32 |
| 4 | segments | [GameLiveSegmentUri](#gamelivesegmenturi) |
| 5 | now_millisecond | uint32 |
| 6 | segment_end_millisecond | uint32 |

## ReqGameLiveList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | filter_id | uint32 |

## ResGameLiveList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | live_list | [GameLiveHead](#gamelivehead) |

## ResCommentSetting

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | comment_allow | uint32 |

## ReqUpdateCommentSetting

| N | Field name | Field type |
| --- | --- | --- |
| 1 | comment_allow | uint32 |

## ReqFetchCommentList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |

## ResFetchCommentList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | comment_allow | uint32 |
| 3 | comment_id_list | uint32 |
| 4 | last_read_id | uint32 |

## ReqFetchCommentContent

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | comment_id_list | uint32 |

## ResFetchCommentContent

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | comments | [CommentItem](#commentitem) |

## ReqLeaveComment

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | content | string |

## ReqDeleteComment

| N | Field name | Field type |
| --- | --- | --- |
| 1 | target_id | uint32 |
| 2 | delete_list | uint32 |

## ReqUpdateReadComment

| N | Field name | Field type |
| --- | --- | --- |
| 1 | read_id | uint32 |

## ReqRollingNotice

| N | Field name | Field type |
| --- | --- | --- |
| 1 | notice | [RollingNotice](#rollingnotice) |

## ResServerTime

| N | Field name | Field type |
| --- | --- | --- |
| 1 | server_time | uint32 |

## ReqPlatformBillingProducts

| N | Field name | Field type |
| --- | --- | --- |
| 1 | shelves_id | uint32 |

## ResPlatformBillingProducts

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | products | [BillingProduct](#billingproduct) |

## ReqCreateBillingOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | payment_platform | uint32 |
| 3 | client_type | uint32 |
| 4 | account_id | uint32 |

## ResCreateBillingOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqSolveGooglePlayOrder

| N | Field name | Field type |
| --- | --- | --- |
| 2 | inapp_purchase_data | string |
| 3 | inapp_data_signature | string |

## ReqSolveGooglePlayOrderV3

| N | Field name | Field type |
| --- | --- | --- |
| 1 | order_id | string |
| 2 | transaction_id | string |
| 3 | token | string |
| 4 | account_id | uint32 |

## ReqCancelGooglePlayOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | order_id | string |

## ReqCreateWechatNativeOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | account_ip | string |

## ResCreateWechatNativeOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | qrcode_buffer | string |
| 3 | order_id | string |

## ReqCreateWechatAppOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | account_ip | string |

## ResCreateWechatAppOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | call_wechat_app_param | [CallWechatAppParam](#callwechatappparam) |

## ReqCreateAlipayOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | alipay_trade_type | string |
| 5 | return_url | string |

## ResCreateAlipayOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | alipay_url | string |

## ReqCreateAlipayScanOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |

## ResCreateAlipayScanOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | qrcode_buffer | string |
| 3 | order_id | string |
| 4 | qr_code | string |

## ReqCreateAlipayAppOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |

## ResCreateAlipayAppOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | alipay_url | string |

## ReqCreateJPCreditCardOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateJPCreditCardOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateJPPaypalOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateJPPaypalOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateJPAuOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateJPAuOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateJPDocomoOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateJPDocomoOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateJPWebMoneyOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateJPWebMoneyOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateJPSoftbankOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateJPSoftbankOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateYostarOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | order_type | uint32 |

## ResCreateYostarOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateENPaypalOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateENPaypalOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateENJCBOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateENJCBOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateENMasterCardOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateENMasterCardOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateENVisaOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateENVisaOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateENAlipayOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | return_url | string |
| 5 | access_token | string |

## ResCreateENAlipayOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqCreateDMMOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | account_id | uint32 |
| 3 | client_type | uint32 |

## ResCreateDmmOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |
| 3 | transaction_id | string |
| 4 | dmm_user_id | string |
| 5 | token | string |
| 6 | callback_url | string |
| 9 | request_time | string |
| 10 | dmm_app_id | string |

## ReqCreateIAPOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |
| 4 | access_token | string |

## ResCreateIAPOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | order_id | string |

## ReqVerificationIAPOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | order_id | string |
| 2 | transaction_id | string |
| 3 | receipt_data | string |
| 4 | account_id | uint32 |

## ResVerificationIAPOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |

## ReqCreateMyCardOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | client_type | uint32 |
| 3 | account_id | uint32 |

## ResCreateMyCardOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | auth_code | string |
| 3 | order_id | string |

## ReqVerifyMyCardOrder

| N | Field name | Field type |
| --- | --- | --- |
| 1 | order_id | string |
| 2 | account_id | uint32 |

## ReqOpenChest

| N | Field name | Field type |
| --- | --- | --- |
| 1 | chest_id | uint32 |
| 2 | count | uint32 |
| 3 | use_ticket | bool |

## ResOpenChest

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | results | [OpenResult](#openresult) |
| 3 | total_open_count | uint32 |
| 4 | faith_count | uint32 |

## ReqBuyFromChestShop

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | count | uint32 |

## ResBuyFromChestShop

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | chest_id | uint32 |
| 3 | consume_count | uint32 |
| 4 | faith_count | uint32 |

## ResDailySignInInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | sign_in_days | uint32 |

## ReqDoActivitySignIn

| N | Field name | Field type |
| --- | --- | --- |
| 2 | activity_id | uint32 |

## ResDoActivitySignIn

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | rewards | [RewardData](#rewarddata) |
| 3 | sign_in_count | uint32 |

## ResCharacterInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | characters | [Character](#character) |
| 3 | skins | uint32 |
| 4 | main_character_id | uint32 |
| 5 | send_gift_count | uint32 |
| 6 | send_gift_limit | uint32 |
| 7 | finished_endings | uint32 |
| 8 | rewarded_endings | uint32 |

## ReqChangeMainCharacter

| N | Field name | Field type |
| --- | --- | --- |
| 1 | character_id | uint32 |

## ReqChangeCharacterSkin

| N | Field name | Field type |
| --- | --- | --- |
| 1 | character_id | uint32 |
| 2 | skin | uint32 |

## ReqChangeCharacterView

| N | Field name | Field type |
| --- | --- | --- |
| 1 | character_id | uint32 |
| 2 | slot | uint32 |
| 3 | item_id | uint32 |

## ReqSendGiftToCharacter

| N | Field name | Field type |
| --- | --- | --- |
| 1 | character_id | uint32 |
| 2 | gifts | [Gift](#gift) |

## ResSendGiftToCharacter

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | level | uint32 |
| 3 | exp | uint32 |

## ReqSellItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | sells | [Item](#item) |

## ResCommonView

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | slots | [Slot](#slot) |

## ReqChangeCommonView

| N | Field name | Field type |
| --- | --- | --- |
| 1 | slot | uint32 |
| 2 | value | uint32 |

## ReqSaveCommonViews

| N | Field name | Field type |
| --- | --- | --- |
| 1 | views | [ViewSlot](#viewslot) |
| 2 | save_index | uint32 |
| 3 | is_use | uint32 |

## ReqCommonViews

| N | Field name | Field type |
| --- | --- | --- |
| 1 | index | uint32 |

## ResCommonViews

| N | Field name | Field type |
| --- | --- | --- |
| 1 | views | [ViewSlot](#viewslot) |

## ResAllcommonViews

| N | Field name | Field type |
| --- | --- | --- |
| 1 | views | [Views](#views) |
| 2 | use | uint32 |
| 3 | error | [Error](#error) |

## ReqUseCommonView

| N | Field name | Field type |
| --- | --- | --- |
| 3 | index | uint32 |

## ReqUpgradeCharacter

| N | Field name | Field type |
| --- | --- | --- |
| 1 | character_id | uint32 |

## ResUpgradeCharacter

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | character | [Character](#character) |

## ReqFinishedEnding

| N | Field name | Field type |
| --- | --- | --- |
| 1 | character_id | uint32 |
| 2 | story_id | uint32 |
| 3 | ending_id | uint32 |

## ReqGMCommand

| N | Field name | Field type |
| --- | --- | --- |
| 1 | command | string |

## ResShopInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | shop_info | [ShopInfo](#shopinfo) |

## ReqBuyFromShop

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | count | uint32 |
| 3 | bill_short_cut | [BillShortcut](#billshortcut) |
| 4 | deal_price | uint32 |

## ResBuyFromShop

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | rewards | [RewardSlot](#rewardslot) |

## ReqBuyFromZHP

| N | Field name | Field type |
| --- | --- | --- |
| 1 | goods_id | uint32 |
| 2 | count | uint32 |

## ReqPayMonthTicket

| N | Field name | Field type |
| --- | --- | --- |
| 1 | ticket_id | uint32 |

## ResPayMonthTicket

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | resource_id | uint32 |
| 3 | resource_count | uint32 |

## ReqReshZHPShop

| N | Field name | Field type |
| --- | --- | --- |
| 1 | free_refresh | uint32 |
| 2 | cost_refresh | uint32 |

## ResRefreshZHPShop

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | zhp | [ZHPShop](#zhpshop) |

## ResMonthTicketInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | month_ticket_info | [MonthTicketInfo](#monthticketinfo) |

## ReqExchangeCurrency

| N | Field name | Field type |
| --- | --- | --- |
| 1 | id | uint32 |
| 2 | count | uint32 |

## ResServerSettings

| N | Field name | Field type |
| --- | --- | --- |
| 1 | settings | [ServerSettings](#serversettings) |

## ResAccountSettings

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | settings | [AccountSetting](#accountsetting) |

## ReqUpdateAccountSettings

| N | Field name | Field type |
| --- | --- | --- |
| 1 | setting | [AccountSetting](#accountsetting) |

## ResModNicknameTime

| N | Field name | Field type |
| --- | --- | --- |
| 1 | last_mod_time | uint32 |

## ResMisc

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | recharged_list | uint32 |
| 3 | faiths | [MiscFaithData](#miscfaithdata) |

## ReqModifySignature

| N | Field name | Field type |
| --- | --- | --- |
| 1 | signature | string |

## ResIDCardInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | is_authed | bool |
| 3 | country | string |

## ReqUpdateIDCardInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | fullname | string |
| 2 | card_no | string |

## ResVipReward

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | gained_vip_levels | uint32 |

## ReqGainVipReward

| N | Field name | Field type |
| --- | --- | --- |
| 1 | vip_level | uint32 |

## ReqFetchCustomizedContestList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | start | uint32 |
| 2 | count | uint32 |

## ResFetchCustomizedContestList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | contests | [CustomizedContestBase](#customizedcontestbase) |
| 3 | follow_contests | [CustomizedContestBase](#customizedcontestbase) |

## ReqFetchCustomizedContestExtendInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | uid_list | uint32 |

## ResFetchCustomizedContestExtendInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | extend_list | [CustomizedContestExtend](#customizedcontestextend) |

## ReqFetchCustomizedContestAuthInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |

## ResFetchCustomizedContestAuthInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | observer_level | uint32 |

## ReqEnterCustomizedContest

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |

## ResEnterCustomizedContest

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | detail_info | [CustomizedContestDetail](#customizedcontestdetail) |
| 3 | player_report | [CustomizedContestPlayerReport](#customizedcontestplayerreport) |
| 4 | is_followed | bool |

## ReqFetchCustomizedContestOnlineInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |

## ResFetchCustomizedContestOnlineInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | online_player | uint32 |

## ReqFetchCustomizedContestByContestId

| N | Field name | Field type |
| --- | --- | --- |
| 1 | contest_id | uint32 |

## ResFetchCustomizedContestByContestId

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | contest_info | [CustomizedContestAbstract](#customizedcontestabstract) |

## ReqStartCustomizedContest

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |

## ReqJoinCustomizedContestChatRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |

## ResJoinCustomizedContestChatRoom

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | chat_history | [bytes](#bytes) |

## ReqSayChatMessage

| N | Field name | Field type |
| --- | --- | --- |
| 1 | content | string |

## ReqFetchCustomizedContestGameLiveList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |

## ResFetchCustomizedContestGameLiveList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | live_list | [GameLiveHead](#gamelivehead) |

## ReqFetchCustomizedContestGameRecords

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |
| 2 | last_index | uint32 |

## ResFetchCustomizedContestGameRecords

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | next_index | uint32 |
| 3 | record_list | [RecordGame](#recordgame) |

## ReqTargetCustomizedContest

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unique_id | uint32 |

## ResActivityList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | activities | [Activity](#activity) |

## ResAccountActivityData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | exchange_records | [ExchangeRecord](#exchangerecord) |
| 3 | task_progress_list | [TaskProgress](#taskprogress) |
| 4 | accumulated_point_list | [ActivityAccumulatedPointData](#activityaccumulatedpointdata) |
| 5 | rank_data_list | [ActivityRankPointData](#activityrankpointdata) |
| 6 | flip_task_progress_list | [TaskProgress](#taskprogress) |
| 7 | sign_in_data | [ActivitySignInData](#activitysignindata) |
| 8 | richman_data | [ActivityRichmanData](#activityrichmandata) |
| 9 | period_task_progress_list | [TaskProgress](#taskprogress) |
| 10 | random_task_progress_list | [TaskProgress](#taskprogress) |

## ReqExchangeActivityItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | exchange_id | uint32 |

## ResExchangeActivityItem

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | execute_reward | [ExecuteReward](#executereward) |

## ReqCompleteActivityTask

| N | Field name | Field type |
| --- | --- | --- |
| 1 | task_id | uint32 |

## ReqReceiveActivityFlipTask

| N | Field name | Field type |
| --- | --- | --- |
| 1 | task_id | uint32 |

## ResReceiveActivityFlipTask

| N | Field name | Field type |
| --- | --- | --- |
| 1 | count | uint32 |
| 2 | error | [Error](#error) |

## ReqFetchActivityFlipInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_id | uint32 |

## ResFetchActivityFlipInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | rewards | uint32 |
| 2 | count | uint32 |
| 3 | error | [Error](#error) |

## ReqGainAccumulatedPointActivityReward

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_id | uint32 |
| 2 | reward_id | uint32 |

## ReqFetchRankPointLeaderboard

| N | Field name | Field type |
| --- | --- | --- |
| 1 | leaderboard_id | uint32 |

## ResFetchRankPointLeaderboard

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | items | [Item](#item) |
| 3 | last_refresh_time | uint32 |

## ReqGainRankPointReward

| N | Field name | Field type |
| --- | --- | --- |
| 1 | leaderboard_id | uint32 |
| 2 | activity_id | uint32 |

## ReqRichmanNextMove

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_id | uint32 |

## ResRichmanNextMove

| N | Field name | Field type |
| --- | --- | --- |
| 1 | paths | [PathData](#pathdata) |
| 2 | dice | uint32 |
| 3 | location | uint32 |
| 4 | finished_count | uint32 |
| 5 | step | uint32 |
| 6 | buff | [BuffData](#buffdata) |
| 7 | bank_save | uint32 |
| 8 | chest_position | uint32 |
| 9 | exp | uint32 |
| 10 | bank_save_add | uint32 |
| 11 | error | [Error](#error) |

## ReqRichmanSpecialMove

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_id | uint32 |
| 2 | step | uint32 |

## ReqRichmanChestInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_id | uint32 |

## ResRichmanChestInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | items | [ItemData](#itemdata) |
| 2 | error | [Error](#error) |

## ReqCreateGameObserveAuth

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_uuid | string |

## ResCreateGameObserveAuth

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | token | string |
| 3 | location | string |

## ReqRefreshGameObserveAuth

| N | Field name | Field type |
| --- | --- | --- |
| 1 | token | string |

## ResRefreshGameObserveAuth

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | ttl | uint32 |

## ActionMJStart

No fields

## NewRoundOpenedTiles

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | tiles | string |
| 3 | count | uint32 |

## MuyuInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | count | uint32 |
| 3 | count_max | uint32 |
| 4 | id | uint32 |

## ActionNewRound

| N | Field name | Field type |
| --- | --- | --- |
| 1 | chang | uint32 |
| 2 | ju | uint32 |
| 3 | ben | uint32 |
| 4 | tiles | string |
| 5 | dora | string |
| 6 | scores | int32 |
| 7 | operation | [OptionalOperationList](#optionaloperationlist) |
| 8 | liqibang | uint32 |
| 9 | tingpais0 | [TingPaiDiscardInfo](#tingpaidiscardinfo) |
| 10 | tingpais1 | [TingPaiInfo](#tingpaiinfo) |
| 11 | al | bool |
| 12 | md5 | string |
| 13 | left_tile_count | uint32 |
| 14 | doras | string |
| 15 | opens | [NewRoundOpenedTiles](#newroundopenedtiles) |
| 16 | muyu | [MuyuInfo](#muyuinfo) |

## RecordNewRound

| N | Field name | Field type |
| --- | --- | --- |
| 1 | chang | uint32 |
| 2 | ju | uint32 |
| 3 | ben | uint32 |
| 4 | dora | string |
| 5 | scores | int32 |
| 6 | liqibang | uint32 |
| 7 | tiles0 | string |
| 8 | tiles1 | string |
| 9 | tiles2 | string |
| 10 | tiles3 | string |
| 11 | tingpai | [TingPai](#tingpai) |
| 12 | operation | [OptionalOperationList](#optionaloperationlist) |
| 13 | md5 | string |
| 14 | paishan | string |
| 15 | left_tile_count | uint32 |
| 16 | doras | string |
| 17 | opens | [NewRoundOpenedTiles](#newroundopenedtiles) |
| 18 | muyu | [MuyuInfo](#muyuinfo) |

## GameSnapshot

| N | Field name | Field type |
| --- | --- | --- |
| 1 | chang | uint32 |
| 2 | ju | uint32 |
| 3 | ben | uint32 |
| 4 | index_player | uint32 |
| 5 | left_tile_count | uint32 |
| 6 | hands | string |
| 7 | doras | string |
| 8 | liqibang | uint32 |
| 9 | players | [PlayerSnapshot](#playersnapshot) |
| 10 | zhenting | bool |

## ActionPrototype

| N | Field name | Field type |
| --- | --- | --- |
| 1 | step | uint32 |
| 2 | name | string |
| 3 | data | [bytes](#bytes) |

## GameDetailRecords

| N | Field name | Field type |
| --- | --- | --- |
| 1 | records | [bytes](#bytes) |

## OptionalOperation

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | combination | string |

## OptionalOperationList

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | operation_list | [OptionalOperation](#optionaloperation) |
| 4 | time_add | uint32 |
| 5 | time_fixed | uint32 |

## LiQiSuccess

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | score | int32 |
| 3 | liqibang | uint32 |

## FanInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | name | string |
| 2 | val | uint32 |
| 3 | id | uint32 |

## HuleInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | hand | string |
| 2 | ming | string |
| 3 | hu_tile | string |
| 4 | seat | uint32 |
| 5 | zimo | bool |
| 6 | qinjia | bool |
| 7 | liqi | bool |
| 8 | doras | string |
| 9 | li_doras | string |
| 10 | yiman | bool |
| 11 | count | uint32 |
| 12 | fans | [FanInfo](#faninfo) |
| 13 | fu | uint32 |
| 14 | title | string |
| 15 | point_rong | uint32 |
| 16 | point_zimo_qin | uint32 |
| 17 | point_zimo_xian | uint32 |
| 18 | title_id | uint32 |
| 19 | point_sum | uint32 |

## TingPaiInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | tile | string |
| 2 | haveyi | bool |
| 3 | yiman | bool |
| 4 | count | uint32 |
| 5 | fu | uint32 |
| 6 | biao_dora_count | uint32 |
| 7 | yiman_zimo | bool |
| 8 | count_zimo | uint32 |
| 9 | fu_zimo | uint32 |

## TingPaiDiscardInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | tile | string |
| 2 | zhenting | bool |
| 3 | infos | [TingPaiInfo](#tingpaiinfo) |

## GameEnd

| N | Field name | Field type |
| --- | --- | --- |
| 1 | scores | int32 |

## ActionDiscardTile

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | tile | string |
| 3 | is_liqi | bool |
| 4 | operation | [OptionalOperationList](#optionaloperationlist) |
| 5 | moqie | bool |
| 6 | zhenting | bool |
| 7 | tingpais | [TingPaiInfo](#tingpaiinfo) |
| 8 | doras | string |
| 9 | is_wliqi | bool |
| 10 | tile_state | uint32 |
| 11 | muyu | [MuyuInfo](#muyuinfo) |

## RecordDiscardTile

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | tile | string |
| 3 | is_liqi | bool |
| 5 | moqie | bool |
| 6 | zhenting | bool |
| 7 | tingpais | [TingPaiInfo](#tingpaiinfo) |
| 8 | doras | string |
| 9 | is_wliqi | bool |
| 10 | operations | [OptionalOperationList](#optionaloperationlist) |
| 11 | tile_state | uint32 |
| 12 | muyu | [MuyuInfo](#muyuinfo) |

## ActionDealTile

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | tile | string |
| 3 | left_tile_count | uint32 |
| 4 | operation | [OptionalOperationList](#optionaloperationlist) |
| 5 | liqi | [LiQiSuccess](#liqisuccess) |
| 6 | doras | string |
| 7 | zhenting | bool |
| 8 | tingpais | [TingPaiDiscardInfo](#tingpaidiscardinfo) |
| 9 | tile_state | uint32 |
| 10 | muyu | [MuyuInfo](#muyuinfo) |

## RecordDealTile

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | tile | string |
| 3 | left_tile_count | uint32 |
| 5 | liqi | [LiQiSuccess](#liqisuccess) |
| 6 | doras | string |
| 7 | zhenting | bool |
| 8 | operation | [OptionalOperationList](#optionaloperationlist) |
| 9 | tile_state | uint32 |
| 11 | muyu | [MuyuInfo](#muyuinfo) |

## ActionChiPengGang

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | type | uint32 |
| 3 | tiles | string |
| 4 | froms | uint32 |
| 5 | liqi | [LiQiSuccess](#liqisuccess) |
| 6 | operation | [OptionalOperationList](#optionaloperationlist) |
| 7 | zhenting | bool |
| 8 | tingpais | [TingPaiDiscardInfo](#tingpaidiscardinfo) |
| 9 | tile_states | uint32 |
| 10 | muyu | [MuyuInfo](#muyuinfo) |

## RecordChiPengGang

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | type | uint32 |
| 3 | tiles | string |
| 4 | froms | uint32 |
| 5 | liqi | [LiQiSuccess](#liqisuccess) |
| 7 | zhenting | bool |
| 8 | operation | [OptionalOperationList](#optionaloperationlist) |
| 9 | tile_states | uint32 |
| 10 | muyu | [MuyuInfo](#muyuinfo) |

## ActionAnGangAddGang

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | type | uint32 |
| 3 | tiles | string |
| 4 | operation | [OptionalOperationList](#optionaloperationlist) |
| 6 | doras | string |
| 7 | zhenting | bool |
| 8 | tingpais | [TingPaiInfo](#tingpaiinfo) |
| 9 | muyu | [MuyuInfo](#muyuinfo) |

## RecordAnGangAddGang

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | type | uint32 |
| 3 | tiles | string |
| 6 | doras | string |
| 7 | operations | [OptionalOperationList](#optionaloperationlist) |
| 8 | muyu | [MuyuInfo](#muyuinfo) |

## ActionBaBei

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 4 | operation | [OptionalOperationList](#optionaloperationlist) |
| 6 | doras | string |
| 7 | zhenting | bool |
| 8 | tingpais | [TingPaiInfo](#tingpaiinfo) |
| 9 | moqie | bool |
| 10 | tile_state | uint32 |
| 11 | muyu | [MuyuInfo](#muyuinfo) |

## RecordBaBei

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 6 | doras | string |
| 7 | operations | [OptionalOperationList](#optionaloperationlist) |
| 8 | moqie | bool |
| 10 | tile_state | uint32 |
| 11 | muyu | [MuyuInfo](#muyuinfo) |

## ActionHule

| N | Field name | Field type |
| --- | --- | --- |
| 1 | hules | [HuleInfo](#huleinfo) |
| 2 | old_scores | int32 |
| 3 | delta_scores | int32 |
| 4 | wait_timeout | uint32 |
| 5 | scores | int32 |
| 6 | gameend | [GameEnd](#gameend) |
| 7 | doras | string |
| 8 | muyu | [MuyuInfo](#muyuinfo) |

## RecordHule

| N | Field name | Field type |
| --- | --- | --- |
| 1 | hules | [HuleInfo](#huleinfo) |
| 2 | old_scores | int32 |
| 3 | delta_scores | int32 |
| 4 | wait_timeout | uint32 |
| 5 | scores | int32 |
| 6 | gameend | [GameEnd](#gameend) |
| 7 | doras | string |
| 8 | muyu | [MuyuInfo](#muyuinfo) |

## ActionLiuJu

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | gameend | [GameEnd](#gameend) |
| 3 | seat | uint32 |
| 4 | tiles | string |
| 5 | liqi | [LiQiSuccess](#liqisuccess) |
| 6 | allplayertiles | string |
| 7 | muyu | [MuyuInfo](#muyuinfo) |

## RecordLiuJu

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | gameend | [GameEnd](#gameend) |
| 3 | seat | uint32 |
| 4 | tiles | string |
| 5 | liqi | [LiQiSuccess](#liqisuccess) |
| 6 | allplayertiles | string |
| 7 | muyu | [MuyuInfo](#muyuinfo) |

## NoTilePlayerInfo

| N | Field name | Field type |
| --- | --- | --- |
| 3 | tingpai | bool |
| 4 | hand | string |
| 5 | tings | [TingPaiInfo](#tingpaiinfo) |

## NoTileScoreInfo

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | old_scores | int32 |
| 3 | delta_scores | int32 |
| 4 | hand | string |
| 5 | ming | string |
| 6 | doras | string |
| 7 | score | uint32 |

## ActionNoTile

| N | Field name | Field type |
| --- | --- | --- |
| 1 | liujumanguan | bool |
| 2 | players | [NoTilePlayerInfo](#notileplayerinfo) |
| 3 | scores | [NoTileScoreInfo](#notilescoreinfo) |
| 4 | gameend | bool |
| 5 | muyu | [MuyuInfo](#muyuinfo) |

## RecordNoTile

| N | Field name | Field type |
| --- | --- | --- |
| 1 | liujumanguan | bool |
| 2 | players | [NoTilePlayerInfo](#notileplayerinfo) |
| 3 | scores | [NoTileScoreInfo](#notilescoreinfo) |
| 4 | gameend | bool |
| 5 | muyu | [MuyuInfo](#muyuinfo) |

## PlayerLeaving

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |

## FastTest

* authGame([ResAuthGame](#resauthgame) return [ReqAuthGame](#reqauthgame)
* enterGame([ResEnterGame](#resentergame) return [ReqCommon](#reqcommon)
* syncGame([ResSyncGame](#ressyncgame) return [ReqSyncGame](#reqsyncgame)
* finishSyncGame([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* terminateGame([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* inputOperation([ResCommon](#rescommon) return [ReqSelfOperation](#reqselfoperation)
* inputChiPengGang([ResCommon](#rescommon) return [ReqChiPengGang](#reqchipenggang)
* confirmNewRound([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* broadcastInGame([ResCommon](#rescommon) return [ReqBroadcastInGame](#reqbroadcastingame)
* inputGameGMCommand([ResCommon](#rescommon) return [ReqGMCommandInGaming](#reqgmcommandingaming)
* fetchGamePlayerState([ResGamePlayerState](#resgameplayerstate) return [ReqCommon](#reqcommon)
* checkNetworkDelay([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* clearLeaving([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
* voteGameEnd([ResGameEndVote](#resgameendvote) return [ReqVoteGameEnd](#reqvotegameend)
* authObserve([ResCommon](#rescommon) return [ReqAuthObserve](#reqauthobserve)
* startObserve([ResStartObserve](#resstartobserve) return [ReqCommon](#reqcommon)
* stopObserve([ResCommon](#rescommon) return [ReqCommon](#reqcommon)
## ReqAuthGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | account_id | uint32 |
| 2 | token | string |
| 3 | game_uuid | string |

## ResAuthGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | players | [PlayerGameView](#playergameview) |
| 3 | seat_list | uint32 |
| 4 | is_game_start | bool |
| 5 | game_config | [GameConfig](#gameconfig) |
| 6 | ready_id_list | uint32 |

## GameRestore

| N | Field name | Field type |
| --- | --- | --- |
| 1 | snapshot | [GameSnapshot](#gamesnapshot) |
| 2 | actions | [ActionPrototype](#actionprototype) |
| 3 | passed_waiting_time | uint32 |
| 4 | game_state | uint32 |
| 5 | start_time | uint32 |
| 6 | last_pause_time_ms | uint32 |

## ResEnterGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | is_end | bool |
| 3 | step | uint32 |
| 4 | game_restore | [GameRestore](#gamerestore) |

## ReqSyncGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | round_id | string |
| 2 | step | uint32 |

## ResSyncGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | is_end | bool |
| 3 | step | uint32 |
| 4 | game_restore | [GameRestore](#gamerestore) |

## ReqSelfOperation

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | index | uint32 |
| 3 | tile | string |
| 4 | cancel_operation | bool |
| 5 | moqie | bool |
| 6 | timeuse | uint32 |
| 7 | tile_state | int32 |

## ReqChiPengGang

| N | Field name | Field type |
| --- | --- | --- |
| 1 | type | uint32 |
| 2 | index | uint32 |
| 3 | cancel_operation | bool |
| 6 | timeuse | uint32 |

## ReqBroadcastInGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | content | string |
| 2 | except_self | bool |

## ReqGMCommandInGaming

| N | Field name | Field type |
| --- | --- | --- |
| 1 | json_data | string |

## ResGamePlayerState

| N | Field name | Field type |
| --- | --- | --- |
| 1 | error | [Error](#error) |
| 2 | state_list | [GamePlayerState](#gameplayerstate) |

## ReqVoteGameEnd

| N | Field name | Field type |
| --- | --- | --- |
| 1 | yes | bool |

## ResGameEndVote

| N | Field name | Field type |
| --- | --- | --- |
| 1 | success | bool |
| 2 | vote_cd_end_time | uint32 |
| 3 | error | [Error](#error) |

## ReqAuthObserve

| N | Field name | Field type |
| --- | --- | --- |
| 1 | token | string |

## ResStartObserve

| N | Field name | Field type |
| --- | --- | --- |
| 1 | head | [GameLiveHead](#gamelivehead) |
| 2 | passed | [GameLiveSegment](#gamelivesegment) |

## NotifyNewGame

| N | Field name | Field type |
| --- | --- | --- |
| 1 | game_uuid | string |
| 2 | player_list | string |

## NotifyPlayerLoadGameReady

| N | Field name | Field type |
| --- | --- | --- |
| 1 | ready_id_list | uint32 |

## NotifyGameBroadcast

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | content | string |

## NotifyGameEndResult

| N | Field name | Field type |
| --- | --- | --- |
| 1 | result | [GameEndResult](#gameendresult) |

## NotifyGameTerminate

| N | Field name | Field type |
| --- | --- | --- |
| 1 | reason | string |

## NotifyPlayerConnectionState

| N | Field name | Field type |
| --- | --- | --- |
| 1 | seat | uint32 |
| 2 | state | [GamePlayerState](#gameplayerstate) |

## NotifyAccountLevelChange

| N | Field name | Field type |
| --- | --- | --- |
| 1 | origin | [AccountLevel](#accountlevel) |
| 2 | final | [AccountLevel](#accountlevel) |
| 3 | type | uint32 |

## NotifyGameFinishReward

| N | Field name | Field type |
| --- | --- | --- |
| 1 | mode_id | uint32 |
| 2 | level_change | [LevelChange](#levelchange) |
| 3 | match_chest | [MatchChest](#matchchest) |
| 4 | main_character | [MainCharacter](#maincharacter) |
| 5 | character_gift | [CharacterGift](#charactergift) |

## NotifyActivityReward

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_reward | [ActivityReward](#activityreward) |

## NotifyActivityPoint

| N | Field name | Field type |
| --- | --- | --- |
| 1 | activity_points | [ActivityPoint](#activitypoint) |

## NotifyLeaderboardPoint

| N | Field name | Field type |
| --- | --- | --- |
| 1 | leaderboard_points | [LeaderboardPoint](#leaderboardpoint) |

## NotifyGamePause

| N | Field name | Field type |
| --- | --- | --- |
| 1 | paused | bool |

## NotifyEndGameVote

| N | Field name | Field type |
| --- | --- | --- |
| 1 | results | [VoteResult](#voteresult) |
| 2 | start_time | uint32 |
| 3 | duration_time | uint32 |

## NotifyObserveData

| N | Field name | Field type |
| --- | --- | --- |
| 1 | unit | [GameLiveUnit](#gameliveunit) |

