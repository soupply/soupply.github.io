---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  explosion

# Explosion

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.Explosion)

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
position | float&lt;xyz&gt; | [](/protocol/java315/types/)
radius | float | [](/protocol/java315/types/)
records | byte&lt;xyz&gt;[] | uint
motion | float&lt;xyz&gt; | [](/protocol/java315/types/)
