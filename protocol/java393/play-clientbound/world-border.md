---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  world-border

# World border

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.WorldBorder)

**Id**: 59

**Id** (hex): 3B

**Id** (bin): 00111011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
action | varuint

## Variants

Variant | Field | Value
---|---|:---:
[Set Size](#set_size) | action | 0
[Lerp Size](#lerp_size) | action | 1
[Set Center](#set_center) | action | 2
[Initialize](#initialize) | action | 3
[Set Warning Time](#set_warning_time) | action | 4
[Set Warning Blocks](#set_warning_blocks) | action | 5

### Set Size

### Additional Fields

Name | Type
---|---
diameter | double

### Lerp Size

### Additional Fields

Name | Type
---|---
old diameter | double
new diameter | double
speed | varulong

### Set Center

### Additional Fields

Name | Type
---|---
center | double&lt;xyz&gt;

### Initialize

### Additional Fields

Name | Type
---|---
center | double&lt;xyz&gt;
old diameter | double
new diameter | double
speed | varulong
portal teleport boundary | varuint
warning time | varuint
warning blocks | varuint

### Set Warning Time

### Additional Fields

Name | Type
---|---
warning time | varuint

### Set Warning Blocks

### Additional Fields

Name | Type
---|---
warning blocks | varuint
