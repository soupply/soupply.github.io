---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [serverbound](/protocol/java338/serverbound)  /  tab-complete

# Tab complete

Encode/decode this packet in [Sandbox](../../../sandbox/java338#serverbound.tab_complete)

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
