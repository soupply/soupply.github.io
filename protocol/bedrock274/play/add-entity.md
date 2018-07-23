---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  add-entity

# Add entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.AddEntity)

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
attributes | [attribute](/protocol/bedrock274/types/attribute)[]
metadata | [metadata](/protocol/bedrock274/metadata)
links | [link](/protocol/bedrock274/types/link)[]
