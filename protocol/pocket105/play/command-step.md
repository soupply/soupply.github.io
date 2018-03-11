---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  command-step

# Command step

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.CommandStep)

**Id**: 79

**Id** (hex): 4F

**Id** (bin): 01001111

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
command | string
overload | string
? | varuint
current step | varuint
done | bool
client id | varulong
input | string
output | string
