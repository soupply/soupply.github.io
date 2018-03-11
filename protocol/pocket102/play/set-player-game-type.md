---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  set-player-game-type

# Set player game type

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.SetPlayerGameType)

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
