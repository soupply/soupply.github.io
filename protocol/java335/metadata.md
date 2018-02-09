---
layout: default
---

[home](/) ➡ [java335](/protocol/java335) ➡ metadata

# Metadata

## Encoding

**Suffix**: 255

## Types

Name | Type | Id
---|---|:---:
byte | byte | 0
int | varuint | 1
float | float | 2
string | string | 3
chat | string | 4
slot | [slot](/protocol/java335/types/slot) | 5
bool | bool | 6
rotation | float&lt;xyz&gt; | 7
position | ulong | 8
optionalPosition | [optionalPosition](/protocol/java335/types/optional-position) | 9
direction | varuint | 10
uuid | [optionalUuid](/protocol/java335/types/optional-uuid) | 11
block | varuint | 12
nbt | bytes | 13
## Data
Name | Type | Id | Default | Required
---|---|---|---|---
[Entity Flags](#entity-flags) | byte | 0 |  | ✓
Air | int | 1 | 300 |  
Nametag | string | 2 |  |  
Show Nametag | bool | 3 |  |  
Silent | bool | 4 |  |  
No Gravity | bool | 5 |  |  
Potion | [slot](/protocol/java335/types/slot) | 6 |  |  
Spawn Position | [position](/protocol/java335/types/position) | 6 |  |  
Radius | float | 6 | 0.5 |  
Color | int | 7 | -1 |  
Is Single Point | bool | 8 |  |  
Particle Id | int | 9 |  |  
Particle Parameter 1 | int | 10 |  |  
Particle Parameter 2 | int | 11 |  |  
Hooked Entity | int | 6 |  |  
[Arrow Flags](#arrow-flags) | byte | 6 |  |  
Time Since Last Hit | int | 6 |  |  
Forward Direction | int | 7 | 1 |  
Damage Taken | float | 8 | 0 |  
Boat Variant | int | 9 |  |  
Right Paddle Turning | bool | 10 |  |  
Left Paddle Turning | bool | 11 |  |  
Beam Target | [optionalPosition](/protocol/java335/types/optional-position) | 6 |  |  
Show Bottom | bool | 7 |  |  
Firework | [slot](/protocol/java335/types/slot) | 6 |  |  
Firework Thrower | int | 7 |  |  
Item | [slot](/protocol/java335/types/slot) | 6 |  |  
Rotation | int | 7 |  |  
[Living Flags](#living-flags) | byte | 6 |  |  
Health | float | 7 | 1 |  
Potion Color | int | 8 |  |  
Potion Ambient | bool | 9 |  |  
Arrows | int | 10 |  |  
Additional Hearts | float | 11 | 0 |  
Score | int | 12 |  |  
[Skin Parts](#skin-parts) | byte | 13 | 0 |  
Main Hand | byte | 14 | 1 |  
Left Shoulder | [nbt](/protocol/java335/types/nbt) | 15 |  |  
Right Shoulder | [nbt](/protocol/java335/types/nbt) | 16 |  |  
[Armor Stand Flags](#armor-stand-flags) | byte | 11 |  |  
Head Rotation | [rotation](/protocol/java335/types/rotation) | 12 |  |  
Body Rotation | [rotation](/protocol/java335/types/rotation) | 13 |  |  
Left Arm Rotation | [rotation](/protocol/java335/types/rotation) | 14 |  |  
Right Arm Rotation | [rotation](/protocol/java335/types/rotation) | 15 |  |  
Left Leg Rotation | [rotation](/protocol/java335/types/rotation) | 16 |  |  
Right Leg Rotation | [rotation](/protocol/java335/types/rotation) | 17 |  |  
[Instentient Flags](#instentient-flags) | byte | 11 |  |  
Hanging | byte | 12 |  |  
Baby | bool | 12 |  |  
[Horse Flags](#horse-flags) | byte | 13 |  |  
Owner Uuid | uuid | 14 |  |  
Horse Variant | int | 15 |  |  
Horse Armor | int | 16 |  |  
Chested | bool | 15 |  |  
Llama Strength | int | 16 |  |  
Carpet Color | int | 17 | -1 |  
Llama Variant | int | 18 |  |  
Pig Saddled | bool | 13 |  |  
Carrot Boost | int | 14 |  |  
Rabbit Variant | int | 13 |  |  
Standing Up | bool | 13 |  |  
[Sheep Flags and Color](#sheep-flags-and-color) | byte | 13 |  |  
[Tameable Flags](#tameable-flags) | byte | 13 |  |  
Ocelot Variant | int | 15 |  |  
Parrot Color | int | 15 |  |  
Wolf Health | float | 15 |  |  
Begging | bool | 16 |  |  
Collar Color | int | 17 | 14 |  
Profession | int | 13 |  |  
Created By Player | byte | 12 |  |  
[Snowman Flags](#snowman-flags) | byte | 12 |  |  
Shulker Direction | [direction](/protocol/java335/types/direction) | 12 |  |  
Shulker Attachment | [optionalPosition](/protocol/java335/types/optional-position) | 13 |  |  
Shulker Shield Height | byte | 14 |  |  
Shulker Color | byte | 15 |  |  
Blaze On Fire | byte | 12 |  |  
Creeper State | int | 12 | -1 |  
Charged | bool | 13 |  |  
Ignited | bool | 14 |  |  
Rectracting Spikes | bool | 12 |  |  
Guardian Target | int | 13 |  |  
Spell | byte | 12 |  |  
Attack Mode | byte | 12 |  |  
Swinging Arms | bool | 12 |  |  
Climbing | byte | 12 |  |  
Center Head Target | int | 12 |  |  
Left Head Target | int | 13 |  |  
Right Head Target | int | 14 |  |  
Invulnerable Time | int | 15 |  |  
Hands Held Up | bool | 14 |  |  
Converting | bool | 15 |  |  
Zombie Villager Profession | int | 16 |  |  
Carried Block | [block](/protocol/java335/types/block) | 12 |  |  
Screaming | bool | 13 |  |  
Dragon Phase | int | 12 |  |  
Ghast Attacking | bool | 12 |  |  
Slime Size | int | 12 | 1 |  
Shaking Power | int | 6 |  |  
Shaking Direction | int | 7 |  |  
Shaking Multiplier | float | 8 | 0 |  
Minecart Block | int | 9 |  |  
Minecart Block Position | int | 10 | 6 |  
Minecart Custom Block | bool | 11 |  |  
Furnace Powered | bool | 12 |  |  
Command | string | 12 |  |  
Last Output | [chat](/protocol/java335/types/chat) | 13 |  |  
Fuse Time | int | 6 |  |  
### Entity Flags

Flag | Bit
---|---
on fire | 0
sneaking | 1
sprinting | 3
invisible | 5
glowing | 6
gliding | 7
### Arrow Flags

Flag | Bit
---|---
critical | 0
### Living Flags

Flag | Bit
---|---
hand active | 0
offhand | 1
### Skin Parts

Flag | Bit
---|---
cape | 0
jacket | 1
left sleeve | 2
right sleeve | 3
left pants | 4
right pants | 5
hat | 6
### Armor Stand Flags

Flag | Bit
---|---
is small | 0
has arms | 2
no base plate | 3
set marker | 4
### Instentient Flags

Flag | Bit
---|---
no ai | 0
left handed | 1
### Horse Flags

Flag | Bit
---|---
horse tamed | 1
horse saddled | 2
horse chested | 3
horse eating | 5
horse rearing | 6
mouth open | 7
### Sheep Flags and Color

Flag | Bit
---|---
sheared | 7
### Tameable Flags

Flag | Bit
---|---
sitting | 0
angry | 1
tamed | 2
### Snowman Flags

Flag | Bit
---|---
pumpkinless | 4
