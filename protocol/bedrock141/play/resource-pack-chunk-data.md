---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  resource-pack-chunk-data

# Resource pack chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.ResourcePackChunkData)

**Id**: 83

**Id** (hex): 53

**Id** (bin): 01010011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
id | string | [](/protocol/bedrock141/types/)
chunk index | uint | [](/protocol/bedrock141/types/)
progress | ulong | [](/protocol/bedrock141/types/)
data | ubyte[] | uint
