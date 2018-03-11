---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  clientbound-map-item-data

# Clientbound map item data

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.clientbound_map_item_data)

**Id**: 67

**Id** (hex): 43

**Id** (bin): 01000011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
map id | varlong | 
[update](#update) | varuint | 
scale | ubyte | <code>update</code> is equal to <code>2 |  | update</code> is equal to <code>4</code>
[size](#size) | varint&lt;xz&gt; | <code>update</code> is equal to <code>2</code>
offset | varint&lt;xz&gt; | <code>update</code> is equal to <code>2</code>
[data](#data) | bytes | <code>update</code> is equal to <code>2</code>
decorations | [decoration](/protocol/pocket113/types/decoration)[] | <code>update</code> is equal to <code>4</code>

### update

**Constants**:

Name | Value
---|:---:
texture | 2
decorations | 4
entities | 8

### size

Colums and rows.

### data

ARGB colours encoded as unsigned varints.
