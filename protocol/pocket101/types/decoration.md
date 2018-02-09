---
layout: default
---

[home](/) ➡ [pocket101](/protocol/pocket101) ➡ [types](/protocol/pocket101/types) ➡ decoration

# Decoration

## Fields

Name | Type | Endianness
---|---|:---:
rotation and icon | varint | 
position | ubyte&lt;xz&gt; | 
label | string | 
[color](#color) | uint | little endian

### color

ARGB colour.

