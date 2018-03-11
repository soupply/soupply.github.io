---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  update-attributes

# Update attributes

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.UpdateAttributes)

**Id**: 29

**Id** (hex): 1D

**Id** (bin): 00011101

**Clientbound**: ✔️

**Serverbound**: ✖️

Updates an entity's attributes. This packet should be used when a value must be modified but it cannot be done using another packet (for example controlling the player's experience and level).

## Fields

Name | Type
---|---
entity id | varlong
attributes | [attribute](/protocol/bedrock141/types/attribute)[]
