---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  combat-event

# Combat event

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.CombatEvent)

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
