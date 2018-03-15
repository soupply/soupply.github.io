---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  resource-pack-chunk-data

# Resource pack chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.ResourcePackChunkData)

**Id**: 83

**Id** (hex): 53

**Id** (bin): 01010011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
id | string | [](/protocol/bedrock137/types/)
chunk index | uint | [](/protocol/bedrock137/types/)
progress | ulong | [](/protocol/bedrock137/types/)
data | ubyte[] | uint
