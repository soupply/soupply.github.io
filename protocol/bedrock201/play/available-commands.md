---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  available-commands

# Available commands

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.AvailableCommands)

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
enums | [enum](/protocol/bedrock201/types/enum)[]
commands | [command](/protocol/bedrock201/types/command)[]
