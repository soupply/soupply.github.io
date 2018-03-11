---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  entity-teleport

# Entity teleport

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.EntityTeleport)

**Id**: 76

**Id** (hex): 4C

**Id** (bin): 01001100

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
