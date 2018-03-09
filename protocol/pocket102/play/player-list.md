---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  player-list

# Player list

**Id**: 63

**Id** (hex): 3F

**Id** (bin): 00111111

**Clientbound**: ✔️

**Serverbound**: ✖️

Adds or removes a player from the player's list displayed in the pause menu. This packet should be sent before spawning a player with [AddPlayer](#play_add-player), otherwise the skin is not applied.

## Fields

Name | Type
---|---
action | ubyte

## Variants

Variant | Field | Value
---|---|:---:
[Add](#add) | action | 0
[Remove](#remove) | action | 1

### Add

### Additional Fields

Name | Type
---|---
players | [playerList](/protocol/pocket102/types/player-list)[]

### Remove

### Additional Fields

Name | Type
---|---
players | uuid[]
