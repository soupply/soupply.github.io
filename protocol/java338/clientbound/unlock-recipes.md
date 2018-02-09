---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  unlock-recipes

# Unlock-recipes

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
[add](action_add) | 1
[remove](action_remove) | 2
[add without notification](action_add-without-notification) | 3

