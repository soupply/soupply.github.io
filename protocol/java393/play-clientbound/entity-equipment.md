---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  entity-equipment

# Entity equipment

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.EntityEquipment)

**Id**: 66

**Id** (hex): 42

**Id** (bin): 01000010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
slot | varuint
item | [slot](/protocol/java393/types/slot)
