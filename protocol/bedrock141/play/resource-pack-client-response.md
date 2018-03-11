---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  resource-pack-client-response

# Resource pack client response

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#play.resource_pack_client_response)

**Id**: 8

**Id** (hex): 08

**Id** (bin): 00001000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[status](#status) | ubyte
pack ids | [packIds](/protocol/bedrock141/arrays)

### status

**Constants**:

Name | Value
---|:---:
refused | 1
send packs | 2
have all packs | 3
completed | 4
