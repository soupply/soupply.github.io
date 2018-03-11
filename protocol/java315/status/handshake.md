---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [status](/protocol/java315/status)  /  handshake

# Handshake

Encode/decode this packet in [Sandbox](../../../sandbox/java315#status.handshake)

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
status | 1
login | 2
