---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  remove-block

# Remove block

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.RemoveBlock)

**Id**: 22

**Id** (hex): 16

**Id** (bin): 00010110

**Clientbound**: ✖️

**Serverbound**: ✔️

Instantly removes a block, either because the player is in creative mode or because the target block's hardness is 0 or lower (after all enchantments are applied).

## Fields

Name | Type
---|---
position | [blockPosition](/protocol/pocket101/types/block-position)
