---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  command-output

# Command output

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.CommandOutput)

**Id**: 79

**Id** (hex): 4F

**Id** (bin): 01001111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
origin data | [commandOriginData](/protocol/bedrock282/types/command-origin-data) | 
output type | ubyte | 
success count | varuint | 
messages | [commandMessage](/protocol/bedrock282/types/command-message)[] | 
? | string | <code>output type</code> is equal to <code>4</code>
