---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  entity-relative-move

# Entity relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java338#clientbound.entity_relative_move)

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
on ground | bool
