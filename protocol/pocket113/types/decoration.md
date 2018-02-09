---
layout: default
---

[home](/) ➡ [pocket113](/protocol/pocket113) ➡ [types](/protocol/pocket113/types) ➡ decoration

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

