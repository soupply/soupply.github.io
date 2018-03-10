---
layout: default
---

# Minecraft: Java Edition 340

**Other protocols**: [210](./java340), [315](./java340), [316](./java340), [335](./java340), [338](./java340)

**Compare changes**: [210](../diff/java/210-340), [315](../diff/java/315-340), [316](../diff/java/316-340), [335](../diff/java/335-340), [338](../diff/java/338-340)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](java340/types), [Arrays](java340/arrays), [Metadata](java340/metadata)

**Released**: September 18th, 2017

Used in version **1.12.2**

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
[Status](java340/status) | 4
[Login](java340/login) | 6
[Clientbound](java340/clientbound) | 80
[Serverbound](java340/serverbound) | 33
