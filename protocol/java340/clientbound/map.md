---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  map

# Map

Encode/decode this packet in [Sandbox](../../../sandbox/java340#clientbound.map)

**Id**: 36

**Id** (hex): 24

**Id** (bin): 00100100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
map id | varuint
scale | ubyte
show icons | bool
icons | [icon](/protocol/java340/types/icon)[]
colums | ubyte
rows | ubyte
offset | ubyte&lt;xz&gt;
data | ubyte[]
