---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  mob-effect

# Mob effect

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.MobEffect)

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
