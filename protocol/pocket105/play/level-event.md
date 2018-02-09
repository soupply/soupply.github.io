---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  level-event

# Level-event

**Id**: 27

**Id** (hex): 1B

**Id** (bin): 00011011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[event id](#event-id) | varint
position | float&lt;xyz&gt;
data | varint

### event id

**Constants**:
Name | Value
---|:---:
[start rain](event-id_start-rain) | 3001
[start thunder](event-id_start-thunder) | 3002
[stop rain](event-id_stop-rain) | 3003
[stop thunder](event-id_stop-thunder) | 3004
[set data](event-id_set-data) | 4000
[players sleeping](event-id_players-sleeping) | 9800
[bubble](event-id_bubble) | 16385
[critical](event-id_critical) | 16386
[block force field](event-id_block-force-field) | 16387
[smoke](event-id_smoke) | 16388
[explode](event-id_explode) | 16389
[evaporation](event-id_evaporation) | 16390
[flame](event-id_flame) | 16391
[lava](event-id_lava) | 16392
[large smoke](event-id_large-smoke) | 16393
[redstone](event-id_redstone) | 16394
[rising red dust](event-id_rising-red-dust) | 16395
[item break](event-id_item-break) | 16396
[snowball poof](event-id_snowball-poof) | 16397
[huge explode](event-id_huge-explode) | 16398
[huge explode seed](event-id_huge-explode-seed) | 16399
[mob flame](event-id_mob-flame) | 16400
[heart](event-id_heart) | 16401
[terrain](event-id_terrain) | 16402
[town aura](event-id_town-aura) | 16403
[portal](event-id_portal) | 16404
[water splash](event-id_water-splash) | 16405
[water wake](event-id_water-wake) | 16406
[drip water](event-id_drip-water) | 16407
[drip lava](event-id_drip-lava) | 16408
[falling dust](event-id_falling-dust) | 16409
[mob spell](event-id_mob-spell) | 16410
[mob spell ambient](event-id_mob-spell-ambient) | 16411
[mob spell instantaneous](event-id_mob-spell-instantaneous) | 16412
[ink](event-id_ink) | 16413
[slime](event-id_slime) | 16414
[rain splash](event-id_rain-splash) | 16415
[villager angry](event-id_villager-angry) | 16416
[villager happy](event-id_villager-happy) | 16417
[enchantment table](event-id_enchantment-table) | 16418
[tracking emitter](event-id_tracking-emitter) | 16419
[note](event-id_note) | 16420
[witch spell](event-id_witch-spell) | 16421
[carrot](event-id_carrot) | 16422
[end rod](event-id_end-rod) | 16424
[dragon breath](event-id_dragon-breath) | 16425
[shoot](event-id_shoot) | 2000
[destroy](event-id_destroy) | 2001

