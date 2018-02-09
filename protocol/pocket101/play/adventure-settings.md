---
layout: default
---

[home](/) ➡ [pocket101](/protocol/pocket101) ➡ [play](/protocol/pocket101/play) ➡ adventure-settings

# Adventure-settings

**Id**: 55

**Id** (hex): 37

**Id** (bin): 00110111

✔️

✔️

Updates the world's settings and client's permissions.

## Fields

Name | Type
---|---
[flags](#flags) | varuint
[permissions](#permissions) | varuint

### flags

**Constants**:
Name | Value
---|:---:
[immutable world](flags_immutable-world) | 1
[pvp disabled](flags_pvp-disabled) | 2
[pvm disabled](flags_pvm-disabled) | 4
[mvp disbaled](flags_mvp-disbaled) | 8
[evp disabled](flags_evp-disabled) | 16
[auto jump](flags_auto-jump) | 32
[allow flight](flags_allow-flight) | 64
[no clip](flags_no-clip) | 128
[flying](flags_flying) | 512

### permissions

**Constants**:
Name | Value
---|:---:
[user](permissions_user) | 0
[operator](permissions_operator) | 1
[host](permissions_host) | 2
[automation](permissions_automation) | 3
[admin](permissions_admin) | 4

