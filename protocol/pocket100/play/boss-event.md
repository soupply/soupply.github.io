---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  boss-event

# Boss event

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#Play.BossEvent)

**Id**: 75

**Id** (hex): 4B

**Id** (bin): 01001011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
[event id](#event-id) | varuint

### event id

**Constants**:

Name | Value
---|:---:
add | 0
update | 1
remove | 2
