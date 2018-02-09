---
layout: default
---

[home](/) ➡ [pocket105](/protocol/pocket105) ➡ [types](/protocol/pocket105/types) ➡ player-list

# Player-list

Informations about a player that will be added to the player's list in the pause menu.

## Fields

Name | Type
---|---
[uuid](#uuid) | uuid
[entity id](#entity-id) | varlong
[display name](#display-name) | string
[skin](#skin) | [skin](/protocol/pocket105/types/skin)

### uuid

UUID of the player. If it's associated with an XBOX Live account the player's profile will also be available in pause menu.

### entity id

Player's id, used to associate the skin with the game's entity spawned with [AddPlayer](#play_add-player).

### display name

Player's display name, that can contain Minecraft's formatting codes. It shouldn't contain suffixes nor prefixes.

### skin

Player's skin usually given in the [Login](#play_login)'s packet body.

