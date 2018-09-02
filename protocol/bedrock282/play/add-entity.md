---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  add-entity

# Add entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.AddEntity)

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
head yaw | float
attributes | [attribute](/protocol/bedrock282/types/attribute)[]
metadata | [metadata](/protocol/bedrock282/metadata)
links | [link](/protocol/bedrock282/types/link)[]
