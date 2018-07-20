---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  entity-relative-move

# Entity relative move

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.EntityRelativeMove)

**Id**: 40

**Id** (hex): 28

**Id** (bin): 00101000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
delta | short&lt;xyz&gt;
on ground | bool
