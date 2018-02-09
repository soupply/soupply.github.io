---
layout: default
---

[home](/) ➡ [bedrock150](/protocol/bedrock150) ➡ play

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
[Update Block](playupdate-block) | 21 | ✓ |  
[Add Painting](playadd-painting) | 22 | ✓ |  
[Explode](playexplode) | 23 | ✓ |  
[Level Sound Event](playlevel-sound-event) | 24 | ✓ | ✓
[Level Event](playlevel-event) | 25 | ✓ |  
[Block Event](playblock-event) | 26 | ✓ |  
[Entity Event](playentity-event) | 27 | ✓ | ✓
[Mob Effect](playmob-effect) | 28 | ✓ |  
[Update Attributes](playupdate-attributes) | 29 | ✓ |  
[Inventory Transaction](playinventory-transaction) | 30 |   | ✓
[Mob Equipment](playmob-equipment) | 31 | ✓ | ✓
[Mob Armor Equipment](playmob-armor-equipment) | 32 | ✓ | ✓
[Interact](playinteract) | 33 |   | ✓
[Block Pick Request](playblock-pick-request) | 34 |   | ✓
[Entity Pick Request](playentity-pick-request) | 35 |   | ✓
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
[Container Open](playcontainer-open) | 46 | ✓ |  
[Container Close](playcontainer-close) | 47 | ✓ | ✓
[Player Hotbar](playplayer-hotbar) | 48 |   |  
[Inventory Content](playinventory-content) | 49 | ✓ |  
[Inventory Slot](playinventory-slot) | 50 | ✓ |  
[Container Set Data](playcontainer-set-data) | 51 | ✓ |  
[Crafting Data](playcrafting-data) | 52 | ✓ |  
[Crafting Event](playcrafting-event) | 53 |   | ✓
[Gui Data Pick Item](playgui-data-pick-item) | 54 |   | ✓
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
[Game Rules Changed](playgame-rules-changed) | 72 | ✓ |  
[Camera](playcamera) | 73 | ✓ |  
[Boss Event](playboss-event) | 74 | ✓ |  
[Show Credits](playshow-credits) | 75 | ✓ | ✓
[Available Commands](playavailable-commands) | 76 | ✓ |  
[Command Request](playcommand-request) | 77 |   | ✓
[Command Block Update](playcommand-block-update) | 78 | ✓ | ✓
[Update Trade](playupdate-trade) | 80 | ✓ |  
[Update Equip](playupdate-equip) | 81 | ✓ |  
[Resource Pack Data Info](playresource-pack-data-info) | 82 | ✓ |  
[Resource Pack Chunk Data](playresource-pack-chunk-data) | 83 | ✓ |  
[Resource Pack Chunk Request](playresource-pack-chunk-request) | 84 |   | ✓
[Transfer](playtransfer) | 85 | ✓ |  
[Play Sound](playplay-sound) | 86 | ✓ |  
[Stop Sound](playstop-sound) | 87 | ✓ |  
[Set Title](playset-title) | 88 | ✓ |  
[Add Behavior Tree](playadd-behavior-tree) | 89 | ✓ |  
[Structure Block Update](playstructure-block-update) | 90 | ✓ |  
[Show Store Offer](playshow-store-offer) | 91 | ✓ |  
[Purchase Receipt](playpurchase-receipt) | 92 |   | ✓
[Player Skin](playplayer-skin) | 93 | ✓ |  
[Sub Client Login](playsub-client-login) | 94 | ✓ |  
[Initiate Web Socket Connection](playinitiate-web-socket-connection) | 95 |   |  
[Set Last Hurt By](playset-last-hurt-by) | 96 | ✓ |  
[Book Edit](playbook-edit) | 97 | ✓ | ✓
[Npc Request](playnpc-request) | 98 |   | ✓
[Photo Transfer](playphoto-transfer) | 99 |   | ✓
[Modal Form Request](playmodal-form-request) | 100 | ✓ |  
[Modal Form Response](playmodal-form-response) | 101 | ✓ |  
[Server Settings Request](playserver-settings-request) | 102 |   | ✓
[Server Settings Response](playserver-settings-response) | 103 | ✓ |  
[Show Profile](playshow-profile) | 104 | ✓ |  
[Set Default Game Type](playset-default-game-type) | 105 | ✓ |  

