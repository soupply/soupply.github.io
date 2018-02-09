---
layout: default
---

[home](/) ➡ [pocket101](/protocol/pocket101) ➡ [play](/protocol/pocket101/play) ➡ chunk-radius-updated

# Chunk-radius-updated

**Id**: 69

**Id** (hex): 45

**Id** (bin): 01000101

✔️

✔️

Packet sent always and only in response to [RequestChunkRadius](#play_request-chunk-radius) to change the client's view distance.

## Fields

Name | Type
---|---
[radius](#radius) | varint

### radius

View distance that may be different from the client's one if the server sets a limit on the view distance.

