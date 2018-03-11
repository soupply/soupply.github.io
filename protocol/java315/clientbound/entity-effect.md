---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  entity-effect

# Entity effect

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.EntityEffect)

**Id**: 75

**Id** (hex): 4B

**Id** (bin): 01001011

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
