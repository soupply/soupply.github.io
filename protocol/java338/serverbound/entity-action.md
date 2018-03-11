---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [serverbound](/protocol/java338/serverbound)  /  entity-action

# Entity action

Encode/decode this packet in [Sandbox](../../../sandbox/java338#serverbound.entity_action)

**Id**: 21

**Id** (hex): 15

**Id** (bin): 00010101

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
