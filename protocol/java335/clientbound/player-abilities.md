---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  player-abilities

# Player abilities

Encode/decode this packet in [Sandbox](../../../sandbox/java335#clientbound.player_abilities)

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
