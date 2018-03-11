---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [serverbound](/protocol/java316/serverbound)  /  confirm-transaction

# Confirm transaction

Encode/decode this packet in [Sandbox](../../../sandbox/java316#serverbound.confirm_transaction)

**Id**: 5

**Id** (hex): 05

**Id** (bin): 00000101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
window | ubyte
action | ushort
accepted | bool
