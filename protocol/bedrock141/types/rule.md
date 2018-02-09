---
layout: default
---

[home](/) ➡ [bedrock141](/protocol/bedrock141) ➡ [types](/protocol/bedrock141/types) ➡ rule

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
[command block output](name_command-block-output) | commandblockoutput | Command's block output in the chat
[do daylight cycle](name_do-daylight-cycle) | dodaylightcycle | 
[do entity drops](name_do-entity-drops) | doentitydrops | 
[do fire tick](name_do-fire-tick) | dofiretick | 
[do mob loot](name_do-mob-loot) | domobloot | 
[do mob spawning](name_do-mob-spawning) | domobspawning | 
[do tile drops](name_do-tile-drops) | dotiledrops | 
[do weather cycle](name_do-weather-cycle) | doweathercycle | 
[drowning damage](name_drowning-damage) | drowningdamage | Damage animation when drowning
[fall damage](name_fall-damage) | falldamage | Damage animation when falling
[fire damage](name_fire-damage) | firedamage | Damage animation when burning
[keep inventory](name_keep-inventory) | keepinventory | 
[mob griefing](name_mob-griefing) | mobgriefing | 
[pvp](name_pvp) | pvp | Damage animation and related packets
[send command feedback](name_send-command-feedback) | sendcommandfeedback | 

### type

**Constants**:
Name | Value
---|:---:
[boolean](type_boolean) | 1
[integer](type_integer) | 2
[floating](type_floating) | 3

