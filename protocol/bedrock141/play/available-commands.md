---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  available-commands

# Available commands

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.AvailableCommands)

**Id**: 76

**Id** (hex): 4C

**Id** (bin): 01001100

**Clientbound**: ✔️

**Serverbound**: ✖️

Sends a list of the commands that the player can use through the [CommandStep](#play_command-step) packet.

## Fields

Name | Type
---|---
enum values | string[]
? | string[]
enums | [enum](/protocol/bedrock141/types/enum)[]
commands | [command](/protocol/bedrock141/types/command)[]
