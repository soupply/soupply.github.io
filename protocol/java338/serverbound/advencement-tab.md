---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [serverbound](/protocol/java338/serverbound)  /  advencement-tab

# Advencement tab

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Serverbound.AdvencementTab)

**Id**: 25

**Id** (hex): 19

**Id** (bin): 00011001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
[action](#action) | varuint | 
tab | string | <code>action</code> is equal to <code>0</code>

### action

**Constants**:

Name | Value
---|:---:
open tab | 0
close screen | 1
