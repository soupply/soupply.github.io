---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  spawn-object

# Spawn object

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.SpawnObject)

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
