---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  animation

# Animation

Encode/decode this packet in [Sandbox](../../../sandbox/java340#clientbound.animation)

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
