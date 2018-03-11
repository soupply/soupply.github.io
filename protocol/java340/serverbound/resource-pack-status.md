---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [serverbound](/protocol/java340/serverbound)  /  resource-pack-status

# Resource pack status

Encode/decode this packet in [Sandbox](../../../sandbox/java340#serverbound.resource_pack_status)

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
