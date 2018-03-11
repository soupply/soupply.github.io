---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  inventory-action

# Inventory action

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.inventory_action)

**Id**: 47

**Id** (hex): 2F

**Id** (bin): 00101111

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
action | varint
item | [slot](/protocol/pocket113/types/slot)
? | varint
? | varint
