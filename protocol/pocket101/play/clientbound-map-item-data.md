---
layout: default
---

[home](/) ➡ [pocket101](/protocol/pocket101) ➡ [play](/protocol/pocket101/play) ➡ clientbound-map-item-data

# Clientbound-map-item-data

**Id**: 66

**Id** (hex): 42

**Id** (bin): 01000010

✔️

✔️

## Fields

Name | Type | When
---|---|:---:
map id | varlong | 
[update](#update) | varuint | 
scale | ubyte | <code>update</code> is equal to <code>2 |  | update</code> is equal to <code>4</code>
[size](#size) | varint&lt;xz&gt; | <code>update</code> is equal to <code>2</code>
offset | varint&lt;xz&gt; | <code>update</code> is equal to <code>2</code>
[data](#data) | bytes | <code>update</code> is equal to <code>2</code>
decorations | [decoration](/protocol/pocket101/types/decoration)[] | <code>update</code> is equal to <code>4</code>

### update

**Constants**:
Name | Value
---|:---:
[texture](update_texture) | 2
[decorations](update_decorations) | 4
[entities](update_entities) | 8

### size

Colums and rows.

### data

ARGB colours encoded as unsigned varints.

