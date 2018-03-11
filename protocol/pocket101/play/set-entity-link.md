---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  set-entity-link

# Set entity link

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.set_entity_link)

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
add | 0
ride | 1
remove | 2
