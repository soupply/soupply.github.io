---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  entity-equipment

# Entity equipment

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.EntityEquipment)

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
item | [slot](/protocol/java338/types/slot)
