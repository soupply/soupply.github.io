---
layout: default
---

# Minecraft: Pocket Edition 100

**Other protocols**: [101](./pocket100), [102](./pocket100), [105](./pocket100), [113](./pocket100)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](pocket100/types), [Arrays](pocket100/arrays), [Metadata](pocket100/metadata)

**Released**: December 19th, 2016

Used from version **1.0.0** to **1.0.2**

## Encoding

**Endianness**:

big endian | little endian
---|---
ushort, uint, ulong | float

**Ids**: ubyte

**Array's length**: varuint

-----
## Packets

Section | Packets
---|:---:
[Play](pocket100/play) | 81
