---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  command-step

# Command step

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.command_step)

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
