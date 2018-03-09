---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  resource-pack-client-response

# Resource pack client response

**Id**: 8

**Id** (hex): 08

**Id** (bin): 00001000

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[status](#status) | ubyte
pack ids | [packIds](/protocol/bedrock160/arrays)

### status

**Constants**:

Name | Value
---|:---:
[refused](status_refused) | 1
[send packs](status_send-packs) | 2
[have all packs](status_have-all-packs) | 3
[completed](status_completed) | 4
