---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  update-attributes

# Update attributes

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.UpdateAttributes)

**Id**: 31

**Id** (hex): 1F

**Id** (bin): 00011111

**Clientbound**: ✔️

**Serverbound**: ✖️

Updates an entity's attributes. This packet should be used when a value must be modified but it cannot be done using another packet (for example controlling the player's experience and level).

## Fields

Name | Type
---|---
entity id | varlong
attributes | [attribute](/protocol/pocket101/types/attribute)[]
