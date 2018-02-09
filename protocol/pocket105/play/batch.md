---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  batch

# Batch

**Id**: 6

**Id** (hex): 06

**Id** (bin): 00000110

**Clientbound**: ✔️

**Serverbound**: ✔️

One ore more packet, each prefixed with their varuint-encoded length, compressed with zlib's deflate algorithm.

## Fields

Name | Type
---|---
[data](#data) | ubyte[]

### data

Compressed data.

Pseudo-code for decompression:
```c
ubyte[] uncompressed = uncompress(batch.payload);
int index = 0;
while(index < uncompressed.length) {
   int length = varuint.decode(uncompressed, &index);
   if(length < uncompressed.length - index) {}
      ubyte[] packet = uncompressed[0..length];
      index += length;
   }
}
```

Pseudo-code for compression:
```c
ubyte[] payload;
foreach(ubyte[] packet ; packets) {
   payload.concat(varuint.encode(packet.length));
   payload.concat(packet);
}
Batch batch = new Batch(compress(payload, Zlib.DEFLATE));
```

