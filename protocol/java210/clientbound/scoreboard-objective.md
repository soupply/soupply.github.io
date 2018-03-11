---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  scoreboard-objective

# Scoreboard objective

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Clientbound.ScoreboardObjective)

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
create | 0
remove | 1
update | 2

### type

**Constants**:

Name | Value
---|:---:
numeric | integer
graphic | hearts
