---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  sound-effect

# Sound effect

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.SoundEffect)

**Id**: 77

**Id** (hex): 4D

**Id** (bin): 01001101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
sound id | varuint
category | varuint
position | int&lt;xyz&gt;
volume | float
pitch | float
