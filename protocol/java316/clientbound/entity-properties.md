---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  entity-properties

# Entity properties

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.EntityProperties)

**Id**: 74

**Id** (hex): 4A

**Id** (bin): 01001010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
entity id | varuint | [](/protocol/java316/types/)
attributes | [attribute](/protocol/java316/types/attribute)[] | uint
