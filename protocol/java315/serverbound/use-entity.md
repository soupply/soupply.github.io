---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [serverbound](/protocol/java315/serverbound)  /  use-entity

# Use entity

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Serverbound.UseEntity)

**Id**: 10

**Id** (hex): 0A

**Id** (bin): 00001010

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
