---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  crafting-event

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
uuid | [mcpeUuid](/protocol/bedrock141/types/mcpe-uuid)
input | [slot](/protocol/bedrock141/types/slot)[]
output | [slot](/protocol/bedrock141/types/slot)[]
