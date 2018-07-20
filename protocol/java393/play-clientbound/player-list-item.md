---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  player-list-item

# Player list item

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.PlayerListItem)

**Id**: 48

**Id** (hex): 30

**Id** (bin): 00110000

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
players | [listAddPlayer](/protocol/java393/types/list-add-player)[]

### Update Gamemode

### Additional Fields

Name | Type
---|---
players | [listUpdateGamemode](/protocol/java393/types/list-update-gamemode)[]

### Update Latency

### Additional Fields

Name | Type
---|---
players | [listUpdateLatency](/protocol/java393/types/list-update-latency)[]

### Update Display Name

### Additional Fields

Name | Type
---|---
players | [listUpdateDisplayName](/protocol/java393/types/list-update-display-name)[]

### Remove Player

### Additional Fields

Name | Type
---|---
players | uuid[]
