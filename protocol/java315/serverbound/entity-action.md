---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [serverbound](/protocol/java315/serverbound)  /  entity-action

# Entity action

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Serverbound.EntityAction)

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

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
