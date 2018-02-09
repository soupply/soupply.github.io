---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  scoreboard-objective

# Scoreboard objective

**Id**: 63

**Id** (hex): 3F

**Id** (bin): 00111111

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

