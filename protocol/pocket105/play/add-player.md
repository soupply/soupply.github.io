---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  add-player

# Add player

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.AddPlayer)

**Id**: 13

**Id** (hex): 0D

**Id** (bin): 00001101

**Clientbound**: ✔️

**Serverbound**: ✖️

Spawns a player after adding it to the player's list using [PlayerList](#play_player-list). If [PlayerList](#play_player-list) is sent after this packet the player will appear to have the same skin as the player who receives this packet.
Spawning a player to itself (using the same entity id given in the [StartGame](#play_start-game) packet) will crash the client's game.

## Fields

Name | Type
---|---
[uuid](#uuid) | uuid
[username](#username) | string
entity id | varlong
runtime id | varlong
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
pitch | float
head yaw | float
yaw | float
held item | [slot](/protocol/pocket105/types/slot)
metadata | [metadata](/protocol/pocket105/metadata)

### uuid

Player's UUID, should match an UUID of a player in the list added through [PlayerList](#play_player-list).

### username

Player's username and text displayed on the nametag if something else is not specified in the metadata.
