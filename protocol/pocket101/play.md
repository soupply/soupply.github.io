---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  play

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
[Use Item](play/use-item) | 35 |   | ✓
[Player Action](play/player-action) | 36 |   | ✓
[Player Fall](play/player-fall) | 37 |   | ✓
[Hurt Armor](play/hurt-armor) | 38 | ✓ |  
[Set Entity Data](play/set-entity-data) | 39 | ✓ |  
[Set Entity Motion](play/set-entity-motion) | 40 | ✓ |  
[Set Entity Link](play/set-entity-link) | 41 | ✓ |  
[Set Health](play/set-health) | 42 | ✓ |  
[Set Spawn Position](play/set-spawn-position) | 43 | ✓ |  
[Animate](play/animate) | 44 | ✓ | ✓
[Respawn](play/respawn) | 45 | ✓ |  
[Drop Item](play/drop-item) | 46 |   | ✓
[Inventory Action](play/inventory-action) | 47 |   | ✓
[Container Open](play/container-open) | 48 | ✓ |  
[Container Close](play/container-close) | 49 | ✓ | ✓
[Container Set Slot](play/container-set-slot) | 50 | ✓ | ✓
[Container Set Data](play/container-set-data) | 51 | ✓ |  
[Container Set Content](play/container-set-content) | 52 | ✓ |  
[Crafting Data](play/crafting-data) | 53 | ✓ |  
[Crafting Event](play/crafting-event) | 54 |   | ✓
[Adventure Settings](play/adventure-settings) | 55 | ✓ | ✓
[Block Entity Data](play/block-entity-data) | 56 | ✓ | ✓
[Player Input](play/player-input) | 57 |   | ✓
[Full Chunk Data](play/full-chunk-data) | 58 | ✓ |  
[Set Commands Enabled](play/set-commands-enabled) | 59 | ✓ |  
[Set Difficulty](play/set-difficulty) | 60 | ✓ |  
[Change Dimension](play/change-dimension) | 61 | ✓ |  
[Set Player Game Type](play/set-player-game-type) | 62 | ✓ | ✓
[Player List](play/player-list) | 63 | ✓ |  
[Telemetry Event](play/telemetry-event) | 64 | ✓ |  
[Spawn Experience Orb](play/spawn-experience-orb) | 65 | ✓ |  
[Clientbound Map Item Data](play/clientbound-map-item-data) | 66 | ✓ |  
[Map Info Request](play/map-info-request) | 67 |   | ✓
[Request Chunk Radius](play/request-chunk-radius) | 68 |   | ✓
[Chunk Radius Updated](play/chunk-radius-updated) | 69 | ✓ |  
[Item Frame Drop Item](play/item-frame-drop-item) | 70 | ✓ |  
[Replace Selected Item](play/replace-selected-item) | 71 |   | ✓
[Game Rules Changed](play/game-rules-changed) | 72 | ✓ |  
[Camera](play/camera) | 73 | ✓ |  
[Add Item](play/add-item) | 74 | ✓ |  
[Boss Event](play/boss-event) | 75 | ✓ |  
[Show Credits](play/show-credits) | 76 | ✓ | ✓
[Available Commands](play/available-commands) | 77 | ✓ |  
[Command Step](play/command-step) | 78 |   | ✓
[Resource Pack Data Info](play/resource-pack-data-info) | 79 | ✓ |  
[Resource Pack Chunk Data](play/resource-pack-chunk-data) | 80 | ✓ |  
[Resource Pack Chunk Request](play/resource-pack-chunk-request) | 81 |   | ✓
[Transfer](play/transfer) | 82 | ✓ |
