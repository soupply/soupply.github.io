---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  update-block-entity

# Update block entity

**Id**: 9

**Id** (hex): 09

**Id** (bin): 00001001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | ulong
[action](#action) | ubyte
nbt | bytes

### action

**Constants**:

Name | Value
---|:---:
[mob spawner data](action_mob-spawner-data) | 1
[command block text](action_command-block-text) | 2
[beacon powers](action_beacon-powers) | 3
[mob head data](action_mob-head-data) | 4
[flower pot flower](action_flower-pot-flower) | 5
[banner data](action_banner-data) | 6
[structure data](action_structure-data) | 7
[end gateway destination](action_end-gateway-destination) | 8
[sign text](action_sign-text) | 9
[shulker box declaration](action_shulker-box-declaration) | 10

