---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  confirm-transaction

# Confirm transaction

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.ConfirmTransaction)

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
