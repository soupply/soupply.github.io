---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  available-commands

# Available-commands

**Id**: 77

**Id** (hex): 4D

**Id** (bin): 01001101

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

