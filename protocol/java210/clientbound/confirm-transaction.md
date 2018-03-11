---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  confirm-transaction

# Confirm transaction

Encode/decode this packet in [Sandbox](../../../sandbox/java210#clientbound.confirm_transaction)

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
