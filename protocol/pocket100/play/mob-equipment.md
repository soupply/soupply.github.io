---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  mob-equipment

# Mob equipment

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#play.mob_equipment)

**Id**: 32

**Id** (hex): 20

**Id** (bin): 00100000

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
item | [slot](/protocol/pocket100/types/slot)
inventory slot | ubyte
hotbar slot | ubyte
? | ubyte
