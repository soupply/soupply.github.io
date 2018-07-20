---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [types](/protocol/java393/types)  /  node

# Node

## Fields

Name | Type | When
---|---|:---:
flags | ubyte | 
children | varuint[] | 
redirect node | varuint | <code>flags & 8</code>
name | string | <code>flags & 1 |  | flags & 2</code>
parser | string | <code>flags & 2</code>
properties | bytes | <code>flags & 2</code>
