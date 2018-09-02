---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  mob-effect

# Mob effect

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.MobEffect)

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
[event id](#event-id) | ubyte
[effect](#effect) | varint
amplifier | varint
particles | bool
duration | varint

### event id

**Constants**:

Name | Value
---|:---:
add | 1
modify | 2
remove | 3

### effect

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
levitation | 24
fatal poison | 25
