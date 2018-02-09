---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  level-sound-event

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
[attack strong](sound_attack-strong) | 42
[warn](sound_warn) | 43
[shear](sound_shear) | 44
[milk](sound_milk) | 45
[thunder](sound_thunder) | 46
[explode](sound_explode) | 47
[fire](sound_fire) | 48
[ignite](sound_ignite) | 49
[fuse](sound_fuse) | 50
[stare](sound_stare) | 51
[spawn](sound_spawn) | 52
[shoot](sound_shoot) | 53
[break block](sound_break-block) | 54
[launch](sound_launch) | 55
[blast](sound_blast) | 56
[large blast](sound_large-blast) | 57
[twinkle](sound_twinkle) | 58
[remedy](sound_remedy) | 59
[unfect](sound_unfect) | 60
[levelup](sound_levelup) | 61
[bow hit](sound_bow-hit) | 62
[bullet hit](sound_bullet-hit) | 63
[extinguish fire](sound_extinguish-fire) | 64
[item fizz](sound_item-fizz) | 65
[chest open](sound_chest-open) | 66
[chest closed](sound_chest-closed) | 67
[shulker box open](sound_shulker-box-open) | 68
[shulker box close](sound_shulker-box-close) | 69
[power on](sound_power-on) | 70
[power off](sound_power-off) | 71
[attach](sound_attach) | 72
[detach](sound_detach) | 73
[deny](sound_deny) | 74
[tripod](sound_tripod) | 75
[pop](sound_pop) | 76
[drop slot](sound_drop-slot) | 77
[note](sound_note) | 78
[thorns](sound_thorns) | 79
[piston in](sound_piston-in) | 80
[piston out](sound_piston-out) | 81
[portal](sound_portal) | 82
[water](sound_water) | 83
[lava pop](sound_lava-pop) | 84
[lava](sound_lava) | 85
[burp](sound_burp) | 86
[bucket fill water](sound_bucket-fill-water) | 87
[bucket fill lava](sound_bucket-fill-lava) | 88
[bucket empty water](sound_bucket-empty-water) | 89
[bucket empty lava](sound_bucket-empty-lava) | 90
[record 13](sound_record-13) | 91
[record cat](sound_record-cat) | 92
[record blocks](sound_record-blocks) | 93
[record chirp](sound_record-chirp) | 94
[record far](sound_record-far) | 95
[record mall](sound_record-mall) | 96
[record mellohi](sound_record-mellohi) | 97
[record stal](sound_record-stal) | 98
[record strad](sound_record-strad) | 99
[record ward](sound_record-ward) | 100
[record 11](sound_record-11) | 101
[record wait](sound_record-wait) | 102
[guardian flop](sound_guardian-flop) | 104
[elderguardian curse](sound_elderguardian-curse) | 105
[mob warning](sound_mob-warning) | 106
[mob warning baby](sound_mob-warning-baby) | 107
[teleport](sound_teleport) | 108
[shulker open](sound_shulker-open) | 109
[shulker close](sound_shulker-close) | 110
[haggle](sound_haggle) | 111
[haggle yes](sound_haggle-yes) | 112
[haggle no](sound_haggle-no) | 113
[haggle idle](sound_haggle-idle) | 114
[chorus grow](sound_chorus-grow) | 115
[chorus death](sound_chorus-death) | 116
[glass](sound_glass) | 117
[cast spell](sound_cast-spell) | 118
[prepare attack](sound_prepare-attack) | 119
[prepare summon](sound_prepare-summon) | 120
[prepare wololo](sound_prepare-wololo) | 121
[fang](sound_fang) | 122
[charge](sound_charge) | 123
[camera take picture](sound_camera-take-picture) | 124
[leashknot place](sound_leashknot-place) | 125
[leashknot break](sound_leashknot-break) | 126
[growl](sound_growl) | 127
[whine](sound_whine) | 128
[pant](sound_pant) | 129
[purr](sound_purr) | 130
[purreow](sound_purreow) | 131
[death min volume](sound_death-min-volume) | 132
[death mid volume](sound_death-mid-volume) | 133
[initiate blaze](sound_initiate-blaze) | 134
[initiate cave spider](sound_initiate-cave-spider) | 135
[initiate creeper](sound_initiate-creeper) | 136
[initiate elder guardian](sound_initiate-elder-guardian) | 137
[initiate ender dragon](sound_initiate-ender-dragon) | 138
[initiate enderman](sound_initiate-enderman) | 139
[initiate evocation illager](sound_initiate-evocation-illager) | 141
[initiate ghast](sound_initiate-ghast) | 142
[initiate husk](sound_initiate-husk) | 143
[initiate illusion illager](sound_initiate-illusion-illager) | 144
[initiate magma cube](sound_initiate-magma-cube) | 145
[initiate polar bear](sound_initiate-polar-bear) | 146
[initiate shulker](sound_initiate-shulker) | 147
[initiate silverfish](sound_initiate-silverfish) | 148
[initiate skeleton](sound_initiate-skeleton) | 149
[initiate slime](sound_initiate-slime) | 150
[initiate spider](sound_initiate-spider) | 151
[initiate stray](sound_initiate-stray) | 152
[initiate vex](sound_initiate-vex) | 153
[initiate vindication illager](sound_initiate-vindication-illager) | 154
[initiate witch](sound_initiate-witch) | 155
[initiate wither](sound_initiate-wither) | 156
[initiate wither skeleton](sound_initiate-wither-skeleton) | 157
[initiate wolf](sound_initiate-wolf) | 158
[initiate zombie](sound_initiate-zombie) | 159
[initiate zombie pigman](sound_initiate-zombie-pigman) | 160
[initiate zombie villager](sound_initiate-zombie-villager) | 161
[block end portal frame fill](sound_block-end-portal-frame-fill) | 162
[block end portal spawn](sound_block-end-portal-spawn) | 163
[random anvil use](sound_random-anvil-use) | 164
[bottle dragonbreath](sound_bottle-dragonbreath) | 165
[default](sound_default) | 166
[undefined](sound_undefined) | 167

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.

