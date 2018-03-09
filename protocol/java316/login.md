---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  login

# Login

Packet | Id | Clientbound | Serverbound
---|:---:|:---:|:---:
[Disconnect](login/disconnect) | 0 | ✓ |  
[Login Start](login/login-start) | 0 |   | ✓
[Encryption Request](login/encryption-request) | 1 | ✓ |  
[Encryption Response](login/encryption-response) | 1 |   | ✓
[Login Success](login/login-success) | 2 | ✓ |  
[Set Compression](login/set-compression) | 3 | ✓ |
