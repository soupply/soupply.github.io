---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  available-commands

# Available-commands

**Id**: 78

**Id** (hex): 4E

**Id** (bin): 01001110

**Clientbound**: ✔️

**Serverbound**: ✖️

Sends a list of the commands that the player can use through the [CommandStep](#play_command-step) packet.

## Fields

Name | Type
---|---
[commands](#commands) | string
? | string

### commands

JSON object with the commands.

