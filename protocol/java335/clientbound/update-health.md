---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  update-health

# Update health

Encode/decode this packet in [Sandbox](../../../sandbox/java335#clientbound.update_health)

**Id**: 64

**Id** (hex): 40

**Id** (bin): 01000000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
health | float
hunger | varuint
saturation | float
