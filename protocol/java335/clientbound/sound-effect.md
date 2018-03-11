---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  sound-effect

# Sound effect

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.SoundEffect)

**Id**: 72

**Id** (hex): 48

**Id** (bin): 01001000

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
