---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  map

# Map

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
icons | [icon](/protocol/java210/types/icon)[]
colums | ubyte
rows | ubyte
offset | ubyte&lt;xz&gt;
data | ubyte[]

