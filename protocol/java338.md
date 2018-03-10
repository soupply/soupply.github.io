---
layout: default
---

# Minecraft: Java Edition 338

**Other protocols**: [210](./java338), [315](./java338), [316](./java338), [335](./java338), [340](./java338)

**Compare changes**: [210](../diff/java/210-338), [315](../diff/java/315-338), [316](../diff/java/316-338), [335](../diff/java/335-338), [340](../diff/java/338-340)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](java338/types), [Arrays](java338/arrays), [Metadata](java338/metadata)

**Released**: August 3rd, 2017

Used in version **1.12.1**

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
[Status](java338/status) | 4
[Login](java338/login) | 6
[Clientbound](java338/clientbound) | 80
[Serverbound](java338/serverbound) | 33
