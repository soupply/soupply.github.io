---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  command-block-update

# Command-block-update

**Id**: 78

**Id** (hex): 4E

**Id** (bin): 01001110

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
update block | bool | 
position | [blockPosition](/protocol/bedrock150/types/block-position) | <code>update block</code> is <code><span style="color:#009688">true</span></code>
mode | varuint | <code>update block</code> is <code><span style="color:#009688">true</span></code>
redstone mode | bool | <code>update block</code> is <code><span style="color:#009688">true</span></code>
conditional | bool | <code>update block</code> is <code><span style="color:#009688">true</span></code>
minecart | varlong | <code>update block</code> is <code><span style="color:#009688">false</span></code>
command | string | 
last output | string | 
hover | string | 
track output | bool | 

