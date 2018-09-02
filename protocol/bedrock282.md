---
layout: default
---

# Minecraft (Bedrock Engine) 282

**Other protocols**: [137](./bedrock282), [141](./bedrock282), [150](./bedrock282), [160](./bedrock282), [201](./bedrock282), [261](./bedrock282), [274](./bedrock282)

**Compare changes**: [137](../diff/bedrock/137-282), [141](../diff/bedrock/141-282), [150](../diff/bedrock/150-282), [160](../diff/bedrock/160-282), [201](../diff/bedrock/201-282), [261](../diff/bedrock/261-282), [274](../diff/bedrock/274-282)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](bedrock282/types), [Metadata](bedrock282/metadata)

**Released**: August 28th, 2018

In use since version **1.6.0**

-----
Protocol used in Minecraft: Pocket Edition and variants. The network part of the protocol is managed by RakNet.

### Login sequence
+ The client sends a [Login](play/login) packet with the details of its game and its account
+ The server always replies with a [PlayerStatus](play/play-status)
+ If [status](play/play-status#status) field in the packet sent was different from [ok](#play/play-status#status) the connection is closed

Everything written in the documentation has been tested on [selery](https://github.com/sel-project/selery). The types and the packets without documentation haven't been tested yet or it's not clear what their purpose in the game is.

-----
## Encoding

**Endianness**: little endian

**Ids**: varuint

**Array's length**: varuint

-----
## Packets

Section | Packets
---|:---:
[Play](bedrock282/play) | 115
