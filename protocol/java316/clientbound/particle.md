---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  particle

# Particle

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.Particle)

**Id**: 34

**Id** (hex): 22

**Id** (bin): 00100010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[particle id](#particle-id) | uint
long distance | bool
position | float&lt;xyz&gt;
offset | float&lt;xyz&gt;
data | float
count | uint
additional data | varuint[2]

### particle id

**Constants**:

Name | Value
---|:---:
explode | 0
large explosion | 1
huge explosion | 2
firework spark | 3
bubble | 4
splash | 5
wake | 6
suspended | 7
depth suspend | 8
crit | 9
magic crit | 10
smoke | 11
large smoke | 12
spell | 13
instant spell | 14
mob spell | 15
mob spell ambient | 16
witch magic | 17
drip water | 18
drip lava | 19
angry villager | 20
happy villager | 21
town aura | 22
note | 23
portal | 24
enchantment table | 25
flame | 26
lava | 27
footstep | 28
cloud | 29
red dust | 30
snowball poof | 31
snow shovel | 32
slime | 33
heart | 34
barrier | 35
item crack | 36
block crack | 37
block dust | 38
droplet | 39
take | 40
mob appearance | 41
dragon breath | 42
endrod | 43
damage indicator | 44
sweep attack | 45
falling dust | 46
