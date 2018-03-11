---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  disconnect

# Disconnect

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#play.disconnect)

**Id**: 5

**Id** (hex): 05

**Id** (bin): 00000101

**Clientbound**: ✔️

**Serverbound**: ✖️

Disconnects the player from the server.

## Fields

Name | Type | When
---|---|:---:
[hide disconnection screen](#hide-disconnection-screen) | bool | 
[message](#message) | string | <code>hide disconnection screen</code> is <code><span style="color:#009688">false</span></code>

### hide disconnection screen

Indicates whether to display the main menu screen or a disconnection message.

### message

The message to display in the disconnection screen. If the message is in the game's language file it will be translated client-side.
