---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  adventure-settings

# Adventure settings

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.adventure_settings)

**Id**: 55

**Id** (hex): 37

**Id** (bin): 00110111

**Clientbound**: ✔️

**Serverbound**: ✔️

Updates the world's settings and client's permissions.

## Fields

Name | Type
---|---
[flags](#flags) | varuint
[permissions](#permissions) | varuint

### flags

**Constants**:

Name | Value
---|:---:
immutable world | 1
pvp disabled | 2
pvm disabled | 4
mvp disbaled | 8
evp disabled | 16
auto jump | 32
allow flight | 64
no clip | 128
flying | 512
muted | 1024

### permissions

**Constants**:

Name | Value
---|:---:
user | 0
operator | 1
host | 2
automation | 3
admin | 4
