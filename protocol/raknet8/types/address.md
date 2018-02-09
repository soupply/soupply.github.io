---
layout: default
---

[home](/) ➡ [raknet8](/protocol/raknet8) ➡ [types](/protocol/raknet8/types) ➡ address

# Address

## Fields

Name | Type | When
---|---|:---:
type | ubyte | 
ipv4 | uint | <code>type</code> is equal to <code>4</code>
ipv6 | ubyte[16] | <code>type</code> is equal to <code>6</code>
? | ubyte[10] | <code>type</code> is equal to <code>6</code>
port | ushort | 

