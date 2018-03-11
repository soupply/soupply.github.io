---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  clientbound-map-item-data

# Clientbound map item data

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#play.clientbound_map_item_data)

**Id**: 66

**Id** (hex): 42

**Id** (bin): 01000010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
map id | varlong | 
[update](#update) | varuint | 
scale | ubyte | <code>update</code> is equal to <code>2 |  | update</code> is equal to <code>4</code>
size | varint&lt;xz&gt; | <code>update</code> is equal to <code>2</code>
offset | varint&lt;xz&gt; | <code>update</code> is equal to <code>2</code>
data | bytes | <code>update</code> is equal to <code>2</code>
decorations | [decoration](/protocol/pocket100/types/decoration)[] | <code>update</code> is equal to <code>4</code>

### update

**Constants**:

Name | Value
---|:---:
texture | 2
decorations | 4
entities | 8
