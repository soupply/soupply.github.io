---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  unlock-recipes

# Unlock recipes

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.UnlockRecipes)

**Id**: 52

**Id** (hex): 34

**Id** (bin): 00110100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
[action](#action) | varuint | 
crafting recipe book open | bool | 
crafting recipe book filter active | bool | 
smelting recipe book open | bool | 
smelting recipe book filter active | bool | 
recipes | varuint[] | 
book recipes | varuint[] | <code>action</code> is equal to <code>1 |  | action</code> is equal to <code>3</code>

### action

**Constants**:

Name | Value
---|:---:
add | 1
remove | 2
add without notification | 3
