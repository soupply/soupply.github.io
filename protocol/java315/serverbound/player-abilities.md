---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [serverbound](/protocol/java315/serverbound)  /  player-abilities

# Player abilities

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Serverbound.PlayerAbilities)

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
