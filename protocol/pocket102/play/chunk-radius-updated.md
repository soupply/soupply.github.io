---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  chunk-radius-updated

# Chunk radius updated

**Id**: 69

**Id** (hex): 45

**Id** (bin): 01000101

**Clientbound**: ✔️

**Serverbound**: ✖️

Packet sent always and only in response to [RequestChunkRadius](#play_request-chunk-radius) to change the client's view distance.

## Fields

Name | Type
---|---
[radius](#radius) | varint

### radius

View distance that may be different from the client's one if the server sets a limit on the view distance.

