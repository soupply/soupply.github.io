---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [serverbound](/protocol/java210/serverbound)  /  confirm-transaction

# Confirm transaction

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Serverbound.ConfirmTransaction)

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
