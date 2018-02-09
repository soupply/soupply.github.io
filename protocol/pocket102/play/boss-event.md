---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  boss-event

# Boss-event

**Id**: 75

**Id** (hex): 4B

**Id** (bin): 01001011

**Clientbound**: ✔️

**Serverbound**: ✖️

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

