const PlayServerbound ={

	TeleportConfirm: class extends Packet{

		static get ID(){return 0;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 0;
		}

		constructor(teleportId=0){
			super();
			this.teleportId = teleportId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.teleportId);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.teleportId=this.readVaruint();
			traceDecode('teleportId');
			return this;
		}

	}
	,

	QueryBlockNbt: class extends Packet{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 1;
		}

		constructor(transationId=0,location=0){
			super();
			this.transationId = transationId;
			this.location = location;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.transationId);
			this.writeBigEndianLong(this.location);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.transationId=this.readVaruint();
			traceDecode('transationId');
			this.location=this.readBigEndianLong();
			traceDecode('location');
			return this;
		}

	}
	,

	ChatMessage: class extends Packet{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 2;
		}

		constructor(text=""){
			super();
			this.text = text;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5zh=this.encodeString(this.text);
			this.writeVaruint(dhc5zh.length);
			this.writeBytes(dhc5zh);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5zh=this.readVaruint();
			this.text=this.decodeString(this.readBytes(dhc5zh));
			traceDecode('text');
			return this;
		}

	}
	,

	ClientStatus: class extends Packet{

		static get ID(){return 3;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 3;
		}

		constructor(action=0){
			super();
			this.action = action;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.action);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readVaruint();
			traceDecode('action');
			return this;
		}

	}
	,

	ClientSettings: class extends Packet{

		static get ID(){return 4;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 4;
		}

		constructor(language="",viewDistance=0,chatMode=0,chatColors=false,displayedSkinParts=0,mainHand=0){
			super();
			this.language = language;
			this.viewDistance = viewDistance;
			this.chatMode = chatMode;
			this.chatColors = chatColors;
			this.displayedSkinParts = displayedSkinParts;
			this.mainHand = mainHand;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y5df=this.encodeString(this.language);
			this.writeVaruint(dhc5y5df.length);
			this.writeBytes(dhc5y5df);
			this.writeByte(this.viewDistance);
			this.writeVaruint(this.chatMode);
			this.writeBool(this.chatColors);
			this.writeByte(this.displayedSkinParts);
			this.writeByte(this.mainHand);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y5df=this.readVaruint();
			this.language=this.decodeString(this.readBytes(dhc5y5df));
			traceDecode('language');
			this.viewDistance=this.readByte();
			traceDecode('viewDistance');
			this.chatMode=this.readVaruint();
			traceDecode('chatMode');
			this.chatColors=this.readBool();
			traceDecode('chatColors');
			this.displayedSkinParts=this.readByte();
			traceDecode('displayedSkinParts');
			this.mainHand=this.readByte();
			traceDecode('mainHand');
			return this;
		}

	}
	,

	TabComplete: class extends Packet{

		static get ID(){return 5;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 5;
		}

		constructor(transactionId=0,text=""){
			super();
			this.transactionId = transactionId;
			this.text = text;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.transactionId);
			var dhc5zh=this.encodeString(this.text);
			this.writeVaruint(dhc5zh.length);
			this.writeBytes(dhc5zh);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.transactionId=this.readVaruint();
			traceDecode('transactionId');
			var dhc5zh=this.readVaruint();
			this.text=this.decodeString(this.readBytes(dhc5zh));
			traceDecode('text');
			return this;
		}

	}
	,

	ConfirmTransaction: class extends Packet{

		static get ID(){return 6;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 6;
		}

		constructor(window=0,action=0,accepted=false){
			super();
			this.window = window;
			this.action = action;
			this.accepted = accepted;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeBigEndianShort(this.action);
			this.writeBool(this.accepted);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.action=this.readBigEndianShort();
			traceDecode('action');
			this.accepted=this.readBool();
			traceDecode('accepted');
			return this;
		}

	}
	,

	EnchantItem: class extends Packet{

		static get ID(){return 7;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 7;
		}

		constructor(window=0,enchantment=0){
			super();
			this.window = window;
			this.enchantment = enchantment;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeByte(this.enchantment);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.enchantment=this.readByte();
			traceDecode('enchantment');
			return this;
		}

	}
	,

	ClickWindow: class extends Packet{

		static get ID(){return 8;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 8;
		}

		constructor(window=0,slot=0,button=0,action=0,mode=0,clickedItem=new Types.Slot()){
			super();
			this.window = window;
			this.slot = slot;
			this.button = button;
			this.action = action;
			this.mode = mode;
			this.clickedItem = clickedItem;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeBigEndianShort(this.slot);
			this.writeByte(this.button);
			this.writeBigEndianShort(this.action);
			this.writeVaruint(this.mode);
			this.writeBytes(this.clickedItem.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.slot=this.readBigEndianShort();
			traceDecode('slot');
			this.button=this.readByte();
			traceDecode('button');
			this.action=this.readBigEndianShort();
			traceDecode('action');
			this.mode=this.readVaruint();
			traceDecode('mode');
			this.clickedItem=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.clickedItem._buffer;
			traceDecode('clickedItem');
			return this;
		}

	}
	,

	CloseWindow: class extends Packet{

		static get ID(){return 9;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 9;
		}

		constructor(window=0){
			super();
			this.window = window;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			return this;
		}

	}
	,

	PluginMessage: class extends Packet{

		static get ID(){return 10;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 10;
		}

		constructor(channel="",data=new Types.Bytes()){
			super();
			this.channel = channel;
			this.data = data;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5afbv=this.encodeString(this.channel);
			this.writeVaruint(dhc5afbv.length);
			this.writeBytes(dhc5afbv);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5afbv=this.readVaruint();
			this.channel=this.decodeString(this.readBytes(dhc5afbv));
			traceDecode('channel');
			this.data=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('data');
			return this;
		}

	}
	,

	EditBook: class extends Packet{

		static get ID(){return 11;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 11;
		}

		constructor(newBook=new Types.Slot(),signing=false){
			super();
			this.newBook = newBook;
			this.signing = signing;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.newBook.encodeBody(true));
			this.writeBool(this.signing);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.newBook=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.newBook._buffer;
			traceDecode('newBook');
			this.signing=this.readBool();
			traceDecode('signing');
			return this;
		}

	}
	,

	QueryEntityNbt: class extends Packet{

		static get ID(){return 12;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 12;
		}

		constructor(transactionId=0,entityId=0){
			super();
			this.transactionId = transactionId;
			this.entityId = entityId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.transactionId);
			this.writeVaruint(this.entityId);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.transactionId=this.readVaruint();
			traceDecode('transactionId');
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			return this;
		}

	}
	,

	UseEntity: class extends Packet{

		static get ID(){return 13;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 13;
		}

		constructor(target=0,type=0,targetPosition={x:0,y:0,z:0},hand=0){
			super();
			this.target = target;
			this.type = type;
			this.targetPosition = targetPosition;
			this.hand = hand;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.target);
			this.writeVaruint(this.type);
			if(type==2){
				this.writeBigEndianFloat(this.targetPosition.x);
				this.writeBigEndianFloat(this.targetPosition.y);
				this.writeBigEndianFloat(this.targetPosition.z);
			}
			if(type==0||type==2){
				this.writeVaruint(this.hand);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.target=this.readVaruint();
			traceDecode('target');
			this.type=this.readVaruint();
			traceDecode('type');
			if(type==2){
				this.targetPosition={};
				this.targetPosition.x=this.readBigEndianFloat();
				this.targetPosition.y=this.readBigEndianFloat();
				this.targetPosition.z=this.readBigEndianFloat();
				traceDecode('targetPosition');
			}
			if(type==0||type==2){
				this.hand=this.readVaruint();
				traceDecode('hand');
			}
			return this;
		}

	}
	,

	KeepAlive: class extends Packet{

		static get ID(){return 14;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 14;
		}

		constructor(id=0){
			super();
			this.id = id;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.id);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.id=this.readBigEndianLong();
			traceDecode('id');
			return this;
		}

	}
	,

	Player: class extends Packet{

		static get ID(){return 15;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 15;
		}

		constructor(onGround=false){
			super();
			this.onGround = onGround;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.onGround);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	PlayerPosition: class extends Packet{

		static get ID(){return 16;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 16;
		}

		constructor(position={x:0,y:0,z:0},onGround=false){
			super();
			this.position = position;
			this.onGround = onGround;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeBool(this.onGround);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	PlayerPositionAndLook: class extends Packet{

		static get ID(){return 17;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 17;
		}

		constructor(position={x:0,y:0,z:0},yaw=.0,pitch=.0,onGround=false){
			super();
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeBigEndianFloat(this.yaw);
			this.writeBigEndianFloat(this.pitch);
			this.writeBool(this.onGround);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.yaw=this.readBigEndianFloat();
			traceDecode('yaw');
			this.pitch=this.readBigEndianFloat();
			traceDecode('pitch');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	PlayerLook: class extends Packet{

		static get ID(){return 18;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 18;
		}

		constructor(yaw=.0,pitch=.0,onGround=false){
			super();
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianFloat(this.yaw);
			this.writeBigEndianFloat(this.pitch);
			this.writeBool(this.onGround);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.yaw=this.readBigEndianFloat();
			traceDecode('yaw');
			this.pitch=this.readBigEndianFloat();
			traceDecode('pitch');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	VehicleMove: class extends Packet{

		static get ID(){return 19;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 19;
		}

		constructor(position={x:0,y:0,z:0},yaw=.0,pitch=.0){
			super();
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeBigEndianFloat(this.yaw);
			this.writeBigEndianFloat(this.pitch);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.yaw=this.readBigEndianFloat();
			traceDecode('yaw');
			this.pitch=this.readBigEndianFloat();
			traceDecode('pitch');
			return this;
		}

	}
	,

	SteerBoat: class extends Packet{

		static get ID(){return 20;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 20;
		}

		constructor(rightPaddleTurning=false,leftPaddleTurning=false){
			super();
			this.rightPaddleTurning = rightPaddleTurning;
			this.leftPaddleTurning = leftPaddleTurning;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.rightPaddleTurning);
			this.writeBool(this.leftPaddleTurning);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.rightPaddleTurning=this.readBool();
			traceDecode('rightPaddleTurning');
			this.leftPaddleTurning=this.readBool();
			traceDecode('leftPaddleTurning');
			return this;
		}

	}
	,

	PickItem: class extends Packet{

		static get ID(){return 21;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 21;
		}

		constructor(slot=0){
			super();
			this.slot = slot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.slot);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.slot=this.readVaruint();
			traceDecode('slot');
			return this;
		}

	}
	,

	CraftRecipeRequest: class extends Packet{

		static get ID(){return 22;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 22;
		}

		constructor(window=0,recipe=0,makeAll=false){
			super();
			this.window = window;
			this.recipe = recipe;
			this.makeAll = makeAll;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeVaruint(this.recipe);
			this.writeBool(this.makeAll);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.recipe=this.readVaruint();
			traceDecode('recipe');
			this.makeAll=this.readBool();
			traceDecode('makeAll');
			return this;
		}

	}
	,

	PlayerAbilities: class extends Packet{

		static get ID(){return 23;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 23;
		}

		constructor(flags=0,flyingSpeed=.0,walkingSpeed=.0){
			super();
			this.flags = flags;
			this.flyingSpeed = flyingSpeed;
			this.walkingSpeed = walkingSpeed;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.flags);
			this.writeBigEndianFloat(this.flyingSpeed);
			this.writeBigEndianFloat(this.walkingSpeed);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.flags=this.readByte();
			traceDecode('flags');
			this.flyingSpeed=this.readBigEndianFloat();
			traceDecode('flyingSpeed');
			this.walkingSpeed=this.readBigEndianFloat();
			traceDecode('walkingSpeed');
			return this;
		}

	}
	,

	PlayerDigging: class extends Packet{

		static get ID(){return 24;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 24;
		}

		constructor(status=0,position=0,face=0){
			super();
			this.status = status;
			this.position = position;
			this.face = face;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.status);
			this.writeBigEndianLong(this.position);
			this.writeByte(this.face);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.status=this.readVaruint();
			traceDecode('status');
			this.position=this.readBigEndianLong();
			traceDecode('position');
			this.face=this.readByte();
			traceDecode('face');
			return this;
		}

	}
	,

	EntityAction: class extends Packet{

		static get ID(){return 25;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 25;
		}

		constructor(entityId=0,action=0,jumpBoost=0){
			super();
			this.entityId = entityId;
			this.action = action;
			this.jumpBoost = jumpBoost;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeVaruint(this.action);
			this.writeVaruint(this.jumpBoost);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			this.action=this.readVaruint();
			traceDecode('action');
			this.jumpBoost=this.readVaruint();
			traceDecode('jumpBoost');
			return this;
		}

	}
	,

	SteerVehicle: class extends Packet{

		static get ID(){return 26;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 26;
		}

		constructor(sideways=.0,forward=.0,flags=0){
			super();
			this.sideways = sideways;
			this.forward = forward;
			this.flags = flags;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianFloat(this.sideways);
			this.writeBigEndianFloat(this.forward);
			this.writeByte(this.flags);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.sideways=this.readBigEndianFloat();
			traceDecode('sideways');
			this.forward=this.readBigEndianFloat();
			traceDecode('forward');
			this.flags=this.readByte();
			traceDecode('flags');
			return this;
		}

	}
	,

	RecipeBookData: class extends Packet{

		static get ID(){return 27;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 27;
		}

		static get DISPLAYED_RECIPE(){return 1;};
		static get CRAFTING_BOOK_STATUS(){return 2;};

		constructor(type=0){
			super();
			this.type = type;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.type);
			switch(this.type){
				case 1:
					this.writeVaruint(this.type);
					break;
				case 2:
					this.writeVaruint(this.type);
					break;
				default: break;
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readVaruint();
			traceDecode('type');
			switch(this.type){
				case 1:
					this.id=this.readBigEndianInt();
					break;
				case 2:
					this.craftingRecipeBookOpened=this.readBool();
					this.craftingRecipeFilterActive=this.readBool();
					this.smeltingRecipeBookOpened=this.readBool();
					this.smeltingRecipeFilterActive=this.readBool();
					break;
				default: break;
			}
			return this;
		}

	}
	,

	NameItem: class extends Packet{

		static get ID(){return 28;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 28;
		}

		constructor(itemName=""){
			super();
			this.itemName = itemName;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5dvtf=this.encodeString(this.itemName);
			this.writeVaruint(dhc5dvtf.length);
			this.writeBytes(dhc5dvtf);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5dvtf=this.readVaruint();
			this.itemName=this.decodeString(this.readBytes(dhc5dvtf));
			traceDecode('itemName');
			return this;
		}

	}
	,

	ResourcePackStatus: class extends Packet{

		static get ID(){return 29;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 29;
		}

		constructor(result=0){
			super();
			this.result = result;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.result);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.result=this.readVaruint();
			traceDecode('result');
			return this;
		}

	}
	,

	AdvencementTab: class extends Packet{

		static get ID(){return 30;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 30;
		}

		constructor(action=0,tab=""){
			super();
			this.action = action;
			this.tab = tab;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.action);
			if(action==0){
				var dhc5yi=this.encodeString(this.tab);
				this.writeVaruint(dhc5yi.length);
				this.writeBytes(dhc5yi);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readVaruint();
			traceDecode('action');
			if(action==0){
				var dhc5yi=this.readVaruint();
				this.tab=this.decodeString(this.readBytes(dhc5yi));
				traceDecode('tab');
			}
			return this;
		}

	}
	,

	SelectTrade: class extends Packet{

		static get ID(){return 31;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 31;
		}

		constructor(selectedSlot=0){
			super();
			this.selectedSlot = selectedSlot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.selectedSlot);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.selectedSlot=this.readVaruint();
			traceDecode('selectedSlot');
			return this;
		}

	}
	,

	SetBeaconEffect: class extends Packet{

		static get ID(){return 32;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 32;
		}

		constructor(primaryEffect=0,secondaryEffect=0){
			super();
			this.primaryEffect = primaryEffect;
			this.secondaryEffect = secondaryEffect;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.primaryEffect);
			this.writeVaruint(this.secondaryEffect);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.primaryEffect=this.readVaruint();
			traceDecode('primaryEffect');
			this.secondaryEffect=this.readVaruint();
			traceDecode('secondaryEffect');
			return this;
		}

	}
	,

	HeldItemChange: class extends Packet{

		static get ID(){return 33;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 33;
		}

		constructor(slot=0){
			super();
			this.slot = slot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianShort(this.slot);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.slot=this.readBigEndianShort();
			traceDecode('slot');
			return this;
		}

	}
	,

	UpdateCommandBlock: class extends Packet{

		static get ID(){return 34;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 34;
		}

		constructor(location=0,command="",mode=0,flags=0){
			super();
			this.location = location;
			this.command = command;
			this.mode = mode;
			this.flags = flags;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.location);
			var dhc5b1y5=this.encodeString(this.command);
			this.writeVaruint(dhc5b1y5.length);
			this.writeBytes(dhc5b1y5);
			this.writeVaruint(this.mode);
			this.writeByte(this.flags);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.location=this.readBigEndianLong();
			traceDecode('location');
			var dhc5b1y5=this.readVaruint();
			this.command=this.decodeString(this.readBytes(dhc5b1y5));
			traceDecode('command');
			this.mode=this.readVaruint();
			traceDecode('mode');
			this.flags=this.readByte();
			traceDecode('flags');
			return this;
		}

	}
	,

	UpdateCommandBlockMinecart: class extends Packet{

		static get ID(){return 35;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 35;
		}

		constructor(entityId=0,command="",trackOutput=false){
			super();
			this.entityId = entityId;
			this.command = command;
			this.trackOutput = trackOutput;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			var dhc5b1y5=this.encodeString(this.command);
			this.writeVaruint(dhc5b1y5.length);
			this.writeBytes(dhc5b1y5);
			this.writeBool(this.trackOutput);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			var dhc5b1y5=this.readVaruint();
			this.command=this.decodeString(this.readBytes(dhc5b1y5));
			traceDecode('command');
			this.trackOutput=this.readBool();
			traceDecode('trackOutput');
			return this;
		}

	}
	,

	CreativeInventoryAction: class extends Packet{

		static get ID(){return 36;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 36;
		}

		constructor(slot=0,clickedItem=new Types.Slot()){
			super();
			this.slot = slot;
			this.clickedItem = clickedItem;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianShort(this.slot);
			this.writeBytes(this.clickedItem.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.slot=this.readBigEndianShort();
			traceDecode('slot');
			this.clickedItem=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.clickedItem._buffer;
			traceDecode('clickedItem');
			return this;
		}

	}
	,

	UpdateStructureBlock: class extends Packet{

		static get ID(){return 37;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 37;
		}

		constructor(location=0,action=0,mode=0,offset={x:0,y:0,z:0},size={x:0,y:0,z:0},mirror=0,rotation=0,metadata="",integrity=.0,speed=0,flags=0){
			super();
			this.location = location;
			this.action = action;
			this.mode = mode;
			this.offset = offset;
			this.size = size;
			this.mirror = mirror;
			this.rotation = rotation;
			this.metadata = metadata;
			this.integrity = integrity;
			this.speed = speed;
			this.flags = flags;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.location);
			this.writeVaruint(this.action);
			this.writeVaruint(this.mode);
			this.writeByte(this.offset.x);
			this.writeByte(this.offset.y);
			this.writeByte(this.offset.z);
			this.writeByte(this.size.x);
			this.writeByte(this.size.y);
			this.writeByte(this.size.z);
			this.writeVaruint(this.mirror);
			this.writeVaruint(this.rotation);
			var dhc5zrzf=this.encodeString(this.metadata);
			this.writeVaruint(dhc5zrzf.length);
			this.writeBytes(dhc5zrzf);
			this.writeBigEndianFloat(this.integrity);
			this.writeVarulong(this.speed);
			this.writeByte(this.flags);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.location=this.readBigEndianLong();
			traceDecode('location');
			this.action=this.readVaruint();
			traceDecode('action');
			this.mode=this.readVaruint();
			traceDecode('mode');
			this.offset={};
			this.offset.x=this.readByte();
			this.offset.y=this.readByte();
			this.offset.z=this.readByte();
			traceDecode('offset');
			this.size={};
			this.size.x=this.readByte();
			this.size.y=this.readByte();
			this.size.z=this.readByte();
			traceDecode('size');
			this.mirror=this.readVaruint();
			traceDecode('mirror');
			this.rotation=this.readVaruint();
			traceDecode('rotation');
			var dhc5zrzf=this.readVaruint();
			this.metadata=this.decodeString(this.readBytes(dhc5zrzf));
			traceDecode('metadata');
			this.integrity=this.readBigEndianFloat();
			traceDecode('integrity');
			this.speed=this.readVarulong();
			traceDecode('speed');
			this.flags=this.readByte();
			traceDecode('flags');
			return this;
		}

	}
	,

	UpdateSign: class extends Packet{

		static get ID(){return 38;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 38;
		}

		constructor(position=0,lines=[]){
			super();
			this.position = position;
			this.lines = lines;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.position);
			for(var dhc5a5c in this.lines){
				var dhc5a5ct=this.encodeString(this.lines[dhc5a5c]);
				this.writeVaruint(dhc5a5ct.length);
				this.writeBytes(dhc5a5ct);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position=this.readBigEndianLong();
			traceDecode('position');
			var aramblzm=4;
			this.lines=[];
			for(var dhc5a5c=0;dhc5a5c<aramblzm;dhc5a5c++){
				var dhc5a5ct=this.readVaruint();
				this.lines[dhc5a5c]=this.decodeString(this.readBytes(dhc5a5ct));
			}
			traceDecode('lines');
			return this;
		}

	}
	,

	Animation: class extends Packet{

		static get ID(){return 39;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 39;
		}

		constructor(hand=0){
			super();
			this.hand = hand;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.hand);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.hand=this.readVaruint();
			traceDecode('hand');
			return this;
		}

	}
	,

	Spectate: class extends Packet{

		static get ID(){return 40;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 40;
		}

		constructor(player=new Uint8Array(16)){
			super();
			this.player = player;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.player);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.player=this.readBytes(16);
			traceDecode('player');
			return this;
		}

	}
	,

	PlayerBlockPlacement: class extends Packet{

		static get ID(){return 41;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 41;
		}

		constructor(position=0,face=0,hand=0,cursorPosition={x:0,y:0,z:0}){
			super();
			this.position = position;
			this.face = face;
			this.hand = hand;
			this.cursorPosition = cursorPosition;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.position);
			this.writeVaruint(this.face);
			this.writeVaruint(this.hand);
			this.writeBigEndianFloat(this.cursorPosition.x);
			this.writeBigEndianFloat(this.cursorPosition.y);
			this.writeBigEndianFloat(this.cursorPosition.z);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position=this.readBigEndianLong();
			traceDecode('position');
			this.face=this.readVaruint();
			traceDecode('face');
			this.hand=this.readVaruint();
			traceDecode('hand');
			this.cursorPosition={};
			this.cursorPosition.x=this.readBigEndianFloat();
			this.cursorPosition.y=this.readBigEndianFloat();
			this.cursorPosition.z=this.readBigEndianFloat();
			traceDecode('cursorPosition');
			return this;
		}

	}
	,

	UseItem: class extends Packet{

		static get ID(){return 42;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 42;
		}

		constructor(hand=0){
			super();
			this.hand = hand;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.hand);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.hand=this.readVaruint();
			traceDecode('hand');
			return this;
		}

	}

}
