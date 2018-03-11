---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  resource-pack-chunk-data

# Resource pack chunk data

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#play.resource_pack_chunk_data)

**Id**: 81

**Id** (hex): 51

**Id** (bin): 01010001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Endianness
---|---|:---:
id | string | 
chunk index | uint | little endian
progress | ulong | little endian
data | ubyte[] |
