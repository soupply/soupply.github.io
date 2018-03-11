---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  update-trade

# Update trade

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.UpdateTrade)

**Id**: 79

**Id** (hex): 4F

**Id** (bin): 01001111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
? | ubyte
? | ubyte
? | varint
? | varint
? | bool
trader | varlong
player | varlong
? | string
offers | bytes
