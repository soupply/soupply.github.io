---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  entity-equipment

# Entity equipment

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.EntityEquipment)

**Id**: 63

**Id** (hex): 3F

**Id** (bin): 00111111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
slot | varuint
item | [slot](/protocol/java340/types/slot)
