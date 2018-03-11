---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  add-painting

# Add painting

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#play.add_painting)

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
position | [blockPosition](/protocol/bedrock150/types/block-position)
direction | varint
title | string
