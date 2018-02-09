---
layout: default
---

[home](/) ➡ [java338](/protocol/java338) ➡ [clientbound](/protocol/java338/clientbound) ➡ player-list-item

# Player-list-item

**Id**: 46

**Id** (hex): 2E

**Id** (bin): 00101110

✔️

✔️

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
players | [listAddPlayer](/protocol/java338/types/list-add-player)[]

### Update Gamemode

### Additional Fields

Name | Type
---|---
players | [listUpdateGamemode](/protocol/java338/types/list-update-gamemode)[]

### Update Latency

### Additional Fields

Name | Type
---|---
players | [listUpdateLatency](/protocol/java338/types/list-update-latency)[]

### Update Display Name

### Additional Fields

Name | Type
---|---
players | [listUpdateDisplayName](/protocol/java338/types/list-update-display-name)[]

### Remove Player

### Additional Fields

Name | Type
---|---
players | uuid[]

