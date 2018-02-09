---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  combat-event

# Combat event

**Id**: 44

**Id** (hex): 2C

**Id** (bin): 00101100

**Clientbound**: ✔️

**Serverbound**: ✖️

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

