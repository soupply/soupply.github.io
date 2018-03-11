---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  add-entity

# Add entity

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#play.add_entity)

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
attributes | [attribute](/protocol/pocket102/types/attribute)[]
metadata | [metadata](/protocol/pocket102/metadata)
links | [link](/protocol/pocket102/types/link)[]
