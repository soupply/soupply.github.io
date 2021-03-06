---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  full-chunk-data

# Full chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.FullChunkData)

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
[data](#data) | [chunkData](/protocol/bedrock274/types/chunk-data)

### position

Coordinates of the chunk.

### data

Chunk's blocks, lights and other immutable data.
