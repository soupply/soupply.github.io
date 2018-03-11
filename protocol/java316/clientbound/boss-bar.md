---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  boss-bar

# Boss bar

Encode/decode this packet in [Sandbox](../../../sandbox/java316#clientbound.boss_bar)

**Id**: 12

**Id** (hex): 0C

**Id** (bin): 00001100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
uuid | uuid
action | varuint

## Variants

Variant | Field | Value
---|---|:---:
[Add](#add) | action | 0
[Remove](#remove) | action | 1
[Update Health](#update_health) | action | 2
[Update Title](#update_title) | action | 3
[Update Style](#update_style) | action | 4
[Update Flags](#update_flags) | action | 5

### Add

### Additional Fields

Name | Type
---|---
title | string
health | float
[color](#add_color) | varuint
[division](#add_division) | varuint
[flags](#add_flags) | ubyte

### color

**Constants**:

Name | Value
---|:---:
pink | 0
blue | 1
red | 2
green | 3
yellow | 4
purple | 5
white | 6

### division

**Constants**:

Name | Value
---|:---:
no division | 0
six notches | 1
ten notches | 2
twelve notches | 3
twenty notches | 4

### flags

**Constants**:

Name | Value
---|:---:
dark sky | 1
is dragon bar | 2

### Remove

### Update Health

### Additional Fields

Name | Type
---|---
health | float

### Update Title

### Additional Fields

Name | Type
---|---
title | string

### Update Style

### Additional Fields

Name | Type
---|---
[color](#update-style_color) | varuint
[division](#update-style_division) | varuint

### color

**Constants**:

Name | Value
---|:---:
pink | 0
blue | 1
red | 2
green | 3
yellow | 4
purple | 5
white | 6

### division

**Constants**:

Name | Value
---|:---:
no division | 0
six notches | 1
ten notches | 2
twelve notches | 3
twenty notches | 4

### Update Flags

### Additional Fields

Name | Type
---|---
[flags](#update-flags_flags) | ubyte

### flags

**Constants**:

Name | Value
---|:---:
dark sky | 1
is dragon bar | 2
