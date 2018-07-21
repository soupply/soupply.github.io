---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  resource-pack-status

# Resource pack status

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.ResourcePackStatus)

**Id**: 29

**Id** (hex): 1D

**Id** (bin): 00011101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[result](#result) | varuint

### result

**Constants**:

Name | Value
---|:---:
loaded | 0
declined | 1
failed | 2
accepted | 3
