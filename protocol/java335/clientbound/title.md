---
layout: default
---

[home](/) ➡ [java335](/protocol/java335) ➡ [clientbound](/protocol/java335/clientbound) ➡ title

# Title

**Id**: 71

**Id** (hex): 47

**Id** (bin): 01000111

✔️

✔️

## Fields

Name | Type
---|---
action | varuint

## Variants

Variant | Field | Value
---|---|:---:
[Set Title](#set_title) | action | 0
[Set Subtitle](#set_subtitle) | action | 1
[Set Action Bar](#set_action_bar) | action | 2
[Set Timings](#set_timings) | action | 3
[Hide](#hide) | action | 4
[Reset](#reset) | action | 5

### Set Title

### Additional Fields

Name | Type
---|---
text | string

### Set Subtitle

### Additional Fields

Name | Type
---|---
text | string

### Set Action Bar

### Additional Fields

Name | Type
---|---
text | string

### Set Timings

### Additional Fields

Name | Type
---|---
fade in | uint
stay | uint
fade out | uint

### Hide

### Reset

