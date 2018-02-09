---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  add-entity

# Add-entity

**Id**: 13

**Id** (hex): 0D

**Id** (bin): 00001101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varulong
type | varuint
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
pitch | float
yaw | float
attributes | [attribute](/protocol/bedrock150/types/attribute)[]
metadata | [metadata](/protocol/bedrock150/metadata)
links | [link](/protocol/bedrock150/types/link)[]

