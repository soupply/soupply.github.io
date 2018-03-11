---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  game-rules-changed

# Game rules changed

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.game_rules_changed)

**Id**: 73

**Id** (hex): 49

**Id** (bin): 01001001

**Clientbound**: ✔️

**Serverbound**: ✖️

Updates client's game rules. This packet is ignored if the game is not launched as Education Edition and should be avoid in favour of [AdventureSettings](#play_adventure-settings), with which the same result can be obtained with less data.

## Fields

Name | Type
---|---
rules | [rules](/protocol/pocket113/arrays)
