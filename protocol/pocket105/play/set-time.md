---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  set-time

# Set time

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.SetTime)

**Id**: 11

**Id** (hex): 0B

**Id** (bin): 00001011

**Clientbound**: ✔️

**Serverbound**: ✖️

Sets the [time](http://minecraft.gamepedia.com/Day-night_cycle).

## Fields

Name | Type
---|---
[time](#time) | varint
[daylight cycle](#daylight-cycle) | bool

### time

Time of the day in a range from 0 to 24000. If higher or lower it will be moduled to 24000.

### daylight cycle

Indicates whether the daylight cycle is active. If not, the time will be stopped at the value given in the previous field.
