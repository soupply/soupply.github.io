---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  update-trade

# Update trade

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.UpdateTrade)

**Id**: 80

**Id** (hex): 50

**Id** (bin): 01010000

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
