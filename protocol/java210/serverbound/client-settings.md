---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [serverbound](/protocol/java210/serverbound)  /  client-settings

# Client settings

Encode/decode this packet in [Sandbox](../../../sandbox/java210#serverbound.client_settings)

**Id**: 4

**Id** (hex): 04

**Id** (bin): 00000100

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
language | string
view distance | ubyte
[chat mode](#chat-mode) | varuint
chat colors | bool
[displayed skin parts](#displayed-skin-parts) | ubyte
[main hand](#main-hand) | ubyte

### chat mode

**Constants**:

Name | Value
---|:---:
enabled | 0
commands only | 1
disabled | 2

### displayed skin parts

**Constants**:

Name | Value
---|:---:
cape | 1
jacket | 2
left sleeve | 4
right sleeve | 8
left pants | 16
right pants | 32
hat | 64

### main hand

**Constants**:

Name | Value
---|:---:
right | 0
left | 1
