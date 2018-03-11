---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  add-painting

# Add painting

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.add_painting)

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
position | [blockPosition](/protocol/pocket101/types/block-position)
direction | varint
title | string
