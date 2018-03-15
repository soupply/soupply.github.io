---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  entity-properties

# Entity properties

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.EntityProperties)

**Id**: 78

**Id** (hex): 4E

**Id** (bin): 01001110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
entity id | varuint | [](/protocol/java338/types/)
attributes | [attribute](/protocol/java338/types/attribute)[] | uint
