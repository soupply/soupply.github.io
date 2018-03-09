---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  metadata

# Metadata

## Encoding

**Length**: varuint

## Types

Name | Type | Id
---|---|:---:
byte | byte | 0
short | short | 1
int | varint | 2
float | float | 3
string | string | 4
slot | [slot](/protocol/bedrock137/types/slot) | 5
blockPosition | varint&lt;xyz&gt; | 6
long | varlong | 7
entityPosition | float&lt;xyz&gt; | 8

## Data
Name | Type | Id | Default | Required
---|---|---|---|---
[Entity Flags](#entity-flags) | long | 0 | 0 | ✓
Health | int | 1 |  |  
Variant | int | 2 |  |  
Color | byte | 3 |  |  
Nametag | string | 4 |  |  
Owner | long | 5 | -1 |  
Target | long | 6 |  |  
[Air](#air) | short | 7 | 0 | ✓
Potion Color | int | 8 |  |  
Potion Ambient | byte | 9 |  |  
Hurt Time | int | 11 |  |  
Hurt Direction | int | 12 |  |  
Paddle Time Left | float | 13 |  |  
Paddle Time Right | float | 14 |  |  
Experience Count | int | 15 |  |  
Minecart Block | int | 16 |  |  
Minecart Offset | int | 17 |  |  
Minecart Has Block | byte | 18 |  |  
Enderman Item Id | short | 23 |  |  
Enderman Item Damage | short | 24 |  |  
Age | short | 25 |  |  
[Player Flags](#player-flags) | byte | 27 |  |  
Player Index | int | 28 |  |  
Bed Position | [blockPosition](/protocol/bedrock137/types/block-position) | 29 |  |  
Fireball Power X | float | 30 |  |  
Fireball Power Y | float | 31 |  |  
Fireball Power Z | float | 32 |  |  
Potion Aux Value | short | 37 |  |  
Lead Holder | long | 38 | -1 | ✓
Scale | float | 39 | 1 |  
Interactive Tag | string | 40 |  |  
Npc Id | string | 41 |  |  
[Interactive Tag Url](#interactive-tag-url) | string | 42 |  |  
Max Air | short | 43 |  |  
Mark Variant | int | 44 |  |  
Block Target | [blockPosition](/protocol/bedrock137/types/block-position) | 48 |  |  
[Invulnerable Time](#invulnerable-time) | int | 49 |  |  
[Center Head Target](#center-head-target) | long | 50 |  |  
[Left Head Target](#left-head-target) | long | 51 |  |  
[Right Head Target](#right-head-target) | long | 52 |  |  
Bounding Box Width | float | 54 |  |  
Bounding Box Height | float | 55 |  |  
Fuse Length | int | 56 |  |  
Rider Seat Position | [entityPosition](/protocol/bedrock137/types/entity-position) | 57 |  |  
Rider Rotation Locked | byte | 58 |  |  
Rider Max Rotation | float | 59 |  |  
Rider Min Rotation | float | 60 |  |  
Area Effect Cloud Radius | float | 61 | 0.5 |  
Area Effect Cloud Waiting | int | 62 |  |  
Area Effect Cloud Particle | int | 63 |  |  
Shulker Peak Height | int | 64 |  |  
Shulker Direction | byte | 65 |  |  
Shulker Attachment | [blockPosition](/protocol/bedrock137/types/block-position) | 67 |  |  
Trading Player | long | 68 |  |  
Command Block Command | string | 71 |  |  
Command Block Last Output | string | 72 |  |  
Command Block Track Output | string | 73 |  |  
Controlling Rider Seat Number | byte | 74 |  |  
Strength | int | 75 |  |  
Max Strength | int | 76 |  |  

### Entity Flags

Flag | Bit
---|---
on fire | 0
sneaking | 1
riding | 2
sprinting | 3
using item | 4
invisible | 5
tempted | 6
in love | 7
saddled | 8
powered | 9
ignited | 10
baby | 11
converting | 12
critical | 13
show nametag | 14
always show nametag | 15
no ai | 16
silent | 17
climbing | 18
can climb | 19
can swim | 20
can fly | 21
resting | 22
sitting | 23
angry | 24
interested | 25
charged | 26
tamed | 27
leashed | 28
sheared | 29
gliding | 30
elder | 31
moving | 32
breathing | 33
chested | 34
stackable | 35
showbase | 36
rearing | 37
vibrating | 38
idling | 39
evoker spell | 40
charge attack | 41
is wasd controlled | 42
linger | 44
collide | 45
gravity | 46
dancing | 48
### Air

Indicates the percentage of the air for the entity (and shows the right amount of bubbles). 0 means out of water or drowning (no bubbles) and 300 means underwater with full air.

### Player Flags

Flag | Bit
---|---
asleep | 1
### Interactive Tag Url

NPC's tag with external link.

### Invulnerable Time

Wither's invulnerable time.

### Center Head Target

Wither's central head.

### Left Head Target

Wither's left (or right?) head.

### Right Head Target

Wither's right (or left?) head.
