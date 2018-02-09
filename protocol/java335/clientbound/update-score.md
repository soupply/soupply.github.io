---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  update-score

# Update-score

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
[update](action_update) | 0
[remove](action_remove) | 1

