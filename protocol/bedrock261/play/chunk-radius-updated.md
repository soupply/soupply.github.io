---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  chunk-radius-updated

# Chunk radius updated

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.ChunkRadiusUpdated)

**Id**: 70

**Id** (hex): 46

**Id** (bin): 01000110

**Clientbound**: ✔️

**Serverbound**: ✖️

Packet sent always and only in response to [RequestChunkRadius](#play_request-chunk-radius) to change the client's view distance.

## Fields

Name | Type
---|---
[radius](#radius) | varint

### radius

View distance that may be different from the client's one if the server sets a limit on the view distance.