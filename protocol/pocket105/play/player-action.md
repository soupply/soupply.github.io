---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  player-action

# Player action

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.player_action)

**Id**: 37

**Id** (hex): 25

**Id** (bin): 00100101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
[action](#action) | varint
position | [blockPosition](/protocol/pocket105/types/block-position)
face | varint

### action

**Constants**:

Name | Value
---|:---:
start break | 0
abort break | 1
stop break | 2
release item | 5
stop sleeping | 6
respawn | 7
jump | 8
start sprint | 9
stop sprint | 10
start sneak | 11
stop sneak | 12
start gliding | 15
stop gliding | 16
