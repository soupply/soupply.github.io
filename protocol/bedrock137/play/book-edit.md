---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  book-edit

# Book edit

**Id**: 97

**Id** (hex): 61

**Id** (bin): 01100001

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
type | ubyte
slot | ubyte

## Variants

Variant | Field | Value
---|---|:---:
[Replace Page](#replace_page) | type | 0
[Add Page](#add_page) | type | 1
[Delete Page](#delete_page) | type | 2
[Swap Pages](#swap_pages) | type | 3
[Sign](#sign) | type | 4

### Replace Page

### Additional Fields

Name | Type
---|---
page number | ubyte
? | string
? | string

### Add Page

### Additional Fields

Name | Type
---|---
page number | ubyte
? | string
? | string

### Delete Page

### Additional Fields

Name | Type
---|---
page number | ubyte

### Swap Pages

### Additional Fields

Name | Type
---|---
page 1 | ubyte
page 2 | ubyte

### Sign

### Additional Fields

Name | Type
---|---
title | string
author | string

