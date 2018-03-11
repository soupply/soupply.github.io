---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [serverbound](/protocol/java340/serverbound)  /  crafting-book-data

# Crafting book data

Encode/decode this packet in [Sandbox](../../../sandbox/java340#serverbound.crafting_book_data)

**Id**: 23

**Id** (hex): 17

**Id** (bin): 00010111

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
type | varuint

## Variants

Variant | Field | Value
---|---|:---:
[Displayed Recipe](#displayed_recipe) | type | 1
[Crafting Book Status](#crafting_book_status) | type | 2

### Displayed Recipe

### Additional Fields

Name | Type
---|---
id | uint

### Crafting Book Status

### Additional Fields

Name | Type
---|---
book opened | bool
filtering | bool
