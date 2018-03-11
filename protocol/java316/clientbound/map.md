---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  map

# Map

Encode/decode this packet in [Sandbox](../../../sandbox/java316#clientbound.map)

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
icons | [icon](/protocol/java316/types/icon)[]
colums | ubyte
rows | ubyte
offset | ubyte&lt;xz&gt;
data | ubyte[]
