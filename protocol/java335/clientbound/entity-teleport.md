---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  entity-teleport

# Entity teleport

Encode/decode this packet in [Sandbox](../../../sandbox/java335#clientbound.entity_teleport)

**Id**: 75

**Id** (hex): 4B

**Id** (bin): 01001011

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
