---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  entity-look-and-relative-move

# Entity look and relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java340#clientbound.entity_look_and_relative_move)

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
