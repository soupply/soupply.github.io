---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  player-list-item

# Player list item

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.PlayerListItem)

**Id**: 45

**Id** (hex): 2D

**Id** (bin): 00101101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
action | varuint

## Variants

Variant | Field | Value
---|---|:---:
[Add Player](#add_player) | action | 0
[Update Gamemode](#update_gamemode) | action | 1
[Update Latency](#update_latency) | action | 2
[Update Display Name](#update_display_name) | action | 3
[Remove Player](#remove_player) | action | 4

### Add Player

### Additional Fields

Name | Type
---|---
players | [listAddPlayer](/protocol/java315/types/list-add-player)[]

### Update Gamemode

### Additional Fields

Name | Type
---|---
players | [listUpdateGamemode](/protocol/java315/types/list-update-gamemode)[]

### Update Latency

### Additional Fields

Name | Type
---|---
players | [listUpdateLatency](/protocol/java315/types/list-update-latency)[]

### Update Display Name

### Additional Fields

Name | Type
---|---
players | [listUpdateDisplayName](/protocol/java315/types/list-update-display-name)[]

### Remove Player

### Additional Fields

Name | Type
---|---
players | uuid[]
