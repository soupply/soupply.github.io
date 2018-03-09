---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  entity-event

# Entity event

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
[arm swing](event-id_arm-swing) | 4
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
[zombie villager cure](event-id_zombie-villager-cure) | 16
[respawn](event-id_respawn) | 18
[iron golem offer flower](event-id_iron-golem-offer-flower) | 19
[iron golem withdraw flower](event-id_iron-golem-withdraw-flower) | 20
[love particles](event-id_love-particles) | 21
[witch spell animation](event-id_witch-spell-animation) | 24
[firework particles](event-id_firework-particles) | 25
[silverfish spawn animation](event-id_silverfish-spawn-animation) | 27
[witch drink potion](event-id_witch-drink-potion) | 29
[witch thrown potion](event-id_witch-thrown-potion) | 30
[minecart tnt prime fuse](event-id_minecart-tnt-prime-fuse) | 31
[player add xp levels](event-id_player-add-xp-levels) | 34
[elder guardian curse](event-id_elder-guardian-curse) | 35
[agent arm swing](event-id_agent-arm-swing) | 36
[ender dragon death](event-id_ender-dragon-death) | 37
[dust particles](event-id_dust-particles) | 38
[eating item](event-id_eating-item) | 57
[baby animal feed](event-id_baby-animal-feed) | 60
[death smoke cloud](event-id_death-smoke-cloud) | 61
[complete trade](event-id_complete-trade) | 62
[remove leash](event-id_remove-leash) | 63
[consume totem](event-id_consume-totem) | 65
[entity spawn](event-id_entity-spawn) | 67
[dragon puke](event-id_dragon-puke) | 68
[item entity merge](event-id_item-entity-merge) | 69
