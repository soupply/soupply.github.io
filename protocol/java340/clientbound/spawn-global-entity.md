---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  spawn-global-entity

# Spawn global entity

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.SpawnGlobalEntity)

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
