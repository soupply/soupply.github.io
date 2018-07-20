---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  combat-event

# Combat event

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.CombatEvent)

**Id**: 47

**Id** (hex): 2F

**Id** (bin): 00101111

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
