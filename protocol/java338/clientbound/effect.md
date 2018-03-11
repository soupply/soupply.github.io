---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  effect

# Effect

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.Effect)

**Id**: 33

**Id** (hex): 21

**Id** (bin): 00100001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[effect id](#effect-id) | uint
position | ulong
data | uint
disable volume | bool

### effect id

**Constants**:

Name | Value
---|:---:
dispenser dispense | 1000
dispenser fail dispense | 1001
dispenser shoot | 1002
ender eye launch | 1003
firework shot | 1004
iron door open | 1005
wooden door open | 1006
wooden trapdoor open | 1007
fence gate open | 1008
fire extinguish | 1009
play record | 1010
iron door close | 1011
wooden door close | 1012
wooden trapdoor close | 1013
fence gate close | 1014
ghast warn | 1015
ghast shoot | 1016
enderdragon shoot | 1017
blaze shoot | 1018
zombie attack wood door | 1019
zombie attack iron door | 1020
zombie break wood door | 1021
wither break block | 1022
wither spawn | 1023
wither shoot | 1024
bat take off | 1025
zombie infect villager | 1026
zombie villager convert | 1027
ender dragon breath | 1028
anvil break | 1029
anvil use | 1030
anvil land | 1031
portal travel | 1032
chorus flower grow | 1033
chorus flower die | 1034
brewing stand brew | 1035
iron trapdoor open | 1036
iron trapdoor close | 1037
spawn 10 smoke particles | 2000
break break particles and sound | 2001
splash potion particles and sound | 2002
ender eye break particles and sound | 2003
mob spawn particles | 2004
bonemeal particles | 2005
dragon breath | 2006
end gateway spawn | 3000
enderdragon growl | 3001
