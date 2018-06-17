---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  level-sound-event

# Level sound event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.LevelSoundEvent)

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
attack strong | 42
warn | 43
shear | 44
milk | 45
thunder | 46
explode | 47
fire | 48
ignite | 49
fuse | 50
stare | 51
spawn | 52
shoot | 53
break block | 54
launch | 55
blast | 56
large blast | 57
twinkle | 58
remedy | 59
unfect | 60
levelup | 61
bow hit | 62
bullet hit | 63
extinguish fire | 64
item fizz | 65
chest open | 66
chest closed | 67
shulker box open | 68
shulker box close | 69
power on | 70
power off | 71
attach | 72
detach | 73
deny | 74
tripod | 75
pop | 76
drop slot | 77
note | 78
thorns | 79
piston in | 80
piston out | 81
portal | 82
water | 83
lava pop | 84
lava | 85
burp | 86
bucket fill water | 87
bucket fill lava | 88
bucket empty water | 89
bucket empty lava | 90
record 13 | 91
record cat | 92
record blocks | 93
record chirp | 94
record far | 95
record mall | 96
record mellohi | 97
record stal | 98
record strad | 99
record ward | 100
record 11 | 101
record wait | 102
guardian flop | 104
elderguardian curse | 105
mob warning | 106
mob warning baby | 107
teleport | 108
shulker open | 109
shulker close | 110
haggle | 111
haggle yes | 112
haggle no | 113
haggle idle | 114
chorus grow | 115
chorus death | 116
glass | 117
cast spell | 118
prepare attack | 119
prepare summon | 120
prepare wololo | 121
fang | 122
charge | 123
camera take picture | 124
leashknot place | 125
leashknot break | 126
growl | 127
whine | 128
pant | 129
purr | 130
purreow | 131
death min volume | 132
death mid volume | 133
initiate blaze | 134
initiate cave spider | 135
initiate creeper | 136
initiate elder guardian | 137
initiate ender dragon | 138
initiate enderman | 139
initiate evocation illager | 141
initiate ghast | 142
initiate husk | 143
initiate illusion illager | 144
initiate magma cube | 145
initiate polar bear | 146
initiate shulker | 147
initiate silverfish | 148
initiate skeleton | 149
initiate slime | 150
initiate spider | 151
initiate stray | 152
initiate vex | 153
initiate vindication illager | 154
initiate witch | 155
initiate wither | 156
initiate wither skeleton | 157
initiate wolf | 158
initiate zombie | 159
initiate zombie pigman | 160
initiate zombie villager | 161
block end portal frame fill | 162
block end portal spawn | 163
random anvil use | 164
bottle dragonbreath | 165
default | 166
undefined | 167

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.
