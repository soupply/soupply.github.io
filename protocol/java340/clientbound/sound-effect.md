---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  sound-effect

# Sound effect

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.SoundEffect)

**Id**: 73

**Id** (hex): 49

**Id** (bin): 01001001

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
