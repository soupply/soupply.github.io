---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  multi-block-change

# Multi block change

Encode/decode this packet in [Sandbox](../../../sandbox/java340#clientbound.multi_block_change)

**Id**: 16

**Id** (hex): 10

**Id** (bin): 00010000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
chunk | int&lt;xz&gt;
changes | [blockChange](/protocol/java340/types/block-change)[]
