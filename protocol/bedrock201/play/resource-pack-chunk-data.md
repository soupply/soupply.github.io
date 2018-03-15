---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  resource-pack-chunk-data

# Resource pack chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.ResourcePackChunkData)

**Id**: 83

**Id** (hex): 53

**Id** (bin): 01010011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
id | string | [](/protocol/bedrock201/types/)
chunk index | uint | [](/protocol/bedrock201/types/)
progress | ulong | [](/protocol/bedrock201/types/)
data | ubyte[] | uint
