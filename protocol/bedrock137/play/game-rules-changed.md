---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  game-rules-changed

# Game-rules-changed

**Id**: 72

**Id** (hex): 48

**Id** (bin): 01001000

**Clientbound**: ✔️

**Serverbound**: ✖️

Updates client's game rules. This packet is ignored if the game is not launched as Education Edition and should be avoid in favour of [AdventureSettings](#play_adventure-settings), with which the same result can be obtained with less data.

## Fields

Name | Type
---|---
rules | [rule](/protocol/bedrock137/types/rule)[]

