---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  level-sound-event

# Level sound event

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.LevelSoundEvent)

**Id**: 26

**Id** (hex): 1A

**Id** (bin): 00011010

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
power on | 62
power off | 63
attach | 64
detach | 65
deny | 66
tripod | 67
pop | 68
drop slot | 69
note | 70
thorns | 71
piston in | 72
piston out | 73
portal | 74
water | 75
lava pop | 76
lava | 77
burp | 78
bucket fill water | 79
bucket fill lava | 80
bucket empty water | 81
bucket empty lava | 82
guardian flop | 83
elderguardian curse | 84
mob warning | 85
mob warning baby | 86
teleport | 87
shulker open | 88
shulker close | 89
haggle | 90
haggle yes | 91
haggle no | 92
haggle idle | 93
default | 94
undefined | 95

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.
