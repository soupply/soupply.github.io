---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  join-game

# Join-game

**Id**: 35

**Id** (hex): 23

**Id** (bin): 00100011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | uint
[gamemode](#gamemode) | ubyte
[dimension](#dimension) | int
[difficulty](#difficulty) | ubyte
max players | ubyte
[level type](#level-type) | string
reduced debug | bool

### gamemode

**Constants**:
Name | Value
---|:---:
[survival](gamemode_survival) | 0
[creative](gamemode_creative) | 1
[adventure](gamemode_adventure) | 2
[spectator](gamemode_spectator) | 3

### dimension

**Constants**:
Name | Value
---|:---:
[nether](dimension_nether) | -1
[overworld](dimension_overworld) | 0
[end](dimension_end) | 1

### difficulty

**Constants**:
Name | Value
---|:---:
[peaceful](difficulty_peaceful) | 0
[easy](difficulty_easy) | 1
[normal](difficulty_normal) | 2
[hard](difficulty_hard) | 3

### level type

**Constants**:
Name | Value
---|:---:
[infinity](level-type_infinity) | default
[flat](level-type_flat) | flat
[amplified](level-type_amplified) | amplified
[large biomes](level-type_large-biomes) | largeBiomes

