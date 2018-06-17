---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  explode

# Explode

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.Explode)

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
destroyed blocks | [blockPosition](/protocol/bedrock261/types/block-position)[]
