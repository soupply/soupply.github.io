---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  set-player-game-type

# Set player game type

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.SetPlayerGameType)

**Id**: 62

**Id** (hex): 3E

**Id** (bin): 00111110

**Clientbound**: ✔️

**Serverbound**: ✔️

Sets the player's gamemode. This packet is sent by the player when it has the operator status (set in [AdventureSettings.permissions](#play_adventure-settings_permissions)) and it changes the gamemode in the settings screen.

## Fields

Name | Type
---|---
[gamemode](#gamemode) | varint

### gamemode

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1
adventure | 2
