---
layout: default
---

# Minecraft: Pocket Edition 105

**Other protocols**: [100](./pocket105), [101](./pocket105), [102](./pocket105), [113](./pocket105)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](pocket105/types), [Arrays](pocket105/arrays), [Metadata](pocket105/metadata)

**Released**: March 28th, 2017

Used in version **1.0.5**

-----
Protocol used in Minecraft: Pocket Edition and variants. The network part of the protocol is managed by [RakNet](../raknet/8.html).

#### Login sequence
+ The client sends a [Login](#play_login) packet with the details of its game and its account
+ The server always replies with a [PlayerStatus](#play_play-status)
+ If [status](#play_play-status_status) field in the packet sent was different from [ok](#play_play-status_status_ok) the connection is closed

### Spawning sequence
+ The server sends a [StartGame](#play_start-game) packet with the world's informations
+ The server sends zero or more [FullChunkData](#play_full-chunk-data) with the chunk's blocks and tiles
+ The server sends the player's inventory using [ContainerSetContent](#play_container-set-content)
+ The server sends the world's textures through [ResourcePacksInfo](#play_resource-packs-info) (the textures may be empty)
+ The client replies with [ResourcePackClientResponse](#play_resource-pack-client-response) telling the server that the textures have been loaded
+ The server sends a [PlayStatus](#play_play-status) packet set to [spawned](#play_play-status_status_spawned)
+ The client spawns

Everything written in the documentation has been tested on [sel-server](https://github.com/sel-project/sel-server). The types and the packets without documentation haven't been tested yet or it's not clear what their real purpose in the game is.

-----
## Encoding

**Endianness**:

big endian | little endian
---|---
ushort, uint, ulong | float

**Ids**: ubyte

**Array's length**: varuint

-----
## Packets

Section | Packets
---|:---:
[Play](pocket105/play) | 88
