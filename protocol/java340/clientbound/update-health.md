---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  update-health

# Update health

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.UpdateHealth)

**Id**: 65

**Id** (hex): 41

**Id** (bin): 01000001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
health | float
hunger | varuint
saturation | float
