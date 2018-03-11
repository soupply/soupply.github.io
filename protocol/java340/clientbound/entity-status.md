---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  entity-status

# Entity status

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.EntityStatus)

**Id**: 27

**Id** (hex): 1B

**Id** (bin): 00011011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | uint
[status](#status) | ubyte

### status

**Constants**:

Name | Value
---|:---:
spawn tipped arrow particle effects | 0
play jumping animation and particles | 1
reset spawner delay | 1
play hurt animation and sound | 2
play death animation and sound | 3
play attack animation and sound | 4
spawn smoke particles | 6
spawn heart particles | 7
play shaking water animation | 8
finished consuming | 9
play eating grass animation | 10
ignite minecart tnt | 10
hold poppy | 11
spawn villager mating heart particles | 12
spawn villager angry particles | 13
spawn villager happy particles | 14
spawn witch magic particles | 15
play zombie cure finished sound | 16
spawn firework explosion effect | 17
spawn love particles | 18
reset squid rotation | 19
spawn explosion particles | 20
play guardian sound effect | 21
enable reduced debug screen | 22
disable reduced debug screen | 23
set op permission level 0 | 24
set op permission level 1 | 25
set op permission level 2 | 26
set op permission level 3 | 27
set op permission level 4 | 28
play shield block sound | 29
play shield break sound | 30
hook knockback | 31
play hit sound | 32
play thorns hurt animation and sound | 33
remove poppy | 34
play totem undying animation | 35
