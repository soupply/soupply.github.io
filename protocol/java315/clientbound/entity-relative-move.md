---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  entity-relative-move

# Entity relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java315#clientbound.entity_relative_move)

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
