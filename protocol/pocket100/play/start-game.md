---
layout: default
---

[home](/) ➡ [pocket100](/protocol/pocket100) ➡ [play](/protocol/pocket100/play) ➡ start-game

# Start-game

**Id**: 12

**Id** (hex): 0C

**Id** (bin): 00001100

✔️

✔️

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varlong
position | float&lt;xyz&gt;
yaw | float
pitch | float
seed | varint
[dimension](#dimension) | varint
[generator](#generator) | varint
[world gamemode](#world-gamemode) | varint
[difficulty](#difficulty) | varint
spawn position | varint&lt;xyz&gt;
loaded in creative | bool
time | varint
[edition](#edition) | ubyte
rain level | float
lightning level | float
commands enabled | bool
texture required | bool
level id | string
world name | string

### dimension

**Constants**:
Name | Value
---|:---:
[overworld](dimension_overworld) | 0
[nether](dimension_nether) | 1
[end](dimension_end) | 2

### generator

**Constants**:
Name | Value
---|:---:
[old](generator_old) | 0
[infinite](generator_infinite) | 1
[flat](generator_flat) | 2

### world gamemode

**Constants**:
Name | Value
---|:---:
[survival](world-gamemode_survival) | 0
[creative](world-gamemode_creative) | 1

### difficulty

**Constants**:
Name | Value
---|:---:
[peaceful](difficulty_peaceful) | 0
[easy](difficulty_easy) | 1
[normal](difficulty_normal) | 2
[hard](difficulty_hard) | 3

### edition

**Constants**:
Name | Value
---|:---:
[classic](edition_classic) | 0
[education](edition_education) | 1

