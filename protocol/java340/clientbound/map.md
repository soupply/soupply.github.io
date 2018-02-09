---
layout: default
---

[home](/) ➡ [java340](/protocol/java340) ➡ [clientbound](/protocol/java340/clientbound) ➡ map

# Map

**Id**: 36

**Id** (hex): 24

**Id** (bin): 00100100

✔️

✔️

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

