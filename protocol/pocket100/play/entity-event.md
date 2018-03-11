---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  entity-event

# Entity event

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#play.entity_event)

**Id**: 29

**Id** (hex): 1D

**Id** (bin): 00011101

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
[event id](#event-id) | ubyte
? | varint

### event id

**Constants**:

Name | Value
---|:---:
hurt animation | 2
death animation | 3
tame fail | 6
tame success | 7
shake wet | 8
use item | 9
eat grass animation | 10
fish hook bubbles | 11
fish hook position | 12
fish hook hook | 13
fish hook tease | 14
squid ink cloud | 15
ambient sound | 16
respawn | 17
