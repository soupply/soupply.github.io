---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [serverbound](/protocol/java315/serverbound)  /  entity-action

# Entity-action

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
[start sneaking](action_start-sneaking) | 0
[stop sneaking](action_stop-sneaking) | 1
[leave bed](action_leave-bed) | 2
[start sprinting](action_start-sprinting) | 3
[stop sprinting](action_stop-sprinting) | 4
[start horse jump](action_start-horse-jump) | 5
[stop horse jump](action_stop-horse-jump) | 6
[open horse inventory](action_open-horse-inventory) | 7
[start elytra flying](action_start-elytra-flying) | 8

