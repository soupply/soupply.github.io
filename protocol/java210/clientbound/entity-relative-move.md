---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  entity-relative-move

# Entity relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java210#clientbound.entity_relative_move)

**Id**: 37

**Id** (hex): 25

**Id** (bin): 00100101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
delta | short&lt;xyz&gt;
on ground | bool
