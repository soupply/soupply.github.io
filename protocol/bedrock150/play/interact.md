---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  interact

# Interact

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.Interact)

**Id**: 33

**Id** (hex): 21

**Id** (bin): 00100001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
[action](#action) | ubyte | 
target | varlong | 
target position | float&lt;xyz&gt; | <code>action</code> is equal to <code>4</code>

### action

**Constants**:

Name | Value
---|:---:
leave vehicle | 3
hover | 4
open inventory | 6
