---
layout: default
---

[home](/) ➡ [pocket105](/protocol/pocket105) ➡ [play](/protocol/pocket105/play) ➡ player-list

# Player-list

**Id**: 64

**Id** (hex): 40

**Id** (bin): 01000000

✔️

✔️

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
players | [playerList](/protocol/pocket105/types/player-list)[]

### Remove

### Additional Fields

Name | Type
---|---
players | uuid[]

