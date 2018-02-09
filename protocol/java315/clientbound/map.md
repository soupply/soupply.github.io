---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  map

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
icons | [icon](/protocol/java315/types/icon)[]
colums | ubyte
rows | ubyte
offset | ubyte&lt;xz&gt;
data | ubyte[]

