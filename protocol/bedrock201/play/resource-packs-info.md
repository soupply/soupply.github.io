---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  resource-packs-info

# Resource packs info

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.ResourcePacksInfo)

**Id**: 6

**Id** (hex): 06

**Id** (bin): 00000110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
must accept | bool | [](/protocol/bedrock201/types/)
behaviour packs | [packWithSize](/protocol/bedrock201/types/pack-with-size)[] | ushort
resource packs | [packWithSize](/protocol/bedrock201/types/pack-with-size)[] | ushort
