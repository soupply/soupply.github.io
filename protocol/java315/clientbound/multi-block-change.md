---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  multi-block-change

# Multi block change

Encode/decode this packet in [Sandbox](../../../sandbox/java315#clientbound.multi_block_change)

**Id**: 16

**Id** (hex): 10

**Id** (bin): 00010000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
chunk | int&lt;xz&gt;
changes | [blockChange](/protocol/java315/types/block-change)[]
