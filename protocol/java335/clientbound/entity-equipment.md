---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  entity-equipment

# Entity equipment

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.EntityEquipment)

**Id**: 62

**Id** (hex): 3E

**Id** (bin): 00111110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
slot | varuint
item | [slot](/protocol/java335/types/slot)
