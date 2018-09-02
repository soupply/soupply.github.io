---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  set-scoreboard-identity

# Set scoreboard identity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.SetScoreboardIdentity)

**Id**: 112

**Id** (hex): 70

**Id** (bin): 01110000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
[type](#type) | ubyte | 
register entries | [registerEntry](/protocol/bedrock282/types/register-entry)[] | <code>type</code> is equal to <code>0</code>
clear entries | varlong[] | <code>type</code> is equal to <code>1</code>

### type

**Constants**:

Name | Value
---|:---:
register | 0
clear | 1
