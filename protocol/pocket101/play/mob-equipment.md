---
layout: default
---

[home](/) ➡ [pocket101](/protocol/pocket101) ➡ [play](/protocol/pocket101/play) ➡ mob-equipment

# Mob-equipment

**Id**: 32

**Id** (hex): 20

**Id** (bin): 00100000

✔️

✔️

Sent when the client puts an item in its hotbar or selects a new hotbar slot.

## Fields

Name | Type
---|---
entity id | varlong
item | [slot](/protocol/pocket101/types/slot)
[inventory slot](#inventory-slot) | ubyte
[hotbar slot](#hotbar-slot) | ubyte
? | ubyte

### inventory slot

Slot of the inventory where the item is. The hotbat slots (0-8) are not counted. 255 means that a generic empty slot has been selected.

### hotbar slot

Slot of the hotbar where the item is being moved.

