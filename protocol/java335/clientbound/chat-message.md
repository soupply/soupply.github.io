---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  chat-message

# Chat message

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.ChatMessage)

**Id**: 15

**Id** (hex): 0F

**Id** (bin): 00001111

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
