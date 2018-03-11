---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  update-trade

# Update trade

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#Play.UpdateTrade)

**Id**: 81

**Id** (hex): 51

**Id** (bin): 01010001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Default
---|---|:---:
window | ubyte | 
window type | ubyte | 15
? | varint | 
? | varint | 
willing | bool | 
trader | varlong | 
player | varlong | 
display name | string | 
offers | bytes |
