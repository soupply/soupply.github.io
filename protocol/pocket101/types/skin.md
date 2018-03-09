---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [types](/protocol/pocket101/types)  /  skin

# Skin

Player's [skin](http://minecraft.gamepedia.com/Skin).

## Fields

Name | Type
---|---
[name](#name) | string
[data](#data) | ubyte[]

### name

Name of the skin. It's used to render the shape of the skin correctly.

### data

Bytes of the skin in format RGBA. The length should be 8192 or 16382.
