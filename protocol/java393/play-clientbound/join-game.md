---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  join-game

# Join game

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.JoinGame)

**Id**: 37

**Id** (hex): 25

**Id** (bin): 00100101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | uint
[gamemode](#gamemode) | ubyte
[dimension](#dimension) | int
[difficulty](#difficulty) | ubyte
max players | ubyte
[level type](#level-type) | string
reduced debug | bool

### gamemode

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1
adventure | 2
spectator | 3

### dimension

**Constants**:

Name | Value
---|:---:
nether | -1
overworld | 0
end | 1

### difficulty

**Constants**:

Name | Value
---|:---:
peaceful | 0
easy | 1
normal | 2
hard | 3

### level type

**Constants**:

Name | Value
---|:---:
infinity | default
flat | flat
amplified | amplified
large biomes | largeBiomes
