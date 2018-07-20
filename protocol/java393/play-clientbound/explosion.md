---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  explosion

# Explosion

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.Explosion)

**Id**: 30

**Id** (hex): 1E

**Id** (bin): 00011110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
position | float&lt;xyz&gt; | [](/protocol/java393/types/)
radius | float | [](/protocol/java393/types/)
records | byte&lt;xyz&gt;[] | uint
motion | float&lt;xyz&gt; | [](/protocol/java393/types/)
