---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  spawn-player

# Spawn player

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.SpawnPlayer)

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
metadata | [metadata](/protocol/java316/metadata)
