---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  available-commands

# Available commands

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.AvailableCommands)

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
enums | [enum](/protocol/bedrock261/types/enum)[]
commands | [command](/protocol/bedrock261/types/command)[]
