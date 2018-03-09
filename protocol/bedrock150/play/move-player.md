---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  move-player

# Move player

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
[full](animation_full) | 0
[none](animation_none) | 1
[teleport](animation_teleport) | 2
[pitch](animation_pitch) | 3
