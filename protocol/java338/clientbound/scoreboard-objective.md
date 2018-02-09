---
layout: default
---

[home](/) ➡ [java338](/protocol/java338) ➡ [clientbound](/protocol/java338/clientbound) ➡ scoreboard-objective

# Scoreboard-objective

**Id**: 66

**Id** (hex): 42

**Id** (bin): 01000010

✔️

✔️

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

