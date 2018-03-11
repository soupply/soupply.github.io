---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  steer-vehicle

# Steer vehicle

Encode/decode this packet in [Sandbox](../../../sandbox/java335#serverbound.steer_vehicle)

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
