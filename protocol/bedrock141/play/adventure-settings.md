---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  adventure-settings

# Adventure settings

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.AdventureSettings)

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
immutable world | 1
pvp disabled | 2
pvm disabled | 4
mvp disbaled | 8
evp disabled | 16
auto jump | 32
allow flight | 64
no clip | 128
flying | 512
muted | 1024

### permission level

**Constants**:

Name | Value
---|:---:
level user | 0
level operator | 1
level host | 2
level automation | 3
level admin | 4

### abilities

**Constants**:

Name | Value
---|:---:
build and mine | 1
doors and switches | 2
open containers | 4
attack players | 8
attack mobs | 16
op | 32
teleport | 64

### player rank

**Constants**:

Name | Value
---|:---:
visitor | 0
member | 1
operator | 2
custom | 3
