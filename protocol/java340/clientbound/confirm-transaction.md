---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  confirm-transaction

# Confirm transaction

Encode/decode this packet in [Sandbox](../../../sandbox/java340#clientbound.confirm_transaction)

**Id**: 17

**Id** (hex): 11

**Id** (bin): 00010001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
action | ushort
accepted | bool
