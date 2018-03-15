---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  explosion

# Explosion

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.Explosion)

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
position | float&lt;xyz&gt; | [](/protocol/java335/types/)
radius | float | [](/protocol/java335/types/)
records | byte&lt;xyz&gt;[] | uint
motion | float&lt;xyz&gt; | [](/protocol/java335/types/)
