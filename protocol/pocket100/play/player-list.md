---
layout: default
---

[home](/) ➡ [pocket100](/protocol/pocket100) ➡ [play](/protocol/pocket100/play) ➡ player-list

# Player-list

**Id**: 63

**Id** (hex): 3F

**Id** (bin): 00111111

✔️

✔️

## Fields

Name | Type
---|---
action | ubyte

## Variants

Variant | Field | Value
---|---|:---:
[Add](#add) | action | 0
[Remove](#remove) | action | 1

### Add

### Additional Fields

Name | Type
---|---
players | [playerList](/protocol/pocket100/types/player-list)[]

### Remove

### Additional Fields

Name | Type
---|---
players | uuid[]

