---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  animate

# Animate

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.Animate)

**Id**: 44

**Id** (hex): 2C

**Id** (bin): 00101100

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
[action](#action) | varint | 
entity id | varlong | 
? | float | <code>action</code> is greater than <code>128</code>

### action

**Constants**:

Name | Value
---|:---:
breaking | 1
wake up | 3
