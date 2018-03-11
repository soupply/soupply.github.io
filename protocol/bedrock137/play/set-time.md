---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  set-time

# Set time

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#play.set_time)

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
