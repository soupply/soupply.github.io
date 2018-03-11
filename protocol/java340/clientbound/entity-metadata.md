---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  entity-metadata

# Entity metadata

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.EntityMetadata)

**Id**: 60

**Id** (hex): 3C

**Id** (bin): 00111100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
metadata | [metadata](/protocol/java340/metadata)
