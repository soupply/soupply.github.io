---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  mob-equipment

# Mob equipment

**Id**: 31

**Id** (hex): 1F

**Id** (bin): 00011111

**Clientbound**: ✔️

**Serverbound**: ✔️

Sent when the client puts an item in its hotbar or selects a new hotbar slot.

## Fields

Name | Type
---|---
entity id | varlong
item | [slot](/protocol/bedrock160/types/slot)
[inventory slot](#inventory-slot) | ubyte
[hotbar slot](#hotbar-slot) | ubyte
? | ubyte

### inventory slot

Slot of the inventory where the item is. The hotbat slots (0-8) are not counted. 255 means that a generic empty slot has been selected.

### hotbar slot

Slot of the hotbar where the item is being moved.

