---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  entity-action

# Entity action

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.EntityAction)

**Id**: 25

**Id** (hex): 19

**Id** (bin): 00011001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varuint
[action](#action) | varuint
jump boost | varuint

### action

**Constants**:

Name | Value
---|:---:
start sneaking | 0
stop sneaking | 1
leave bed | 2
start sprinting | 3
stop sprinting | 4
start horse jump | 5
stop horse jump | 6
open horse inventory | 7
start elytra flying | 8
