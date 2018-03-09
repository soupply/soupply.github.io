---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  play

# Play

Packets related to the gameplay. Network-related packets (encapsulation, acks, nacks) are managed by [RakNet](../raknet/8.html) and every packet in this section is encapsualted in an [Encapsualted](../raknet/8.html#control_encapsulated) packet.

Packet | Id | Clientbound | Serverbound
---|:---:|:---:|:---:
[Login](play/login) | 1 |   | ✓
[Play Status](play/play-status) | 2 | ✓ |  
[Server To Client Handshake](play/server-to-client-handshake) | 3 | ✓ |  
[Client To Server Handshake](play/client-to-server-handshake) | 4 |   | ✓
[Disconnect](play/disconnect) | 5 | ✓ |  
[Resource Packs Info](play/resource-packs-info) | 6 | ✓ |  
[Resource Packs Stack Packet](play/resource-packs-stack-packet) | 7 | ✓ |  
[Resource Pack Client Response](play/resource-pack-client-response) | 8 |   | ✓
[Text](play/text) | 9 | ✓ | ✓
[Set Time](play/set-time) | 10 | ✓ |  
[Start Game](play/start-game) | 11 | ✓ |  
[Add Player](play/add-player) | 12 | ✓ |  
[Add Entity](play/add-entity) | 13 | ✓ |  
[Remove Entity](play/remove-entity) | 14 | ✓ |  
[Add Item Entity](play/add-item-entity) | 15 | ✓ |  
[Add Hanging Entity](play/add-hanging-entity) | 16 | ✓ |  
[Take Item Entity](play/take-item-entity) | 17 | ✓ |  
[Move Entity](play/move-entity) | 18 | ✓ |  
[Move Player](play/move-player) | 19 | ✓ | ✓
[Rider Jump](play/rider-jump) | 20 | ✓ | ✓
[Remove Block](play/remove-block) | 21 |   | ✓
[Update Block](play/update-block) | 22 | ✓ |  
[Add Painting](play/add-painting) | 23 | ✓ |  
[Explode](play/explode) | 24 | ✓ |  
[Level Sound Event](play/level-sound-event) | 25 | ✓ | ✓
[Level Event](play/level-event) | 26 | ✓ |  
[Block Event](play/block-event) | 27 | ✓ |  
[Entity Event](play/entity-event) | 28 | ✓ | ✓
[Mob Effect](play/mob-effect) | 29 | ✓ |  
[Update Attributes](play/update-attributes) | 30 | ✓ |  
[Mob Equipment](play/mob-equipment) | 31 | ✓ | ✓
[Mob Armor Equipment](play/mob-armor-equipment) | 32 | ✓ | ✓
[Interact](play/interact) | 33 |   | ✓
[Block Pick Request](play/block-pick-request) | 34 |   | ✓
[Use Item](play/use-item) | 35 |   | ✓
[Player Action](play/player-action) | 36 |   | ✓
[Entity Fall](play/entity-fall) | 37 |   | ✓
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
[Simple Event](play/simple-event) | 64 | ✓ | ✓
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
[Update Equip](play/update-equip) | 82 | ✓ |  
[Resource Pack Data Info](play/resource-pack-data-info) | 83 | ✓ |  
[Resource Pack Chunk Data](play/resource-pack-chunk-data) | 84 | ✓ |  
[Resource Pack Chunk Request](play/resource-pack-chunk-request) | 85 |   | ✓
[Transfer](play/transfer) | 86 | ✓ |  
[Play Sound](play/play-sound) | 87 | ✓ |  
[Stop Sound](play/stop-sound) | 88 | ✓ |  
[Set Title](play/set-title) | 89 | ✓ |  
[Add Behavior Tree](play/add-behavior-tree) | 90 | ✓ |  
[Structure Block Update](play/structure-block-update) | 91 | ✓ |  
[Show Store Offer](play/show-store-offer) | 92 | ✓ |  
[Purchase Receipt](play/purchase-receipt) | 93 |   | ✓
