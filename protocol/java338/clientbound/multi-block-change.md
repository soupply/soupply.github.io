---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  multi-block-change

# Multi block change

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.MultiBlockChange)

**Id**: 16

**Id** (hex): 10

**Id** (bin): 00010000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
chunk | int&lt;xz&gt;
changes | [blockChange](/protocol/java338/types/block-change)[]
