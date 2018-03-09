---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  entity-fall

# Entity fall

**Id**: 37

**Id** (hex): 25

**Id** (bin): 00100101

**Clientbound**: ✖️

**Serverbound**: ✔️

Sent by the player when it falls from a distance that causes damage, that can be influenced by its armour and its effects.

## Fields

Name | Type
---|---
entity id | varlong
[distance](#distance) | float
? | bool

### distance

Number of blocks the player has been in free falling before hitting the ground.
