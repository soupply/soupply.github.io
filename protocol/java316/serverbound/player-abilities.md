---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [serverbound](/protocol/java316/serverbound)  /  player-abilities

# Player abilities

**Id**: 18

**Id** (hex): 12

**Id** (bin): 00010010

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[flags](#flags) | ubyte
flying speed | float
walking speed | float

### flags

**Constants**:

Name | Value
---|:---:
[creative mode](flags_creative-mode) | 1
[flying](flags_flying) | 2
[allow flying](flags_allow-flying) | 4
[invincible](flags_invincible) | 8
