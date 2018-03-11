---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  set-entity-link

# Set entity link

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.set_entity_link)

**Id**: 41

**Id** (hex): 29

**Id** (bin): 00101001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
vehicle | varlong
passenger | varlong
[action](#action) | ubyte

### action

**Constants**:

Name | Value
---|:---:
remove | 0
add | 1
