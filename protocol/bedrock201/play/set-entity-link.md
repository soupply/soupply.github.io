---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  set-entity-link

# Set entity link

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.SetEntityLink)

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
