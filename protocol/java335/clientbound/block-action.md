---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  block-action

# Block action

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.BlockAction)

**Id**: 10

**Id** (hex): 0A

**Id** (bin): 00001010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | ulong
[action](#action) | ubyte
[parameter](#parameter) | ubyte
block type | varuint

### action

**Constants**:

Name | Value
---|:---:
note block harp | 0
note block bass drum | 1
note block snare drum | 2
note block clicks | 3
note block sticks | 3
note block bass guitar | 4
piston extend | 0
piston retract | 1
chest watchers | 1
beacon recalculate | 1
mob spawner reset delay | 1
end gateway yellow beam | 1

### parameter

**Constants**:

Name | Value
---|:---:
piston down | 0
piston up | 1
piston south | 2
piston west | 3
piston north | 4
piston east | 5
