---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  request-chunk-radius

# Request-chunk-radius

**Id**: 69

**Id** (hex): 45

**Id** (bin): 01000101

**Clientbound**: ✖️

**Serverbound**: ✔️

Packet sent by the client when its view-distance is updated and when it spawns for the first time a world. A [ChunkRadiusUpdate](#play_chunk-radius_update) should always be sent in response, otherwise the player will not update its view distance.

## Fields

Name | Type
---|---
[radius](#radius) | varint

### radius

Number of chunks before the fog starts to appear in the client's view. The value of this field is usually between 8 and 14.

