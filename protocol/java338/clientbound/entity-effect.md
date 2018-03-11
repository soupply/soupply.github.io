---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  entity-effect

# Entity effect

Encode/decode this packet in [Sandbox](../../../sandbox/java338#clientbound.entity_effect)

**Id**: 79

**Id** (hex): 4F

**Id** (bin): 01001111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
effect id | ubyte
amplifier | ubyte
duration | varuint
[flags](#flags) | ubyte

### flags

**Constants**:

Name | Value
---|:---:
ambient | 1
show particles | 2
