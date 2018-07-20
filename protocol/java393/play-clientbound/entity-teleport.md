---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  entity-teleport

# Entity teleport

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.EntityTeleport)

**Id**: 80

**Id** (hex): 50

**Id** (bin): 01010000

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
