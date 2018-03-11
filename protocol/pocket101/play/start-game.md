---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  start-game

# Start game

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.StartGame)

**Id**: 12

**Id** (hex): 0C

**Id** (bin): 00001100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Default
---|---|:---:
[entity id](#entity-id) | varlong | 
runtime id | varlong | 
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
[edition](#edition) | ubyte | 
[rain level](#rain-level) | float | 
lightning level | float | 
[commands enabled](#commands-enabled) | bool | 
texture required | bool | 
level id | string | 
[world name](#world-name) | string | 

### entity id

Player's entity id that uniquely identifies the entity of the server.

### position

Position where the player will spawn.

### seed

World's seed. It's displayed in the game's world settings and in beta's debug informations on top of the screen.

### dimension

World's dimension. Different dimensions have different sky colours and render distances.

**Constants**:

Name | Value
---|:---:
overworld | 0
nether | 1
end | 2

### generator

World's type. It's displayed in the game's world settings.
In old and infinite world the sky becomes darker at 32 blocks of altitude and in flat worlds it only becomes darker under 0.

**Constants**:

Name | Value
---|:---:
old | 0
infinite | 1
flat | 2

### world gamemode

Default's world gamemode. If the player's gamemode is different from the default's one a [SetPlayerGameType](#play_set-player-game-type) should be sent after this.

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1

### difficulty

World's difficulty. The value is visible in the client's world settings.

**Constants**:

Name | Value
---|:---:
peaceful | 0
easy | 1
normal | 2
hard | 3

### spawn position

Position where the client's compass will point to.

### time

Time of the day that should be in a range from 0 to 24000. If not the absolute value is moduled per 24000.
If the world's time is stopped a [SetTime](#play_set-time) packet should be sent after this.

### edition

Game's edition. Some behaviours (some entities for example) may only work in a version and not in the other.

**Constants**:

Name | Value
---|:---:
classic | 0
education | 1

### rain level

Intensity of the rain or the snow. Any value lower than or equals to 0 means no rain.

### commands enabled

Indicates whether the cheats are enabled. If the cheats are disabled the player cannot send commands.

### world name

World's name that will be displayed in the game's world settings. It can contain formatting codes.
