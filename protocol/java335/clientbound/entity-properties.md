---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  entity-properties

# Entity properties

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.EntityProperties)

**Id**: 77

**Id** (hex): 4D

**Id** (bin): 01001101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
entity id | varuint | [](/protocol/java335/types/)
attributes | [attribute](/protocol/java335/types/attribute)[] | uint
