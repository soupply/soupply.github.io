---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  add-entity

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
attributes | [attribute](/protocol/pocket100/types/attribute)[]
metadata | [metadata](/protocol/pocket100/metadata)
links | [link](/protocol/pocket100/types/link)[]
