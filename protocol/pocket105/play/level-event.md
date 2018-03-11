---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  level-event

# Level event

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.LevelEvent)

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
start rain | 3001
start thunder | 3002
stop rain | 3003
stop thunder | 3004
set data | 4000
players sleeping | 9800
bubble | 16385
critical | 16386
block force field | 16387
smoke | 16388
explode | 16389
evaporation | 16390
flame | 16391
lava | 16392
large smoke | 16393
redstone | 16394
rising red dust | 16395
item break | 16396
snowball poof | 16397
huge explode | 16398
huge explode seed | 16399
mob flame | 16400
heart | 16401
terrain | 16402
town aura | 16403
portal | 16404
water splash | 16405
water wake | 16406
drip water | 16407
drip lava | 16408
falling dust | 16409
mob spell | 16410
mob spell ambient | 16411
mob spell instantaneous | 16412
ink | 16413
slime | 16414
rain splash | 16415
villager angry | 16416
villager happy | 16417
enchantment table | 16418
tracking emitter | 16419
note | 16420
witch spell | 16421
carrot | 16422
end rod | 16424
dragon breath | 16425
shoot | 2000
destroy | 2001
