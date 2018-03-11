---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  set-spawn-position

# Set spawn position

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.set_spawn_position)

**Id**: 43

**Id** (hex): 2B

**Id** (bin): 00101011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
? | varint
position | [blockPosition](/protocol/pocket101/types/block-position)
? | bool
