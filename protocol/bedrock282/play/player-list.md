---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  player-list

# Player list

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.PlayerList)

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
[players](#add_players) | [playerList](/protocol/bedrock282/types/player-list)[]

### players

Informations about a player that will be added to the player's list in the pause menu.

### Remove

### Additional Fields

Name | Type
---|---
players | [mcpeUuid](/protocol/bedrock282/types/mcpe-uuid)[]
