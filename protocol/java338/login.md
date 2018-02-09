---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  login

# Login

Packet | Id | Clientbound | Serverbound
---|:---:|:---:|:---:
[Disconnect](logindisconnect) | 0 | ✓ |  
[Login Start](loginlogin-start) | 0 |   | ✓
[Encryption Request](loginencryption-request) | 1 | ✓ |  
[Encryption Response](loginencryption-response) | 1 |   | ✓
[Login Success](loginlogin-success) | 2 | ✓ |  
[Set Compression](loginset-compression) | 3 | ✓ |  

