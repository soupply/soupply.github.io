---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  entity-effect

# Entity-effect

**Id**: 78

**Id** (hex): 4E

**Id** (bin): 01001110

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
[ambient](flags_ambient) | 1
[show particles](flags_show-particles) | 2

