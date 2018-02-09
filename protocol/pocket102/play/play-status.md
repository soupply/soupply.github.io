---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  play-status

# Play-status

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
[ok](status_ok) | 0 | Keep the connection alive
[outdated client](status_outdated-client) | 1 | Disconnect with outdated client message
[outdated server](status_outdated-server) | 2 | Disconnect with outdated server message
[spawned](status_spawned) | 3 | Spawn in a world
[invalid tenant](status_invalid-tenant) | 4 | 
[edition mismatch](status_edition-mismatch) | 5 | 

