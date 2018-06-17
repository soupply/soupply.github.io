---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  resource-packs-stack-packet

# Resource packs stack packet

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.ResourcePacksStackPacket)

**Id**: 7

**Id** (hex): 07

**Id** (bin): 00000111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
must accept | bool
behaviour packs | [pack](/protocol/bedrock261/types/pack)[]
resource packs | [pack](/protocol/bedrock261/types/pack)[]
