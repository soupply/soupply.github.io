---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  play

# Play

Packets related to the gameplay. Network-related packets (encapsulation, acks, nacks) are managed by [RakNet](../raknet/8.html) and every packet in this section is encapsualted in an [Encapsualted](../raknet/8.html#control_encapsulated) packet.

Packet | Id | Clientbound | Serverbound
---|:---:|:---:|:---:
[Login](playlogin) | 1 |   | ✓
[Play Status](playplay-status) | 2 | ✓ |  
[Server To Client Handshake](playserver-to-client-handshake) | 3 | ✓ |  
[Client To Server Handshake](playclient-to-server-handshake) | 4 |   | ✓
[Disconnect](playdisconnect) | 5 | ✓ |  
[Resource Packs Info](playresource-packs-info) | 6 | ✓ |  
[Resource Packs Stack Packet](playresource-packs-stack-packet) | 7 | ✓ |  
[Resource Pack Client Response](playresource-pack-client-response) | 8 |   | ✓
[Text](playtext) | 9 | ✓ | ✓
[Set Time](playset-time) | 10 | ✓ |  
[Start Game](playstart-game) | 11 | ✓ |  
[Add Player](playadd-player) | 12 | ✓ |  
[Add Entity](playadd-entity) | 13 | ✓ |  
[Remove Entity](playremove-entity) | 14 | ✓ |  
[Add Item Entity](playadd-item-entity) | 15 | ✓ |  
[Add Hanging Entity](playadd-hanging-entity) | 16 | ✓ |  
[Take Item Entity](playtake-item-entity) | 17 | ✓ |  
[Move Entity](playmove-entity) | 18 | ✓ |  
[Move Player](playmove-player) | 19 | ✓ | ✓
[Rider Jump](playrider-jump) | 20 | ✓ | ✓
[Remove Block](playremove-block) | 21 |   | ✓
[Update Block](playupdate-block) | 22 | ✓ |  
[Add Painting](playadd-painting) | 23 | ✓ |  
[Explode](playexplode) | 24 | ✓ |  
[Level Sound Event](playlevel-sound-event) | 25 | ✓ | ✓
[Level Event](playlevel-event) | 26 | ✓ |  
[Block Event](playblock-event) | 27 | ✓ |  
[Entity Event](playentity-event) | 28 | ✓ | ✓
[Mob Effect](playmob-effect) | 29 | ✓ |  
[Update Attributes](playupdate-attributes) | 30 | ✓ |  
[Mob Equipment](playmob-equipment) | 31 | ✓ | ✓
[Mob Armor Equipment](playmob-armor-equipment) | 32 | ✓ | ✓
[Interact](playinteract) | 33 |   | ✓
[Block Pick Request](playblock-pick-request) | 34 |   | ✓
[Use Item](playuse-item) | 35 |   | ✓
[Player Action](playplayer-action) | 36 |   | ✓
[Entity Fall](playentity-fall) | 37 |   | ✓
[Hurt Armor](playhurt-armor) | 38 | ✓ |  
[Set Entity Data](playset-entity-data) | 39 | ✓ |  
[Set Entity Motion](playset-entity-motion) | 40 | ✓ |  
[Set Entity Link](playset-entity-link) | 41 | ✓ |  
[Set Health](playset-health) | 42 | ✓ |  
[Set Spawn Position](playset-spawn-position) | 43 | ✓ |  
[Animate](playanimate) | 44 | ✓ | ✓
[Respawn](playrespawn) | 45 | ✓ |  
[Drop Item](playdrop-item) | 46 |   | ✓
[Inventory Action](playinventory-action) | 47 |   | ✓
[Container Open](playcontainer-open) | 48 | ✓ |  
[Container Close](playcontainer-close) | 49 | ✓ | ✓
[Container Set Slot](playcontainer-set-slot) | 50 | ✓ | ✓
[Container Set Data](playcontainer-set-data) | 51 | ✓ |  
[Container Set Content](playcontainer-set-content) | 52 | ✓ |  
[Crafting Data](playcrafting-data) | 53 | ✓ |  
[Crafting Event](playcrafting-event) | 54 |   | ✓
[Adventure Settings](playadventure-settings) | 55 | ✓ | ✓
[Block Entity Data](playblock-entity-data) | 56 | ✓ | ✓
[Player Input](playplayer-input) | 57 |   | ✓
[Full Chunk Data](playfull-chunk-data) | 58 | ✓ |  
[Set Commands Enabled](playset-commands-enabled) | 59 | ✓ |  
[Set Difficulty](playset-difficulty) | 60 | ✓ |  
[Change Dimension](playchange-dimension) | 61 | ✓ |  
[Set Player Game Type](playset-player-game-type) | 62 | ✓ | ✓
[Player List](playplayer-list) | 63 | ✓ |  
[Simple Event](playsimple-event) | 64 | ✓ | ✓
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
[Update Equip](playupdate-equip) | 82 | ✓ |  
[Resource Pack Data Info](playresource-pack-data-info) | 83 | ✓ |  
[Resource Pack Chunk Data](playresource-pack-chunk-data) | 84 | ✓ |  
[Resource Pack Chunk Request](playresource-pack-chunk-request) | 85 |   | ✓
[Transfer](playtransfer) | 86 | ✓ |  
[Play Sound](playplay-sound) | 87 | ✓ |  
[Stop Sound](playstop-sound) | 88 | ✓ |  
[Set Title](playset-title) | 89 | ✓ |  
[Add Behavior Tree](playadd-behavior-tree) | 90 | ✓ |  
[Structure Block Update](playstructure-block-update) | 91 | ✓ |  
[Show Store Offer](playshow-store-offer) | 92 | ✓ |  
[Purchase Receipt](playpurchase-receipt) | 93 |   | ✓

