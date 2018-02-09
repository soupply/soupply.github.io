---
layout: default
---

[home](/) ➡ [pocket113](/protocol/pocket113) ➡ [play](/protocol/pocket113/play) ➡ chunk-radius-updated

# Chunk-radius-updated

**Id**: 70

**Id** (hex): 46

**Id** (bin): 01000110

✔️

✔️

Packet sent always and only in response to [RequestChunkRadius](#play_request-chunk-radius) to change the client's view distance.

## Fields

Name | Type
---|---
[radius](#radius) | varint

### radius

View distance that may be different from the client's one if the server sets a limit on the view distance.

