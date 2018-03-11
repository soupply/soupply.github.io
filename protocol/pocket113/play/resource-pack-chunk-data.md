---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  resource-pack-chunk-data

# Resource pack chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.resource_pack_chunk_data)

**Id**: 84

**Id** (hex): 54

**Id** (bin): 01010100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Endianness
---|---|:---:
id | string | 
chunk index | uint | little endian
progress | ulong | little endian
data | [uintLeBytes](/protocol/pocket113/arrays) |
