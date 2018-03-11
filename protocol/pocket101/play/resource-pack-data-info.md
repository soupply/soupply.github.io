---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  resource-pack-data-info

# Resource pack data info

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.ResourcePackDataInfo)

**Id**: 79

**Id** (hex): 4F

**Id** (bin): 01001111

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
