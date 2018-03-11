---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  explode

# Explode

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.Explode)

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
destroyed blocks | [blockPosition](/protocol/bedrock201/types/block-position)[]
