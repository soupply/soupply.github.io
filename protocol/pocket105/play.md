---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  play

# Play

Packets related to the gameplay. Network-related packets (encapsulation, acks, nacks) are managed by [RakNet](../raknet/8.html) and every packet in this section is encapsualted in an [Encapsualted](../raknet/8.html#control_encapsulated) packet.

Packet | Id | Clientbound | Serverbound
---|:---:|:---:|:---:
[Login](play/login) | 1 |   | ✓
[Play Status](play/play-status) | 2 | ✓ |  
[Server To Client Handshake](play/server-to-client-handshake) | 3 | ✓ |  
[Client To Server Handshake](play/client-to-server-handshake) | 4 |   | ✓
[Disconnect](play/disconnect) | 5 | ✓ |  
[Batch](play/batch) | 6 | ✓ | ✓
[Resource Packs Info](play/resource-packs-info) | 7 | ✓ |  
[Resource Packs Stack Packet](play/resource-packs-stack-packet) | 8 | ✓ |  
[Resource Pack Client Response](play/resource-pack-client-response) | 9 |   | ✓
[Text](play/text) | 10 | ✓ | ✓
[Set Time](play/set-time) | 11 | ✓ |  
[Start Game](play/start-game) | 12 | ✓ |  
[Add Player](play/add-player) | 13 | ✓ |  
[Add Entity](play/add-entity) | 14 | ✓ |  
[Remove Entity](play/remove-entity) | 15 | ✓ |  
[Add Item Entity](play/add-item-entity) | 16 | ✓ |  
[Add Hanging Entity](play/add-hanging-entity) | 17 | ✓ |  
[Take Item Entity](play/take-item-entity) | 18 | ✓ |  
[Move Entity](play/move-entity) | 19 | ✓ |  
[Move Player](play/move-player) | 20 | ✓ | ✓
[Rider Jump](play/rider-jump) | 21 | ✓ | ✓
[Remove Block](play/remove-block) | 22 |   | ✓
[Update Block](play/update-block) | 23 | ✓ |  
[Add Painting](play/add-painting) | 24 | ✓ |  
[Explode](play/explode) | 25 | ✓ |  
[Level Sound Event](play/level-sound-event) | 26 | ✓ | ✓
[Level Event](play/level-event) | 27 | ✓ |  
[Block Event](play/block-event) | 28 | ✓ |  
[Entity Event](play/entity-event) | 29 | ✓ | ✓
[Mob Effect](play/mob-effect) | 30 | ✓ |  
[Update Attributes](play/update-attributes) | 31 | ✓ |  
[Mob Equipment](play/mob-equipment) | 32 | ✓ | ✓
[Mob Armor Equipment](play/mob-armor-equipment) | 33 | ✓ | ✓
[Interact](play/interact) | 34 |   | ✓
[Block Pick Request](play/block-pick-request) | 35 |   | ✓
[Use Item](play/use-item) | 36 |   | ✓
[Player Action](play/player-action) | 37 |   | ✓
[Player Fall](play/player-fall) | 38 |   | ✓
[Hurt Armor](play/hurt-armor) | 39 | ✓ |  
[Set Entity Data](play/set-entity-data) | 40 | ✓ |  
[Set Entity Motion](play/set-entity-motion) | 41 | ✓ |  
[Set Entity Link](play/set-entity-link) | 42 | ✓ |  
[Set Health](play/set-health) | 43 | ✓ |  
[Set Spawn Position](play/set-spawn-position) | 44 | ✓ |  
[Animate](play/animate) | 45 | ✓ | ✓
[Respawn](play/respawn) | 46 | ✓ |  
[Drop Item](play/drop-item) | 47 |   | ✓
[Inventory Action](play/inventory-action) | 48 |   | ✓
[Container Open](play/container-open) | 49 | ✓ |  
[Container Close](play/container-close) | 50 | ✓ | ✓
[Container Set Slot](play/container-set-slot) | 51 | ✓ | ✓
[Container Set Data](play/container-set-data) | 52 | ✓ |  
[Container Set Content](play/container-set-content) | 53 | ✓ |  
[Crafting Data](play/crafting-data) | 54 | ✓ |  
[Crafting Event](play/crafting-event) | 55 |   | ✓
[Adventure Settings](play/adventure-settings) | 56 | ✓ | ✓
[Block Entity Data](play/block-entity-data) | 57 | ✓ | ✓
[Player Input](play/player-input) | 58 |   | ✓
[Full Chunk Data](play/full-chunk-data) | 59 | ✓ |  
[Set Commands Enabled](play/set-commands-enabled) | 60 | ✓ |  
[Set Difficulty](play/set-difficulty) | 61 | ✓ |  
[Change Dimension](play/change-dimension) | 62 | ✓ |  
[Set Player Game Type](play/set-player-game-type) | 63 | ✓ | ✓
[Player List](play/player-list) | 64 | ✓ |  
[Telemetry Event](play/telemetry-event) | 65 | ✓ |  
[Spawn Experience Orb](play/spawn-experience-orb) | 66 | ✓ |  
[Clientbound Map Item Data](play/clientbound-map-item-data) | 67 | ✓ |  
[Map Info Request](play/map-info-request) | 68 |   | ✓
[Request Chunk Radius](play/request-chunk-radius) | 69 |   | ✓
[Chunk Radius Updated](play/chunk-radius-updated) | 70 | ✓ |  
[Item Frame Drop Item](play/item-frame-drop-item) | 71 | ✓ |  
[Replace Item in Slot](play/replace-item-in-slot) | 72 |   | ✓
[Game Rules Changed](play/game-rules-changed) | 73 | ✓ |  
[Camera](play/camera) | 74 | ✓ |  
[Add Item](play/add-item) | 75 | ✓ |  
[Boss Event](play/boss-event) | 76 | ✓ |  
[Show Credits](play/show-credits) | 77 | ✓ | ✓
[Available Commands](play/available-commands) | 78 | ✓ |  
[Command Step](play/command-step) | 79 |   | ✓
[Command Block Update](play/command-block-update) | 80 | ✓ | ✓
[Update Trade](play/update-trade) | 81 | ✓ |  
[Resource Pack Data Info](play/resource-pack-data-info) | 82 | ✓ |  
[Resource Pack Chunk Data](play/resource-pack-chunk-data) | 83 | ✓ |  
[Resource Pack Chunk Request](play/resource-pack-chunk-request) | 84 |   | ✓
[Transfer](play/transfer) | 85 | ✓ |  
[Play Sound](play/play-sound) | 86 | ✓ |  
[Stop Sound](play/stop-sound) | 87 | ✓ |  
[Set Title](play/set-title) | 88 | ✓ |  

