---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  named-sound-effect

# Named sound effect

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.NamedSoundEffect)

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
