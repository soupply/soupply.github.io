---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  entity-effect

# Entity effect

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.EntityEffect)

**Id**: 83

**Id** (hex): 53

**Id** (bin): 01010011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varuint
[effect id](#effect-id) | ubyte
amplifier | ubyte
duration | varuint
[flags](#flags) | ubyte

### effect id

**Constants**:

Name | Value
---|:---:
speed | 1
slowness | 2
haste | 3
mining fatigue | 4
strength | 5
instant health | 6
instant damage | 7
jump boost | 8
nausea | 9
regeneration | 10
resistance | 11
fire resistance | 12
water breathing | 13
invisibility | 14
blindness | 15
night vision | 16
hunger | 17
weakness | 18
poison | 19
wither | 20
health boost | 21
absorption | 22
saturation | 23
glowing | 24
levitation | 25
luck | 26
bad luck | 27

### flags

**Constants**:

Name | Value
---|:---:
ambient | 1
show particles | 2
