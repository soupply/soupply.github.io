---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  entity-event

# Entity event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#play.entity_event)

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
arm swing | 4
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
zombie villager cure | 16
respawn | 18
iron golem offer flower | 19
iron golem withdraw flower | 20
love particles | 21
witch spell animation | 24
firework particles | 25
silverfish spawn animation | 27
witch drink potion | 29
witch thrown potion | 30
minecart tnt prime fuse | 31
player add xp levels | 34
elder guardian curse | 35
agent arm swing | 36
ender dragon death | 37
dust particles | 38
eating item | 57
baby animal feed | 60
death smoke cloud | 61
complete trade | 62
remove leash | 63
consume totem | 65
entity spawn | 67
dragon puke | 68
item entity merge | 69
