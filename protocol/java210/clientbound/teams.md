---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  teams

# Teams

**Id**: 65

**Id** (hex): 41

**Id** (bin): 01000001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
name | string
mode | ubyte

## Variants

Variant | Field | Value
---|---|:---:
[Create Team](#create_team) | mode | 0
[Remove Team](#remove_team) | mode | 1
[Update Team Info](#update_team_info) | mode | 2
[Add Players](#add_players) | mode | 3
[Remove Players](#remove_players) | mode | 4

### Create Team

### Additional Fields

Name | Type
---|---
display name | string
prefix | string
suffix | string
[friendly flags](#create-team_friendly-flags) | ubyte
[nametag visibility](#create-team_nametag-visibility) | string
[collision rule](#create-team_collision-rule) | string
color | ubyte
players | string[]

### friendly flags

**Constants**:

Name | Value
---|:---:
[friendly fire](create-team_friendly-flags_friendly-fire) | 1
[see team invisible players](create-team_friendly-flags_see-team-invisible-players) | 2

### nametag visibility

**Constants**:

Name | Value
---|:---:
[always hide](create-team_nametag-visibility_always-hide) | always
[hide other teams](create-team_nametag-visibility_hide-other-teams) | hideOtherTeams
[hide own team](create-team_nametag-visibility_hide-own-team) | hideOwnTeam
[never hide](create-team_nametag-visibility_never-hide) | never

### collision rule

**Constants**:

Name | Value
---|:---:
[always push](create-team_collision-rule_always-push) | always
[push other teams](create-team_collision-rule_push-other-teams) | pushOtherTeams
[push own team](create-team_collision-rule_push-own-team) | pushOwnTeam
[never push](create-team_collision-rule_never-push) | never

### Remove Team

### Update Team Info

### Additional Fields

Name | Type
---|---
display name | string
prefix | string
suffix | string
[friendly flags](#update-team-info_friendly-flags) | ubyte
[nametag visibility](#update-team-info_nametag-visibility) | string
[collision rule](#update-team-info_collision-rule) | string
color | ubyte

### friendly flags

**Constants**:

Name | Value
---|:---:
[friendly fire](update-team-info_friendly-flags_friendly-fire) | 1
[see team invisible players](update-team-info_friendly-flags_see-team-invisible-players) | 2

### nametag visibility

**Constants**:

Name | Value
---|:---:
[always hide](update-team-info_nametag-visibility_always-hide) | always
[hide other teams](update-team-info_nametag-visibility_hide-other-teams) | hideOtherTeams
[hide own team](update-team-info_nametag-visibility_hide-own-team) | hideOwnTeam
[never hide](update-team-info_nametag-visibility_never-hide) | never

### collision rule

**Constants**:

Name | Value
---|:---:
[always push](update-team-info_collision-rule_always-push) | always
[push other teams](update-team-info_collision-rule_push-other-teams) | pushOtherTeams
[push own team](update-team-info_collision-rule_push-own-team) | pushOwnTeam
[never push](update-team-info_collision-rule_never-push) | never

### Add Players

### Additional Fields

Name | Type
---|---
players | string[]

### Remove Players

### Additional Fields

Name | Type
---|---
players | string[]

