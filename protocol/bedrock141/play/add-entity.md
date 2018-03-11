---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  add-entity

# Add entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#play.add_entity)

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
attributes | [attribute](/protocol/bedrock141/types/attribute)[]
metadata | [metadata](/protocol/bedrock141/metadata)
links | [link](/protocol/bedrock141/types/link)[]
