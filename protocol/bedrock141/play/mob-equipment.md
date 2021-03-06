---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  mob-equipment

# Mob equipment

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.MobEquipment)

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
item | [slot](/protocol/bedrock141/types/slot)
[inventory slot](#inventory-slot) | ubyte
[hotbar slot](#hotbar-slot) | ubyte
? | ubyte

### inventory slot

Slot of the inventory where the item is. The hotbat slots (0-8) are not counted. 255 means that a generic empty slot has been selected.

### hotbar slot

Slot of the hotbar where the item is being moved.
