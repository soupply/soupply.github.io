---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  update-score

# Update score

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.UpdateScore)

**Id**: 68

**Id** (hex): 44

**Id** (bin): 01000100

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
