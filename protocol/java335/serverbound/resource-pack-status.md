---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  resource-pack-status

# Resource pack status

Encode/decode this packet in [Sandbox](../../../sandbox/java335#serverbound.resource_pack_status)

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
