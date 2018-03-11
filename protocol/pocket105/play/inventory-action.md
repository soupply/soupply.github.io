---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  inventory-action

# Inventory action

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.InventoryAction)

**Id**: 48

**Id** (hex): 30

**Id** (bin): 00110000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
action | varint
item | [slot](/protocol/pocket105/types/slot)
