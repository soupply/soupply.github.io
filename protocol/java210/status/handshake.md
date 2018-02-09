---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [status](/protocol/java210/status)  /  handshake

# Handshake

**Id**: 0

**Id** (hex): 00

**Id** (bin): 00000000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
protocol | varuint
server address | string
server port | ushort
[next](#next) | varuint

### next

**Constants**:

Name | Value
---|:---:
[status](next_status) | 1
[login](next_login) | 2

