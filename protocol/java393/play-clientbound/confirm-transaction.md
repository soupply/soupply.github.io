---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  confirm-transaction

# Confirm transaction

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.ConfirmTransaction)

**Id**: 18

**Id** (hex): 12

**Id** (bin): 00010010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
action | ushort
accepted | bool
