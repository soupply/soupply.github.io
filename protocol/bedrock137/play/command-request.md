---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  command-request

# Command request

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.CommandRequest)

**Id**: 77

**Id** (hex): 4D

**Id** (bin): 01001101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
command | string | 
[type](#type) | varuint | 
request id | string | 
player id | varint | <code>type</code> is equal to <code>3</code>

### type

**Constants**:

Name | Value
---|:---:
player | 0
command block | 1
minecart command block | 2
dev console | 3
