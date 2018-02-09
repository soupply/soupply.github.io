---
layout: default
---

# Minecraft: Java Edition 335

**Other protocols**: [210](./java335), [315](./java335), [316](./java335), [338](./java335), [340](./java335)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](java335/types), [Arrays](java335/arrays), [Metadata](java335/metadata)

**Released**:  June 7th, 2017

Used in version **1.12**

## Encoding

**Endianness**:

big endian | little endian
---|---
short, ushort, int, uint, long, ulong, float, double | 

**Ids**: varuint

**Array's length**: varuint

-----
## Packets

Section | Packets
---|:---:
[Status](java335/status) | 4
[Login](java335/login) | 6
[Clientbound](java335/clientbound) | 79
[Serverbound](java335/serverbound) | 33
