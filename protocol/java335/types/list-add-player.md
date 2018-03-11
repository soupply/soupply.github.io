---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [types](/protocol/java335/types)  /  list-add-player

# List add player

## Fields

Name | Type | When
---|---|:---:
uuid | uuid | 
name | string | 
properties | [property](/protocol/java335/types/property)[] | 
[gamemode](#gamemode) | varuint | 
latency | varuint | 
has display name | bool | 
display name | string | <code>has display name</code> is <code><span style="color:#009688">true</span></code>

### gamemode

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1
adventure | 2
spectator | 3
