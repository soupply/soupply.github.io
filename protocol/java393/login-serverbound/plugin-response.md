---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [login-serverbound](/protocol/java393/login-serverbound)  /  plugin-response

# Plugin response

Encode/decode this packet in [Sandbox](../../../sandbox/java393#LoginServerbound.PluginResponse)

**Id**: 2

**Id** (hex): 02

**Id** (bin): 00000010

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
message id | varuint | 
successful | bool | 
data | bytes | <code>successful</code> is <code><span style="color:#009688">true</span></code>
