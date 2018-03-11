---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  update-score

# Update score

Encode/decode this packet in [Sandbox](../../../sandbox/java210#clientbound.update_score)

**Id**: 66

**Id** (hex): 42

**Id** (bin): 01000010

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
