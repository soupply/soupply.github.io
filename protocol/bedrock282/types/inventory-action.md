---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [types](/protocol/bedrock282/types)  /  inventory-action

# Inventory action

## Fields

Name | Type | When | Default
---|---|:---:|:---:
[source](#source) | varuint |  | 
container | varint | <code>source</code> is equal to <code>0</code> | -1
? | varuint | <code>source</code> is equal to <code>2</code> | 
slot | varuint |  | 
old item | [slot](/protocol/bedrock282/types/slot) |  | 
new item | [slot](/protocol/bedrock282/types/slot) |  | 

### source

**Constants**:

Name | Value
---|:---:
container | 0
world | 2
creative | 3
