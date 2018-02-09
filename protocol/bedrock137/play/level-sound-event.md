---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  level-sound-event

# Level-sound-event

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
[item use on](sound_item-use-on) | 0
[hit](sound_hit) | 1
[step](sound_step) | 2
[fly](sound_fly) | 3
[jump](sound_jump) | 4
[break](sound_break) | 5
[place](sound_place) | 6
[heavy step](sound_heavy-step) | 7
[gallop](sound_gallop) | 8
[fall](sound_fall) | 9
[ambient](sound_ambient) | 10
[ambient baby](sound_ambient-baby) | 11
[ambient in water](sound_ambient-in-water) | 12
[breathe](sound_breathe) | 13
[death](sound_death) | 14
[death in water](sound_death-in-water) | 15
[death to zombie](sound_death-to-zombie) | 16
[hurt](sound_hurt) | 17
[hurt in water](sound_hurt-in-water) | 18
[mad](sound_mad) | 19
[boost](sound_boost) | 20
[bow](sound_bow) | 21
[squish big](sound_squish-big) | 22
[squish small](sound_squish-small) | 23
[fall big](sound_fall-big) | 24
[fall small](sound_fall-small) | 25
[splash](sound_splash) | 26
[fizz](sound_fizz) | 27
[flap](sound_flap) | 28
[swim](sound_swim) | 29
[drink](sound_drink) | 30
[eat](sound_eat) | 31
[takeoff](sound_takeoff) | 32
[shake](sound_shake) | 33
[plop](sound_plop) | 34
[land](sound_land) | 35
[saddle](sound_saddle) | 36
[armor](sound_armor) | 37
[add chest](sound_add-chest) | 38
[throw](sound_throw) | 39
[attack](sound_attack) | 40
[attack nodamage](sound_attack-nodamage) | 41
[warn](sound_warn) | 42
[shear](sound_shear) | 43
[milk](sound_milk) | 44
[thunder](sound_thunder) | 45
[explode](sound_explode) | 46
[fire](sound_fire) | 47
[ignite](sound_ignite) | 48
[fuse](sound_fuse) | 49
[stare](sound_stare) | 50
[spawn](sound_spawn) | 51
[shoot](sound_shoot) | 52
[break block](sound_break-block) | 53
[launch](sound_launch) | 54
[blast](sound_blast) | 55
[large blast](sound_large-blast) | 56
[twinkle](sound_twinkle) | 57
[remedy](sound_remedy) | 58
[unfect](sound_unfect) | 59
[levelup](sound_levelup) | 60
[bow hit](sound_bow-hit) | 61
[bullet hit](sound_bullet-hit) | 62
[extinguish fire](sound_extinguish-fire) | 63
[item fizz](sound_item-fizz) | 64
[chest open](sound_chest-open) | 65
[chest closed](sound_chest-closed) | 66
[shulker box open](sound_shulker-box-open) | 67
[shulker box close](sound_shulker-box-close) | 68
[power on](sound_power-on) | 69
[power off](sound_power-off) | 70
[attach](sound_attach) | 71
[detach](sound_detach) | 72
[deny](sound_deny) | 73
[tripod](sound_tripod) | 74
[pop](sound_pop) | 75
[drop slot](sound_drop-slot) | 76
[note](sound_note) | 77
[thorns](sound_thorns) | 78
[piston in](sound_piston-in) | 79
[piston out](sound_piston-out) | 80
[portal](sound_portal) | 81
[water](sound_water) | 82
[lava pop](sound_lava-pop) | 83
[lava](sound_lava) | 84
[burp](sound_burp) | 85
[bucket fill water](sound_bucket-fill-water) | 86
[bucket fill lava](sound_bucket-fill-lava) | 87
[bucket empty water](sound_bucket-empty-water) | 88
[bucket empty lava](sound_bucket-empty-lava) | 89
[record 13](sound_record-13) | 90
[record cat](sound_record-cat) | 91
[record blocks](sound_record-blocks) | 92
[record chirp](sound_record-chirp) | 93
[record far](sound_record-far) | 94
[record mall](sound_record-mall) | 95
[record mellohi](sound_record-mellohi) | 96
[record stal](sound_record-stal) | 97
[record strad](sound_record-strad) | 98
[record ward](sound_record-ward) | 99
[record 11](sound_record-11) | 100
[record wait](sound_record-wait) | 101
[guardian flop](sound_guardian-flop) | 103
[elderguardian curse](sound_elderguardian-curse) | 104
[mob warning](sound_mob-warning) | 105
[mob warning baby](sound_mob-warning-baby) | 106
[teleport](sound_teleport) | 107
[shulker open](sound_shulker-open) | 108
[shulker close](sound_shulker-close) | 109
[haggle](sound_haggle) | 110
[haggle yes](sound_haggle-yes) | 111
[haggle no](sound_haggle-no) | 112
[haggle idle](sound_haggle-idle) | 113
[chorus grow](sound_chorus-grow) | 114
[chorus death](sound_chorus-death) | 115
[glass](sound_glass) | 116
[cast spell](sound_cast-spell) | 117
[prepare attack](sound_prepare-attack) | 118
[prepare summon](sound_prepare-summon) | 119
[prepare wololo](sound_prepare-wololo) | 120
[fang](sound_fang) | 121
[charge](sound_charge) | 122
[camera take picture](sound_camera-take-picture) | 123
[leashknot place](sound_leashknot-place) | 124
[leashknot break](sound_leashknot-break) | 125
[growl](sound_growl) | 126
[whine](sound_whine) | 127
[pant](sound_pant) | 128
[purr](sound_purr) | 129
[purreow](sound_purreow) | 130
[death min volume](sound_death-min-volume) | 131
[death mid volume](sound_death-mid-volume) | 132
[initiate blaze](sound_initiate-blaze) | 133
[initiate cave spider](sound_initiate-cave-spider) | 134
[initiate creeper](sound_initiate-creeper) | 135
[initiate elder guardian](sound_initiate-elder-guardian) | 136
[initiate ender dragon](sound_initiate-ender-dragon) | 137
[initiate enderman](sound_initiate-enderman) | 138
[initiate evocation illager](sound_initiate-evocation-illager) | 140
[initiate ghast](sound_initiate-ghast) | 141
[initiate husk](sound_initiate-husk) | 142
[initiate illusion illager](sound_initiate-illusion-illager) | 143
[initiate magma cube](sound_initiate-magma-cube) | 144
[initiate polar bear](sound_initiate-polar-bear) | 145
[initiate shulker](sound_initiate-shulker) | 146
[initiate silverfish](sound_initiate-silverfish) | 147
[initiate skeleton](sound_initiate-skeleton) | 148
[initiate slime](sound_initiate-slime) | 149
[initiate spider](sound_initiate-spider) | 150
[initiate stray](sound_initiate-stray) | 151
[initiate vex](sound_initiate-vex) | 152
[initiate vindication illager](sound_initiate-vindication-illager) | 153
[initiate witch](sound_initiate-witch) | 154
[initiate wither](sound_initiate-wither) | 155
[initiate wither skeleton](sound_initiate-wither-skeleton) | 156
[initiate wolf](sound_initiate-wolf) | 157
[initiate zombie](sound_initiate-zombie) | 158
[initiate zombie pigman](sound_initiate-zombie-pigman) | 159
[initiate zombie villager](sound_initiate-zombie-villager) | 160
[default](sound_default) | 161
[undefined](sound_undefined) | 162

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.

