---
layout: default
---

# Minecraft (Bedrock Engine) 274

**Other protocols**: [137](./bedrock274), [141](./bedrock274), [150](./bedrock274), [160](./bedrock274), [201](./bedrock274), [261](./bedrock274)

**Compare changes**: [137](../diff/bedrock/137-274), [141](../diff/bedrock/141-274), [150](../diff/bedrock/150-274), [160](../diff/bedrock/160-274), [201](../diff/bedrock/201-274), [261](../diff/bedrock/261-274)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](bedrock274/types), [Metadata](bedrock274/metadata)

**Released**: July 10th, 2018

In use since version **1.5.0**

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
[Play](bedrock274/play) | 112
