---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  entity-look-and-relative-move

# Entity look and relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.EntityLookAndRelativeMove)

**Id**: 39

**Id** (hex): 27

**Id** (bin): 00100111

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
