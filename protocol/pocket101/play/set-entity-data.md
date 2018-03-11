---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  set-entity-data

# Set entity data

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.SetEntityData)

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
metadata | [metadata](/protocol/pocket101/metadata)
