---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [status](/protocol/java316/status)  /  handshake

# Handshake

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Status.Handshake)

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
