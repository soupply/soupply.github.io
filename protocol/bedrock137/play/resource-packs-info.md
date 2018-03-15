---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  resource-packs-info

# Resource packs info

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.ResourcePacksInfo)

**Id**: 6

**Id** (hex): 06

**Id** (bin): 00000110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
must accept | bool | [](/protocol/bedrock137/types/)
behaviour packs | [packWithSize](/protocol/bedrock137/types/pack-with-size)[] | ushort
resource packs | [packWithSize](/protocol/bedrock137/types/pack-with-size)[] | ushort
