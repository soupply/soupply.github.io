---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  game-rules-changed

# Game rules changed

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.GameRulesChanged)

**Id**: 72

**Id** (hex): 48

**Id** (bin): 01001000

**Clientbound**: ✔️

**Serverbound**: ✖️

Updates client's game rules. This packet is ignored if the game is not launched as Education Edition and should be avoid in favour of [AdventureSettings](#play_adventure-settings), with which the same result can be obtained with less data.

## Fields

Name | Type
---|---
rules | [rule](/protocol/bedrock274/types/rule)[]
