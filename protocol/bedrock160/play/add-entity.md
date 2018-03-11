---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  add-entity

# Add entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#play.add_entity)

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
attributes | [attribute](/protocol/bedrock160/types/attribute)[]
metadata | [metadata](/protocol/bedrock160/metadata)
links | [link](/protocol/bedrock160/types/link)[]
