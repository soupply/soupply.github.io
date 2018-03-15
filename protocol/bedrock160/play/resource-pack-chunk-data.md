---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  resource-pack-chunk-data

# Resource pack chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#Play.ResourcePackChunkData)

**Id**: 83

**Id** (hex): 53

**Id** (bin): 01010011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
id | string | [](/protocol/bedrock160/types/)
chunk index | uint | [](/protocol/bedrock160/types/)
progress | ulong | [](/protocol/bedrock160/types/)
data | ubyte[] | uint
