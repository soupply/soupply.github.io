---
layout: default
---

[home](/) ➡ [pocket113](/protocol/pocket113) ➡ [play](/protocol/pocket113/play) ➡ boss-event

# Boss-event

**Id**: 76

**Id** (hex): 4C

**Id** (bin): 01001100

✔️

✔️

Adds, removes or modifies an entity's boss bar. The percentage of the bar is calculated using the entity's attributes for the health and the max health, updated with [UpdateAttributes](play_update-attributes).

## Fields

Name | Type
---|---
entity id | varlong
[event id](#event-id) | varuint

### event id

**Constants**:
Name | Value
---|:---:
[add](event-id_add) | 0
[update](event-id_update) | 1
[remove](event-id_remove) | 2

