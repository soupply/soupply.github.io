---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  multi-block-change

# Multi block change

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.MultiBlockChange)

**Id**: 15

**Id** (hex): 0F

**Id** (bin): 00001111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
chunk | int&lt;xz&gt;
changes | [blockChange](/protocol/java393/types/block-change)[]
