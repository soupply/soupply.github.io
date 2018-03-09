---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  take-item-entity

# Take item entity

**Id**: 17

**Id** (hex): 11

**Id** (bin): 00010001

**Clientbound**: ✔️

**Serverbound**: ✖️

Plays the collection animation and despawns the entity that has been collected.

## Fields

Name | Type
---|---
[collected](#collected) | varlong
[collector](#collector) | varlong

### collected

Collected entity, usually an item entity or an arrow, that will float toward the collector and despawn.

### collector

Entity that collects, usually a player or another entity with an inventory.
