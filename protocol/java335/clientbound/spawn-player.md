---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  spawn-player

# Spawn player

Encode/decode this packet in [Sandbox](../../../sandbox/java335#clientbound.spawn_player)

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
metadata | [metadata](/protocol/java335/metadata)
