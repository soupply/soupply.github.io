---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  entity-look-and-relative-move

# Entity look and relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.EntityLookAndRelativeMove)

**Id**: 41

**Id** (hex): 29

**Id** (bin): 00101001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
delta | short&lt;xyz&gt;
yaw | ubyte
pitch | ubyte
on ground | bool
