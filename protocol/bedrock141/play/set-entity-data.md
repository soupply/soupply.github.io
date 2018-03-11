---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  set-entity-data

# Set entity data

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#play.set_entity_data)

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
metadata | [metadata](/protocol/bedrock141/metadata)
