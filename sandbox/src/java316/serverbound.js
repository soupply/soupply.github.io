/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/java316.xml
 */
// module soupply.java316.serverbound;

const Serverbound = {

	TeleportConfirm: class extends Buffer {

		static get ID(){ return 0; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(teleportId=0) {
			super();
			this.teleportId = teleportId;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(0);
			this.writeVaruint(this.teleport_id);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.teleport_id=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.TeleportConfirm().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "TeleportConfirm(teleport_id: " + this.teleport_id + ")";
		}

	}
	,

	TabComplete: class extends Buffer {

		static get ID(){ return 1; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(text="", command=false, hasPosition=false, block=0) {
			super();
			this.text = text;
			this.command = command;
			this.hasPosition = hasPosition;
			this.block = block;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(1);
			var dhc5zh=this.encodeString(this.text);
			this.writeVaruint(dhc5zh.length);
			this.writeBytes(dhc5zh);
			this.writeBool(this.command);
			this.writeBool(this.has_position);
			if(hasPosition==true) {
				this.writeBigEndianLong(this.block);
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			var dhc5zh=this.readVaruint();
			this.text=this.decodeString(this.readBytes(dhc5zh));
			this.command=this.readBool();
			this.has_position=this.readBool();
			if(hasPosition==true) {
				this.block=this.readBigEndianLong();
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.TabComplete().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "TabComplete(text: " + this.text + ", command: " + this.command + ", has_position: " + this.has_position + ", block: " + this.block + ")";
		}

	}
	,

	ChatMessage: class extends Buffer {

		static get ID(){ return 2; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(text="") {
			super();
			this.text = text;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(2);
			var dhc5zh=this.encodeString(this.text);
			this.writeVaruint(dhc5zh.length);
			this.writeBytes(dhc5zh);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			var dhc5zh=this.readVaruint();
			this.text=this.decodeString(this.readBytes(dhc5zh));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.ChatMessage().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ChatMessage(text: " + this.text + ")";
		}

	}
	,

	ClientStatus: class extends Buffer {

		static get ID(){ return 3; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// action
		static get RESPAWN(){ return 0; };
		static get REQUEST_STATS(){ return 1; };
		static get OPEN_INVENTORY(){ return 2; };

		constructor(action=0) {
			super();
			this.action = action;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(3);
			this.writeVaruint(this.action);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.action=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.ClientStatus().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ClientStatus(action: " + this.action + ")";
		}

	}
	,

	ClientSettings: class extends Buffer {

		static get ID(){ return 4; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// chat mode
		static get ENABLED(){ return 0; };
		static get COMMANDS_ONLY(){ return 1; };
		static get DISABLED(){ return 2; };

		// displayed skin parts
		static get CAPE(){ return 1; };
		static get JACKET(){ return 2; };
		static get LEFT_SLEEVE(){ return 4; };
		static get RIGHT_SLEEVE(){ return 8; };
		static get LEFT_PANTS(){ return 16; };
		static get RIGHT_PANTS(){ return 32; };
		static get HAT(){ return 64; };

		// main hand
		static get RIGHT(){ return 0; };
		static get LEFT(){ return 1; };

		constructor(language="", viewDistance=0, chatMode=0, chatColors=false, displayedSkinParts=0, mainHand=0) {
			super();
			this.language = language;
			this.viewDistance = viewDistance;
			this.chatMode = chatMode;
			this.chatColors = chatColors;
			this.displayedSkinParts = displayedSkinParts;
			this.mainHand = mainHand;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(4);
			var dhc5y5df=this.encodeString(this.language);
			this.writeVaruint(dhc5y5df.length);
			this.writeBytes(dhc5y5df);
			this.writeByte(this.view_distance);
			this.writeVaruint(this.chat_mode);
			this.writeBool(this.chat_colors);
			this.writeByte(this.displayed_skin_parts);
			this.writeByte(this.main_hand);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			var dhc5y5df=this.readVaruint();
			this.language=this.decodeString(this.readBytes(dhc5y5df));
			this.view_distance=this.readByte();
			this.chat_mode=this.readVaruint();
			this.chat_colors=this.readBool();
			this.displayed_skin_parts=this.readByte();
			this.main_hand=this.readByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.ClientSettings().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ClientSettings(language: " + this.language + ", view_distance: " + this.view_distance + ", chat_mode: " + this.chat_mode + ", chat_colors: " + this.chat_colors + ", displayed_skin_parts: " + this.displayed_skin_parts + ", main_hand: " + this.main_hand + ")";
		}

	}
	,

	ConfirmTransaction: class extends Buffer {

		static get ID(){ return 5; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(window=0, action=0, accepted=false) {
			super();
			this.window = window;
			this.action = action;
			this.accepted = accepted;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(5);
			this.writeByte(this.window);
			this.writeBigEndianShort(this.action);
			this.writeBool(this.accepted);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.window=this.readByte();
			this.action=this.readBigEndianShort();
			this.accepted=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.ConfirmTransaction().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ConfirmTransaction(window: " + this.window + ", action: " + this.action + ", accepted: " + this.accepted + ")";
		}

	}
	,

	EnchantItem: class extends Buffer {

		static get ID(){ return 6; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(window=0, enchantment=0) {
			super();
			this.window = window;
			this.enchantment = enchantment;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(6);
			this.writeByte(this.window);
			this.writeByte(this.enchantment);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.window=this.readByte();
			this.enchantment=this.readByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.EnchantItem().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "EnchantItem(window: " + this.window + ", enchantment: " + this.enchantment + ")";
		}

	}
	,

	ClickWindow: class extends Buffer {

		static get ID(){ return 7; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(window=0, slot=0, button=0, action=0, mode=0, clickedItem=null) {
			super();
			this.window = window;
			this.slot = slot;
			this.button = button;
			this.action = action;
			this.mode = mode;
			this.clickedItem = clickedItem;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(7);
			this.writeByte(this.window);
			this.writeBigEndianShort(this.slot);
			this.writeByte(this.button);
			this.writeBigEndianShort(this.action);
			this.writeVaruint(this.mode);
			this.writeBytes(this.clicked_item.encode());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.window=this.readByte();
			this.slot=this.readBigEndianShort();
			this.button=this.readByte();
			this.action=this.readBigEndianShort();
			this.mode=this.readVaruint();
			this.clicked_item=Types.Slot.fromBuffer(this._buffer);
			this._buffer=this.clicked_item._buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.ClickWindow().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ClickWindow(window: " + this.window + ", slot: " + this.slot + ", button: " + this.button + ", action: " + this.action + ", mode: " + this.mode + ", clicked_item: " + this.clicked_item + ")";
		}

	}
	,

	CloseWindow: class extends Buffer {

		static get ID(){ return 8; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(window=0) {
			super();
			this.window = window;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(8);
			this.writeByte(this.window);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.window=this.readByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.CloseWindow().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "CloseWindow(window: " + this.window + ")";
		}

	}
	,

	PluginMessage: class extends Buffer {

		static get ID(){ return 9; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(channel="", data=null) {
			super();
			this.channel = channel;
			this.data = data;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(9);
			var dhc5afbv=this.encodeString(this.channel);
			this.writeVaruint(dhc5afbv.length);
			this.writeBytes(dhc5afbv);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			var dhc5afbv=this.readVaruint();
			this.channel=this.decodeString(this.readBytes(dhc5afbv));
			this.data=Array.from(this._buffer);
			this._buffer=[];
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.PluginMessage().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PluginMessage(channel: " + this.channel + ", data: " + this.data + ")";
		}

	}
	,

	UseEntity: class extends Buffer {

		static get ID(){ return 10; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// type
		static get INTERACT(){ return 0; };
		static get ATTACK(){ return 1; };
		static get INTERACT_AT(){ return 2; };

		// hand
		static get MAIN_HAND(){ return 0; };
		static get OFF_HAND(){ return 1; };

		constructor(target=0, type=0, targetPosition={x:0,y:0,z:0}, hand=0) {
			super();
			this.target = target;
			this.type = type;
			this.targetPosition = targetPosition;
			this.hand = hand;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(10);
			this.writeVaruint(this.target);
			this.writeVaruint(this.type);
			if(type==2) {
				this.writeBigEndianFloat(this.target_position.x);
				this.writeBigEndianFloat(this.target_position.y);
				this.writeBigEndianFloat(this.target_position.z);
			}
			if(type==0||type==2) {
				this.writeVaruint(this.hand);
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.target=this.readVaruint();
			this.type=this.readVaruint();
			if(type==2) {
				this.target_position={};
				this.target_position.x=this.readBigEndianFloat();
				this.target_position.y=this.readBigEndianFloat();
				this.target_position.z=this.readBigEndianFloat();
			}
			if(type==0||type==2) {
				this.hand=this.readVaruint();
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.UseEntity().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "UseEntity(target: " + this.target + ", type: " + this.type + ", target_position: " + this.target_position + ", hand: " + this.hand + ")";
		}

	}
	,

	KeepAlive: class extends Buffer {

		static get ID(){ return 11; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(id=0) {
			super();
			this.id = id;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(11);
			this.writeVaruint(this.id);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.id=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.KeepAlive().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "KeepAlive(id: " + this.id + ")";
		}

	}
	,

	PlayerPosition: class extends Buffer {

		static get ID(){ return 12; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(position={x:0,y:0,z:0}, onGround=false) {
			super();
			this.position = position;
			this.onGround = onGround;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(12);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeBool(this.on_ground);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			this.on_ground=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.PlayerPosition().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerPosition(position: " + this.position + ", on_ground: " + this.on_ground + ")";
		}

	}
	,

	PlayerPositionAndLook: class extends Buffer {

		static get ID(){ return 13; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(position={x:0,y:0,z:0}, yaw=.0, pitch=.0, onGround=false) {
			super();
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(13);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeBigEndianFloat(this.yaw);
			this.writeBigEndianFloat(this.pitch);
			this.writeBool(this.on_ground);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			this.yaw=this.readBigEndianFloat();
			this.pitch=this.readBigEndianFloat();
			this.on_ground=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.PlayerPositionAndLook().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerPositionAndLook(position: " + this.position + ", yaw: " + this.yaw + ", pitch: " + this.pitch + ", on_ground: " + this.on_ground + ")";
		}

	}
	,

	PlayerLook: class extends Buffer {

		static get ID(){ return 14; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(yaw=.0, pitch=.0, onGround=false) {
			super();
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(14);
			this.writeBigEndianFloat(this.yaw);
			this.writeBigEndianFloat(this.pitch);
			this.writeBool(this.on_ground);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.yaw=this.readBigEndianFloat();
			this.pitch=this.readBigEndianFloat();
			this.on_ground=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.PlayerLook().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerLook(yaw: " + this.yaw + ", pitch: " + this.pitch + ", on_ground: " + this.on_ground + ")";
		}

	}
	,

	Player: class extends Buffer {

		static get ID(){ return 15; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(onGround=false) {
			super();
			this.onGround = onGround;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(15);
			this.writeBool(this.on_ground);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.on_ground=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.Player().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Player(on_ground: " + this.on_ground + ")";
		}

	}
	,

	VehicleMove: class extends Buffer {

		static get ID(){ return 16; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(position={x:0,y:0,z:0}, yaw=.0, pitch=.0) {
			super();
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(16);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeBigEndianFloat(this.yaw);
			this.writeBigEndianFloat(this.pitch);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			this.yaw=this.readBigEndianFloat();
			this.pitch=this.readBigEndianFloat();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.VehicleMove().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "VehicleMove(position: " + this.position + ", yaw: " + this.yaw + ", pitch: " + this.pitch + ")";
		}

	}
	,

	SteerBoat: class extends Buffer {

		static get ID(){ return 17; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(rightPaddleTurning=false, leftPaddleTurning=false) {
			super();
			this.rightPaddleTurning = rightPaddleTurning;
			this.leftPaddleTurning = leftPaddleTurning;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(17);
			this.writeBool(this.right_paddle_turning);
			this.writeBool(this.left_paddle_turning);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.right_paddle_turning=this.readBool();
			this.left_paddle_turning=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.SteerBoat().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "SteerBoat(right_paddle_turning: " + this.right_paddle_turning + ", left_paddle_turning: " + this.left_paddle_turning + ")";
		}

	}
	,

	PlayerAbilities: class extends Buffer {

		static get ID(){ return 18; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// flags
		static get CREATIVE_MODE(){ return 1; };
		static get FLYING(){ return 2; };
		static get ALLOW_FLYING(){ return 4; };
		static get INVINCIBLE(){ return 8; };

		constructor(flags=0, flyingSpeed=.0, walkingSpeed=.0) {
			super();
			this.flags = flags;
			this.flyingSpeed = flyingSpeed;
			this.walkingSpeed = walkingSpeed;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(18);
			this.writeByte(this.flags);
			this.writeBigEndianFloat(this.flying_speed);
			this.writeBigEndianFloat(this.walking_speed);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.flags=this.readByte();
			this.flying_speed=this.readBigEndianFloat();
			this.walking_speed=this.readBigEndianFloat();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.PlayerAbilities().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerAbilities(flags: " + this.flags + ", flying_speed: " + this.flying_speed + ", walking_speed: " + this.walking_speed + ")";
		}

	}
	,

	PlayerDigging: class extends Buffer {

		static get ID(){ return 19; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// status
		static get START_DIGGING(){ return 0; };
		static get CANCEL_DIGGING(){ return 1; };
		static get FINISH_DIGGING(){ return 2; };
		static get DROP_ITEM_STACK(){ return 3; };
		static get DROP_ITEM(){ return 4; };
		static get SHOOT_ARROW(){ return 5; };
		static get FINISH_EATING(){ return 5; };
		static get SWAP_ITEM_IN_HAND(){ return 6; };

		constructor(status=0, position=0, face=0) {
			super();
			this.status = status;
			this.position = position;
			this.face = face;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(19);
			this.writeVaruint(this.status);
			this.writeBigEndianLong(this.position);
			this.writeByte(this.face);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.status=this.readVaruint();
			this.position=this.readBigEndianLong();
			this.face=this.readByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.PlayerDigging().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerDigging(status: " + this.status + ", position: " + this.position + ", face: " + this.face + ")";
		}

	}
	,

	EntityAction: class extends Buffer {

		static get ID(){ return 20; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// action
		static get START_SNEAKING(){ return 0; };
		static get STOP_SNEAKING(){ return 1; };
		static get LEAVE_BED(){ return 2; };
		static get START_SPRINTING(){ return 3; };
		static get STOP_SPRINTING(){ return 4; };
		static get START_HORSE_JUMP(){ return 5; };
		static get STOP_HORSE_JUMP(){ return 6; };
		static get OPEN_HORSE_INVENTORY(){ return 7; };
		static get START_ELYTRA_FLYING(){ return 8; };

		constructor(entityId=0, action=0, jumpBoost=0) {
			super();
			this.entityId = entityId;
			this.action = action;
			this.jumpBoost = jumpBoost;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(20);
			this.writeVaruint(this.entity_id);
			this.writeVaruint(this.action);
			this.writeVaruint(this.jump_boost);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.entity_id=this.readVaruint();
			this.action=this.readVaruint();
			this.jump_boost=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.EntityAction().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "EntityAction(entity_id: " + this.entity_id + ", action: " + this.action + ", jump_boost: " + this.jump_boost + ")";
		}

	}
	,

	SteerVehicle: class extends Buffer {

		static get ID(){ return 21; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// flags
		static get JUMP(){ return 1; };
		static get UNMOUNT(){ return 2; };

		constructor(sideways=.0, forward=.0, flags=0) {
			super();
			this.sideways = sideways;
			this.forward = forward;
			this.flags = flags;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(21);
			this.writeBigEndianFloat(this.sideways);
			this.writeBigEndianFloat(this.forward);
			this.writeByte(this.flags);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.sideways=this.readBigEndianFloat();
			this.forward=this.readBigEndianFloat();
			this.flags=this.readByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.SteerVehicle().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "SteerVehicle(sideways: " + this.sideways + ", forward: " + this.forward + ", flags: " + this.flags + ")";
		}

	}
	,

	ResourcePackStatus: class extends Buffer {

		static get ID(){ return 22; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// result
		static get LOADED(){ return 0; };
		static get DECLINED(){ return 1; };
		static get FAILED(){ return 2; };
		static get ACCEPTED(){ return 3; };

		constructor(result=0) {
			super();
			this.result = result;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(22);
			this.writeVaruint(this.result);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.result=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.ResourcePackStatus().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ResourcePackStatus(result: " + this.result + ")";
		}

	}
	,

	HeldItemChange: class extends Buffer {

		static get ID(){ return 23; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(slot=0) {
			super();
			this.slot = slot;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(23);
			this.writeBigEndianShort(this.slot);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.slot=this.readBigEndianShort();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.HeldItemChange().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "HeldItemChange(slot: " + this.slot + ")";
		}

	}
	,

	CreativeInventoryAction: class extends Buffer {

		static get ID(){ return 24; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(slot=0, clickedItem=null) {
			super();
			this.slot = slot;
			this.clickedItem = clickedItem;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(24);
			this.writeBigEndianShort(this.slot);
			this.writeBytes(this.clicked_item.encode());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.slot=this.readBigEndianShort();
			this.clicked_item=Types.Slot.fromBuffer(this._buffer);
			this._buffer=this.clicked_item._buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.CreativeInventoryAction().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "CreativeInventoryAction(slot: " + this.slot + ", clicked_item: " + this.clicked_item + ")";
		}

	}
	,

	UpdateSign: class extends Buffer {

		static get ID(){ return 25; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(position=0, lines=[]) {
			super();
			this.position = position;
			this.lines = lines;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(25);
			this.writeBigEndianLong(this.position);
			for(var dhc5a5c in this.lines) {
				var dhc5a5ct=this.encodeString(this.lines[dhc5a5c]);
				this.writeVaruint(dhc5a5ct.length);
				this.writeBytes(dhc5a5ct);
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.position=this.readBigEndianLong();
			var aramblzm=4;
			this.lines=[];
			for(var dhc5a5c=0;dhc5a5c<aramblzm;dhc5a5c++) {
				var dhc5a5ct=this.readVaruint();
				this.lines[dhc5a5c]=this.decodeString(this.readBytes(dhc5a5ct));
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.UpdateSign().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "UpdateSign(position: " + this.position + ", lines: " + this.lines + ")";
		}

	}
	,

	Animation: class extends Buffer {

		static get ID(){ return 26; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// hand
		static get MAIN_HAND(){ return 0; };
		static get OFF_HAND(){ return 1; };

		constructor(hand=0) {
			super();
			this.hand = hand;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(26);
			this.writeVaruint(this.hand);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.hand=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.Animation().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Animation(hand: " + this.hand + ")";
		}

	}
	,

	Spectate: class extends Buffer {

		static get ID(){ return 27; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor(player=new Uint8Array(16)) {
			super();
			this.player = player;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(27);
			this.writeBytes(this.player);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.player=this.readBytes(16);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.Spectate().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Spectate(player: " + this.player + ")";
		}

	}
	,

	PlayerBlockPlacement: class extends Buffer {

		static get ID(){ return 28; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// hand
		static get MAIN_HAND(){ return 0; };
		static get OFF_HAND(){ return 1; };

		constructor(position=0, face=0, hand=0, cursorPosition={x:0,y:0,z:0}) {
			super();
			this.position = position;
			this.face = face;
			this.hand = hand;
			this.cursorPosition = cursorPosition;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(28);
			this.writeBigEndianLong(this.position);
			this.writeVaruint(this.face);
			this.writeVaruint(this.hand);
			this.writeBigEndianFloat(this.cursor_position.x);
			this.writeBigEndianFloat(this.cursor_position.y);
			this.writeBigEndianFloat(this.cursor_position.z);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.position=this.readBigEndianLong();
			this.face=this.readVaruint();
			this.hand=this.readVaruint();
			this.cursor_position={};
			this.cursor_position.x=this.readBigEndianFloat();
			this.cursor_position.y=this.readBigEndianFloat();
			this.cursor_position.z=this.readBigEndianFloat();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.PlayerBlockPlacement().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerBlockPlacement(position: " + this.position + ", face: " + this.face + ", hand: " + this.hand + ", cursor_position: " + this.cursor_position + ")";
		}

	}
	,

	UseItem: class extends Buffer {

		static get ID(){ return 29; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// hand
		static get MAIN_HAND(){ return 0; };
		static get OFF_HAND(){ return 1; };

		constructor(hand=0) {
			super();
			this.hand = hand;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(29);
			this.writeVaruint(this.hand);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.hand=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Serverbound.UseItem().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "UseItem(hand: " + this.hand + ")";
		}

	}

}