---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  spawn-painting

# Spawn painting

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.SpawnPainting)

**Id**: 4

**Id** (hex): 04

**Id** (bin): 00000100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
uuid | uuid
[motive](#motive) | varuint
position | ulong
[direction](#direction) | ubyte

### motive

**Constants**:

Name | Value
---|:---:
kebab | 0
aztec | 1
alban | 2
aztec2 | 3
bomb | 4
plant | 5
wasteland | 6
pool | 7
courbet | 8
sea | 9
sunset | 10
creebet | 11
wanderer | 12
graham | 13
match | 14
bust | 15
stage | 16
void | 17
sull and roses | 18
wither | 19
fighters | 20
pointer | 21
pigscene | 22
burning skull | 23
skeleton | 24
donkey kong | 25

### direction

**Constants**:

Name | Value
---|:---:
south | 0
west | 1
north | 2
east | 3
