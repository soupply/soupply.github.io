---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  chat-message

# Chat message

Encode/decode this packet in [Sandbox](../../../sandbox/java210#clientbound.chat_message)

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
