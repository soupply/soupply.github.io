---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [serverbound](/protocol/java315/serverbound)  /  resource-pack-status

# Resource pack status

Encode/decode this packet in [Sandbox](../../../sandbox/java315#serverbound.resource_pack_status)

**Id**: 22

**Id** (hex): 16

**Id** (bin): 00010110

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
