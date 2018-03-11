---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  title

# Title

Encode/decode this packet in [Sandbox](../../../sandbox/java210#clientbound.title)

**Id**: 69

**Id** (hex): 45

**Id** (bin): 01000101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
action | varuint

## Variants

Variant | Field | Value
---|---|:---:
[Set Title](#set_title) | action | 0
[Set Subtitle](#set_subtitle) | action | 1
[Set Timings](#set_timings) | action | 2
[Hide](#hide) | action | 3
[Reset](#reset) | action | 4

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

### Set Timings

### Additional Fields

Name | Type
---|---
fade in | uint
stay | uint
fade out | uint

### Hide

### Reset
