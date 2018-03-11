---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  multi-block-change

# Multi block change

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Clientbound.MultiBlockChange)

**Id**: 16

**Id** (hex): 10

**Id** (bin): 00010000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
chunk | int&lt;xz&gt;
changes | [blockChange](/protocol/java210/types/block-change)[]
