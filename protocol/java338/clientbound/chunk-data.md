---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  chunk-data

# Chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.ChunkData)

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
