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
mob armor stand place | 38
add chest | 39
throw | 40
attack | 41
attack nodamage | 42
attack strong | 43
warn | 44
shear | 45
milk | 46
thunder | 47
explode | 48
fire | 49
ignite | 50
fuse | 51
stare | 52
spawn | 53
shoot | 54
break block | 55
launch | 56
blast | 57
large blast | 58
twinkle | 59
remedy | 60
unfect | 61
levelup | 62
bow hit | 63
bullet hit | 64
extinguish fire | 65
item fizz | 66
chest open | 67
chest closed | 68
shulkerbox open | 69
shulkerbox closed | 70
enderchest open | 71
enderchest closed | 72
power on | 73
power off | 74
attach | 75
detach | 76
deny | 77
tripod | 78
pop | 79
drop slot | 80
note | 81
thorns | 82
piston in | 83
piston out | 84
portal | 85
water | 86
lava pop | 87
lava | 88
burp | 89
bucket fill water | 90
bucket fill lava | 91
bucket empty water | 92
bucket empty lava | 93
armor equip chain | 94
armor equip diamond | 95
armor equip generic | 96
armor equip gold | 97
armor equip iron | 98
armor equip leather | 99
armor equip elytra | 100
record 13 | 101
record cat | 102
record blocks | 103
record chirp | 104
record far | 105
record mall | 106
record mellohi | 107
record stal | 108
record strad | 109
record ward | 110
record 11 | 111
record wait | 112
stop record | 113
flop | 114
elderguardian curse | 115
mob warning | 116
mob warning baby | 117
teleport | 118
shulker open | 119
shulker close | 120
haggle | 121
haggle yes | 122
haggle no | 123
haggle idle | 124
chorusgrow | 125
chorusdeath | 126
glass | 127
potion brewed | 128
cast spell | 129
prepare attack | 130
prepare summon | 131
prepare wololo | 132
fang | 133
charge | 134
camera take picture | 135
leashknot place | 136
leashknot break | 137
growl | 138
whine | 139
pant | 140
purr | 141
purreow | 142
death min volume | 143
death mid volume | 144
imitate blaze | 145
imitate cave spider | 146
imitate creeper | 147
imitate elder guardian | 148
imitate ender dragon | 149
imitate enderman | 150
imitate evocation illager | 152
imitate ghast | 153
imitate husk | 154
imitate illusion illager | 155
imitate magma cube | 156
imitate polar bear | 157
imitate shulker | 158
imitate silverfish | 159
imitate skeleton | 160
imitate slime | 161
imitate spider | 162
imitate stray | 163
imitate vex | 164
imitate vindication illager | 165
imitate witch | 166
imitate wither | 167
imitate wither skeleton | 168
imitate wolf | 169
imitate zombie | 170
imitate zombie pigman | 171
imitate zombie villager | 172
block end portal frame fill | 173
block end portal spawn | 174
random anvil use | 175
bottle dragonbreath | 176
portal travel | 177
item trident hit | 178
item trident return | 179
item trident riptide 1 | 180
item trident riptide 2 | 181
item trident riptide 3 | 182
item trident throw | 183
item trident thunder | 184
item trident hit ground | 185
default | 186
elemconstruct open | 188
icebomb hit | 189
balloonpop | 190
lt reaction icebomb | 191
lt reaction bleach | 192
lt reaction epaste | 193
lt reaction epaste2 | 194
lt reaction fertilizer | 199
lt reaction fireball | 200
lt reaction mgsalt | 201
lt reaction miscfire | 202
lt reaction fire | 203
lt reaction miscexplosion | 204
lt reaction miscmystical | 205
lt reaction miscmystical2 | 206
lt reaction product | 207
sparkler use | 208
glowstick use | 209
sparkler active | 210
convert to drowned | 211
bucket fill fish | 212
bucket empty fish | 213
undefined | 214

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.
