---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  collect-item

# Collect item

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.CollectItem)

**Id**: 75

**Id** (hex): 4B

**Id** (bin): 01001011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
collected | varuint
collector | varuint
count | varuint
