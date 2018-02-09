---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [types](/protocol/bedrock137/types)  /  chunk-data

# Chunk data

⚠️️ This type is prefixed with its length encoded as **varuint** ⚠️️

Chunk's blocks, lights and other immutable data.

## Fields

Name | Type
---|---
[sections](#sections) | [section](/protocol/bedrock137/types/section)[]
heights | ushort[256]
[biomes](#biomes) | ubyte[256]
[borders](#borders) | ubyte[]
extra data | [extraData](/protocol/bedrock137/types/extra-data)[]
[block entities](#block-entities) | bytes

### sections

16x16x16 section of the chunk. The array's keys also indicate the section's height (the 3rd element of the array will be the 3rd section from bottom, starting at `y=24`).
The amount of sections should be in a range from 0 (empty chunk) to 16.

### biomes

[Biomes](http://minecraft.gamepedia.com/Biome) in order `xz`.

### borders

Colums where there are world borders (in format `xz`). This feature hasn't been implemented in the game yet and crashes the client.

### block entities

Additional data for the chunk's block entities (tiles), encoded in the same way as [BlockEntityData.nbt](#play_block-entity-data_nbt) is. The position is given by the `Int` tags `x`, `y`, `z` which are added to the block's compound tag together with the `String` tag `id` that contains the name of the tile in pascal case.
Wrong encoding or missing tags may result in the block becoming invisible.

