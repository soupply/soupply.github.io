---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [types](/protocol/bedrock261/types)  /  command-origin-data

# Command origin data

## Fields

Name | Type | When
---|---|:---:
[type](#type) | varuint | 
uuid | uuid | 
request id | string | 
? | varlong | <code>type</code> is equal to <code>3 |  | type</code> is equal to <code>4</code>

### type

**Constants**:

Name | Value
---|:---:
player | 0
block | 1
minecart block | 2
dev console | 3
test | 4
automation player | 5
client automation | 6
dedicated server | 7
entity | 8
virtual | 9
game argument | 10
entity server | 11
