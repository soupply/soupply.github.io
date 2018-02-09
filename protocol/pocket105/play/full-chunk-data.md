---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  full-chunk-data

# Full-chunk-data

**Id**: 59

**Id** (hex): 3B

**Id** (bin): 00111011

**Clientbound**: ✔️

**Serverbound**: ✖️

Sends a 16x16 chunk to the client with its blocks, lights and block entities (tiles).

## Fields

Name | Type
---|---
[position](#position) | varint&lt;xz&gt;
data | [chunkData](/protocol/pocket105/types/chunk-data)

### position

Coordinates of the chunk.

