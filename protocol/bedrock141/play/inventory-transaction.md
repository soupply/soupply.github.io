---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  inventory-transaction

# Inventory transaction

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.InventoryTransaction)

**Id**: 30

**Id** (hex): 1E

**Id** (bin): 00011110

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
type | varuint
actions | [inventoryAction](/protocol/bedrock141/types/inventory-action)[]

## Variants

Variant | Field | Value
---|---|:---:
[Normal 0](#normal_0) | type | 0
[Normal 1](#normal_1) | type | 1
[Use Item](#use_item) | type | 2
[Use Item On Entity](#use_item_on_entity) | type | 3
[Release Item](#release_item) | type | 4

### Normal 0

### Normal 1

### Use Item

### Additional Fields

Name | Type
---|---
[action type](#use-item_action-type) | varuint
block position | [blockPosition](/protocol/bedrock141/types/block-position)
face | varint
hotbar slot | varint
item | [slot](/protocol/bedrock141/types/slot)
player position | float&lt;xyz&gt;
click position | float&lt;xyz&gt;

### action type

**Constants**:

Name | Value
---|:---:
click block | 0
click air | 1
break block | 2

### Use Item On Entity

### Additional Fields

Name | Type
---|---
entity id | varlong
[action type](#use-item-on-entity_action-type) | varuint
hotbar slot | varint
item | [slot](/protocol/bedrock141/types/slot)
? | float&lt;xyz&gt;
? | float&lt;xyz&gt;

### action type

**Constants**:

Name | Value
---|:---:
interact | 0
attack | 1

### Release Item

### Additional Fields

Name | Type
---|---
[action type](#release-item_action-type) | varuint
hotbar slot | varint
item | [slot](/protocol/bedrock141/types/slot)
head position | float&lt;xyz&gt;

### action type

**Constants**:

Name | Value
---|:---:
shoot bow | 0
consume | 1
