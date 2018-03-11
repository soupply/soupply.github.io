---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  level-sound-event

# Level sound event

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.level_sound_event)

**Id**: 25

**Id** (hex): 19

**Id** (bin): 00011001

**Clientbound**: ✔️

**Serverbound**: ✔️

Plays a sound at a certain position.

## Fields

Name | Type
---|---
[sound](#sound) | ubyte
[position](#position) | float&lt;xyz&gt;
volume | varuint
pitch | varint
? | bool

### sound

**Constants**:

Name | Value
---|:---:
item use on | 0
hit | 1
step | 2
jump | 3
break | 4
place | 5
heavy step | 6
gallop | 7
fall | 8
ambient | 9
ambient baby | 10
ambient in water | 11
breathe | 12
death | 13
death in water | 14
death to zombie | 15
hurt | 16
hurt in water | 17
mad | 18
boost | 19
bow | 20
squish big | 21
squish small | 22
fall big | 23
fall small | 24
splash | 25
fizz | 26
flap | 27
swim | 28
drink | 29
eat | 30
takeoff | 31
shake | 32
plop | 33
land | 34
saddle | 35
armor | 36
add chest | 37
throw | 38
attack | 39
attack nodamage | 40
warn | 41
shear | 42
milk | 43
thunder | 44
explode | 45
fire | 46
ignite | 47
fuse | 48
stare | 49
spawn | 50
shoot | 51
break block | 52
remedy | 53
unfect | 54
levelup | 55
bow hit | 56
bullet hit | 57
extinguish fire | 58
item fizz | 59
chest open | 60
chest closed | 61
shulker box open | 62
shulker box close | 63
power on | 64
power off | 65
attach | 66
detach | 67
deny | 68
tripod | 69
pop | 70
drop slot | 71
note | 72
thorns | 73
piston in | 74
piston out | 75
portal | 76
water | 77
lava pop | 78
lava | 79
burp | 80
bucket fill water | 81
bucket fill lava | 82
bucket empty water | 83
bucket empty lava | 84
guardian flop | 85
elderguardian curse | 86
mob warning | 87
mob warning baby | 88
teleport | 89
shulker open | 90
shulker close | 91
haggle | 92
haggle yes | 93
haggle no | 94
haggle idle | 95
chorus grow | 96
chorus death | 97
glass | 98
cast spell | 99
prepare attack | 100
prepare summon | 101
prepare wololo | 102
fang | 103
charge | 104
take picture | 105
default | 106
undefined | 107

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.
