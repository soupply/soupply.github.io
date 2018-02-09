---
layout: default
---

[home](/) ➡ [java338](/protocol/java338) ➡ [serverbound](/protocol/java338/serverbound) ➡ client-settings

# Client-settings

**Id**: 4

**Id** (hex): 04

**Id** (bin): 00000100

✔️

✔️

## Fields

Name | Type
---|---
language | string
view distance | ubyte
[chat mode](#chat-mode) | varuint
chat colors | bool
[displayed skin parts](#displayed-skin-parts) | ubyte
[main hand](#main-hand) | ubyte

### chat mode

**Constants**:
Name | Value
---|:---:
[enabled](chat-mode_enabled) | 0
[commands only](chat-mode_commands-only) | 1
[disabled](chat-mode_disabled) | 2

### displayed skin parts

**Constants**:
Name | Value
---|:---:
[cape](displayed-skin-parts_cape) | 1
[jacket](displayed-skin-parts_jacket) | 2
[left sleeve](displayed-skin-parts_left-sleeve) | 4
[right sleeve](displayed-skin-parts_right-sleeve) | 8
[left pants](displayed-skin-parts_left-pants) | 16
[right pants](displayed-skin-parts_right-pants) | 32
[hat](displayed-skin-parts_hat) | 64

### main hand

**Constants**:
Name | Value
---|:---:
[right](main-hand_right) | 0
[left](main-hand_left) | 1

