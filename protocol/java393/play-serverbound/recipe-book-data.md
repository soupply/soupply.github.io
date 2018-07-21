---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  recipe-book-data

# Recipe book data

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.RecipeBookData)

**Id**: 27

**Id** (hex): 1B

**Id** (bin): 00011011

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
crafting recipe book opened | bool
crafting recipe filter active | bool
smelting recipe book opened | bool
smelting recipe filter active | bool
