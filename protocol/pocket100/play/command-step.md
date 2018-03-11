---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  command-step

# Command step

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#play.command_step)

**Id**: 78

**Id** (hex): 4E

**Id** (bin): 01001110

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
