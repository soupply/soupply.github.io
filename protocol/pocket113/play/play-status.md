---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  play-status

# Play status

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#Play.PlayStatus)

**Id**: 2

**Id** (hex): 02

**Id** (bin): 00000010

**Clientbound**: ✔️

**Serverbound**: ✖️

Packet sent as response to [Login](#play_login) to indicate whether the connection has been accepted and when the player is ready to spawn in the world.

## Fields

Name | Type
---|---
[status](#status) | uint

### status

**Constants**:

Name | Value |  |
---|:---:|---
ok | 0 | Keep the connection alive
outdated client | 1 | Disconnect with outdated client message
outdated server | 2 | Disconnect with outdated server message
spawned | 3 | Spawn in a world
invalid tenant | 4 | 
edition mismatch edu to vanilla | 5 | 
edition mismatch vanilla to edu | 6 |
