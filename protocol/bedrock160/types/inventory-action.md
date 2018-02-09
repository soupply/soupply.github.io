---
layout: default
---

[home](/) ➡ [bedrock160](/protocol/bedrock160) ➡ [types](/protocol/bedrock160/types) ➡ inventory-action

# Inventory-action

## Fields

Name | Type | When | Default
---|---|:---:|:---:
[source](#source) | varuint |  | 
container | varint | <code>source</code> is equal to <code>0</code> | -1
? | varuint | <code>source</code> is equal to <code>2</code> | 
slot | varuint |  | 
old item | [slot](/protocol/bedrock160/types/slot) |  | 
new item | [slot](/protocol/bedrock160/types/slot) |  | 

### source

**Constants**:
Name | Value
---|:---:
[container](source_container) | 0
[world](source_world) | 2
[creative](source_creative) | 3

