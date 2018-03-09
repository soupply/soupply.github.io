---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  set-time

# Set time

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
