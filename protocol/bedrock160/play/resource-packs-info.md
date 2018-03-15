---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  resource-packs-info

# Resource packs info

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#Play.ResourcePacksInfo)

**Id**: 6

**Id** (hex): 06

**Id** (bin): 00000110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
must accept | bool | [](/protocol/bedrock160/types/)
behaviour packs | [packWithSize](/protocol/bedrock160/types/pack-with-size)[] | ushort
resource packs | [packWithSize](/protocol/bedrock160/types/pack-with-size)[] | ushort
