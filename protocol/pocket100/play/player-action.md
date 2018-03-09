---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  player-action

# Player action

**Id**: 36

**Id** (hex): 24

**Id** (bin): 00100100

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
[action](#action) | varint
position | [blockPosition](/protocol/pocket100/types/block-position)
face | varint

### action

**Constants**:

Name | Value
---|:---:
[start break](action_start-break) | 0
[abort break](action_abort-break) | 1
[stop break](action_stop-break) | 2
[release item](action_release-item) | 5
[stop sleeping](action_stop-sleeping) | 6
[respawn](action_respawn) | 7
[jump](action_jump) | 8
[start sprint](action_start-sprint) | 9
[stop sprint](action_stop-sprint) | 10
[start sneak](action_start-sneak) | 11
[stop sneak](action_stop-sneak) | 12
[start gliding](action_start-gliding) | 15
[stop gliding](action_stop-gliding) | 16
