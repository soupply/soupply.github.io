---
layout: default
---

[home](/) ➡ [java316](/protocol/java316) ➡ [clientbound](/protocol/java316/clientbound) ➡ entity-effect

# Entity-effect

**Id**: 75

**Id** (hex): 4B

**Id** (bin): 01001011

✔️

✔️

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

