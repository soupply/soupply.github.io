---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  set-entity-motion

# Set entity motion

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.SetEntityMotion)

**Id**: 40

**Id** (hex): 28

**Id** (bin): 00101000

**Clientbound**: ✔️

**Serverbound**: ✖️

Updates an entity's motion.

## Fields

Name | Type
---|---
[entity id](#entity-id) | varlong
[motion](#motion) | float&lt;xyz&gt;

### entity id

Entity which motion is updated. If the entity id is the player's, its motion is updated client-side and the player will send movement packets to the server (meaning that the server has no physical calculations to do). If not an animation will be done client-side but the server will have to calculate the new position applying the item's movement rules.

### motion

New motion for the entity that will influence its movement.
