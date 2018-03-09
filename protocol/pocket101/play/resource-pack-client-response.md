---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  resource-pack-client-response

# Resource pack client response

**Id**: 9

**Id** (hex): 09

**Id** (bin): 00001001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
[status](#status) | ubyte
pack ids | [packIds](/protocol/pocket101/arrays)

### status

**Constants**:

Name | Value
---|:---:
[refused](status_refused) | 1
[send packs](status_send-packs) | 2
[have all packs](status_have-all-packs) | 3
[completed](status_completed) | 4
