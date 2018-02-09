---
layout: default
---

[home](/) ➡ [bedrock137](/protocol/bedrock137) ➡ [types](/protocol/bedrock137/types) ➡ slot

# Slot

Informations about a slot, that, if not empty, contains an item id and meta, the count (0-255) and, optionally, an nbt tag for enchantments, custom name, colours and more.

## Fields

Name | Type | When
---|---|:---:
[id](#id) | varint | 
[meta and count](#meta-and-count) | varint | <code>id</code> is greater than <code>0</code>
[nbt](#nbt) | [nbt](/protocol/bedrock137/arrays) | <code>id</code> is greater than <code>0</code>
can place on | string[] | 
can destroy | string[] | 

### id

Item's id or 0 if the slot is empty.

### meta and count

Item's meta or uses (unsigned short) left-shifted 8 times and the count (unisgned byte).
Examples:
```javascript
var encoded = item.meta << 8 | item.count
var meta = encoded >> 8
var count = count & 255
```

### nbt

Optional nbt data encoded as a nameless little-endian compound tag.

