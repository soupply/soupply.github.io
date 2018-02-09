---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  add-entity

# Add entity

**Id**: 14

**Id** (hex): 0E

**Id** (bin): 00001110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varlong
type | varuint
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
pitch | float
yaw | float
attributes | [attribute](/protocol/pocket101/types/attribute)[]
metadata | [metadata](/protocol/pocket101/metadata)
links | [link](/protocol/pocket101/types/link)[]

