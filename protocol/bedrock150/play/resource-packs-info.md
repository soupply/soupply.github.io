---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  resource-packs-info

# Resource packs info

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.ResourcePacksInfo)

**Id**: 6

**Id** (hex): 06

**Id** (bin): 00000110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
must accept | bool | [](/protocol/bedrock150/types/)
behaviour packs | [packWithSize](/protocol/bedrock150/types/pack-with-size)[] | ushort
resource packs | [packWithSize](/protocol/bedrock150/types/pack-with-size)[] | ushort
