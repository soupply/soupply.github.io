---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  start-game

# Start game

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.StartGame)

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
edu features enabled | bool | 
[rain level](#rain-level) | float | 
lightning level | float | 
multiplayer game | bool | true
broadcast to lan | bool | 
broadcast to xbl | bool | 
[commands enabled](#commands-enabled) | bool | 
texture required | bool | 
game rules | [rule](/protocol/bedrock274/types/rule)[] | 
has bonus chest enabled | bool | 
has start with map enabled | bool | 
has trust players enabled | bool | 
default permission level | varint | 
xbox live broadcast mode | varint | 
server chunk tick radius | uint | 
has platform broadcast | bool | 
platform broadcast mode | varint | 
xbox live broadcast intent | bool | 
has locked behavior pack | bool | 
has locked resource pack | bool | 
is from locked world template | bool | 
level id | string | 
[world name](#world-name) | string | 
premium world template | string | 
is trial | bool | 
current tick | ulong | 
enchantment seed | varint | 

### entity id

Player's entity id that uniquely identifies the entity of the server.

### gamemode

Player's gamemode that may differ from the world's gamemode.

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1
adventure | 2

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

Default's world gamemode.

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

### version

Game's edition. Some behaviours (some entities for example) may only work in a version and not in the other.

**Constants**:

Name | Value
---|:---:
vanilla | 0
education | 1

### rain level

Intensity of the rain or the snow. Any value lower than or equals to 0 means no rain.

### commands enabled

Indicates whether the cheats are enabled. If the cheats are disabled the player cannot send commands.

### world name

World's name that will be displayed in the game's world settings. It can contain formatting codes.
