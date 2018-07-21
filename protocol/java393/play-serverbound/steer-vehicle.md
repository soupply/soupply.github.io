---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  steer-vehicle

# Steer vehicle

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.SteerVehicle)

**Id**: 26

**Id** (hex): 1A

**Id** (bin): 00011010

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
sideways | float
forward | float
[flags](#flags) | ubyte

### flags

**Constants**:

Name | Value
---|:---:
jump | 1
unmount | 2
