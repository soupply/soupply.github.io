---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  stop-sound

# Stop sound

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.StopSound)

**Id**: 76

**Id** (hex): 4C

**Id** (bin): 01001100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
flags | ubyte | 
[source](#source) | varuint | <code>flags & 1</code>
sound | string | <code>flags & 2</code>

### source

**Constants**:

Name | Value
---|:---:
master | 0
music | 1
record | 2
weather | 3
block | 4
hostile | 5
neutral | 6
player | 7
ambient | 8
voice | 9
