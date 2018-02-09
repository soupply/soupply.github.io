---
layout: default
---

[home](/) ➡ [pocket113](/protocol/pocket113) ➡ [types](/protocol/pocket113/types) ➡ section

# Section

Section of a chunk with informations about blocks and lights. The array of bytes are always ordered `xzy`.

## Fields

Name | Type | Default
---|---|:---:
storage version | ubyte | 0
block ids | ubyte[4096] | 
block metas | ubyte[2048] | 
sky light | ubyte[2048] | 
block light | ubyte[2048] | 

