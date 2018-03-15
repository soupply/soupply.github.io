---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  entity-properties

# Entity properties

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Clientbound.EntityProperties)

**Id**: 74

**Id** (hex): 4A

**Id** (bin): 01001010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
entity id | varuint | [](/protocol/java210/types/)
attributes | [attribute](/protocol/java210/types/attribute)[] | uint
