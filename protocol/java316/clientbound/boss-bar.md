---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  boss-bar

# Boss bar

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
[pink](add_color_pink) | 0
[blue](add_color_blue) | 1
[red](add_color_red) | 2
[green](add_color_green) | 3
[yellow](add_color_yellow) | 4
[purple](add_color_purple) | 5
[white](add_color_white) | 6

### division

**Constants**:

Name | Value
---|:---:
[no division](add_division_no-division) | 0
[six notches](add_division_six-notches) | 1
[ten notches](add_division_ten-notches) | 2
[twelve notches](add_division_twelve-notches) | 3
[twenty notches](add_division_twenty-notches) | 4

### flags

**Constants**:

Name | Value
---|:---:
[dark sky](add_flags_dark-sky) | 1
[is dragon bar](add_flags_is-dragon-bar) | 2

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
[pink](update-style_color_pink) | 0
[blue](update-style_color_blue) | 1
[red](update-style_color_red) | 2
[green](update-style_color_green) | 3
[yellow](update-style_color_yellow) | 4
[purple](update-style_color_purple) | 5
[white](update-style_color_white) | 6

### division

**Constants**:

Name | Value
---|:---:
[no division](update-style_division_no-division) | 0
[six notches](update-style_division_six-notches) | 1
[ten notches](update-style_division_ten-notches) | 2
[twelve notches](update-style_division_twelve-notches) | 3
[twenty notches](update-style_division_twenty-notches) | 4

### Update Flags

### Additional Fields

Name | Type
---|---
[flags](#update-flags_flags) | ubyte

### flags

**Constants**:

Name | Value
---|:---:
[dark sky](update-flags_flags_dark-sky) | 1
[is dragon bar](update-flags_flags_is-dragon-bar) | 2

