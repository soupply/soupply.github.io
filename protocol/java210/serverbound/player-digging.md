---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [serverbound](/protocol/java210/serverbound)  /  player-digging

# Player digging

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Serverbound.PlayerDigging)

**Id**: 19

**Id** (hex): 13

**Id** (bin): 00010011

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
