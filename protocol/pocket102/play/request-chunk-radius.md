---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  request-chunk-radius

# Request chunk radius

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.RequestChunkRadius)

**Id**: 68

**Id** (hex): 44

**Id** (bin): 01000100

**Clientbound**: ✖️

**Serverbound**: ✔️

Packet sent by the client when its view-distance is updated and when it spawns for the first time a world. A [ChunkRadiusUpdate](#play_chunk-radius_update) should always be sent in response, otherwise the player will not update its view distance.

## Fields

Name | Type
---|---
[radius](#radius) | varint

### radius

Number of chunks before the fog starts to appear in the client's view. The value of this field is usually between 8 and 14.
