---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  adventure-settings

# Adventure settings

**Id**: 55

**Id** (hex): 37

**Id** (bin): 00110111

**Clientbound**: ✔️

**Serverbound**: ✔️

Updates the world's settings and client's permissions.

## Fields

Name | Type
---|---
[flags](#flags) | varuint
[permission level](#permission-level) | varuint
[abilities](#abilities) | varuint
[player rank](#player-rank) | varuint
custom permissions | varuint
entity id | long

### flags

**Constants**:

Name | Value
---|:---:
[immutable world](flags_immutable-world) | 1
[pvp disabled](flags_pvp-disabled) | 2
[pvm disabled](flags_pvm-disabled) | 4
[mvp disbaled](flags_mvp-disbaled) | 8
[evp disabled](flags_evp-disabled) | 16
[auto jump](flags_auto-jump) | 32
[allow flight](flags_allow-flight) | 64
[no clip](flags_no-clip) | 128
[flying](flags_flying) | 512
[muted](flags_muted) | 1024

### permission level

**Constants**:

Name | Value
---|:---:
[level user](permission-level_level-user) | 0
[level operator](permission-level_level-operator) | 1
[level host](permission-level_level-host) | 2
[level automation](permission-level_level-automation) | 3
[level admin](permission-level_level-admin) | 4

### abilities

**Constants**:

Name | Value
---|:---:
[build and mine](abilities_build-and-mine) | 1
[doors and switches](abilities_doors-and-switches) | 2
[open containers](abilities_open-containers) | 4
[attack players](abilities_attack-players) | 8
[attack mobs](abilities_attack-mobs) | 16
[op](abilities_op) | 32
[teleport](abilities_teleport) | 64

### player rank

**Constants**:

Name | Value
---|:---:
[visitor](player-rank_visitor) | 0
[member](player-rank_member) | 1
[operator](player-rank_operator) | 2
[custom](player-rank_custom) | 3

