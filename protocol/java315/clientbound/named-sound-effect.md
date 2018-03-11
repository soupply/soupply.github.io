---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  named-sound-effect

# Named sound effect

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.NamedSoundEffect)

**Id**: 25

**Id** (hex): 19

**Id** (bin): 00011001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
name | string
category | varuint
position | int&lt;xyz&gt;
volume | float
pitch | float
