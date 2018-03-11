---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  spawn-global-entity

# Spawn global entity

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.SpawnGlobalEntity)

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
