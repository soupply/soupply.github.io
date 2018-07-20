---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  update-block-entity

# Update block entity

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.UpdateBlockEntity)

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
mob spawner data | 1
command block text | 2
beacon powers | 3
mob head data | 4
declare conduit | 5
banner data | 6
structure data | 7
end gateway destination | 8
sign text | 9
shulker box declaration | 10
declare bed | 11
