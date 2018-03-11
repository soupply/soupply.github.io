---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  level-sound-event

# Level sound event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.LevelSoundEvent)

**Id**: 24

**Id** (hex): 18

**Id** (bin): 00011000

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
disable relative volume | bool

### sound

**Constants**:

Name | Value
---|:---:
item use on | 0
hit | 1
step | 2
fly | 3
jump | 4
break | 5
place | 6
heavy step | 7
gallop | 8
fall | 9
ambient | 10
ambient baby | 11
ambient in water | 12
breathe | 13
death | 14
death in water | 15
death to zombie | 16
hurt | 17
hurt in water | 18
mad | 19
boost | 20
bow | 21
squish big | 22
squish small | 23
fall big | 24
fall small | 25
splash | 26
fizz | 27
flap | 28
swim | 29
drink | 30
eat | 31
takeoff | 32
shake | 33
plop | 34
land | 35
saddle | 36
armor | 37
add chest | 38
throw | 39
attack | 40
attack nodamage | 41
warn | 42
shear | 43
milk | 44
thunder | 45
explode | 46
fire | 47
ignite | 48
fuse | 49
stare | 50
spawn | 51
shoot | 52
break block | 53
launch | 54
blast | 55
large blast | 56
twinkle | 57
remedy | 58
unfect | 59
levelup | 60
bow hit | 61
bullet hit | 62
extinguish fire | 63
item fizz | 64
chest open | 65
chest closed | 66
shulker box open | 67
shulker box close | 68
power on | 69
power off | 70
attach | 71
detach | 72
deny | 73
tripod | 74
pop | 75
drop slot | 76
note | 77
thorns | 78
piston in | 79
piston out | 80
portal | 81
water | 82
lava pop | 83
lava | 84
burp | 85
bucket fill water | 86
bucket fill lava | 87
bucket empty water | 88
bucket empty lava | 89
record 13 | 90
record cat | 91
record blocks | 92
record chirp | 93
record far | 94
record mall | 95
record mellohi | 96
record stal | 97
record strad | 98
record ward | 99
record 11 | 100
record wait | 101
guardian flop | 103
elderguardian curse | 104
mob warning | 105
mob warning baby | 106
teleport | 107
shulker open | 108
shulker close | 109
haggle | 110
haggle yes | 111
haggle no | 112
haggle idle | 113
chorus grow | 114
chorus death | 115
glass | 116
cast spell | 117
prepare attack | 118
prepare summon | 119
prepare wololo | 120
fang | 121
charge | 122
camera take picture | 123
leashknot place | 124
leashknot break | 125
growl | 126
whine | 127
pant | 128
purr | 129
purreow | 130
death min volume | 131
death mid volume | 132
initiate blaze | 133
initiate cave spider | 134
initiate creeper | 135
initiate elder guardian | 136
initiate ender dragon | 137
initiate enderman | 138
initiate evocation illager | 140
initiate ghast | 141
initiate husk | 142
initiate illusion illager | 143
initiate magma cube | 144
initiate polar bear | 145
initiate shulker | 146
initiate silverfish | 147
initiate skeleton | 148
initiate slime | 149
initiate spider | 150
initiate stray | 151
initiate vex | 152
initiate vindication illager | 153
initiate witch | 154
initiate wither | 155
initiate wither skeleton | 156
initiate wolf | 157
initiate zombie | 158
initiate zombie pigman | 159
initiate zombie villager | 160
default | 161
undefined | 162

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.
