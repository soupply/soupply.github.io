---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  resource-pack-client-response

# Resource pack client response

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.ResourcePackClientResponse)

**Id**: 8

**Id** (hex): 08

**Id** (bin): 00001000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | Length
---|---|:---:
[status](#status) | ubyte | [](/protocol/bedrock150/types/)
pack ids | string[] | ushort

### status

**Constants**:

Name | Value
---|:---:
refused | 1
send packs | 2
have all packs | 3
completed | 4
