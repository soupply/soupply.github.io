---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [serverbound](/protocol/java393/serverbound)  /  resource-pack-status

# Resource pack status

Encode/decode this packet in [Sandbox](../../../sandbox/java393#Serverbound.ResourcePackStatus)

**Id**: 24

**Id** (hex): 18

**Id** (bin): 00011000

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
