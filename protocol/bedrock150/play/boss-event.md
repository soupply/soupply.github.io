---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  boss-event

# Boss event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.BossEvent)

**Id**: 74

**Id** (hex): 4A

**Id** (bin): 01001010

**Clientbound**: ✔️

**Serverbound**: ✖️

Adds, removes or modifies an entity's boss bar. The percentage of the bar is calculated using the entity's attributes for the health and the max health, updated with [UpdateAttributes](play_update-attributes).

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
