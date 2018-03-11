---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [serverbound](/protocol/java340/serverbound)  /  player-abilities

# Player abilities

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Serverbound.PlayerAbilities)

**Id**: 19

**Id** (hex): 13

**Id** (bin): 00010011

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
