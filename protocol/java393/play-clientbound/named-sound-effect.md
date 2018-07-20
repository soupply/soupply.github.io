---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  named-sound-effect

# Named sound effect

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.NamedSoundEffect)

**Id**: 26

**Id** (hex): 1A

**Id** (bin): 00011010

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
