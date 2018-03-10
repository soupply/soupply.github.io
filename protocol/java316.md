---
layout: default
---

# Minecraft: Java Edition 316

**Other protocols**: [210](./java316), [315](./java316), [335](./java316), [338](./java316), [340](./java316)

**Compare changes**: [210](../diff/java/210-316), [315](../diff/java/315-316), [335](../diff/java/316-335), [338](../diff/java/316-338), [340](../diff/java/316-340)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](java316/types), [Arrays](java316/arrays), [Metadata](java316/metadata)

**Released**: December 20th, 2016

Used from version **1.11.1** to **1.11.2**

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
[Status](java316/status) | 4
[Login](java316/login) | 6
[Clientbound](java316/clientbound) | 76
[Serverbound](java316/serverbound) | 30
