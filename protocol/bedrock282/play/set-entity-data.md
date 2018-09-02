---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  set-entity-data

# Set entity data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.SetEntityData)

**Id**: 39

**Id** (hex): 27

**Id** (bin): 00100111

**Clientbound**: ✔️

**Serverbound**: ✖️

Updates an entity's metadata.

## Fields

Name | Type
---|---
entity id | varlong
metadata | [metadata](/protocol/bedrock282/metadata)
