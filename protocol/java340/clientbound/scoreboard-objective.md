---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  scoreboard-objective

# Scoreboard objective

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.ScoreboardObjective)

**Id**: 66

**Id** (hex): 42

**Id** (bin): 01000010

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
create | 0
remove | 1
update | 2

### type

**Constants**:

Name | Value
---|:---:
numeric | integer
graphic | hearts
