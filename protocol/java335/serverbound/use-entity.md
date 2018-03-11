---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  use-entity

# Use entity

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Serverbound.UseEntity)

**Id**: 11

**Id** (hex): 0B

**Id** (bin): 00001011

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | When
---|---|:---:
target | varuint | 
[type](#type) | varuint | 
target position | float&lt;xyz&gt; | <code>type</code> is equal to <code>2</code>
[hand](#hand) | varuint | <code>type</code> is equal to <code>0 |  | type</code> is equal to <code>2</code>

### type

**Constants**:

Name | Value
---|:---:
interact | 0
attack | 1
interact at | 2

### hand

**Constants**:

Name | Value
---|:---:
main hand | 0
off hand | 1
