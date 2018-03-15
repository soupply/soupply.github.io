---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  resource-pack-chunk-data

# Resource pack chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.ResourcePackChunkData)

**Id**: 83

**Id** (hex): 53

**Id** (bin): 01010011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
id | string | [](/protocol/bedrock150/types/)
chunk index | uint | [](/protocol/bedrock150/types/)
progress | ulong | [](/protocol/bedrock150/types/)
data | ubyte[] | uint
