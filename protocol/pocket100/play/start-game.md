---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  start-game

# Start game

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#Play.StartGame)

**Id**: 12

**Id** (hex): 0C

**Id** (bin): 00001100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varlong
position | float&lt;xyz&gt;
yaw | float
pitch | float
seed | varint
[dimension](#dimension) | varint
[generator](#generator) | varint
[world gamemode](#world-gamemode) | varint
[difficulty](#difficulty) | varint
spawn position | varint&lt;xyz&gt;
loaded in creative | bool
time | varint
[edition](#edition) | ubyte
rain level | float
lightning level | float
commands enabled | bool
texture required | bool
level id | string
world name | string

### dimension

**Constants**:

Name | Value
---|:---:
overworld | 0
nether | 1
end | 2

### generator

**Constants**:

Name | Value
---|:---:
old | 0
infinite | 1
flat | 2

### world gamemode

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1

### difficulty

**Constants**:

Name | Value
---|:---:
peaceful | 0
easy | 1
normal | 2
hard | 3

### edition

**Constants**:

Name | Value
---|:---:
classic | 0
education | 1
