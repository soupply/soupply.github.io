---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [serverbound](/protocol/java340/serverbound)  /  craft-recipe-request

# Craft recipe request

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Serverbound.CraftRecipeRequest)

**Id**: 18

**Id** (hex): 12

**Id** (bin): 00010010

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
window | ubyte
recipe | varuint
make all | bool
