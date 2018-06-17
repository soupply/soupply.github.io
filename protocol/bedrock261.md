---
layout: default
---

# Minecraft (Bedrock Engine) 261

**Other protocols**: [137](./bedrock261), [141](./bedrock261), [150](./bedrock261), [160](./bedrock261), [201](./bedrock261)

**Compare changes**: [137](../diff/bedrock/137-261), [141](../diff/bedrock/141-261), [150](../diff/bedrock/150-261), [160](../diff/bedrock/160-261), [201](../diff/bedrock/201-261)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](bedrock261/types), [Metadata](bedrock261/metadata)

**Released**: May 14th, 2018

Used in version **1.4.0**

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

**Padding**: 2 bytes

-----
## Packets

Section | Packets
---|:---:
[Play](bedrock261/play) | 110
