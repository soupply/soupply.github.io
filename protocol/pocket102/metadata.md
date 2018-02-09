---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  metadata

# Metadata

## Encoding

**Length**: varuint

## Types

Name | Type | Id | Endianness
---|---|:---:|---
byte | byte | 0 | 
short | short | 1 | little endian
int | varint | 2 | 
float | float | 3 | 
string | string | 4 | 
slot | [slot](/protocol/pocket102/types/slot) | 5 | 
blockPosition | varint&lt;xyz&gt; | 6 | 
long | varlong | 7 | 
entityPosition | float&lt;xyz&gt; | 8 | 

## Data
Name | Type | Id | Default | Required
---|---|---|---|---
[Entity Flags](#entity-flags) | long | 0 | 0 | ✓
Variant | int | 2 |  |  
Color | byte | 3 |  |  
Nametag | string | 4 |  |  
Owner | long | 5 | -1 |  
[Air](#air) | short | 7 | 0 | ✓
Potion Color | int | 8 |  |  
Potion Ambient | byte | 9 |  |  
Slime Size | byte | 16 | 1 |  
[Player Flags](#player-flags) | byte | 27 |  |  
Player Index | int | 28 |  |  
Bed Position | [blockPosition](/protocol/pocket102/types/block-position) | 29 |  |  
Lead Holder | long | 38 | -1 | ✓
Scale | float | 39 | 1 |  
Interactive Tag | string | 40 |  |  
Interactive Tag Url | string | 43 |  |  
Max Air | short | 44 |  |  
Mark Variant | int | 45 |  |  
Bounding Box Width | float | 54 |  |  
Bounding Box Height | float | 55 |  |  
Fuse Length | int | 56 |  |  
Area Effect Cloud Radius | float | 61 |  |  
Area Effect Cloud Waiting | int | 62 |  |  
Area Effect Cloud Particle | int | 63 |  |  
Trading Player | long | 68 |  |  

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
resting | 19
sitting | 20
angry | 21
interested | 22
charged | 23
tamed | 24
leashed | 25
sheared | 26
gliding | 27
elder | 28
moving | 29
breathing | 30
chested | 31
stackable | 32
idling | 36
### Air

Indicates the percentage of the air for the entity (and shows the right amount of bubbles). 0 means out of water or drowning (no bubbles) and 300 means underwater with full air.

### Player Flags

Flag | Bit
---|---
asleep | 1
