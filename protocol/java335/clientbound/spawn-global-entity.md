---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  spawn-global-entity

# Spawn global entity

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.SpawnGlobalEntity)

**Id**: 2

**Id** (hex): 02

**Id** (bin): 00000010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
[type](#type) | ubyte
position | double&lt;xyz&gt;

### type

**Constants**:

Name | Value
---|:---:
thunderbolt | 1
