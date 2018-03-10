---
layout: default
---

# Minecraft: Java Edition 210

**Other protocols**: [315](./java210), [316](./java210), [335](./java210), [338](./java210), [340](./java210)

**Compare changes**: [315](../diff/java/210-315), [316](../diff/java/210-316), [335](../diff/java/210-335), [338](../diff/java/210-338), [340](../diff/java/210-340)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](java210/types), [Arrays](java210/arrays), [Metadata](java210/metadata)

**Released**:  June 8th, 2016

Used from version **1.10** to **1.10.2**

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
[Status](java210/status) | 4
[Login](java210/login) | 6
[Clientbound](java210/clientbound) | 76
[Serverbound](java210/serverbound) | 30
