---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  player-fall

# Player fall

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.player_fall)

**Id**: 37

**Id** (hex): 25

**Id** (bin): 00100101

**Clientbound**: ✖️

**Serverbound**: ✔️

Sent by the player when it falls from a distance that causes damage, that can be influenced by its armour and its effects.

## Fields

Name | Type
---|---
[distance](#distance) | float

### distance

Number of blocks the player has been in free falling before hitting the ground.
