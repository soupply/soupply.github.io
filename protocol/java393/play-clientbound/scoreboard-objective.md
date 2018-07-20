---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  scoreboard-objective

# Scoreboard objective

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.ScoreboardObjective)

**Id**: 69

**Id** (hex): 45

**Id** (bin): 01000101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
name | string | 
[mode](#mode) | ubyte | 
value | string | <code>mode</code> is not equal to <code>1</code>
type | varuint | <code>mode</code> is not equal to <code>1</code>

### mode

**Constants**:

Name | Value
---|:---:
create | 0
remove | 1
update | 2
