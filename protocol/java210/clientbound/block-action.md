---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  block-action

# Block action

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
[note block harp](action_note-block-harp) | 0
[note block bass drum](action_note-block-bass-drum) | 1
[note block snare drum](action_note-block-snare-drum) | 2
[note block clicks](action_note-block-clicks) | 3
[note block sticks](action_note-block-sticks) | 3
[note block bass guitar](action_note-block-bass-guitar) | 4
[piston extend](action_piston-extend) | 0
[piston retract](action_piston-retract) | 1
[chest watchers](action_chest-watchers) | 1
[beacon recalculate](action_beacon-recalculate) | 1
[mob spawner reset delay](action_mob-spawner-reset-delay) | 1
[end gateway yellow beam](action_end-gateway-yellow-beam) | 1

### parameter

**Constants**:

Name | Value
---|:---:
[piston down](parameter_piston-down) | 0
[piston up](parameter_piston-up) | 1
[piston south](parameter_piston-south) | 2
[piston west](parameter_piston-west) | 3
[piston north](parameter_piston-north) | 4
[piston east](parameter_piston-east) | 5

