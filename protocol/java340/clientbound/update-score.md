---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  update-score

# Update score

Encode/decode this packet in [Sandbox](../../../sandbox/java340#clientbound.update_score)

**Id**: 69

**Id** (hex): 45

**Id** (bin): 01000101

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
