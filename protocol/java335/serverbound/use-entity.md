---
layout: default
---

[home](/) ➡ [java335](/protocol/java335) ➡ [serverbound](/protocol/java335/serverbound) ➡ use-entity

# Use-entity

**Id**: 11

**Id** (hex): 0B

**Id** (bin): 00001011

✔️

✔️

## Fields

Name | Type | When
---|---|:---:
target | varuint | 
[type](#type) | varuint | 
target position | float&lt;xyz&gt; | <code>type</code> is equal to <code>2</code>
[hand](#hand) | varuint | <code>type</code> is equal to <code>0 |  | type</code> is equal to <code>2</code>

### type

**Constants**:
Name | Value
---|:---:
[interact](type_interact) | 0
[attack](type_attack) | 1
[interact at](type_interact-at) | 2

### hand

**Constants**:
Name | Value
---|:---:
[main hand](hand_main-hand) | 0
[off hand](hand_off-hand) | 1

