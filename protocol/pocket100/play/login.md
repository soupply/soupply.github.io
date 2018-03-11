---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  login

# Login

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#play.login)

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
protocol | uint
[edition](#edition) | ubyte
body | ubyte[]

### edition

**Constants**:

Name | Value
---|:---:
classic | 0
education | 1
