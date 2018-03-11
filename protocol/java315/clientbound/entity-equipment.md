---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  entity-equipment

# Entity equipment

Encode/decode this packet in [Sandbox](../../../sandbox/java315#clientbound.entity_equipment)

**Id**: 60

**Id** (hex): 3C

**Id** (bin): 00111100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
slot | varuint
item | [slot](/protocol/java315/types/slot)
