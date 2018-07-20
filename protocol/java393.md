---
layout: default
---

# Minecraft: Java Edition 393

**Other protocols**: [210](./java393), [315](./java393), [316](./java393), [335](./java393), [338](./java393), [340](./java393)

**Compare changes**: [210](../diff/java/210-393), [315](../diff/java/315-393), [316](../diff/java/316-393), [335](../diff/java/335-393), [338](../diff/java/338-393), [340](../diff/java/340-393)

**Jump to**: [Encoding](#encoding), [Packets](#packets), [Types](java393/types), [Metadata](java393/metadata)

**Released**: July 19th, 2018

In use since version **1.13**

## Encoding

**Endianness**: big endian

**Ids**: varuint

**Array's length**: varuint

-----
## Packets

Section | Packets
---|:---:
[Status](java393/status) | 4
[Login Clientbound](java393/login-clientbound) | 5
[Login Serverbound](java393/login-serverbound) | 3
[Play Clientbound](java393/play-clientbound) | 86
[Serverbound](java393/serverbound) | 33
