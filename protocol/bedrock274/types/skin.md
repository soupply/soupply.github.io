---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [types](/protocol/bedrock274/types)  /  skin

# Skin

## Fields

Name | Type
---|---
[name](#name) | string
[data](#data) | ubyte[]
cape data | ubyte[]
geometry name | string
geometry data | ubyte[]

### name

Name of the skin. It's used to render the shape of the skin correctly.

### data

Bytes of the skin in format RGBA. The length should be 8192 or 16382.
