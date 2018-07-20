---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  face-player

# Face player

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.FacePlayer)

**Id**: 49

**Id** (hex): 31

**Id** (bin): 00110001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
[type](#type) | varuint | 
target | double&lt;xyz&gt; | 
is entity | bool | 
entity id | varuint | <code>is entity</code> is <code><span style="color:#009688">true</span></code>
entity type | varuint | <code>is entity</code> is <code><span style="color:#009688">true</span></code>

### type

**Constants**:

Name | Value
---|:---:
feet | 0
eyes | 1
