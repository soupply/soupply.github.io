---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  crafting-book-data

# Crafting book data

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Serverbound.CraftingBookData)

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
