---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [serverbound](/protocol/java393/serverbound)  /  tab-complete

# Tab complete

Encode/decode this packet in [Sandbox](../../../sandbox/java393#Serverbound.TabComplete)

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
text | string | 
command | bool | 
has position | bool | 
block | ulong | <code>has position</code> is <code><span style="color:#009688">true</span></code>
