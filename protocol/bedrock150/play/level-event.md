---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  level-event

# Level event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.LevelEvent)

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
start rain | 3001
start thunder | 3002
stop rain | 3003
stop thunder | 3004
start block break | 3600
stop block break | 3601
set data | 4000
players sleeping | 9800
particle bubble | 16385
particle critical | 16386
particle block force field | 16387
particle smoke | 16388
particle explode | 16389
particle evaporation | 16390
particle flame | 16391
particle lava | 16392
particle large smoke | 16393
particle redstone | 16394
particle rising red dust | 16395
particle item break | 16396
particle snowball poof | 16397
particle huge explode | 16398
particle huge explode seed | 16399
particle mob flame | 16400
particle heart | 16401
particle terrain | 16402
particle town aura | 16403
particle portal | 16404
particle water splash | 16405
particle water wake | 16406
particle drip water | 16407
particle drip lava | 16408
particle falling dust | 16409
particle mob spell | 16410
particle mob spell ambient | 16411
particle mob spell instantaneous | 16412
particle ink | 16413
particle slime | 16414
particle rain splash | 16415
particle villager angry | 16416
particle villager happy | 16417
particle enchantment table | 16418
particle tracking emitter | 16419
particle note | 16420
particle witch spell | 16421
particle carrot | 16422
particle end rod | 16424
particle dragon breath | 16425
particle shoot | 2000
particle destroy | 2001
particle splash | 2002
particle eye despawn | 2003
particle spawn | 2004
