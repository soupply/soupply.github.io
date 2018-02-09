---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  set-entity-link

# Set-entity-link

**Id**: 41

**Id** (hex): 29

**Id** (bin): 00101001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
from | varlong
to | varlong
[action](#action) | ubyte

### action

**Constants**:
Name | Value
---|:---:
[add](action_add) | 0
[ride](action_ride) | 1
[remove](action_remove) | 2

