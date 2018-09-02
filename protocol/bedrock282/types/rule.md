---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [types](/protocol/bedrock282/types)  /  rule

# Rule

A game rule that prevents the client from doing client-side actions and animations.

## Fields

Name | Type | When
---|---|:---:
[name](#name) | string | 
[type](#type) | ubyte | 
boolean value | bool | <code>type</code> is equal to <code>1</code>
integer value | varuint | <code>type</code> is equal to <code>2</code>
floating value | float | <code>type</code> is equal to <code>3</code>

### name

Name of the rule. Same of the `gamerule` command's field in the game.
The behaviours indicated in the following constants' descriptions is enabled or disabled.

**Constants**:

Name | Value |  |
---|:---:|---
command block output | commandblockoutput | Command's block output in the chat
do daylight cycle | dodaylightcycle | 
do entity drops | doentitydrops | 
do fire tick | dofiretick | 
do mob loot | domobloot | 
do mob spawning | domobspawning | 
do tile drops | dotiledrops | 
do weather cycle | doweathercycle | 
drowning damage | drowningdamage | Damage animation when drowning
fall damage | falldamage | Damage animation when falling
fire damage | firedamage | Damage animation when burning
keep inventory | keepinventory | 
mob griefing | mobgriefing | 
pvp | pvp | Damage animation and related packets
send command feedback | sendcommandfeedback | 

### type

**Constants**:

Name | Value
---|:---:
boolean | 1
integer | 2
floating | 3
