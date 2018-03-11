---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  resource-packs-stack-packet

# Resource packs stack packet

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#Play.ResourcePacksStackPacket)

**Id**: 7

**Id** (hex): 07

**Id** (bin): 00000111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
must accept | bool
behaviour packs | [pack](/protocol/bedrock160/types/pack)[]
resource packs | [pack](/protocol/bedrock160/types/pack)[]
