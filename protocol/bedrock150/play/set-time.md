---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  set-time

# Set time

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.SetTime)

**Id**: 10

**Id** (hex): 0A

**Id** (bin): 00001010

**Clientbound**: ✔️

**Serverbound**: ✖️

Sets the [time](http://minecraft.gamepedia.com/Day-night_cycle).

## Fields

Name | Type
---|---
[time](#time) | varint

### time

Time of the day in a range from 0 to 24000. If higher or lower it will be moduled to 24000.
