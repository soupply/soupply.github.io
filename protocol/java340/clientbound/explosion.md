---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  explosion

# Explosion

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.Explosion)

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
position | float&lt;xyz&gt; | [](/protocol/java340/types/)
radius | float | [](/protocol/java340/types/)
records | byte&lt;xyz&gt;[] | uint
motion | float&lt;xyz&gt; | [](/protocol/java340/types/)
