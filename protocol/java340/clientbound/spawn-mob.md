---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  spawn-mob

# Spawn-mob

**Id**: 3

**Id** (hex): 03

**Id** (bin): 00000011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
uuid | uuid
type | varuint
position | double&lt;xyz&gt;
yaw | ubyte
pitch | ubyte
head pitch | ubyte
velocity | short&lt;xyz&gt;
metadata | [metadata](/protocol/java340/metadata)

