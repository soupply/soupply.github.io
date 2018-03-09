---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  respawn

# Respawn

**Id**: 51

**Id** (hex): 33

**Id** (bin): 00110011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[dimension](#dimension) | int
[difficulty](#difficulty) | ubyte
[gamemode](#gamemode) | ubyte
[level type](#level-type) | string

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

### gamemode

**Constants**:

Name | Value
---|:---:
[survival](gamemode_survival) | 0
[creative](gamemode_creative) | 1
[adventure](gamemode_adventure) | 2
[spectator](gamemode_spectator) | 3

### level type

**Constants**:

Name | Value
---|:---:
[infinity](level-type_infinity) | default
[flat](level-type_flat) | flat
[amplified](level-type_amplified) | amplified
[large biomes](level-type_large-biomes) | largeBiomes
