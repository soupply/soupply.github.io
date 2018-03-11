---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  change-game-state

# Change game state

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.ChangeGameState)

**Id**: 30

**Id** (hex): 1E

**Id** (bin): 00011110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[reason](#reason) | ubyte
[value](#value) | float

### reason

**Constants**:

Name | Value
---|:---:
invalid bed | 0
end raining | 1
begin raining | 2
change gamemode | 3
exit end | 4
demo message | 5
arrow hitting player | 6
fade value | 7
fade time | 8
play elder guardian mob appearance | 10

### value

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1
adventure | 2
spectator | 3
respawn immediately | 0
respawn after credits | 1
show demo screen | 0
tell movement controls | 101
tell jump controls | 102
tell inventory controls | 103
bright | 0
dark | 1
