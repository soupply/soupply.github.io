---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  sound-effect

# Sound effect

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.SoundEffect)

**Id**: 70

**Id** (hex): 46

**Id** (bin): 01000110

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
