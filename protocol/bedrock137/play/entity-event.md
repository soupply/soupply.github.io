---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  entity-event

# Entity-event

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
[hurt animation](event-id_hurt-animation) | 2
[death animation](event-id_death-animation) | 3
[tame fail](event-id_tame-fail) | 6
[tame success](event-id_tame-success) | 7
[shake wet](event-id_shake-wet) | 8
[use item](event-id_use-item) | 9
[eat grass animation](event-id_eat-grass-animation) | 10
[fish hook bubbles](event-id_fish-hook-bubbles) | 11
[fish hook position](event-id_fish-hook-position) | 12
[fish hook hook](event-id_fish-hook-hook) | 13
[fish hook tease](event-id_fish-hook-tease) | 14
[squid ink cloud](event-id_squid-ink-cloud) | 15
[ambient sound](event-id_ambient-sound) | 16
[respawn](event-id_respawn) | 17
[unleash](event-id_unleash) | 63

