---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  unlock-recipes

# Unlock recipes

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.UnlockRecipes)

**Id**: 48

**Id** (hex): 30

**Id** (bin): 00110000

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
