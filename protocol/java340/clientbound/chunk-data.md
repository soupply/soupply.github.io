---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  chunk-data

# Chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.ChunkData)

**Id**: 32

**Id** (hex): 20

**Id** (bin): 00100000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | int&lt;xz&gt;
full | bool
sections | varuint
data | ubyte[]
tiles count | varuint
tiles | bytes
