---
layout: default
---

# Minecraft (Bedrock Engine) 141

**Other protocols**: [137](./bedrock141), [150](./bedrock141), [160](./bedrock141), [201](./bedrock141)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](bedrock141/types), [Arrays](bedrock141/arrays), [Metadata](bedrock141/metadata)

**Released**: November 21st, 2017

Used in version **1.2.5**

-----
Protocol used in Minecraft: Pocket Edition and variants. The network part of the protocol is managed by [RakNet](../raknet/8.html).

⚠ Every packet is encoded as id (byte), padding (2 bytes) and body ⚠

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
ushort, int, uint, long, ulong, float | 

**Ids**: varuint

**Array's length**: varuint

-----
## Packets

Section | Packets
---|:---:
[Play](bedrock141/play) | 104
