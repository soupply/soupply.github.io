---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [status](/protocol/java393/status)  /  handshake

# Handshake

Encode/decode this packet in [Sandbox](../../../sandbox/java393#Status.Handshake)

**Id**: 0

**Id** (hex): 00

**Id** (bin): 00000000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | Default
---|---|:---:
protocol | varuint | 393
server address | string | 
server port | ushort | 
[next](#next) | varuint | 

### next

**Constants**:

Name | Value
---|:---:
status | 1
login | 2
