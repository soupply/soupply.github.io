---
layout: default
---

# Minecraft (Bedrock Engine) 150

**Other protocols**: [137](./bedrock150), [141](./bedrock150), [160](./bedrock150), [201](./bedrock150), [261](./bedrock150), [274](./bedrock150)

**Compare changes**: [137](../diff/bedrock/137-150), [141](../diff/bedrock/141-150), [160](../diff/bedrock/150-160), [201](../diff/bedrock/150-201), [261](../diff/bedrock/150-261), [274](../diff/bedrock/150-274)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](bedrock150/types), [Metadata](bedrock150/metadata)

**Released**: December 6th, 2017

Used in version **1.2.6**

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

**Endianness**: little endian

**Ids**: varuint

**Array's length**: varuint

**Padding**: 2 bytes

-----
## Packets

Section | Packets
---|:---:
[Play](bedrock150/play) | 104
