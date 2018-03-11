---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  unlock-recipes

# Unlock recipes

Encode/decode this packet in [Sandbox](../../../sandbox/java340#clientbound.unlock_recipes)

**Id**: 49

**Id** (hex): 31

**Id** (bin): 00110001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
[action](#action) | varuint | 
open book | bool | 
filtering | bool | 
recipes | varuint[] | 
book recipes | varuint[] | <code>action</code> is equal to <code>1 |  | action</code> is equal to <code>3</code>

### action

**Constants**:

Name | Value
---|:---:
add | 1
remove | 2
add without notification | 3
