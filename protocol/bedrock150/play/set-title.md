---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  set-title

# Set title

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#play.set_title)

**Id**: 88

**Id** (hex): 58

**Id** (bin): 01011000

**Clientbound**: ✔️

**Serverbound**: ✖️

Displays titles on the client's screen.

## Fields

Name | Type
---|---
[action](#action) | varint
[text](#text) | string
fade in | varint
stay | varint
fade out | varint

### action

**Constants**:

Name | Value |  |
---|:---:|---
hide | 0 | Hides the title and the subtitle
reset | 1 | Hides and resets the title and the subtitle
set title | 2 | Sets the title
set subtitle | 3 | Sets the subtitle, displayed under the title
set action bar | 4 | Show a message over the hotbar for some seconds
set timings | 5 | Shows the title and the subtitle

### text

Text that will be displayed in the place specified in the action field.
