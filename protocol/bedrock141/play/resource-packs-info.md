---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  resource-packs-info

# Resource packs info

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.ResourcePacksInfo)

**Id**: 6

**Id** (hex): 06

**Id** (bin): 00000110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
must accept | bool | [](/protocol/bedrock141/types/)
behaviour packs | [packWithSize](/protocol/bedrock141/types/pack-with-size)[] | ushort
resource packs | [packWithSize](/protocol/bedrock141/types/pack-with-size)[] | ushort
