---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [types](/protocol/pocket100/types)  /  chunk-data

# Chunk data

⚠️️ This type is prefixed with its length encoded as **varuint** ⚠️️

## Fields

Name | Type
---|---
sections | [section](/protocol/pocket100/types/section)[]
heights | ushort[256]
biomes | ubyte[256]
borders | ubyte[]
extra data | [extraData](/protocol/pocket100/types/extra-data)[]
block entities | bytes

