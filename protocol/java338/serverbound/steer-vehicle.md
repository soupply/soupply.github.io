---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [serverbound](/protocol/java338/serverbound)  /  steer-vehicle

# Steer vehicle

Encode/decode this packet in [Sandbox](../../../sandbox/java338#serverbound.steer_vehicle)

**Id**: 22

**Id** (hex): 16

**Id** (bin): 00010110

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
