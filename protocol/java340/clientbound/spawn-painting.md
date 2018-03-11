---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  spawn-painting

# Spawn painting

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.SpawnPainting)

**Id**: 4

**Id** (hex): 04

**Id** (bin): 00000100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
uuid | uuid
title | string
position | ulong
[direction](#direction) | ubyte

### direction

**Constants**:

Name | Value
---|:---:
south | 0
west | 1
north | 2
east | 3
