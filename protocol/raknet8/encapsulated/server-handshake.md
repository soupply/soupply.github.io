---
layout: default
---

[home](/) ➡ [raknet8](/protocol/raknet8) ➡ [encapsulated](/protocol/raknet8/encapsulated) ➡ server-handshake

# Server-handshake

**Id**: 16

**Id** (hex): 10

**Id** (bin): 00010000

✔️

✔️

## Fields

Name | Type
---|---
client address | [address](/protocol/raknet8/types/address)
mtu length | ushort
system addresses | [address](/protocol/raknet8/types/address)[10]
ping id | long
server id | long

