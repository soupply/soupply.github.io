---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [serverbound](/protocol/java338/serverbound)  /  client-status

# Client status

Encode/decode this packet in [Sandbox](../../../sandbox/java338#serverbound.client_status)

**Id**: 3

**Id** (hex): 03

**Id** (bin): 00000011

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
