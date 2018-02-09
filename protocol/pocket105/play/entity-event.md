---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  entity-event

# Entity-event

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

