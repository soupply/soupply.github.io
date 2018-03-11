---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  set-entity-link

# Set entity link

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.set_entity_link)

**Id**: 42

**Id** (hex): 2A

**Id** (bin): 00101010

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
