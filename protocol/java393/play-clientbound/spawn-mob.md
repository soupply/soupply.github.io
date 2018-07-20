---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  spawn-mob

# Spawn mob

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.SpawnMob)

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
metadata | [metadata](/protocol/java393/metadata)
