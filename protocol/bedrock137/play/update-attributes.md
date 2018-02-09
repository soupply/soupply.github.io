---
layout: default
---

[home](/) ➡ [bedrock137](/protocol/bedrock137) ➡ [play](/protocol/bedrock137/play) ➡ update-attributes

# Update-attributes

**Id**: 29

**Id** (hex): 1D

**Id** (bin): 00011101

✔️

✔️

Updates an entity's attributes. This packet should be used when a value must be modified but it cannot be done using another packet (for example controlling the player's experience and level).

## Fields

Name | Type
---|---
entity id | varlong
attributes | [attribute](/protocol/bedrock137/types/attribute)[]

