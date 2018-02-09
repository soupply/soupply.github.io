---
layout: default
---

[home](/) ➡ [java340](/protocol/java340) ➡ [clientbound](/protocol/java340/clientbound) ➡ combat-event

# Combat-event

**Id**: 45

**Id** (hex): 2D

**Id** (bin): 00101101

✔️

✔️

## Fields

Name | Type
---|---
event id | ubyte

## Variants

Variant | Field | Value
---|---|:---:
[Enter Combat](#enter_combat) | eventId | 0
[End Combat](#end_combat) | eventId | 1
[Entity Dead](#entity_dead) | eventId | 2

### Enter Combat

### End Combat

### Additional Fields

Name | Type
---|---
duration | varuint
entity id | uint

### Entity Dead

### Additional Fields

Name | Type
---|---
player id | varuint
entity id | uint
message | string

