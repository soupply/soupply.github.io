---
layout: default
---

[home](/) ➡ [pocket102](/protocol/pocket102) ➡ [types](/protocol/pocket102/types) ➡ decoration

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

