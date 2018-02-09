---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  mob-effect

# Mob-effect

**Id**: 30

**Id** (hex): 1E

**Id** (bin): 00011110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
[event id](#event-id) | ubyte
effect | varint
amplifier | varint
particles | bool
duration | varint

### event id

**Constants**:
Name | Value
---|:---:
[add](event-id_add) | 1
[modify](event-id_modify) | 2
[remove](event-id_remove) | 3

