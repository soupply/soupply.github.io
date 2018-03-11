---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  animation

# Animation

Encode/decode this packet in [Sandbox](../../../sandbox/java335#clientbound.animation)

**Id**: 6

**Id** (hex): 06

**Id** (bin): 00000110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
[animation](#animation) | ubyte

### animation

**Constants**:

Name | Value
---|:---:
swing main arm | 0
take damage | 1
leave bed | 2
swing offhand | 3
critical effect | 4
magical critical effect | 5
