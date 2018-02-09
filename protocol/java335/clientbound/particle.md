---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  particle

# Particle

**Id**: 34

**Id** (hex): 22

**Id** (bin): 00100010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[particle id](#particle-id) | uint
long distance | bool
position | float&lt;xyz&gt;
offset | float&lt;xyz&gt;
data | float
count | uint
additional data | varuint[2]

### particle id

**Constants**:

Name | Value
---|:---:
[explode](particle-id_explode) | 0
[large explosion](particle-id_large-explosion) | 1
[huge explosion](particle-id_huge-explosion) | 2
[firework spark](particle-id_firework-spark) | 3
[bubble](particle-id_bubble) | 4
[splash](particle-id_splash) | 5
[wake](particle-id_wake) | 6
[suspended](particle-id_suspended) | 7
[depth suspend](particle-id_depth-suspend) | 8
[crit](particle-id_crit) | 9
[magic crit](particle-id_magic-crit) | 10
[smoke](particle-id_smoke) | 11
[large smoke](particle-id_large-smoke) | 12
[spell](particle-id_spell) | 13
[instant spell](particle-id_instant-spell) | 14
[mob spell](particle-id_mob-spell) | 15
[mob spell ambient](particle-id_mob-spell-ambient) | 16
[witch magic](particle-id_witch-magic) | 17
[drip water](particle-id_drip-water) | 18
[drip lava](particle-id_drip-lava) | 19
[angry villager](particle-id_angry-villager) | 20
[happy villager](particle-id_happy-villager) | 21
[town aura](particle-id_town-aura) | 22
[note](particle-id_note) | 23
[portal](particle-id_portal) | 24
[enchantment table](particle-id_enchantment-table) | 25
[flame](particle-id_flame) | 26
[lava](particle-id_lava) | 27
[footstep](particle-id_footstep) | 28
[cloud](particle-id_cloud) | 29
[red dust](particle-id_red-dust) | 30
[snowball poof](particle-id_snowball-poof) | 31
[snow shovel](particle-id_snow-shovel) | 32
[slime](particle-id_slime) | 33
[heart](particle-id_heart) | 34
[barrier](particle-id_barrier) | 35
[item crack](particle-id_item-crack) | 36
[block crack](particle-id_block-crack) | 37
[block dust](particle-id_block-dust) | 38
[droplet](particle-id_droplet) | 39
[take](particle-id_take) | 40
[mob appearance](particle-id_mob-appearance) | 41
[dragon breath](particle-id_dragon-breath) | 42
[endrod](particle-id_endrod) | 43
[damage indicator](particle-id_damage-indicator) | 44
[sweep attack](particle-id_sweep-attack) | 45
[falling dust](particle-id_falling-dust) | 46

