---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  resource-pack-data-info

# Resource pack data info

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.resource_pack_data_info)

**Id**: 82

**Id** (hex): 52

**Id** (bin): 01010010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Endianness
---|---|:---:
id | string | 
max chunk size | uint | little endian
chunk count | uint | little endian
compressed pack size | ulong | little endian
sha256 | string |
