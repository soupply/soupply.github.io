---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [serverbound](/protocol/java340/serverbound)  /  client-status

# Client status

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Serverbound.ClientStatus)

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
