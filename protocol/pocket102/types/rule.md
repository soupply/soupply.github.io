---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [types](/protocol/pocket102/types)  /  rule

# Rule

A game rule that prevents the client from doing client-side actions and animations.

## Fields

Name | Type
---|---
[name](#name) | string
[value](#value) | bool
? | bool

### name

Name of the rule. Same of the `gamerule` command's field in Minecraft: Education Edition.
The behaviours indicated in the following constants' descriptions is enabled or disabled.

**Constants**:

Name | Value |  |
---|:---:|---
drowning damage | drowningdamage | Damage animation when drowning
fall damage | falldamage | Damage animation when falling
fire damage | firedamage | Damage animation when burning
immutable world | immutableworld | Breaking animation and related packets
pvp | pvp | Damage animation and related packets

### value

Indicates whether the game rule is enabled.
