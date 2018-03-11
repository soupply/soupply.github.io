---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  add-painting

# Add painting

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.AddPainting)

**Id**: 24

**Id** (hex): 18

**Id** (bin): 00011000

**Clientbound**: ✔️

**Serverbound**: ✖️

Spawns a painting entity in the world.

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varlong
position | [blockPosition](/protocol/pocket105/types/block-position)
direction | varint
title | string
