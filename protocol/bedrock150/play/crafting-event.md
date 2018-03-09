---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  crafting-event

# Crafting event

**Id**: 53

**Id** (hex): 35

**Id** (bin): 00110101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
window | ubyte
type | varint
uuid | [mcpeUuid](/protocol/bedrock150/types/mcpe-uuid)
input | [slot](/protocol/bedrock150/types/slot)[]
output | [slot](/protocol/bedrock150/types/slot)[]
