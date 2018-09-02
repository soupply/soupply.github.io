---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [types](/protocol/bedrock282/types)  /  player-list

# Player list

## Fields

Name | Type
---|---
[uuid](#uuid) | [mcpeUuid](/protocol/bedrock282/types/mcpe-uuid)
[entity id](#entity-id) | varlong
[display name](#display-name) | string
[skin](#skin) | [skin](/protocol/bedrock282/types/skin)
? | string

### uuid

UUID of the player. If it's associated with an XBOX Live account the player's profile will also be available in pause menu.

### entity id

Player's id, used to associate the skin with the game's entity spawned with [AddPlayer](#play_add-player).

### display name

Player's display name, that can contain Minecraft's formatting codes. It shouldn't contain suffixes nor prefixes.

### skin

Player's [skin](http://minecraft.gamepedia.com/Skin) usually given in the [Login](#play_login)'s packet body.
