---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  play

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
[Update Block](play/update-block) | 21 | ✓ |  
[Add Painting](play/add-painting) | 22 | ✓ |  
[Explode](play/explode) | 23 | ✓ |  
[Level Sound Event](play/level-sound-event) | 24 | ✓ | ✓
[Level Event](play/level-event) | 25 | ✓ |  
[Block Event](play/block-event) | 26 | ✓ |  
[Entity Event](play/entity-event) | 27 | ✓ | ✓
[Mob Effect](play/mob-effect) | 28 | ✓ |  
[Update Attributes](play/update-attributes) | 29 | ✓ |  
[Inventory Transaction](play/inventory-transaction) | 30 |   | ✓
[Mob Equipment](play/mob-equipment) | 31 | ✓ | ✓
[Mob Armor Equipment](play/mob-armor-equipment) | 32 | ✓ | ✓
[Interact](play/interact) | 33 |   | ✓
[Block Pick Request](play/block-pick-request) | 34 |   | ✓
[Entity Pick Request](play/entity-pick-request) | 35 |   | ✓
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
[Container Open](play/container-open) | 46 | ✓ |  
[Container Close](play/container-close) | 47 | ✓ | ✓
[Player Hotbar](play/player-hotbar) | 48 |   |  
[Inventory Content](play/inventory-content) | 49 | ✓ |  
[Inventory Slot](play/inventory-slot) | 50 | ✓ |  
[Container Set Data](play/container-set-data) | 51 | ✓ |  
[Crafting Data](play/crafting-data) | 52 | ✓ |  
[Crafting Event](play/crafting-event) | 53 |   | ✓
[Gui Data Pick Item](play/gui-data-pick-item) | 54 |   | ✓
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
[Game Rules Changed](play/game-rules-changed) | 72 | ✓ |  
[Camera](play/camera) | 73 | ✓ |  
[Boss Event](play/boss-event) | 74 | ✓ |  
[Show Credits](play/show-credits) | 75 | ✓ | ✓
[Available Commands](play/available-commands) | 76 | ✓ |  
[Command Request](play/command-request) | 77 |   | ✓
[Command Block Update](play/command-block-update) | 78 | ✓ | ✓
[Update Trade](play/update-trade) | 80 | ✓ |  
[Update Equip](play/update-equip) | 81 | ✓ |  
[Resource Pack Data Info](play/resource-pack-data-info) | 82 | ✓ |  
[Resource Pack Chunk Data](play/resource-pack-chunk-data) | 83 | ✓ |  
[Resource Pack Chunk Request](play/resource-pack-chunk-request) | 84 |   | ✓
[Transfer](play/transfer) | 85 | ✓ |  
[Play Sound](play/play-sound) | 86 | ✓ |  
[Stop Sound](play/stop-sound) | 87 | ✓ |  
[Set Title](play/set-title) | 88 | ✓ |  
[Add Behavior Tree](play/add-behavior-tree) | 89 | ✓ |  
[Structure Block Update](play/structure-block-update) | 90 | ✓ |  
[Show Store Offer](play/show-store-offer) | 91 | ✓ |  
[Purchase Receipt](play/purchase-receipt) | 92 |   | ✓
[Player Skin](play/player-skin) | 93 | ✓ |  
[Sub Client Login](play/sub-client-login) | 94 | ✓ |  
[Initiate Web Socket Connection](play/initiate-web-socket-connection) | 95 |   |  
[Set Last Hurt By](play/set-last-hurt-by) | 96 | ✓ |  
[Book Edit](play/book-edit) | 97 | ✓ | ✓
[Npc Request](play/npc-request) | 98 |   | ✓
[Photo Transfer](play/photo-transfer) | 99 |   | ✓
[Modal Form Request](play/modal-form-request) | 100 | ✓ |  
[Modal Form Response](play/modal-form-response) | 101 | ✓ |  
[Server Settings Request](play/server-settings-request) | 102 |   | ✓
[Server Settings Response](play/server-settings-response) | 103 | ✓ |  
[Show Profile](play/show-profile) | 104 | ✓ |  
[Set Default Game Type](play/set-default-game-type) | 105 | ✓ |
