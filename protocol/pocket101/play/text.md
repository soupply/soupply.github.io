---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  text

# Text

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.Text)

**Id**: 10

**Id** (hex): 0A

**Id** (bin): 00001010

**Clientbound**: ✔️

**Serverbound**: ✔️

Sends or receives a message from the player. Every variant's field can contain Minecraft's formatting codes.
Every packet sent in the same game tick should be joined together with `\n§r` (line break and reset formatting), otherwise the messages will be displayed multiple times on the client's chat (see [MCPE-17631](https://bugs.mojang.com/browse/MCPE-17631)).

## Fields

Name | Type
---|---
type | ubyte

## Variants

Variant | Field | Value
---|---|:---:
[Raw](#raw) | type | 0
[Chat](#chat) | type | 1
[Translation](#translation) | type | 2
[Popup](#popup) | type | 3
[Tip](#tip) | type | 4
[System](#system) | type | 5
[Whisper](#whisper) | type | 6

### Raw

Raw message that will be printed in the chat as it is.

### Additional Fields

Name | Type
---|---
message | string

### Chat

Chat message sent by the player to the server. If sent from the server it will display as `&lt;sender&gt; message`.

### Additional Fields

Name | Type
---|---
[sender](#chat_sender) | string
[message](#chat_message) | string

### sender

Case sensitive name of the player that has sent the message.

### message

Message sent by the player. It should be unformatted (regular expression: `§[a-fA-F0-9k-or]`) before being processed as chat message by the server.

### Translation

Sends a message that will be translated client-side using the player's language.

### Additional Fields

Name | Type
---|---
[message](#translation_message) | string
[parameters](#translation_parameters) | string[]

### message

A message in the game's language file.

### parameters

Parameters that will be placed instead of the replacement symbols (%1, %2, etc...).

### Popup

Displays popups messages for one tick before fading out. The popup messages are displayed at the centre of the screen and are not automatically aligned horizontally.

### Additional Fields

Name | Type
---|---
title | string
subtitle | string

### Tip

Displays a tip message for one tick before fading out. The tip message is displayed on top of the inventory bar and can contain multiple lines separated with `\n`.

### Additional Fields

Name | Type
---|---
message | string

### System

### Additional Fields

Name | Type
---|---
message | string

### Whisper

Sends a whisper message to the client that will be displayed in the format `<i>sender has whispered to you:</i> message`.

### Additional Fields

Name | Type
---|---
sender | string
message | string
