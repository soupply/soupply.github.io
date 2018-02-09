---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  text

# Text

**Id**: 9

**Id** (hex): 09

**Id** (bin): 00001001

**Clientbound**: ✔️

**Serverbound**: ✔️

Sends or receives a message from the player. Every variant's field can contain Minecraft's formatting codes.

## Fields

Name | Type
---|---
type | ubyte
? | bool

## Variants

Variant | Field | Value
---|---|:---:
[Raw](#raw) | type | 0
[Chat](#chat) | type | 1
[Translation](#translation) | type | 2
[Popup](#popup) | type | 3
[Jukebox Popup](#jukebox_popup) | type | 4
[Tip](#tip) | type | 5
[System](#system) | type | 6
[Whisper](#whisper) | type | 7
[Announcement](#announcement) | type | 8

### Raw

Raw message that will be printed in the chat as it is.

### Additional Fields

Name | Type
---|---
message | string
xuid | string

### Chat

Chat message sent by the player to the server. If sent from the server it will display as `&lt;sender&gt; message`.

### Additional Fields

Name | Type
---|---
[sender](#chat_sender) | string
[message](#chat_message) | string
xuid | string

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

### Jukebox Popup

### Additional Fields

Name | Type
---|---
message | string
parameters | string[]

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

### Announcement

### Additional Fields

Name | Type
---|---
announcer | string
message | string

