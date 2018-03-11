---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  player-abilities

# Player abilities

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.PlayerAbilities)

**Id**: 44

**Id** (hex): 2C

**Id** (bin): 00101100

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
