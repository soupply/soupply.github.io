---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  explode

# Explode

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#play.explode)

**Id**: 23

**Id** (hex): 17

**Id** (bin): 00010111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | float&lt;xyz&gt;
radius | float
destroyed blocks | [blockPosition](/protocol/bedrock160/types/block-position)[]
