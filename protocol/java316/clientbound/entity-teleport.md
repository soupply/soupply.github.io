---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  entity-teleport

# Entity teleport

Encode/decode this packet in [Sandbox](../../../sandbox/java316#clientbound.entity_teleport)

**Id**: 73

**Id** (hex): 49

**Id** (bin): 01001001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
position | double&lt;xyz&gt;
yaw | ubyte
pitch | ubyte
on ground | bool
