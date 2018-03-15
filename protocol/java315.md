---
layout: default
---

# Minecraft: Java Edition 315

**Other protocols**: [210](./java315), [316](./java315), [335](./java315), [338](./java315), [340](./java315)

**Compare changes**: [210](../diff/java/210-315), [316](../diff/java/315-316), [335](../diff/java/315-335), [338](../diff/java/315-338), [340](../diff/java/315-340)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](java315/types), [Metadata](java315/metadata)

**Released**: November 14th, 2016

Used in version **1.11**

## Encoding

**Endianness**: big endian

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
