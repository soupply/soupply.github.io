---
layout: default
---

# Minecraft: Java Edition 315

Other protocols: [210](./java315), [316](./java315), [335](./java315), [338](./java315), [340](./java315)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Arrays](java315/arrays), [Metadata](java315/metadata)

**Released**: November 14th, 2016

Used in version **1.11**

-----
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
[Status](java315/status) | 4
[Login](java315/login) | 6
[Clientbound](java315/clientbound) | 76
[Serverbound](java315/serverbound) | 30
