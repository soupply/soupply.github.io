const Serverbound ={

	TeleportConfirm: class extends Buffer{

		static get ID(){return 0;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(teleportId=0){
			super();
			this.teleportId = teleportId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(0);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.teleportId);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	TabComplete: class extends Buffer{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(text="",command=false,hasPosition=false,block=0){
			super();
			this.text = text;
			this.command = command;
			this.hasPosition = hasPosition;
			this.block = block;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(1);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5zh=this.encodeString(this.text);
			this.writeVaruint(dhc5zh.length);
			this.writeBytes(dhc5zh);
			this.writeBool(this.command);
			this.writeBool(this.hasPosition);
			if(hasPosition==true){
				this.writeBigEndianLong(this.block);
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5zh=this.readVaruint();
			this.text=this.decodeString(this.readBytes(dhc5zh));
			traceDecode('text');
			this.command=this.readBool();
			traceDecode('command');
			this.hasPosition=this.readBool();
			traceDecode('hasPosition');
			if(hasPosition==true){
				this.block=this.readBigEndianLong();
				traceDecode('block');
			}
			return this;
		}

	}
	,

	ChatMessage: class extends Buffer{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(text=""){
			super();
			this.text = text;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(2);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	ClientStatus: class extends Buffer{

		static get ID(){return 3;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(action=0){
			super();
			this.action = action;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(3);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.action);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	ClientSettings: class extends Buffer{

		static get ID(){return 4;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(language="",viewDistance=0,chatMode=0,chatColors=false,displayedSkinParts=0,mainHand=0){
			super();
			this.language = language;
			this.viewDistance = viewDistance;
			this.chatMode = chatMode;
			this.chatColors = chatColors;
			this.displayedSkinParts = displayedSkinParts;
			this.mainHand = mainHand;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(4);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	ConfirmTransaction: class extends Buffer{

		static get ID(){return 5;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(window=0,action=0,accepted=false){
			super();
			this.window = window;
			this.action = action;
			this.accepted = accepted;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(5);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	EnchantItem: class extends Buffer{

		static get ID(){return 6;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(window=0,enchantment=0){
			super();
			this.window = window;
			this.enchantment = enchantment;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(6);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeByte(this.enchantment);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	ClickWindow: class extends Buffer{

		static get ID(){return 7;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(window=0,slot=0,button=0,action=0,mode=0,clickedItem=new Types.Slot()){
			super();
			this.window = window;
			this.slot = slot;
			this.button = button;
			this.action = action;
			this.mode = mode;
			this.clickedItem = clickedItem;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(7);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	CloseWindow: class extends Buffer{

		static get ID(){return 8;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(window=0){
			super();
			this.window = window;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(8);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	PluginMessage: class extends Buffer{

		static get ID(){return 9;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(channel="",data=new Types.Bytes()){
			super();
			this.channel = channel;
			this.data = data;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(9);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	UseEntity: class extends Buffer{

		static get ID(){return 10;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(target=0,type=0,targetPosition={x:0,y:0,z:0},hand=0){
			super();
			this.target = target;
			this.type = type;
			this.targetPosition = targetPosition;
			this.hand = hand;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(10);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	KeepAlive: class extends Buffer{

		static get ID(){return 11;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(id=0){
			super();
			this.id = id;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(11);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.id);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.id=this.readVaruint();
			traceDecode('id');
			return this;
		}

	}
	,

	Player: class extends Buffer{

		static get ID(){return 12;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(onGround=false){
			super();
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(12);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.onGround);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	PlayerPosition: class extends Buffer{

		static get ID(){return 13;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(position={x:0,y:0,z:0},onGround=false){
			super();
			this.position = position;
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(13);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	PlayerPositionAndLook: class extends Buffer{

		static get ID(){return 14;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(position={x:0,y:0,z:0},yaw=.0,pitch=.0,onGround=false){
			super();
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(14);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	PlayerLook: class extends Buffer{

		static get ID(){return 15;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(yaw=.0,pitch=.0,onGround=false){
			super();
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(15);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	VehicleMove: class extends Buffer{

		static get ID(){return 16;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(position={x:0,y:0,z:0},yaw=.0,pitch=.0){
			super();
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(16);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	SteerBoat: class extends Buffer{

		static get ID(){return 17;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(rightPaddleTurning=false,leftPaddleTurning=false){
			super();
			this.rightPaddleTurning = rightPaddleTurning;
			this.leftPaddleTurning = leftPaddleTurning;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(17);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.rightPaddleTurning);
			this.writeBool(this.leftPaddleTurning);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	CraftRecipeRequest: class extends Buffer{

		static get ID(){return 18;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(window=0,recipe=0,makeAll=false){
			super();
			this.window = window;
			this.recipe = recipe;
			this.makeAll = makeAll;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(18);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	PlayerAbilities: class extends Buffer{

		static get ID(){return 19;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(flags=0,flyingSpeed=.0,walkingSpeed=.0){
			super();
			this.flags = flags;
			this.flyingSpeed = flyingSpeed;
			this.walkingSpeed = walkingSpeed;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(19);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	PlayerDigging: class extends Buffer{

		static get ID(){return 20;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(status=0,position=0,face=0){
			super();
			this.status = status;
			this.position = position;
			this.face = face;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(20);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	EntityAction: class extends Buffer{

		static get ID(){return 21;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(entityId=0,action=0,jumpBoost=0){
			super();
			this.entityId = entityId;
			this.action = action;
			this.jumpBoost = jumpBoost;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(21);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	SteerVehicle: class extends Buffer{

		static get ID(){return 22;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(sideways=.0,forward=.0,flags=0){
			super();
			this.sideways = sideways;
			this.forward = forward;
			this.flags = flags;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(22);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	CraftingBookData: class extends Buffer{

		static get ID(){return 23;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		static get DISPLAYED_RECIPE(){return 1;};
		static get CRAFTING_BOOK_STATUS(){return 2;};

		constructor(type=0){
			super();
			this.type = type;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(23);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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
					this.bookOpened=this.readBool();
					this.filtering=this.readBool();
					break;
				default: break;
			}
			return this;
		}

	}
	,

	ResourcePackStatus: class extends Buffer{

		static get ID(){return 24;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(result=0){
			super();
			this.result = result;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(24);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.result);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	AdvencementTab: class extends Buffer{

		static get ID(){return 25;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(action=0,tab=""){
			super();
			this.action = action;
			this.tab = tab;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(25);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	HeldItemChange: class extends Buffer{

		static get ID(){return 26;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(slot=0){
			super();
			this.slot = slot;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(26);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianShort(this.slot);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	CreativeInventoryAction: class extends Buffer{

		static get ID(){return 27;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(slot=0,clickedItem=new Types.Slot()){
			super();
			this.slot = slot;
			this.clickedItem = clickedItem;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(27);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianShort(this.slot);
			this.writeBytes(this.clickedItem.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	UpdateSign: class extends Buffer{

		static get ID(){return 28;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(position=0,lines=[]){
			super();
			this.position = position;
			this.lines = lines;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(28);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	Animation: class extends Buffer{

		static get ID(){return 29;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(hand=0){
			super();
			this.hand = hand;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(29);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.hand);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	Spectate: class extends Buffer{

		static get ID(){return 30;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(player=new Uint8Array(16)){
			super();
			this.player = player;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(30);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.player);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	PlayerBlockPlacement: class extends Buffer{

		static get ID(){return 31;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(position=0,face=0,hand=0,cursorPosition={x:0,y:0,z:0}){
			super();
			this.position = position;
			this.face = face;
			this.hand = hand;
			this.cursorPosition = cursorPosition;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(31);
			return this.encodeBody(false);
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

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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

	UseItem: class extends Buffer{

		static get ID(){return 32;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(hand=0){
			super();
			this.hand = hand;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(32);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.hand);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
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