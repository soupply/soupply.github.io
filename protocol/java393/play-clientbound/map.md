---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  map

# Map

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.Map)

**Id**: 38

**Id** (hex): 26

**Id** (bin): 00100110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
map id | varuint
scale | ubyte
show icons | bool
icons | [icon](/protocol/java393/types/icon)[]
colums | ubyte
rows | ubyte
offset | ubyte&lt;xz&gt;
data | ubyte[]
