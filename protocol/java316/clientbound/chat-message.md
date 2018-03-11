---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  chat-message

# Chat message

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.ChatMessage)

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
