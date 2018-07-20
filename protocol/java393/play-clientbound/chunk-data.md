---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  chunk-data

# Chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.ChunkData)

**Id**: 34

**Id** (hex): 22

**Id** (bin): 00100010

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
