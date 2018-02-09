---
layout: default
---

[home](/)  /  [raknet8](/protocol/raknet8)  /  [types](/protocol/raknet8/types)  /  encapsulation

# Encapsulation

## Fields

Name | Type | When
---|---|:---:
info | ubyte | 
length | ushort | 
message index | triad | <code>(info & 0x7F)</code> is greater than or equal to <code>64</code>
order index | triad | <code>(info & 0x7F)</code> is greater than or equal to <code>96</code>
order channel | ubyte | <code>(info & 0x7F)</code> is greater than or equal to <code>96</code>
split | [split](/protocol/raknet8/types/split) | <code>(info & 0x10)</code> is not equal to <code>0</code>
payload | bytes | 

