---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  set-title

# Set title

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.SetTitle)

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
hide | 0
reset | 1
set title | 2
set subtitle | 3
set action bar | 4
set timings | 5
