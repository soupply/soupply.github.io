---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  add-painting

# Add painting

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.AddPainting)

**Id**: 22

**Id** (hex): 16

**Id** (bin): 00010110

**Clientbound**: ✔️

**Serverbound**: ✖️

Spawns a painting entity in the world.

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varulong
position | [blockPosition](/protocol/bedrock282/types/block-position)
direction | varint
title | string
