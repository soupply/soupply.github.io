---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  transfer

# Transfer

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.Transfer)

**Id**: 83

**Id** (hex): 53

**Id** (bin): 01010011

**Clientbound**: ✔️

**Serverbound**: ✖️

Transfers the player to another server. Once transferred the player will immediately close the connection with the transferring server, try to resolve the ip and join the new server starting a new raknet session.

## Fields

Name | Type | Endianness | Default
---|---|:---:|:---:
[ip](#ip) | string |  | 
[port](#port) | ushort | little endian | 19132

### ip

Address of the new server. It can be an dotted ip (for example `127.0.0.1`) or an URI (for example `localhost` or `play.example.com`). Only IP of version 4 are currently allowed.

### port

Port of the new server. If 0 the server will try to connect to the default port.
