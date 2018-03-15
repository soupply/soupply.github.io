---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  explosion

# Explosion

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.Explosion)

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
position | float&lt;xyz&gt; | [](/protocol/java316/types/)
radius | float | [](/protocol/java316/types/)
records | byte&lt;xyz&gt;[] | uint
motion | float&lt;xyz&gt; | [](/protocol/java316/types/)
