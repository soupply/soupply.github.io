---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  set-title

# Set title

**Id**: 88

**Id** (hex): 58

**Id** (bin): 01011000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[action](#action) | varint
text | string
fade in | varint
stay | varint
fade out | varint

### action

**Constants**:

Name | Value
---|:---:
[hide](action_hide) | 0
[reset](action_reset) | 1
[set title](action_set-title) | 2
[set subtitle](action_set-subtitle) | 3
[set action bar](action_set-action-bar) | 4
[set timings](action_set-timings) | 5
