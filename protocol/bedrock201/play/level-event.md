---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  level-event

# Level event

**Id**: 25

**Id** (hex): 19

**Id** (bin): 00011001

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
[start block break](event-id_start-block-break) | 3600
[stop block break](event-id_stop-block-break) | 3601
[set data](event-id_set-data) | 4000
[players sleeping](event-id_players-sleeping) | 9800
[particle bubble](event-id_particle-bubble) | 16385
[particle critical](event-id_particle-critical) | 16386
[particle block force field](event-id_particle-block-force-field) | 16387
[particle smoke](event-id_particle-smoke) | 16388
[particle explode](event-id_particle-explode) | 16389
[particle evaporation](event-id_particle-evaporation) | 16390
[particle flame](event-id_particle-flame) | 16391
[particle lava](event-id_particle-lava) | 16392
[particle large smoke](event-id_particle-large-smoke) | 16393
[particle redstone](event-id_particle-redstone) | 16394
[particle rising red dust](event-id_particle-rising-red-dust) | 16395
[particle item break](event-id_particle-item-break) | 16396
[particle snowball poof](event-id_particle-snowball-poof) | 16397
[particle huge explode](event-id_particle-huge-explode) | 16398
[particle huge explode seed](event-id_particle-huge-explode-seed) | 16399
[particle mob flame](event-id_particle-mob-flame) | 16400
[particle heart](event-id_particle-heart) | 16401
[particle terrain](event-id_particle-terrain) | 16402
[particle town aura](event-id_particle-town-aura) | 16403
[particle portal](event-id_particle-portal) | 16404
[particle water splash](event-id_particle-water-splash) | 16405
[particle water wake](event-id_particle-water-wake) | 16406
[particle drip water](event-id_particle-drip-water) | 16407
[particle drip lava](event-id_particle-drip-lava) | 16408
[particle falling dust](event-id_particle-falling-dust) | 16409
[particle mob spell](event-id_particle-mob-spell) | 16410
[particle mob spell ambient](event-id_particle-mob-spell-ambient) | 16411
[particle mob spell instantaneous](event-id_particle-mob-spell-instantaneous) | 16412
[particle ink](event-id_particle-ink) | 16413
[particle slime](event-id_particle-slime) | 16414
[particle rain splash](event-id_particle-rain-splash) | 16415
[particle villager angry](event-id_particle-villager-angry) | 16416
[particle villager happy](event-id_particle-villager-happy) | 16417
[particle enchantment table](event-id_particle-enchantment-table) | 16418
[particle tracking emitter](event-id_particle-tracking-emitter) | 16419
[particle note](event-id_particle-note) | 16420
[particle witch spell](event-id_particle-witch-spell) | 16421
[particle carrot](event-id_particle-carrot) | 16422
[particle end rod](event-id_particle-end-rod) | 16424
[particle dragon breath](event-id_particle-dragon-breath) | 16425
[particle shoot](event-id_particle-shoot) | 2000
[particle destroy](event-id_particle-destroy) | 2001
[particle splash](event-id_particle-splash) | 2002
[particle eye despawn](event-id_particle-eye-despawn) | 2003
[particle spawn](event-id_particle-spawn) | 2004
