---
layout: default
---

# Minecraft (Bedrock Engine) 201

**Other protocols**: [137](./bedrock201), [141](./bedrock201), [150](./bedrock201), [160](./bedrock201)

**Compare changes**: [137](../diff/bedrock/137-201), [141](../diff/bedrock/141-201), [150](../diff/bedrock/150-201), [160](../diff/bedrock/160-201)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](bedrock201/types), [Arrays](bedrock201/arrays), [Metadata](bedrock201/metadata)

**Released**: February 7th, 2018

Used from version **1.2.10** to **1.2.11**

-----
Protocol used in Minecraft: Pocket Edition and variants. The network part of the protocol is managed by RakNet.

### Login sequence
+ The client sends a [Login](play/login) packet with the details of its game and its account
+ The server always replies with a [PlayerStatus](play/play-status)
+ If [status](play/play-status#status) field in the packet sent was different from [ok](#play/play-status#status) the connection is closed

Everything written in the documentation has been tested on [selery](https://github.com/sel-project/selery). The types and the packets without documentation haven't been tested yet or it's not clear what their purpose in the game is.

-----
## Encoding

**Endianness**:

big endian | little endian
---|---
ushort, int, uint, long, ulong, float | 

**Ids**: varuint

**Array's length**: varuint

**Padding**: 2 bytes

-----
## Packets

Section | Packets
---|:---:
[Play](bedrock201/play) | 104
