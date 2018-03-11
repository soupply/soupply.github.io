---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  add-painting

# Add painting

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.AddPainting)

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
position | [blockPosition](/protocol/bedrock137/types/block-position)
direction | varint
title | string
