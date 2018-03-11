---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  player-abilities

# Player abilities

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Clientbound.PlayerAbilities)

**Id**: 43

**Id** (hex): 2B

**Id** (bin): 00101011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[flags](#flags) | ubyte
flying speed | float
fov modifier | float

### flags

**Constants**:

Name | Value
---|:---:
invulnerable | 1
flying | 2
allow flying | 4
creative mode | 8
