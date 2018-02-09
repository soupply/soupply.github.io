---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  start-game

# Start-game

**Id**: 11

**Id** (hex): 0B

**Id** (bin): 00001011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Default
---|---|:---:
[entity id](#entity-id) | varlong | 
runtime id | varulong | 
[gamemode](#gamemode) | varint | 
[position](#position) | float&lt;xyz&gt; | 
yaw | float | 
pitch | float | 
[seed](#seed) | varint | 
[dimension](#dimension) | varint | 0
[generator](#generator) | varint | 1
[world gamemode](#world-gamemode) | varint | 
[difficulty](#difficulty) | varint | 
[spawn position](#spawn-position) | varint&lt;xyz&gt; | 
loaded in creative | bool | 
[time](#time) | varint | 
[version](#version) | ubyte | 
[rain level](#rain-level) | float | 
lightning level | float | 
multiplayer game | bool | true
broadcast to lan | bool | 
broadcast to xbl | bool | 
[commands enabled](#commands-enabled) | bool | 
texture required | bool | 
game rules | [rule](/protocol/bedrock141/types/rule)[] | 
bonus chest enabled | bool | 
start with map enabled | bool | 
trust players enabled | bool | 
permission level | varint | 
? | varint | 
level id | string | 
[world name](#world-name) | string | 
premium world template | string | 
? | bool | 
world ticks | ulong | 
? | varint | 

### entity id

Player's entity id that uniquely identifies the entity of the server.

### gamemode

Player's gamemode that may differ from the world's gamemode.

**Constants**:
Name | Value
---|:---:
[survival](gamemode_survival) | 0
[creative](gamemode_creative) | 1
[adventure](gamemode_adventure) | 2

### position

Position where the player will spawn.

### seed

World's seed. It's displayed in the game's world settings and in beta's debug informations on top of the screen.

### dimension

World's dimension. Different dimensions have different sky colours and render distances.

**Constants**:
Name | Value
---|:---:
[overworld](dimension_overworld) | 0
[nether](dimension_nether) | 1
[end](dimension_end) | 2

### generator

World's type. It's displayed in the game's world settings.
In old and infinite world the sky becomes darker at 32 blocks of altitude and in flat worlds it only becomes darker under 0.

**Constants**:
Name | Value
---|:---:
[old](generator_old) | 0
[infinite](generator_infinite) | 1
[flat](generator_flat) | 2

### world gamemode

Default's world gamemode.

### difficulty

World's difficulty. The value is visible in the client's world settings.

**Constants**:
Name | Value
---|:---:
[peaceful](difficulty_peaceful) | 0
[easy](difficulty_easy) | 1
[normal](difficulty_normal) | 2
[hard](difficulty_hard) | 3

### spawn position

Position where the client's compass will point to.

### time

Time of the day that should be in a range from 0 to 24000. If not the absolute value is moduled per 24000.

### version

Game's edition. Some behaviours (some entities for example) may only work in a version and not in the other.

**Constants**:
Name | Value
---|:---:
[vanilla](version_vanilla) | 0
[education](version_education) | 1

### rain level

Intensity of the rain or the snow. Any value lower than or equals to 0 means no rain.

### commands enabled

Indicates whether the cheats are enabled. If the cheats are disabled the player cannot send commands.

### world name

World's name that will be displayed in the game's world settings. It can contain formatting codes.

