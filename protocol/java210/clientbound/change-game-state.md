---
layout: default
---

[home](/) ➡ [java210](/protocol/java210) ➡ [clientbound](/protocol/java210/clientbound) ➡ change-game-state

# Change-game-state

**Id**: 30

**Id** (hex): 1E

**Id** (bin): 00011110

✔️

✔️

## Fields

Name | Type
---|---
[reason](#reason) | ubyte
[value](#value) | float

### reason

**Constants**:
Name | Value
---|:---:
[invalid bed](reason_invalid-bed) | 0
[end raining](reason_end-raining) | 1
[begin raining](reason_begin-raining) | 2
[change gamemode](reason_change-gamemode) | 3
[exit end](reason_exit-end) | 4
[demo message](reason_demo-message) | 5
[arrow hitting player](reason_arrow-hitting-player) | 6
[fade value](reason_fade-value) | 7
[fade time](reason_fade-time) | 8
[play elder guardian mob appearance](reason_play-elder-guardian-mob-appearance) | 10

### value

**Constants**:
Name | Value
---|:---:
[survival](value_survival) | 0
[creative](value_creative) | 1
[adventure](value_adventure) | 2
[spectator](value_spectator) | 3
[respawn immediately](value_respawn-immediately) | 0
[respawn after credits](value_respawn-after-credits) | 1
[show demo screen](value_show-demo-screen) | 0
[tell movement controls](value_tell-movement-controls) | 101
[tell jump controls](value_tell-jump-controls) | 102
[tell inventory controls](value_tell-inventory-controls) | 103
[bright](value_bright) | 0
[dark](value_dark) | 1

