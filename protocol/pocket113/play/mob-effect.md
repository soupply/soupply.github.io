---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  mob-effect

# Mob effect

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.mob_effect)

**Id**: 29

**Id** (hex): 1D

**Id** (bin): 00011101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
[event id](#event-id) | ubyte
effect | varint
amplifier | varint
particles | bool
duration | varint

### event id

**Constants**:

Name | Value
---|:---:
add | 1
modify | 2
remove | 3
