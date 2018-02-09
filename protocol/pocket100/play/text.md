---
layout: default
---

[home](/) ➡ [pocket100](/protocol/pocket100) ➡ [play](/protocol/pocket100/play) ➡ text

# Text

**Id**: 10

**Id** (hex): 0A

**Id** (bin): 00001010

✔️

✔️

## Fields

Name | Type
---|---
type | ubyte

## Variants

Variant | Field | Value
---|---|:---:
[Raw](#raw) | type | 0
[Chat](#chat) | type | 1
[Translation](#translation) | type | 2
[Popup](#popup) | type | 3
[Tip](#tip) | type | 4
[System](#system) | type | 5
[Whisper](#whisper) | type | 6

### Raw

### Additional Fields

Name | Type
---|---
message | string

### Chat

### Additional Fields

Name | Type
---|---
sender | string
message | string

### Translation

### Additional Fields

Name | Type
---|---
message | string
parameters | string[]

### Popup

### Additional Fields

Name | Type
---|---
title | string
subtitle | string

### Tip

### Additional Fields

Name | Type
---|---
message | string

### System

### Additional Fields

Name | Type
---|---
message | string

### Whisper

### Additional Fields

Name | Type
---|---
sender | string
message | string

