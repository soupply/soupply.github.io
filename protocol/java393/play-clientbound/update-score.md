---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  update-score

# Update score

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.UpdateScore)

**Id**: 72

**Id** (hex): 48

**Id** (bin): 01001000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
score name | string | 
[action](#action) | ubyte | 
objective name | string | 
value | varuint | <code>action</code> is equal to <code>0</code>

### action

**Constants**:

Name | Value
---|:---:
update | 0
remove | 1
