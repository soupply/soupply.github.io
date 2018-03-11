---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  available-commands

# Available commands

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.AvailableCommands)

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
enums | [enum](/protocol/bedrock137/types/enum)[]
commands | [command](/protocol/bedrock137/types/command)[]
