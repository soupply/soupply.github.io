---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  entity-event

# Entity event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#play.entity_event)

**Id**: 27

**Id** (hex): 1B

**Id** (bin): 00011011

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
[event id](#event-id) | ubyte
data | varint

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
unleash | 63
