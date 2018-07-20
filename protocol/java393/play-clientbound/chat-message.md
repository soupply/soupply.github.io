---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  chat-message

# Chat message

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.ChatMessage)

**Id**: 14

**Id** (hex): 0E

**Id** (bin): 00001110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
message | string
[position](#position) | ubyte

### position

**Constants**:

Name | Value
---|:---:
chat | 0
system message | 1
above hotbar | 2
