---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [status](/protocol/java335/status)  /  handshake

# Handshake

**Id**: 0

**Id** (hex): 00

**Id** (bin): 00000000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | Default
---|---|:---:
protocol | varuint | 335
server address | string | 
server port | ushort | 
[next](#next) | varuint | 

### next

**Constants**:

Name | Value
---|:---:
[status](next_status) | 1
[login](next_login) | 2

