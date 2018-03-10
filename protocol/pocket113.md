---
layout: default
---

# Minecraft: Pocket Edition 113

**Other protocols**: [100](./pocket113), [101](./pocket113), [102](./pocket113), [105](./pocket113)

**Compare changes**: [100](../diff/pocket/100-113), [101](../diff/pocket/101-113), [102](../diff/pocket/102-113), [105](../diff/pocket/105-113)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](pocket113/types), [Arrays](pocket113/arrays), [Metadata](pocket113/metadata)

**Released**:  June 1st, 2017

Used from version **1.1.0** to **1.1.4**

-----
Protocol used in Minecraft: Pocket Edition and variants. The network part of the protocol is managed by [RakNet](../raknet/8.html).

### Login sequence
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
ushort, int, uint, long, ulong | float

**Ids**: ubyte

**Array's length**: varuint

-----
## Packets

Section | Packets
---|:---:
[Play](pocket113/play) | 93
