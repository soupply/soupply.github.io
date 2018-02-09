---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  play

# Play

Packets related to the gameplay. Network-related packets (encapsulation, acks, nacks) are managed by [RakNet](../raknet/8.html) and every packet in this section is encapsualted in an [Encapsualted](../raknet/8.html#control_encapsulated) packet.

Packet | Id | Clientbound | Serverbound
---|:---:|:---:|:---:
[Login](playlogin) | 1 |   | ✓
[Play Status](playplay-status) | 2 | ✓ |  
[Server To Client Handshake](playserver-to-client-handshake) | 3 | ✓ |  
[Client To Server Handshake](playclient-to-server-handshake) | 4 |   | ✓
[Disconnect](playdisconnect) | 5 | ✓ |  
[Batch](playbatch) | 6 | ✓ | ✓
[Resource Packs Info](playresource-packs-info) | 7 | ✓ |  
[Resource Packs Stack Packet](playresource-packs-stack-packet) | 8 | ✓ |  
[Resource Pack Client Response](playresource-pack-client-response) | 9 |   | ✓
[Text](playtext) | 10 | ✓ | ✓
[Set Time](playset-time) | 11 | ✓ |  
[Start Game](playstart-game) | 12 | ✓ |  
[Add Player](playadd-player) | 13 | ✓ |  
[Add Entity](playadd-entity) | 14 | ✓ |  
[Remove Entity](playremove-entity) | 15 | ✓ |  
[Add Item Entity](playadd-item-entity) | 16 | ✓ |  
[Add Hanging Entity](playadd-hanging-entity) | 17 | ✓ |  
[Take Item Entity](playtake-item-entity) | 18 | ✓ |  
[Move Entity](playmove-entity) | 19 | ✓ |  
[Move Player](playmove-player) | 20 | ✓ | ✓
[Rider Jump](playrider-jump) | 21 | ✓ | ✓
[Remove Block](playremove-block) | 22 |   | ✓
[Update Block](playupdate-block) | 23 | ✓ |  
[Add Painting](playadd-painting) | 24 | ✓ |  
[Explode](playexplode) | 25 | ✓ |  
[Level Sound Event](playlevel-sound-event) | 26 | ✓ | ✓
[Level Event](playlevel-event) | 27 | ✓ |  
[Block Event](playblock-event) | 28 | ✓ |  
[Entity Event](playentity-event) | 29 | ✓ | ✓
[Mob Effect](playmob-effect) | 30 | ✓ |  
[Update Attributes](playupdate-attributes) | 31 | ✓ |  
[Mob Equipment](playmob-equipment) | 32 | ✓ | ✓
[Mob Armor Equipment](playmob-armor-equipment) | 33 | ✓ | ✓
[Interact](playinteract) | 34 |   | ✓
[Block Pick Request](playblock-pick-request) | 35 |   | ✓
[Use Item](playuse-item) | 36 |   | ✓
[Player Action](playplayer-action) | 37 |   | ✓
[Player Fall](playplayer-fall) | 38 |   | ✓
[Hurt Armor](playhurt-armor) | 39 | ✓ |  
[Set Entity Data](playset-entity-data) | 40 | ✓ |  
[Set Entity Motion](playset-entity-motion) | 41 | ✓ |  
[Set Entity Link](playset-entity-link) | 42 | ✓ |  
[Set Health](playset-health) | 43 | ✓ |  
[Set Spawn Position](playset-spawn-position) | 44 | ✓ |  
[Animate](playanimate) | 45 | ✓ | ✓
[Respawn](playrespawn) | 46 | ✓ |  
[Drop Item](playdrop-item) | 47 |   | ✓
[Inventory Action](playinventory-action) | 48 |   | ✓
[Container Open](playcontainer-open) | 49 | ✓ |  
[Container Close](playcontainer-close) | 50 | ✓ | ✓
[Container Set Slot](playcontainer-set-slot) | 51 | ✓ | ✓
[Container Set Data](playcontainer-set-data) | 52 | ✓ |  
[Container Set Content](playcontainer-set-content) | 53 | ✓ |  
[Crafting Data](playcrafting-data) | 54 | ✓ |  
[Crafting Event](playcrafting-event) | 55 |   | ✓
[Adventure Settings](playadventure-settings) | 56 | ✓ | ✓
[Block Entity Data](playblock-entity-data) | 57 | ✓ | ✓
[Player Input](playplayer-input) | 58 |   | ✓
[Full Chunk Data](playfull-chunk-data) | 59 | ✓ |  
[Set Commands Enabled](playset-commands-enabled) | 60 | ✓ |  
[Set Difficulty](playset-difficulty) | 61 | ✓ |  
[Change Dimension](playchange-dimension) | 62 | ✓ |  
[Set Player Game Type](playset-player-game-type) | 63 | ✓ | ✓
[Player List](playplayer-list) | 64 | ✓ |  
[Telemetry Event](playtelemetry-event) | 65 | ✓ |  
[Spawn Experience Orb](playspawn-experience-orb) | 66 | ✓ |  
[Clientbound Map Item Data](playclientbound-map-item-data) | 67 | ✓ |  
[Map Info Request](playmap-info-request) | 68 |   | ✓
[Request Chunk Radius](playrequest-chunk-radius) | 69 |   | ✓
[Chunk Radius Updated](playchunk-radius-updated) | 70 | ✓ |  
[Item Frame Drop Item](playitem-frame-drop-item) | 71 | ✓ |  
[Replace Item in Slot](playreplace-item-in-slot) | 72 |   | ✓
[Game Rules Changed](playgame-rules-changed) | 73 | ✓ |  
[Camera](playcamera) | 74 | ✓ |  
[Add Item](playadd-item) | 75 | ✓ |  
[Boss Event](playboss-event) | 76 | ✓ |  
[Show Credits](playshow-credits) | 77 | ✓ | ✓
[Available Commands](playavailable-commands) | 78 | ✓ |  
[Command Step](playcommand-step) | 79 |   | ✓
[Command Block Update](playcommand-block-update) | 80 | ✓ | ✓
[Update Trade](playupdate-trade) | 81 | ✓ |  
[Resource Pack Data Info](playresource-pack-data-info) | 82 | ✓ |  
[Resource Pack Chunk Data](playresource-pack-chunk-data) | 83 | ✓ |  
[Resource Pack Chunk Request](playresource-pack-chunk-request) | 84 |   | ✓
[Transfer](playtransfer) | 85 | ✓ |  
[Play Sound](playplay-sound) | 86 | ✓ |  
[Stop Sound](playstop-sound) | 87 | ✓ |  
[Set Title](playset-title) | 88 | ✓ |  

