---
layout: default
---

[home](/) ➡ [java338](/protocol/java338) ➡ [serverbound](/protocol/java338/serverbound) ➡ player-digging

# Player-digging

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

✔️

✔️

## Fields

Name | Type
---|---
[status](#status) | varuint
position | ulong
face | ubyte

### status

**Constants**:
Name | Value
---|:---:
[start digging](status_start-digging) | 0
[cancel digging](status_cancel-digging) | 1
[finish digging](status_finish-digging) | 2
[drop item stack](status_drop-item-stack) | 3
[drop item](status_drop-item) | 4
[shoot arrow](status_shoot-arrow) | 5
[finish eating](status_finish-eating) | 5
[swap item in hand](status_swap-item-in-hand) | 6

