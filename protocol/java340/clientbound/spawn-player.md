---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  spawn-player

# Spawn player

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.SpawnPlayer)

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
metadata | [metadata](/protocol/java340/metadata)
