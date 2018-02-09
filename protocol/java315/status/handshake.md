---
layout: default
---

[home](/) ➡ [java315](/protocol/java315) ➡ [status](/protocol/java315/status) ➡ handshake

# Handshake

**Id**: 0

**Id** (hex): 00

**Id** (bin): 00000000

✔️

✔️

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

