---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  teams

# Teams

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.Teams)

**Id**: 71

**Id** (hex): 47

**Id** (bin): 01000111

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
[friendly flags](#create-team_friendly-flags) | ubyte
[nametag visibility](#create-team_nametag-visibility) | string
[collision rule](#create-team_collision-rule) | string
formatting | varuint
prefix | string
suffix | string
players | string[]

### friendly flags

**Constants**:

Name | Value
---|:---:
friendly fire | 1
see team invisible players | 2

### nametag visibility

**Constants**:

Name | Value
---|:---:
always hide | always
hide other teams | hideOtherTeams
hide own team | hideOwnTeam
never hide | never

### collision rule

**Constants**:

Name | Value
---|:---:
always push | always
push other teams | pushOtherTeams
push own team | pushOwnTeam
never push | never

### Remove Team

### Update Team Info

### Additional Fields

Name | Type
---|---
display name | string
[friendly flags](#update-team-info_friendly-flags) | ubyte
[nametag visibility](#update-team-info_nametag-visibility) | string
[collision rule](#update-team-info_collision-rule) | string
formatting | varuint
prefix | string
suffix | string

### friendly flags

**Constants**:

Name | Value
---|:---:
friendly fire | 1
see team invisible players | 2

### nametag visibility

**Constants**:

Name | Value
---|:---:
always hide | always
hide other teams | hideOtherTeams
hide own team | hideOwnTeam
never hide | never

### collision rule

**Constants**:

Name | Value
---|:---:
always push | always
push other teams | pushOtherTeams
push own team | pushOwnTeam
never push | never

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
