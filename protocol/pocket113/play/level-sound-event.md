---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  level-sound-event

# Level sound event

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
[item use on](sound_item-use-on) | 0
[hit](sound_hit) | 1
[step](sound_step) | 2
[jump](sound_jump) | 3
[break](sound_break) | 4
[place](sound_place) | 5
[heavy step](sound_heavy-step) | 6
[gallop](sound_gallop) | 7
[fall](sound_fall) | 8
[ambient](sound_ambient) | 9
[ambient baby](sound_ambient-baby) | 10
[ambient in water](sound_ambient-in-water) | 11
[breathe](sound_breathe) | 12
[death](sound_death) | 13
[death in water](sound_death-in-water) | 14
[death to zombie](sound_death-to-zombie) | 15
[hurt](sound_hurt) | 16
[hurt in water](sound_hurt-in-water) | 17
[mad](sound_mad) | 18
[boost](sound_boost) | 19
[bow](sound_bow) | 20
[squish big](sound_squish-big) | 21
[squish small](sound_squish-small) | 22
[fall big](sound_fall-big) | 23
[fall small](sound_fall-small) | 24
[splash](sound_splash) | 25
[fizz](sound_fizz) | 26
[flap](sound_flap) | 27
[swim](sound_swim) | 28
[drink](sound_drink) | 29
[eat](sound_eat) | 30
[takeoff](sound_takeoff) | 31
[shake](sound_shake) | 32
[plop](sound_plop) | 33
[land](sound_land) | 34
[saddle](sound_saddle) | 35
[armor](sound_armor) | 36
[add chest](sound_add-chest) | 37
[throw](sound_throw) | 38
[attack](sound_attack) | 39
[attack nodamage](sound_attack-nodamage) | 40
[warn](sound_warn) | 41
[shear](sound_shear) | 42
[milk](sound_milk) | 43
[thunder](sound_thunder) | 44
[explode](sound_explode) | 45
[fire](sound_fire) | 46
[ignite](sound_ignite) | 47
[fuse](sound_fuse) | 48
[stare](sound_stare) | 49
[spawn](sound_spawn) | 50
[shoot](sound_shoot) | 51
[break block](sound_break-block) | 52
[remedy](sound_remedy) | 53
[unfect](sound_unfect) | 54
[levelup](sound_levelup) | 55
[bow hit](sound_bow-hit) | 56
[bullet hit](sound_bullet-hit) | 57
[extinguish fire](sound_extinguish-fire) | 58
[item fizz](sound_item-fizz) | 59
[chest open](sound_chest-open) | 60
[chest closed](sound_chest-closed) | 61
[shulker box open](sound_shulker-box-open) | 62
[shulker box close](sound_shulker-box-close) | 63
[power on](sound_power-on) | 64
[power off](sound_power-off) | 65
[attach](sound_attach) | 66
[detach](sound_detach) | 67
[deny](sound_deny) | 68
[tripod](sound_tripod) | 69
[pop](sound_pop) | 70
[drop slot](sound_drop-slot) | 71
[note](sound_note) | 72
[thorns](sound_thorns) | 73
[piston in](sound_piston-in) | 74
[piston out](sound_piston-out) | 75
[portal](sound_portal) | 76
[water](sound_water) | 77
[lava pop](sound_lava-pop) | 78
[lava](sound_lava) | 79
[burp](sound_burp) | 80
[bucket fill water](sound_bucket-fill-water) | 81
[bucket fill lava](sound_bucket-fill-lava) | 82
[bucket empty water](sound_bucket-empty-water) | 83
[bucket empty lava](sound_bucket-empty-lava) | 84
[guardian flop](sound_guardian-flop) | 85
[elderguardian curse](sound_elderguardian-curse) | 86
[mob warning](sound_mob-warning) | 87
[mob warning baby](sound_mob-warning-baby) | 88
[teleport](sound_teleport) | 89
[shulker open](sound_shulker-open) | 90
[shulker close](sound_shulker-close) | 91
[haggle](sound_haggle) | 92
[haggle yes](sound_haggle-yes) | 93
[haggle no](sound_haggle-no) | 94
[haggle idle](sound_haggle-idle) | 95
[chorus grow](sound_chorus-grow) | 96
[chorus death](sound_chorus-death) | 97
[glass](sound_glass) | 98
[cast spell](sound_cast-spell) | 99
[prepare attack](sound_prepare-attack) | 100
[prepare summon](sound_prepare-summon) | 101
[prepare wololo](sound_prepare-wololo) | 102
[fang](sound_fang) | 103
[charge](sound_charge) | 104
[take picture](sound_take-picture) | 105
[default](sound_default) | 106
[undefined](sound_undefined) | 107

### position

Position where the sound was generated. The closer to the player the more intense will be on the client.

