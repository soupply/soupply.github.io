---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  command-request

# Command request

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
[player](type_player) | 0
[command block](type_command-block) | 1
[minecart command block](type_minecart-command-block) | 2
[dev console](type_dev-console) | 3

