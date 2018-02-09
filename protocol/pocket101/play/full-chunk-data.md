---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  full-chunk-data

# Full-chunk-data

**Id**: 58

**Id** (hex): 3A

**Id** (bin): 00111010

**Clientbound**: ✔️

**Serverbound**: ✖️

Sends a 16x16 chunk to the client with its blocks, lights and block entities (tiles).

## Fields

Name | Type
---|---
[position](#position) | varint&lt;xz&gt;
data | [chunkData](/protocol/pocket101/types/chunk-data)

### position

Coordinates of the chunk.

