---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  play-status

# Play status

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#play.play_status)

**Id**: 2

**Id** (hex): 02

**Id** (bin): 00000010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[status](#status) | uint

### status

**Constants**:

Name | Value
---|:---:
ok | 0
outdated client | 1
outdated server | 2
spawned | 3
invalid tenant | 4
edition mismatch | 5
