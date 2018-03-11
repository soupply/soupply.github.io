---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  npc-request

# Npc request

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#play.npc_request)

**Id**: 98

**Id** (hex): 62

**Id** (bin): 01100010

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
request type | ubyte
command | string
action type | ubyte
