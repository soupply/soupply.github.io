---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  command-block-update

# Command block update

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.CommandBlockUpdate)

**Id**: 80

**Id** (hex): 50

**Id** (bin): 01010000

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
update block | bool | 
position | [blockPosition](/protocol/pocket105/types/block-position) | <code>update block</code> is <code><span style="color:#009688">true</span></code>
mode | varuint | <code>update block</code> is <code><span style="color:#009688">true</span></code>
redstone mode | bool | <code>update block</code> is <code><span style="color:#009688">true</span></code>
conditional | bool | <code>update block</code> is <code><span style="color:#009688">true</span></code>
minecart | varlong | <code>update block</code> is <code><span style="color:#009688">false</span></code>
command | string | 
last output | string | 
hover | string | 
track output | bool |
