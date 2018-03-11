---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  set-spawn-position

# Set spawn position

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#play.set_spawn_position)

**Id**: 43

**Id** (hex): 2B

**Id** (bin): 00101011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
? | varint
position | [blockPosition](/protocol/pocket102/types/block-position)
? | bool
