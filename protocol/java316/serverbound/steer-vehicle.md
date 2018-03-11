---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [serverbound](/protocol/java316/serverbound)  /  steer-vehicle

# Steer vehicle

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Serverbound.SteerVehicle)

**Id**: 21

**Id** (hex): 15

**Id** (bin): 00010101

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
