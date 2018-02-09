---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  scoreboard-objective

# Scoreboard-objective

**Id**: 65

**Id** (hex): 41

**Id** (bin): 01000001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
name | string | 
[mode](#mode) | ubyte | 
value | string | <code>mode</code> is not equal to <code>1</code>
[type](#type) | string | <code>mode</code> is not equal to <code>1</code>

### mode

**Constants**:
Name | Value
---|:---:
[create](mode_create) | 0
[remove](mode_remove) | 1
[update](mode_update) | 2

### type

**Constants**:
Name | Value
---|:---:
[numeric](type_numeric) | integer
[graphic](type_graphic) | hearts

