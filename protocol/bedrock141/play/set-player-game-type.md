---
layout: default
---

[home](/) ➡ [bedrock141](/protocol/bedrock141) ➡ [play](/protocol/bedrock141/play) ➡ set-player-game-type

# Set-player-game-type

**Id**: 62

**Id** (hex): 3E

**Id** (bin): 00111110

✔️

✔️

Sets the player's gamemode. This packet is sent by the player when it has the operator status (set in [AdventureSettings.permissions](#play_adventure-settings_permissions)) and it changes the gamemode in the settings screen.

## Fields

Name | Type
---|---
[gamemode](#gamemode) | varint

### gamemode

**Constants**:
Name | Value
---|:---:
[survival](gamemode_survival) | 0
[creative](gamemode_creative) | 1
[adventure](gamemode_adventure) | 2

