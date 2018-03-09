---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [status](/protocol/java340/status)  /  handshake

# Handshake

**Id**: 0

**Id** (hex): 00

**Id** (bin): 00000000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | Default
---|---|:---:
protocol | varuint | 340
server address | string | 
server port | ushort | 
[next](#next) | varuint | 

### next

**Constants**:

Name | Value
---|:---:
[status](next_status) | 1
[login](next_login) | 2
