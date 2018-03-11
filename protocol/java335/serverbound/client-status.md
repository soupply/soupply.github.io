---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  client-status

# Client status

Encode/decode this packet in [Sandbox](../../../sandbox/java335#serverbound.client_status)

**Id**: 4

**Id** (hex): 04

**Id** (bin): 00000100

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[action](#action) | varuint

### action

**Constants**:

Name | Value
---|:---:
respawn | 0
request stats | 1
