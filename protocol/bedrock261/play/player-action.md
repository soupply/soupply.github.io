---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  player-action

# Player action

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.PlayerAction)

**Id**: 36

**Id** (hex): 24

**Id** (bin): 00100100

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
[action](#action) | varint
position | [blockPosition](/protocol/bedrock261/types/block-position)
face | varint

### action

**Constants**:

Name | Value
---|:---:
start break | 0
abort break | 1
stop break | 2
get updated block | 3
drop item | 4
start sleeping | 5
stop sleeping | 6
respawn | 7
jump | 8
start sprint | 9
stop sprint | 10
start sneak | 11
stop sneak | 12
start gliding | 15
stop gliding | 16
build denied | 17
continue break | 18
change skin | 19
set enchantment seed | 20
start swimming | 21
stop swimming | 22
start spin attack | 23
stop spin attack | 24
