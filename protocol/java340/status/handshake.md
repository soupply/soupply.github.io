---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [status](/protocol/java340/status)  /  handshake

# Handshake

Encode/decode this packet in [Sandbox](../../../sandbox/java340#status.handshake)

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
status | 1
login | 2
