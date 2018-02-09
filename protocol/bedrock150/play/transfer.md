---
layout: default
---

[home](/) ➡ [bedrock150](/protocol/bedrock150) ➡ [play](/protocol/bedrock150/play) ➡ transfer

# Transfer

**Id**: 85

**Id** (hex): 55

**Id** (bin): 01010101

✔️

✔️

Transfers the player to another server. Once transferred the player will immediately close the connection with the transferring server, try to resolve the ip and join the new server starting a new raknet session.

## Fields

Name | Type | Default
---|---|:---:
[ip](#ip) | string | 
[port](#port) | ushort | 19132

### ip

Address of the new server. It can be an dotted ip (for example `127.0.0.1`) or an URI (for example `localhost` or `play.example.com`). Only IP of version 4 are currently allowed.

### port

Port of the new server. If 0 the server will try to connect to the default port.

