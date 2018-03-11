---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  explode

# Explode

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.Explode)

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
destroyed blocks | [blockPosition](/protocol/bedrock141/types/block-position)[]
