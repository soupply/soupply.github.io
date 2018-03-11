---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  player-digging

# Player digging

Encode/decode this packet in [Sandbox](../../../sandbox/java335#serverbound.player_digging)

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[status](#status) | varuint
position | ulong
face | ubyte

### status

**Constants**:

Name | Value
---|:---:
start digging | 0
cancel digging | 1
finish digging | 2
drop item stack | 3
drop item | 4
shoot arrow | 5
finish eating | 5
swap item in hand | 6
