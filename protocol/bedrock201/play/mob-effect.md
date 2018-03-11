---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  mob-effect

# Mob effect

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#play.mob_effect)

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

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
