---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  spawn-object

# Spawn object

Encode/decode this packet in [Sandbox](../../../sandbox/java335#clientbound.spawn_object)

**Id**: 0

**Id** (hex): 00

**Id** (bin): 00000000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
uuid | uuid
type | ubyte
position | double&lt;xyz&gt;
pitch | ubyte
yaw | ubyte
data | int
velocity | short&lt;xyz&gt;
