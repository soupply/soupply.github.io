---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  world-border

# World border

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.WorldBorder)

**Id**: 55

**Id** (hex): 37

**Id** (bin): 00110111

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
