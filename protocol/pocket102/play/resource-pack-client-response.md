---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  resource-pack-client-response

# Resource pack client response

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#play.resource_pack_client_response)

**Id**: 9

**Id** (hex): 09

**Id** (bin): 00001001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[status](#status) | ubyte
pack ids | [packIds](/protocol/pocket102/arrays)

### status

**Constants**:

Name | Value
---|:---:
refused | 1
send packs | 2
have all packs | 3
completed | 4
