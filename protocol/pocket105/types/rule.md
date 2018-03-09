---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [types](/protocol/pocket105/types)  /  rule

# Rule

A game rule that prevents the client from doing client-side actions and animations.

## Fields

Name | Type
---|---
[name](#name) | string
[value](#value) | bool
? | bool

### name

Name of the rule. Same of the `gamerule` command's field in the game.
The behaviours indicated in the following constants' descriptions is enabled or disabled.

**Constants**:

Name | Value |  |
---|:---:|---
[command block output](name_command-block-output) | commandblockoutput | Command's block output in the chat
[drowning damage](name_drowning-damage) | drowningdamage | Damage animation when drowning
[fall damage](name_fall-damage) | falldamage | Damage animation when falling
[fire damage](name_fire-damage) | firedamage | Damage animation when burning
[pvp](name_pvp) | pvp | Damage animation and related packets
[send command feedback](name_send-command-feedback) | sendcommandfeedback | 

### value

Indicates whether the game rule is enabled.
