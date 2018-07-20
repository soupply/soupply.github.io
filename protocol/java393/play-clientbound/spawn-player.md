---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  spawn-player

# Spawn player

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.SpawnPlayer)

**Id**: 5

**Id** (hex): 05

**Id** (bin): 00000101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
uuid | uuid
position | double&lt;xyz&gt;
yaw | ubyte
pitch | ubyte
metadata | [metadata](/protocol/java393/metadata)
