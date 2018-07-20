---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  player-abilities

# Player abilities

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.PlayerAbilities)

**Id**: 46

**Id** (hex): 2E

**Id** (bin): 00101110

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
