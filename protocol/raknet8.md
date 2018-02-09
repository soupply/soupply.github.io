---
layout: default
---

# Raknet 8

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](raknet8/types)

**Released**: August 16th, 2011

In use since version **Alpha 0.1.0**

-----
Minecraft: Pocket Edition's networking protocol.

-----
## Encoding

**Endianness**:

big endian | little endian
---|---
ushort, uint, long | 

**Ids**: ubyte

**Array's length**: ushort

-----
## Packets

Section | Packets
---|:---:
[Control](raknet8/control) | 3
[Unconnected](raknet8/unconnected) | 6
[Encapsulated](raknet8/encapsulated) | 7
