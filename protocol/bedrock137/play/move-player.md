---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  move-player

# Move player

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.MovePlayer)

**Id**: 19

**Id** (hex): 13

**Id** (bin): 00010011

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
entity id | varlong | 
position | float&lt;xyz&gt; | 
pitch | float | 
head yaw | float | 
yaw | float | 
[animation](#animation) | ubyte | 
on ground | bool | 
? | varlong | 
? | int | <code>animation</code> is equal to <code>3</code>
? | int | <code>animation</code> is equal to <code>3</code>

### animation

**Constants**:

Name | Value
---|:---:
full | 0
none | 1
teleport | 2
pitch | 3
