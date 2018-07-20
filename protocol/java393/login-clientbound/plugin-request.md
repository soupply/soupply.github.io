---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [login-clientbound](/protocol/java393/login-clientbound)  /  plugin-request

# Plugin request

Encode/decode this packet in [Sandbox](../../../sandbox/java393#LoginClientbound.PluginRequest)

**Id**: 4

**Id** (hex): 04

**Id** (bin): 00000100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
message id | varuint
channel | string
data | bytes
