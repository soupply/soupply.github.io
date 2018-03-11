---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  add-entity

# Add entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.AddEntity)

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
attributes | [attribute](/protocol/bedrock201/types/attribute)[]
metadata | [metadata](/protocol/bedrock201/metadata)
links | [link](/protocol/bedrock201/types/link)[]
