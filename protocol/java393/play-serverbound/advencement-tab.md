---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  advencement-tab

# Advencement tab

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.AdvencementTab)

**Id**: 30

**Id** (hex): 1E

**Id** (bin): 00011110

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
