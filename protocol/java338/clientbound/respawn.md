---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  respawn

# Respawn

Encode/decode this packet in [Sandbox](../../../sandbox/java338#clientbound.respawn)

**Id**: 53

**Id** (hex): 35

**Id** (bin): 00110101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[dimension](#dimension) | int
[difficulty](#difficulty) | ubyte
[gamemode](#gamemode) | ubyte
[level type](#level-type) | string

### dimension

**Constants**:

Name | Value
---|:---:
nether | -1
overworld | 0
end | 1

### difficulty

**Constants**:

Name | Value
---|:---:
peaceful | 0
easy | 1
normal | 2
hard | 3

### gamemode

**Constants**:

Name | Value
---|:---:
survival | 0
creative | 1
adventure | 2
spectator | 3

### level type

**Constants**:

Name | Value
---|:---:
infinity | default
flat | flat
amplified | amplified
large biomes | largeBiomes
