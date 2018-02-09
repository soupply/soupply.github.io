---
layout: default
---

[home](/) ➡ [pocket105](/protocol/pocket105) ➡ [play](/protocol/pocket105/play) ➡ block-entity-data

# Block-entity-data

**Id**: 57

**Id** (hex): 39

**Id** (bin): 00111001

✔️

✔️

Sets a block entity's nbt tag, block's additional data that cannot be indicated in the block's meta. More informations about block entities and their tag format can be found on [Minecraft Wiki](http://minecraft.gamepedia.com/Block_entity).

## Fields

Name | Type
---|---
[position](#position) | [blockPosition](/protocol/pocket105/types/block-position)
[nbt](#nbt) | bytes

### position

Position of the block that will be associated with tag.

### nbt

[Named binary tag](http://minecraft.gamepedia.com/NBT_format) of the block. The format varies from the classic format of Minecraft: Pocket Edition (which is like Minecraft's but little endian) introducing the use of varints for some types:
+ The tag `Int` is encoded as a signed varint instead of a simple signed 32-bits integer
+ The length of the `ByteArray` and the `IntArray` is encoded as an unsigned varint instead of a 32-bits integer
+ The length of the `String` tag and the named tag's name length are encoded as an unisgned varint instead of a 16-bits integer

