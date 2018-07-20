---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  entity-properties

# Entity properties

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.EntityProperties)

**Id**: 82

**Id** (hex): 52

**Id** (bin): 01010010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
entity id | varuint | [](/protocol/java393/types/)
attributes | [attribute](/protocol/java393/types/attribute)[] | uint
