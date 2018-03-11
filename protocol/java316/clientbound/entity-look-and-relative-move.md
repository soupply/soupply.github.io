---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  entity-look-and-relative-move

# Entity look and relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.EntityLookAndRelativeMove)

**Id**: 38

**Id** (hex): 26

**Id** (bin): 00100110

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
