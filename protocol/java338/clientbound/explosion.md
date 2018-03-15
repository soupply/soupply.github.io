---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  explosion

# Explosion

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.Explosion)

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
position | float&lt;xyz&gt; | [](/protocol/java338/types/)
radius | float | [](/protocol/java338/types/)
records | byte&lt;xyz&gt;[] | uint
motion | float&lt;xyz&gt; | [](/protocol/java338/types/)
