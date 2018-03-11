---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [serverbound](/protocol/java210/serverbound)  /  player-abilities

# Player abilities

Encode/decode this packet in [Sandbox](../../../sandbox/java210#serverbound.player_abilities)

**Id**: 18

**Id** (hex): 12

**Id** (bin): 00010010

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[flags](#flags) | ubyte
flying speed | float
walking speed | float

### flags

**Constants**:

Name | Value
---|:---:
creative mode | 1
flying | 2
allow flying | 4
invincible | 8
