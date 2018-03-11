---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  update-trade

# Update trade

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.update_trade)

**Id**: 81

**Id** (hex): 51

**Id** (bin): 01010001

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
