const Play ={

	Login: class extends Buffer{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(protocol=0,edition=0,body=new Uint8Array(0)){
			super();
			this.protocol = protocol;
			this.edition = edition;
			this.body = body;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(1);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.protocol);
			this.writeByte(this.edition);
			this.writeVaruint(this.body.length);
			this.writeBytes(this.body);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.protocol=this.readBigEndianInt();
			traceDecode('protocol');
			this.edition=this.readByte();
			traceDecode('edition');
			var aramy9e=this.readVaruint();
			this.body=this.readBytes(aramy9e);
			traceDecode('body');
			return this;
		}

	}
	,

	PlayStatus: class extends Buffer{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(status=0){
			super();
			this.status = status;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(2);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.status);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.status=this.readBigEndianInt();
			traceDecode('status');
			return this;
		}

	}
	,

	ServerToClientHandshake: class extends Buffer{

		static get ID(){return 3;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(serverPublicKey="",token=new Uint8Array(0)){
			super();
			this.serverPublicKey = serverPublicKey;
			this.token = token;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(3);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5zjzj=this.encodeString(this.serverPublicKey);
			this.writeVaruint(dhc5zjzj.length);
			this.writeBytes(dhc5zjzj);
			this.writeVaruint(this.token.length);
			this.writeBytes(this.token);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5zjzj=this.readVaruint();
			this.serverPublicKey=this.decodeString(this.readBytes(dhc5zjzj));
			traceDecode('serverPublicKey');
			var aramd9z4=this.readVaruint();
			this.token=this.readBytes(aramd9z4);
			traceDecode('token');
			return this;
		}

	}
	,

	ClientToServerHandshake: class extends Buffer{

		static get ID(){return 4;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(){
			super();
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(4);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	Disconnect: class extends Buffer{

		static get ID(){return 5;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(hideDisconnectionScreen=false,message=""){
			super();
			this.hideDisconnectionScreen = hideDisconnectionScreen;
			this.message = message;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(5);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.hideDisconnectionScreen);
			if(hideDisconnectionScreen==false){
				var dhc5znyd=this.encodeString(this.message);
				this.writeVaruint(dhc5znyd.length);
				this.writeBytes(dhc5znyd);
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.hideDisconnectionScreen=this.readBool();
			traceDecode('hideDisconnectionScreen');
			if(hideDisconnectionScreen==false){
				var dhc5znyd=this.readVaruint();
				this.message=this.decodeString(this.readBytes(dhc5znyd));
				traceDecode('message');
			}
			return this;
		}

	}
	,

	Batch: class extends Buffer{

		static get ID(){return 6;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(data=new Uint8Array(0)){
			super();
			this.data = data;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(6);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.data.length);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var aramzfy=this.readVaruint();
			this.data=this.readBytes(aramzfy);
			traceDecode('data');
			return this;
		}

	}
	,

	ResourcePacksInfo: class extends Buffer{

		static get ID(){return 7;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(mustAccept=false,behaviourPacks=[],resourcePacks=[]){
			super();
			this.mustAccept = mustAccept;
			this.behaviourPacks = behaviourPacks;
			this.resourcePacks = resourcePacks;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(7);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.mustAccept);
			this.writeLittleEndianShort(this.behaviourPacks.length);
			for(var dhc5zhdl in this.behaviourPacks){
				this.writeBytes(this.behaviourPacks[dhc5zhdl].encodeBody(true));
			}
			this.writeLittleEndianShort(this.resourcePacks.length);
			for(var dhc5zndj in this.resourcePacks){
				this.writeBytes(this.resourcePacks[dhc5zndj].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.mustAccept=this.readBool();
			traceDecode('mustAccept');
			var aramyvyz=this.readLittleEndianShort();
			this.behaviourPacks=[];
			for(var dhc5zhdl=0;dhc5zhdl<aramyvyz;dhc5zhdl++){
				this.behaviourPacks[dhc5zhdl]=new Types.PackWithSize().decodeBody(this._buffer);
				this._buffer=this.behaviourPacks[dhc5zhdl]._buffer;
			}
			traceDecode('behaviourPacks');
			var aramcvbv=this.readLittleEndianShort();
			this.resourcePacks=[];
			for(var dhc5zndj=0;dhc5zndj<aramcvbv;dhc5zndj++){
				this.resourcePacks[dhc5zndj]=new Types.PackWithSize().decodeBody(this._buffer);
				this._buffer=this.resourcePacks[dhc5zndj]._buffer;
			}
			traceDecode('resourcePacks');
			return this;
		}

	}
	,

	ResourcePacksStackPacket: class extends Buffer{

		static get ID(){return 8;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(mustAccept=false,behaviourPacks=[],resourcePacks=[]){
			super();
			this.mustAccept = mustAccept;
			this.behaviourPacks = behaviourPacks;
			this.resourcePacks = resourcePacks;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(8);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.mustAccept);
			this.writeLittleEndianShort(this.behaviourPacks.length);
			for(var dhc5zhdl in this.behaviourPacks){
				this.writeBytes(this.behaviourPacks[dhc5zhdl].encodeBody(true));
			}
			this.writeLittleEndianShort(this.resourcePacks.length);
			for(var dhc5zndj in this.resourcePacks){
				this.writeBytes(this.resourcePacks[dhc5zndj].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.mustAccept=this.readBool();
			traceDecode('mustAccept');
			var aramyvyz=this.readLittleEndianShort();
			this.behaviourPacks=[];
			for(var dhc5zhdl=0;dhc5zhdl<aramyvyz;dhc5zhdl++){
				this.behaviourPacks[dhc5zhdl]=new Types.Pack().decodeBody(this._buffer);
				this._buffer=this.behaviourPacks[dhc5zhdl]._buffer;
			}
			traceDecode('behaviourPacks');
			var aramcvbv=this.readLittleEndianShort();
			this.resourcePacks=[];
			for(var dhc5zndj=0;dhc5zndj<aramcvbv;dhc5zndj++){
				this.resourcePacks[dhc5zndj]=new Types.Pack().decodeBody(this._buffer);
				this._buffer=this.resourcePacks[dhc5zndj]._buffer;
			}
			traceDecode('resourcePacks');
			return this;
		}

	}
	,

	ResourcePackClientResponse: class extends Buffer{

		static get ID(){return 9;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(status=0,packIds=[]){
			super();
			this.status = status;
			this.packIds = packIds;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(9);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.status);
			this.writeLittleEndianShort(this.packIds.length);
			for(var dhc5ynsr in this.packIds){
				var dhc5ynsr=this.encodeString(this.packIds[dhc5ynsr]);
				this.writeVaruint(dhc5ynsr.length);
				this.writeBytes(dhc5ynsr);
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.status=this.readByte();
			traceDecode('status');
			var aramcfal=this.readLittleEndianShort();
			this.packIds=[];
			for(var dhc5ynsr=0;dhc5ynsr<aramcfal;dhc5ynsr++){
				var dhc5ynsr=this.readVaruint();
				this.packIds[dhc5ynsr]=this.decodeString(this.readBytes(dhc5ynsr));
			}
			traceDecode('packIds');
			return this;
		}

	}
	,

	Text: class extends Buffer{

		static get ID(){return 10;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		static get RAW(){return 0;};
		static get CHAT(){return 1;};
		static get TRANSLATION(){return 2;};
		static get POPUP(){return 3;};
		static get TIP(){return 4;};
		static get SYSTEM(){return 5;};
		static get WHISPER(){return 6;};

		constructor(type=0){
			super();
			this.type = type;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(10);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.type);
			switch(this.type){
				case 0:
					this.writeByte(this.type);
					break;
				case 1:
					this.writeByte(this.type);
					break;
				case 2:
					this.writeByte(this.type);
					break;
				case 3:
					this.writeByte(this.type);
					break;
				case 4:
					this.writeByte(this.type);
					break;
				case 5:
					this.writeByte(this.type);
					break;
				case 6:
					this.writeByte(this.type);
					break;
				default: break;
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readByte();
			traceDecode('type');
			switch(this.type){
				case 0:
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				case 1:
					var dhc5z5zi=this.readVaruint();
					this.sender=this.decodeString(this.readBytes(dhc5z5zi));
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				case 2:
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					var aramcfy1=this.readVaruint();
					this.parameters=[];
					for(var dhc5yjbv=0;dhc5yjbv<aramcfy1;dhc5yjbv++){
						var dhc5yjbv=this.readVaruint();
						this.parameters[dhc5yjbv]=this.decodeString(this.readBytes(dhc5yjbv));
					}
					break;
				case 3:
					var dhc5arz=this.readVaruint();
					this.title=this.decodeString(this.readBytes(dhc5arz));
					var dhc5djar=this.readVaruint();
					this.subtitle=this.decodeString(this.readBytes(dhc5djar));
					break;
				case 4:
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				case 5:
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				case 6:
					var dhc5z5zi=this.readVaruint();
					this.sender=this.decodeString(this.readBytes(dhc5z5zi));
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				default: break;
			}
			return this;
		}

	}
	,

	SetTime: class extends Buffer{

		static get ID(){return 11;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(time=0,daylightCycle=false){
			super();
			this.time = time;
			this.daylightCycle = daylightCycle;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(11);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.time);
			this.writeBool(this.daylightCycle);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.time=this.readVarint();
			traceDecode('time');
			this.daylightCycle=this.readBool();
			traceDecode('daylightCycle');
			return this;
		}

	}
	,

	StartGame: class extends Buffer{

		static get ID(){return 12;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,runtimeId=0,position={x:0,y:0,z:0},yaw=.0,pitch=.0,seed=0,dimension=0,generator=1,worldGamemode=0,difficulty=0,spawnPosition={x:0,y:0,z:0},loadedInCreative=false,time=0,edition=0,rainLevel=.0,lightningLevel=.0,commandsEnabled=false,textureRequired=false,levelId="",worldName=""){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
			this.seed = seed;
			this.dimension = dimension;
			this.generator = generator;
			this.worldGamemode = worldGamemode;
			this.difficulty = difficulty;
			this.spawnPosition = spawnPosition;
			this.loadedInCreative = loadedInCreative;
			this.time = time;
			this.edition = edition;
			this.rainLevel = rainLevel;
			this.lightningLevel = lightningLevel;
			this.commandsEnabled = commandsEnabled;
			this.textureRequired = textureRequired;
			this.levelId = levelId;
			this.worldName = worldName;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(12);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarlong(this.runtimeId);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeLittleEndianFloat(this.yaw);
			this.writeLittleEndianFloat(this.pitch);
			this.writeVarint(this.seed);
			this.writeVarint(this.dimension);
			this.writeVarint(this.generator);
			this.writeVarint(this.worldGamemode);
			this.writeVarint(this.difficulty);
			this.writeVarint(this.spawnPosition.x);
			this.writeVarint(this.spawnPosition.y);
			this.writeVarint(this.spawnPosition.z);
			this.writeBool(this.loadedInCreative);
			this.writeVarint(this.time);
			this.writeByte(this.edition);
			this.writeLittleEndianFloat(this.rainLevel);
			this.writeLittleEndianFloat(this.lightningLevel);
			this.writeBool(this.commandsEnabled);
			this.writeBool(this.textureRequired);
			var dhc5zzbl=this.encodeString(this.levelId);
			this.writeVaruint(dhc5zzbl.length);
			this.writeBytes(dhc5zzbl);
			var dhc5bjz5=this.encodeString(this.worldName);
			this.writeVaruint(dhc5bjz5.length);
			this.writeBytes(dhc5bjz5);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarlong();
			traceDecode('runtimeId');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.yaw=this.readLittleEndianFloat();
			traceDecode('yaw');
			this.pitch=this.readLittleEndianFloat();
			traceDecode('pitch');
			this.seed=this.readVarint();
			traceDecode('seed');
			this.dimension=this.readVarint();
			traceDecode('dimension');
			this.generator=this.readVarint();
			traceDecode('generator');
			this.worldGamemode=this.readVarint();
			traceDecode('worldGamemode');
			this.difficulty=this.readVarint();
			traceDecode('difficulty');
			this.spawnPosition={};
			this.spawnPosition.x=this.readVarint();
			this.spawnPosition.y=this.readVarint();
			this.spawnPosition.z=this.readVarint();
			traceDecode('spawnPosition');
			this.loadedInCreative=this.readBool();
			traceDecode('loadedInCreative');
			this.time=this.readVarint();
			traceDecode('time');
			this.edition=this.readByte();
			traceDecode('edition');
			this.rainLevel=this.readLittleEndianFloat();
			traceDecode('rainLevel');
			this.lightningLevel=this.readLittleEndianFloat();
			traceDecode('lightningLevel');
			this.commandsEnabled=this.readBool();
			traceDecode('commandsEnabled');
			this.textureRequired=this.readBool();
			traceDecode('textureRequired');
			var dhc5zzbl=this.readVaruint();
			this.levelId=this.decodeString(this.readBytes(dhc5zzbl));
			traceDecode('levelId');
			var dhc5bjz5=this.readVaruint();
			this.worldName=this.decodeString(this.readBytes(dhc5bjz5));
			traceDecode('worldName');
			return this;
		}

	}
	,

	AddPlayer: class extends Buffer{

		static get ID(){return 13;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(uuid=new Uint8Array(16),username="",entityId=0,runtimeId=0,position={x:0,y:0,z:0},motion={x:0,y:0,z:0},pitch=.0,headYaw=.0,yaw=.0,heldItem=new Types.Slot(),metadata=new Metadata()){
			super();
			this.uuid = uuid;
			this.username = username;
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.position = position;
			this.motion = motion;
			this.pitch = pitch;
			this.headYaw = headYaw;
			this.yaw = yaw;
			this.heldItem = heldItem;
			this.metadata = metadata;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(13);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid);
			var dhc5cvbf=this.encodeString(this.username);
			this.writeVaruint(dhc5cvbf.length);
			this.writeBytes(dhc5cvbf);
			this.writeVarlong(this.entityId);
			this.writeVarlong(this.runtimeId);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeLittleEndianFloat(this.motion.x);
			this.writeLittleEndianFloat(this.motion.y);
			this.writeLittleEndianFloat(this.motion.z);
			this.writeLittleEndianFloat(this.pitch);
			this.writeLittleEndianFloat(this.headYaw);
			this.writeLittleEndianFloat(this.yaw);
			this.writeBytes(this.heldItem.encodeBody(true));
			this.writeBytes(this.metadata.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			var dhc5cvbf=this.readVaruint();
			this.username=this.decodeString(this.readBytes(dhc5cvbf));
			traceDecode('username');
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarlong();
			traceDecode('runtimeId');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.motion={};
			this.motion.x=this.readLittleEndianFloat();
			this.motion.y=this.readLittleEndianFloat();
			this.motion.z=this.readLittleEndianFloat();
			traceDecode('motion');
			this.pitch=this.readLittleEndianFloat();
			traceDecode('pitch');
			this.headYaw=this.readLittleEndianFloat();
			traceDecode('headYaw');
			this.yaw=this.readLittleEndianFloat();
			traceDecode('yaw');
			this.heldItem=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.heldItem._buffer;
			traceDecode('heldItem');
			this.metadata=new Metadata().decodeBody(this._buffer);
			this._buffer=this.metadata._buffer;
			traceDecode('metadata');
			return this;
		}

	}
	,

	AddEntity: class extends Buffer{

		static get ID(){return 14;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,runtimeId=0,type=0,position={x:0,y:0,z:0},motion={x:0,y:0,z:0},pitch=.0,yaw=.0,attributes=[],metadata=new Metadata(),links=[]){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.type = type;
			this.position = position;
			this.motion = motion;
			this.pitch = pitch;
			this.yaw = yaw;
			this.attributes = attributes;
			this.metadata = metadata;
			this.links = links;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(14);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarlong(this.runtimeId);
			this.writeVaruint(this.type);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeLittleEndianFloat(this.motion.x);
			this.writeLittleEndianFloat(this.motion.y);
			this.writeLittleEndianFloat(this.motion.z);
			this.writeLittleEndianFloat(this.pitch);
			this.writeLittleEndianFloat(this.yaw);
			this.writeVaruint(this.attributes.length);
			for(var dhc5draj in this.attributes){
				this.writeBytes(this.attributes[dhc5draj].encodeBody(true));
			}
			this.writeBytes(this.metadata.encodeBody(true));
			this.writeVaruint(this.links.length);
			for(var dhc5a5c in this.links){
				this.writeBytes(this.links[dhc5a5c].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarlong();
			traceDecode('runtimeId');
			this.type=this.readVaruint();
			traceDecode('type');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.motion={};
			this.motion.x=this.readLittleEndianFloat();
			this.motion.y=this.readLittleEndianFloat();
			this.motion.z=this.readLittleEndianFloat();
			traceDecode('motion');
			this.pitch=this.readLittleEndianFloat();
			traceDecode('pitch');
			this.yaw=this.readLittleEndianFloat();
			traceDecode('yaw');
			var aramyrcl=this.readVaruint();
			this.attributes=[];
			for(var dhc5draj=0;dhc5draj<aramyrcl;dhc5draj++){
				this.attributes[dhc5draj]=new Types.Attribute().decodeBody(this._buffer);
				this._buffer=this.attributes[dhc5draj]._buffer;
			}
			traceDecode('attributes');
			this.metadata=new Metadata().decodeBody(this._buffer);
			this._buffer=this.metadata._buffer;
			traceDecode('metadata');
			var aramblam=this.readVaruint();
			this.links=[];
			for(var dhc5a5c=0;dhc5a5c<aramblam;dhc5a5c++){
				this.links[dhc5a5c]=new Types.Link().decodeBody(this._buffer);
				this._buffer=this.links[dhc5a5c]._buffer;
			}
			traceDecode('links');
			return this;
		}

	}
	,

	RemoveEntity: class extends Buffer{

		static get ID(){return 15;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0){
			super();
			this.entityId = entityId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(15);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			return this;
		}

	}
	,

	AddItemEntity: class extends Buffer{

		static get ID(){return 16;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,runtimeId=0,item=new Types.Slot(),position={x:0,y:0,z:0},motion={x:0,y:0,z:0}){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.item = item;
			this.position = position;
			this.motion = motion;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(16);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarlong(this.runtimeId);
			this.writeBytes(this.item.encodeBody(true));
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeLittleEndianFloat(this.motion.x);
			this.writeLittleEndianFloat(this.motion.y);
			this.writeLittleEndianFloat(this.motion.z);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarlong();
			traceDecode('runtimeId');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.motion={};
			this.motion.x=this.readLittleEndianFloat();
			this.motion.y=this.readLittleEndianFloat();
			this.motion.z=this.readLittleEndianFloat();
			traceDecode('motion');
			return this;
		}

	}
	,

	AddHangingEntity: class extends Buffer{

		static get ID(){return 17;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,runtimeId=0,position=new Types.BlockPosition(),unknown3=0){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.position = position;
			this.unknown3 = unknown3;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(17);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarlong(this.runtimeId);
			this.writeBytes(this.position.encodeBody(true));
			this.writeVarint(this.unknown3);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarlong();
			traceDecode('runtimeId');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.unknown3=this.readVarint();
			traceDecode('unknown3');
			return this;
		}

	}
	,

	TakeItemEntity: class extends Buffer{

		static get ID(){return 18;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(collected=0,collector=0){
			super();
			this.collected = collected;
			this.collector = collector;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(18);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.collected);
			this.writeVarlong(this.collector);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.collected=this.readVarlong();
			traceDecode('collected');
			this.collector=this.readVarlong();
			traceDecode('collector');
			return this;
		}

	}
	,

	MoveEntity: class extends Buffer{

		static get ID(){return 19;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,position={x:0,y:0,z:0},pitch=0,headYaw=0,yaw=0){
			super();
			this.entityId = entityId;
			this.position = position;
			this.pitch = pitch;
			this.headYaw = headYaw;
			this.yaw = yaw;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(19);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeByte(this.pitch);
			this.writeByte(this.headYaw);
			this.writeByte(this.yaw);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.pitch=this.readByte();
			traceDecode('pitch');
			this.headYaw=this.readByte();
			traceDecode('headYaw');
			this.yaw=this.readByte();
			traceDecode('yaw');
			return this;
		}

	}
	,

	MovePlayer: class extends Buffer{

		static get ID(){return 20;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(entityId=0,position={x:0,y:0,z:0},pitch=.0,headYaw=.0,yaw=.0,animation=0,onGround=false){
			super();
			this.entityId = entityId;
			this.position = position;
			this.pitch = pitch;
			this.headYaw = headYaw;
			this.yaw = yaw;
			this.animation = animation;
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(20);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeLittleEndianFloat(this.pitch);
			this.writeLittleEndianFloat(this.headYaw);
			this.writeLittleEndianFloat(this.yaw);
			this.writeByte(this.animation);
			this.writeBool(this.onGround);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.pitch=this.readLittleEndianFloat();
			traceDecode('pitch');
			this.headYaw=this.readLittleEndianFloat();
			traceDecode('headYaw');
			this.yaw=this.readLittleEndianFloat();
			traceDecode('yaw');
			this.animation=this.readByte();
			traceDecode('animation');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	RiderJump: class extends Buffer{

		static get ID(){return 21;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(rider=0){
			super();
			this.rider = rider;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(21);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.rider);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.rider=this.readVarlong();
			traceDecode('rider');
			return this;
		}

	}
	,

	RemoveBlock: class extends Buffer{

		static get ID(){return 22;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(position=new Types.BlockPosition()){
			super();
			this.position = position;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(22);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			return this;
		}

	}
	,

	UpdateBlock: class extends Buffer{

		static get ID(){return 23;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=new Types.BlockPosition(),block=0,flagsAndMeta=0){
			super();
			this.position = position;
			this.block = block;
			this.flagsAndMeta = flagsAndMeta;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(23);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			this.writeVaruint(this.block);
			this.writeVaruint(this.flagsAndMeta);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.block=this.readVaruint();
			traceDecode('block');
			this.flagsAndMeta=this.readVaruint();
			traceDecode('flagsAndMeta');
			return this;
		}

	}
	,

	AddPainting: class extends Buffer{

		static get ID(){return 24;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,runtimeId=0,position=new Types.BlockPosition(),direction=0,title=""){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.position = position;
			this.direction = direction;
			this.title = title;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(24);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarlong(this.runtimeId);
			this.writeBytes(this.position.encodeBody(true));
			this.writeVarint(this.direction);
			var dhc5arz=this.encodeString(this.title);
			this.writeVaruint(dhc5arz.length);
			this.writeBytes(dhc5arz);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarlong();
			traceDecode('runtimeId');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.direction=this.readVarint();
			traceDecode('direction');
			var dhc5arz=this.readVaruint();
			this.title=this.decodeString(this.readBytes(dhc5arz));
			traceDecode('title');
			return this;
		}

	}
	,

	Explode: class extends Buffer{

		static get ID(){return 25;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,y:0,z:0},radius=.0,destroyedBlocks=[]){
			super();
			this.position = position;
			this.radius = radius;
			this.destroyedBlocks = destroyedBlocks;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(25);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeLittleEndianFloat(this.radius);
			this.writeVaruint(this.destroyedBlocks.length);
			for(var dhc5znc9 in this.destroyedBlocks){
				this.writeBytes(this.destroyedBlocks[dhc5znc9].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.radius=this.readLittleEndianFloat();
			traceDecode('radius');
			var aramzvdj=this.readVaruint();
			this.destroyedBlocks=[];
			for(var dhc5znc9=0;dhc5znc9<aramzvdj;dhc5znc9++){
				this.destroyedBlocks[dhc5znc9]=new Types.BlockPosition().decodeBody(this._buffer);
				this._buffer=this.destroyedBlocks[dhc5znc9]._buffer;
			}
			traceDecode('destroyedBlocks');
			return this;
		}

	}
	,

	LevelSoundEvent: class extends Buffer{

		static get ID(){return 26;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(sound=0,position={x:0,y:0,z:0},volume=0,pitch=0,unknown4=false){
			super();
			this.sound = sound;
			this.position = position;
			this.volume = volume;
			this.pitch = pitch;
			this.unknown4 = unknown4;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(26);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.sound);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeVaruint(this.volume);
			this.writeVarint(this.pitch);
			this.writeBool(this.unknown4);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.sound=this.readByte();
			traceDecode('sound');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.volume=this.readVaruint();
			traceDecode('volume');
			this.pitch=this.readVarint();
			traceDecode('pitch');
			this.unknown4=this.readBool();
			traceDecode('unknown4');
			return this;
		}

	}
	,

	LevelEvent: class extends Buffer{

		static get ID(){return 27;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(eventId=0,position={x:0,y:0,z:0},data=0){
			super();
			this.eventId = eventId;
			this.position = position;
			this.data = data;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(27);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.eventId);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeVarint(this.data);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.eventId=this.readVarint();
			traceDecode('eventId');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.data=this.readVarint();
			traceDecode('data');
			return this;
		}

	}
	,

	BlockEvent: class extends Buffer{

		static get ID(){return 28;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=new Types.BlockPosition(),data=new Int32Array(2)){
			super();
			this.position = position;
			this.data = data;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(28);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			for(var dhc5yr in this.data){
				this.writeVarint(this.data[dhc5yr]);
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			var aramzfy=2;
			this.data=[];
			for(var dhc5yr=0;dhc5yr<aramzfy;dhc5yr++){
				this.data[dhc5yr]=this.readVarint();
			}
			traceDecode('data');
			return this;
		}

	}
	,

	EntityEvent: class extends Buffer{

		static get ID(){return 29;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(entityId=0,eventId=0,unknown2=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
			this.unknown2 = unknown2;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(29);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeByte(this.eventId);
			this.writeVarint(this.unknown2);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.eventId=this.readByte();
			traceDecode('eventId');
			this.unknown2=this.readVarint();
			traceDecode('unknown2');
			return this;
		}

	}
	,

	MobEffect: class extends Buffer{

		static get ID(){return 30;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,eventId=0,effect=0,amplifier=0,particles=false,duration=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
			this.effect = effect;
			this.amplifier = amplifier;
			this.particles = particles;
			this.duration = duration;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(30);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeByte(this.eventId);
			this.writeVarint(this.effect);
			this.writeVarint(this.amplifier);
			this.writeBool(this.particles);
			this.writeVarint(this.duration);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.eventId=this.readByte();
			traceDecode('eventId');
			this.effect=this.readVarint();
			traceDecode('effect');
			this.amplifier=this.readVarint();
			traceDecode('amplifier');
			this.particles=this.readBool();
			traceDecode('particles');
			this.duration=this.readVarint();
			traceDecode('duration');
			return this;
		}

	}
	,

	UpdateAttributes: class extends Buffer{

		static get ID(){return 31;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,attributes=[]){
			super();
			this.entityId = entityId;
			this.attributes = attributes;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(31);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVaruint(this.attributes.length);
			for(var dhc5draj in this.attributes){
				this.writeBytes(this.attributes[dhc5draj].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			var aramyrcl=this.readVaruint();
			this.attributes=[];
			for(var dhc5draj=0;dhc5draj<aramyrcl;dhc5draj++){
				this.attributes[dhc5draj]=new Types.Attribute().decodeBody(this._buffer);
				this._buffer=this.attributes[dhc5draj]._buffer;
			}
			traceDecode('attributes');
			return this;
		}

	}
	,

	MobEquipment: class extends Buffer{

		static get ID(){return 32;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(entityId=0,item=new Types.Slot(),inventorySlot=0,hotbarSlot=0,unknown4=0){
			super();
			this.entityId = entityId;
			this.item = item;
			this.inventorySlot = inventorySlot;
			this.hotbarSlot = hotbarSlot;
			this.unknown4 = unknown4;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(32);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeBytes(this.item.encodeBody(true));
			this.writeByte(this.inventorySlot);
			this.writeByte(this.hotbarSlot);
			this.writeByte(this.unknown4);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			this.inventorySlot=this.readByte();
			traceDecode('inventorySlot');
			this.hotbarSlot=this.readByte();
			traceDecode('hotbarSlot');
			this.unknown4=this.readByte();
			traceDecode('unknown4');
			return this;
		}

	}
	,

	MobArmorEquipment: class extends Buffer{

		static get ID(){return 33;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(entityId=0,armor=[]){
			super();
			this.entityId = entityId;
			this.armor = armor;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(33);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			for(var dhc5c1c in this.armor){
				this.writeBytes(this.armor[dhc5c1c].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			var aramyjbi=4;
			this.armor=[];
			for(var dhc5c1c=0;dhc5c1c<aramyjbi;dhc5c1c++){
				this.armor[dhc5c1c]=new Types.Slot().decodeBody(this._buffer);
				this._buffer=this.armor[dhc5c1c]._buffer;
			}
			traceDecode('armor');
			return this;
		}

	}
	,

	Interact: class extends Buffer{

		static get ID(){return 34;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(action=0,target=0){
			super();
			this.action = action;
			this.target = target;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(34);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.action);
			this.writeVarlong(this.target);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readByte();
			traceDecode('action');
			this.target=this.readVarlong();
			traceDecode('target');
			return this;
		}

	}
	,

	UseItem: class extends Buffer{

		static get ID(){return 35;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(blockPosition=new Types.BlockPosition(),hotbarSlot=0,face=0,facePosition={x:0,y:0,z:0},position={x:0,y:0,z:0},slot=0,item=new Types.Slot()){
			super();
			this.blockPosition = blockPosition;
			this.hotbarSlot = hotbarSlot;
			this.face = face;
			this.facePosition = facePosition;
			this.position = position;
			this.slot = slot;
			this.item = item;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(35);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.blockPosition.encodeBody(true));
			this.writeVaruint(this.hotbarSlot);
			this.writeVarint(this.face);
			this.writeLittleEndianFloat(this.facePosition.x);
			this.writeLittleEndianFloat(this.facePosition.y);
			this.writeLittleEndianFloat(this.facePosition.z);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeVarint(this.slot);
			this.writeBytes(this.item.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.blockPosition=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.blockPosition._buffer;
			traceDecode('blockPosition');
			this.hotbarSlot=this.readVaruint();
			traceDecode('hotbarSlot');
			this.face=this.readVarint();
			traceDecode('face');
			this.facePosition={};
			this.facePosition.x=this.readLittleEndianFloat();
			this.facePosition.y=this.readLittleEndianFloat();
			this.facePosition.z=this.readLittleEndianFloat();
			traceDecode('facePosition');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.slot=this.readVarint();
			traceDecode('slot');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	PlayerAction: class extends Buffer{

		static get ID(){return 36;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(entityId=0,action=0,position=new Types.BlockPosition(),face=0){
			super();
			this.entityId = entityId;
			this.action = action;
			this.position = position;
			this.face = face;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(36);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarint(this.action);
			this.writeBytes(this.position.encodeBody(true));
			this.writeVarint(this.face);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.action=this.readVarint();
			traceDecode('action');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.face=this.readVarint();
			traceDecode('face');
			return this;
		}

	}
	,

	PlayerFall: class extends Buffer{

		static get ID(){return 37;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(distance=.0){
			super();
			this.distance = distance;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(37);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianFloat(this.distance);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.distance=this.readLittleEndianFloat();
			traceDecode('distance');
			return this;
		}

	}
	,

	HurtArmor: class extends Buffer{

		static get ID(){return 38;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(unknown0=0){
			super();
			this.unknown0 = unknown0;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(38);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.unknown0);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.unknown0=this.readVarint();
			traceDecode('unknown0');
			return this;
		}

	}
	,

	SetEntityData: class extends Buffer{

		static get ID(){return 39;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,metadata=new Metadata()){
			super();
			this.entityId = entityId;
			this.metadata = metadata;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(39);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeBytes(this.metadata.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.metadata=new Metadata().decodeBody(this._buffer);
			this._buffer=this.metadata._buffer;
			traceDecode('metadata');
			return this;
		}

	}
	,

	SetEntityMotion: class extends Buffer{

		static get ID(){return 40;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,motion={x:0,y:0,z:0}){
			super();
			this.entityId = entityId;
			this.motion = motion;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(40);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeLittleEndianFloat(this.motion.x);
			this.writeLittleEndianFloat(this.motion.y);
			this.writeLittleEndianFloat(this.motion.z);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.motion={};
			this.motion.x=this.readLittleEndianFloat();
			this.motion.y=this.readLittleEndianFloat();
			this.motion.z=this.readLittleEndianFloat();
			traceDecode('motion');
			return this;
		}

	}
	,

	SetEntityLink: class extends Buffer{

		static get ID(){return 41;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(from=0,to=0,action=0){
			super();
			this.from = from;
			this.to = to;
			this.action = action;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(41);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.from);
			this.writeVarlong(this.to);
			this.writeByte(this.action);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.from=this.readVarlong();
			traceDecode('from');
			this.to=this.readVarlong();
			traceDecode('to');
			this.action=this.readByte();
			traceDecode('action');
			return this;
		}

	}
	,

	SetHealth: class extends Buffer{

		static get ID(){return 42;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(health=0){
			super();
			this.health = health;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(42);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.health);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.health=this.readVarint();
			traceDecode('health');
			return this;
		}

	}
	,

	SetSpawnPosition: class extends Buffer{

		static get ID(){return 43;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(unknown0=0,position=new Types.BlockPosition(),unknown2=false){
			super();
			this.unknown0 = unknown0;
			this.position = position;
			this.unknown2 = unknown2;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(43);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.unknown0);
			this.writeBytes(this.position.encodeBody(true));
			this.writeBool(this.unknown2);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.unknown0=this.readVarint();
			traceDecode('unknown0');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.unknown2=this.readBool();
			traceDecode('unknown2');
			return this;
		}

	}
	,

	Animate: class extends Buffer{

		static get ID(){return 44;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(action=0,entityId=0){
			super();
			this.action = action;
			this.entityId = entityId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(44);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.action);
			this.writeVarlong(this.entityId);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readVarint();
			traceDecode('action');
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			return this;
		}

	}
	,

	Respawn: class extends Buffer{

		static get ID(){return 45;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,y:0,z:0}){
			super();
			this.position = position;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(45);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			return this;
		}

	}
	,

	DropItem: class extends Buffer{

		static get ID(){return 46;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(action=0,item=new Types.Slot()){
			super();
			this.action = action;
			this.item = item;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(46);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.action);
			this.writeBytes(this.item.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readByte();
			traceDecode('action');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	InventoryAction: class extends Buffer{

		static get ID(){return 47;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(action=0,item=new Types.Slot()){
			super();
			this.action = action;
			this.item = item;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(47);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.action);
			this.writeBytes(this.item.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readVarint();
			traceDecode('action');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	ContainerOpen: class extends Buffer{

		static get ID(){return 48;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0,type=0,slotCount=0,position=new Types.BlockPosition(),entityId=0){
			super();
			this.window = window;
			this.type = type;
			this.slotCount = slotCount;
			this.position = position;
			this.entityId = entityId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(48);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeByte(this.type);
			this.writeVarint(this.slotCount);
			this.writeBytes(this.position.encodeBody(true));
			this.writeVarlong(this.entityId);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.type=this.readByte();
			traceDecode('type');
			this.slotCount=this.readVarint();
			traceDecode('slotCount');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			return this;
		}

	}
	,

	ContainerClose: class extends Buffer{

		static get ID(){return 49;};

		static get CLIENTBOUND(){return true;};
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
			this.writeByte(49);
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
			var _id=this.readByte();
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

	ContainerSetSlot: class extends Buffer{

		static get ID(){return 50;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(window=0,slot=0,hotbarSlot=0,item=new Types.Slot(),unknown4=0){
			super();
			this.window = window;
			this.slot = slot;
			this.hotbarSlot = hotbarSlot;
			this.item = item;
			this.unknown4 = unknown4;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(50);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeVarint(this.slot);
			this.writeVarint(this.hotbarSlot);
			this.writeBytes(this.item.encodeBody(true));
			this.writeByte(this.unknown4);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.slot=this.readVarint();
			traceDecode('slot');
			this.hotbarSlot=this.readVarint();
			traceDecode('hotbarSlot');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			this.unknown4=this.readByte();
			traceDecode('unknown4');
			return this;
		}

	}
	,

	ContainerSetData: class extends Buffer{

		static get ID(){return 51;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0,property=0,value=0){
			super();
			this.window = window;
			this.property = property;
			this.value = value;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(51);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeVarint(this.property);
			this.writeVarint(this.value);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.property=this.readVarint();
			traceDecode('property');
			this.value=this.readVarint();
			traceDecode('value');
			return this;
		}

	}
	,

	ContainerSetContent: class extends Buffer{

		static get ID(){return 52;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0,slots=[],hotbar=new Int32Array(0)){
			super();
			this.window = window;
			this.slots = slots;
			this.hotbar = hotbar;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(52);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeVaruint(this.slots.length);
			for(var dhc5b9c in this.slots){
				this.writeBytes(this.slots[dhc5b9c].encodeBody(true));
			}
			this.writeVaruint(this.hotbar.length);
			for(var dhc5bryi in this.hotbar){
				this.writeVarint(this.hotbar[dhc5bryi]);
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			var aramcxdm=this.readVaruint();
			this.slots=[];
			for(var dhc5b9c=0;dhc5b9c<aramcxdm;dhc5b9c++){
				this.slots[dhc5b9c]=new Types.Slot().decodeBody(this._buffer);
				this._buffer=this.slots[dhc5b9c]._buffer;
			}
			traceDecode('slots');
			var arama9yf=this.readVaruint();
			this.hotbar=[];
			for(var dhc5bryi=0;dhc5bryi<arama9yf;dhc5bryi++){
				this.hotbar[dhc5bryi]=this.readVarint();
			}
			traceDecode('hotbar');
			return this;
		}

	}
	,

	CraftingData: class extends Buffer{

		static get ID(){return 53;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(recipes=[]){
			super();
			this.recipes = recipes;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(53);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.recipes.length);
			for(var dhc5zncv in this.recipes){
				this.writeBytes(this.recipes[dhc5zncv].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var aramcvab=this.readVaruint();
			this.recipes=[];
			for(var dhc5zncv=0;dhc5zncv<aramcvab;dhc5zncv++){
				this.recipes[dhc5zncv]=new Types.Recipe().decodeBody(this._buffer);
				this._buffer=this.recipes[dhc5zncv]._buffer;
			}
			traceDecode('recipes');
			return this;
		}

	}
	,

	CraftingEvent: class extends Buffer{

		static get ID(){return 54;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(window=0,type=0,uuid=new Uint8Array(16),input=[],output=[]){
			super();
			this.window = window;
			this.type = type;
			this.uuid = uuid;
			this.input = input;
			this.output = output;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(54);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeVarint(this.type);
			this.writeBytes(this.uuid);
			this.writeVaruint(this.input.length);
			for(var dhc5bbd in this.input){
				this.writeBytes(this.input[dhc5bbd].encodeBody(true));
			}
			this.writeVaruint(this.output.length);
			for(var dhc5drdq in this.output){
				this.writeBytes(this.output[dhc5drdq].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.type=this.readVarint();
			traceDecode('type');
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			var arama5dq=this.readVaruint();
			this.input=[];
			for(var dhc5bbd=0;dhc5bbd<arama5dq;dhc5bbd++){
				this.input[dhc5bbd]=new Types.Slot().decodeBody(this._buffer);
				this._buffer=this.input[dhc5bbd]._buffer;
			}
			traceDecode('input');
			var arambvcv=this.readVaruint();
			this.output=[];
			for(var dhc5drdq=0;dhc5drdq<arambvcv;dhc5drdq++){
				this.output[dhc5drdq]=new Types.Slot().decodeBody(this._buffer);
				this._buffer=this.output[dhc5drdq]._buffer;
			}
			traceDecode('output');
			return this;
		}

	}
	,

	AdventureSettings: class extends Buffer{

		static get ID(){return 55;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(flags=0,permissions=0){
			super();
			this.flags = flags;
			this.permissions = permissions;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(55);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.flags);
			this.writeVaruint(this.permissions);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.flags=this.readVaruint();
			traceDecode('flags');
			this.permissions=this.readVaruint();
			traceDecode('permissions');
			return this;
		}

	}
	,

	BlockEntityData: class extends Buffer{

		static get ID(){return 56;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(position=new Types.BlockPosition(),nbt=new Types.Bytes()){
			super();
			this.position = position;
			this.nbt = nbt;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(56);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			this.writeBytes(this.nbt);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.nbt=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('nbt');
			return this;
		}

	}
	,

	PlayerInput: class extends Buffer{

		static get ID(){return 57;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(motion={x:0,y:0,z:0},flags=0,unknown2=false){
			super();
			this.motion = motion;
			this.flags = flags;
			this.unknown2 = unknown2;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(57);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianFloat(this.motion.x);
			this.writeLittleEndianFloat(this.motion.y);
			this.writeLittleEndianFloat(this.motion.z);
			this.writeByte(this.flags);
			this.writeBool(this.unknown2);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.motion={};
			this.motion.x=this.readLittleEndianFloat();
			this.motion.y=this.readLittleEndianFloat();
			this.motion.z=this.readLittleEndianFloat();
			traceDecode('motion');
			this.flags=this.readByte();
			traceDecode('flags');
			this.unknown2=this.readBool();
			traceDecode('unknown2');
			return this;
		}

	}
	,

	FullChunkData: class extends Buffer{

		static get ID(){return 58;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,z:0},data=new Types.ChunkData()){
			super();
			this.position = position;
			this.data = data;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(58);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.position.x);
			this.writeVarint(this.position.z);
			this.writeBytes(this.data.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readVarint();
			this.position.z=this.readVarint();
			traceDecode('position');
			this.data=new Types.ChunkData().decodeBody(this._buffer);
			this._buffer=this.data._buffer;
			traceDecode('data');
			return this;
		}

	}
	,

	SetCommandsEnabled: class extends Buffer{

		static get ID(){return 59;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(enabled=false){
			super();
			this.enabled = enabled;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(59);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.enabled);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.enabled=this.readBool();
			traceDecode('enabled');
			return this;
		}

	}
	,

	SetDifficulty: class extends Buffer{

		static get ID(){return 60;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(difficulty=0){
			super();
			this.difficulty = difficulty;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(60);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.difficulty);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.difficulty=this.readVaruint();
			traceDecode('difficulty');
			return this;
		}

	}
	,

	ChangeDimension: class extends Buffer{

		static get ID(){return 61;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(dimension=0,position={x:0,y:0,z:0},unknown2=false){
			super();
			this.dimension = dimension;
			this.position = position;
			this.unknown2 = unknown2;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(61);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.dimension);
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeBool(this.unknown2);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.dimension=this.readVarint();
			traceDecode('dimension');
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.unknown2=this.readBool();
			traceDecode('unknown2');
			return this;
		}

	}
	,

	SetPlayerGameType: class extends Buffer{

		static get ID(){return 62;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(gamemode=0){
			super();
			this.gamemode = gamemode;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(62);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.gamemode);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.gamemode=this.readVarint();
			traceDecode('gamemode');
			return this;
		}

	}
	,

	PlayerList: class extends Buffer{

		static get ID(){return 63;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		static get ADD(){return 0;};
		static get REMOVE(){return 1;};

		constructor(action=0){
			super();
			this.action = action;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(63);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.action);
			switch(this.action){
				case 0:
					this.writeByte(this.action);
					break;
				case 1:
					this.writeByte(this.action);
					break;
				default: break;
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readByte();
			traceDecode('action');
			switch(this.action){
				case 0:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						this.players[dhc5bfzj]=new Types.PlayerList().decodeBody(this._buffer);
						this._buffer=this.players[dhc5bfzj]._buffer;
					}
					break;
				case 1:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						this.players[dhc5bfzj]=this.readBytes(16);
					}
					break;
				default: break;
			}
			return this;
		}

	}
	,

	TelemetryEvent: class extends Buffer{

		static get ID(){return 64;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,eventId=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(64);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarint(this.eventId);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.eventId=this.readVarint();
			traceDecode('eventId');
			return this;
		}

	}
	,

	SpawnExperienceOrb: class extends Buffer{

		static get ID(){return 65;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,y:0,z:0},count=0){
			super();
			this.position = position;
			this.count = count;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(65);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeVarint(this.count);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readLittleEndianFloat();
			this.position.y=this.readLittleEndianFloat();
			this.position.z=this.readLittleEndianFloat();
			traceDecode('position');
			this.count=this.readVarint();
			traceDecode('count');
			return this;
		}

	}
	,

	ClientboundMapItemData: class extends Buffer{

		static get ID(){return 66;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(mapId=0,update=0,scale=0,size={x:0,z:0},offset={x:0,z:0},data=new Types.Bytes(),decorations=[]){
			super();
			this.mapId = mapId;
			this.update = update;
			this.scale = scale;
			this.size = size;
			this.offset = offset;
			this.data = data;
			this.decorations = decorations;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(66);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.mapId);
			this.writeVaruint(this.update);
			if(update==2||update==4){
				this.writeByte(this.scale);
			}
			if(update==2){
				this.writeVarint(this.size.x);
				this.writeVarint(this.size.z);
			}
			if(update==2){
				this.writeVarint(this.offset.x);
				this.writeVarint(this.offset.z);
			}
			if(update==2){
				this.writeBytes(this.data);
			}
			if(update==4){
				this.writeVaruint(this.decorations.length);
				for(var dhc5zncf in this.decorations){
					this.writeBytes(this.decorations[dhc5zncf].encodeBody(true));
				}
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.mapId=this.readVarlong();
			traceDecode('mapId');
			this.update=this.readVaruint();
			traceDecode('update');
			if(update==2||update==4){
				this.scale=this.readByte();
				traceDecode('scale');
			}
			if(update==2){
				this.size={};
				this.size.x=this.readVarint();
				this.size.z=this.readVarint();
				traceDecode('size');
			}
			if(update==2){
				this.offset={};
				this.offset.x=this.readVarint();
				this.offset.z=this.readVarint();
				traceDecode('offset');
			}
			if(update==2){
				this.data=Array.from(this._buffer);
				this._buffer=[];
				traceDecode('data');
			}
			if(update==4){
				var aramzvbj=this.readVaruint();
				this.decorations=[];
				for(var dhc5zncf=0;dhc5zncf<aramzvbj;dhc5zncf++){
					this.decorations[dhc5zncf]=new Types.Decoration().decodeBody(this._buffer);
					this._buffer=this.decorations[dhc5zncf]._buffer;
				}
				traceDecode('decorations');
			}
			return this;
		}

	}
	,

	MapInfoRequest: class extends Buffer{

		static get ID(){return 67;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(mapId=0){
			super();
			this.mapId = mapId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(67);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.mapId);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.mapId=this.readVarlong();
			traceDecode('mapId');
			return this;
		}

	}
	,

	RequestChunkRadius: class extends Buffer{

		static get ID(){return 68;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(radius=0){
			super();
			this.radius = radius;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(68);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.radius);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.radius=this.readVarint();
			traceDecode('radius');
			return this;
		}

	}
	,

	ChunkRadiusUpdated: class extends Buffer{

		static get ID(){return 69;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(radius=0){
			super();
			this.radius = radius;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(69);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.radius);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.radius=this.readVarint();
			traceDecode('radius');
			return this;
		}

	}
	,

	ItemFrameDropItem: class extends Buffer{

		static get ID(){return 70;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=new Types.BlockPosition(),item=new Types.Slot()){
			super();
			this.position = position;
			this.item = item;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(70);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			this.writeBytes(this.item.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	ReplaceSelectedItem: class extends Buffer{

		static get ID(){return 71;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(item=new Types.Slot()){
			super();
			this.item = item;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(71);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.item.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	GameRulesChanged: class extends Buffer{

		static get ID(){return 72;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(rules=[]){
			super();
			this.rules = rules;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(72);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.rules.length);
			for(var dhc5dxc in this.rules){
				this.writeBytes(this.rules[dhc5dxc].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var aramcvzm=this.readBigEndianInt();
			this.rules=[];
			for(var dhc5dxc=0;dhc5dxc<aramcvzm;dhc5dxc++){
				this.rules[dhc5dxc]=new Types.Rule().decodeBody(this._buffer);
				this._buffer=this.rules[dhc5dxc]._buffer;
			}
			traceDecode('rules');
			return this;
		}

	}
	,

	Camera: class extends Buffer{

		static get ID(){return 73;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(unknown0=0,unknown1=0){
			super();
			this.unknown0 = unknown0;
			this.unknown1 = unknown1;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(73);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.unknown0);
			this.writeVarlong(this.unknown1);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.unknown0=this.readVarlong();
			traceDecode('unknown0');
			this.unknown1=this.readVarlong();
			traceDecode('unknown1');
			return this;
		}

	}
	,

	AddItem: class extends Buffer{

		static get ID(){return 74;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(item=new Types.Slot()){
			super();
			this.item = item;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(74);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.item.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	BossEvent: class extends Buffer{

		static get ID(){return 75;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,eventId=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(75);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVaruint(this.eventId);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.eventId=this.readVaruint();
			traceDecode('eventId');
			return this;
		}

	}
	,

	ShowCredits: class extends Buffer{

		static get ID(){return 76;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		constructor(entityId=0,status=0){
			super();
			this.entityId = entityId;
			this.status = status;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(76);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarint(this.status);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.status=this.readVarint();
			traceDecode('status');
			return this;
		}

	}
	,

	AvailableCommands: class extends Buffer{

		static get ID(){return 77;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(commands="",unknown1=""){
			super();
			this.commands = commands;
			this.unknown1 = unknown1;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(77);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5b1y5=this.encodeString(this.commands);
			this.writeVaruint(dhc5b1y5.length);
			this.writeBytes(dhc5b1y5);
			var dhc5btbd=this.encodeString(this.unknown1);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5b1y5=this.readVaruint();
			this.commands=this.decodeString(this.readBytes(dhc5b1y5));
			traceDecode('commands');
			var dhc5btbd=this.readVaruint();
			this.unknown1=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown1');
			return this;
		}

	}
	,

	CommandStep: class extends Buffer{

		static get ID(){return 78;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(command="",overload="",unknown2=0,currentStep=0,done=false,clientId=0,input="",output=""){
			super();
			this.command = command;
			this.overload = overload;
			this.unknown2 = unknown2;
			this.currentStep = currentStep;
			this.done = done;
			this.clientId = clientId;
			this.input = input;
			this.output = output;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(78);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5b1y5=this.encodeString(this.command);
			this.writeVaruint(dhc5b1y5.length);
			this.writeBytes(dhc5b1y5);
			var dhc5dvb9=this.encodeString(this.overload);
			this.writeVaruint(dhc5dvb9.length);
			this.writeBytes(dhc5dvb9);
			this.writeVaruint(this.unknown2);
			this.writeVaruint(this.currentStep);
			this.writeBool(this.done);
			this.writeVarulong(this.clientId);
			var dhc5bbd=this.encodeString(this.input);
			this.writeVaruint(dhc5bbd.length);
			this.writeBytes(dhc5bbd);
			var dhc5drdq=this.encodeString(this.output);
			this.writeVaruint(dhc5drdq.length);
			this.writeBytes(dhc5drdq);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5b1y5=this.readVaruint();
			this.command=this.decodeString(this.readBytes(dhc5b1y5));
			traceDecode('command');
			var dhc5dvb9=this.readVaruint();
			this.overload=this.decodeString(this.readBytes(dhc5dvb9));
			traceDecode('overload');
			this.unknown2=this.readVaruint();
			traceDecode('unknown2');
			this.currentStep=this.readVaruint();
			traceDecode('currentStep');
			this.done=this.readBool();
			traceDecode('done');
			this.clientId=this.readVarulong();
			traceDecode('clientId');
			var dhc5bbd=this.readVaruint();
			this.input=this.decodeString(this.readBytes(dhc5bbd));
			traceDecode('input');
			var dhc5drdq=this.readVaruint();
			this.output=this.decodeString(this.readBytes(dhc5drdq));
			traceDecode('output');
			return this;
		}

	}
	,

	UpdateTrade: class extends Buffer{

		static get ID(){return 79;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(unknown0=0,unknown1=0,unknown2=0,unknown3=0,unknown4=false,trader=0,player=0,unknown7="",offers=new Types.Bytes()){
			super();
			this.unknown0 = unknown0;
			this.unknown1 = unknown1;
			this.unknown2 = unknown2;
			this.unknown3 = unknown3;
			this.unknown4 = unknown4;
			this.trader = trader;
			this.player = player;
			this.unknown7 = unknown7;
			this.offers = offers;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(79);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.unknown0);
			this.writeByte(this.unknown1);
			this.writeVarint(this.unknown2);
			this.writeVarint(this.unknown3);
			this.writeBool(this.unknown4);
			this.writeVarlong(this.trader);
			this.writeVarlong(this.player);
			var dhc5btbd=this.encodeString(this.unknown7);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			this.writeBytes(this.offers);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.unknown0=this.readByte();
			traceDecode('unknown0');
			this.unknown1=this.readByte();
			traceDecode('unknown1');
			this.unknown2=this.readVarint();
			traceDecode('unknown2');
			this.unknown3=this.readVarint();
			traceDecode('unknown3');
			this.unknown4=this.readBool();
			traceDecode('unknown4');
			this.trader=this.readVarlong();
			traceDecode('trader');
			this.player=this.readVarlong();
			traceDecode('player');
			var dhc5btbd=this.readVaruint();
			this.unknown7=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown7');
			this.offers=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('offers');
			return this;
		}

	}
	,

	ResourcePackDataInfo: class extends Buffer{

		static get ID(){return 80;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(id="",maxChunkSize=0,chunkCount=0,compressedPackSize=0,sha256=""){
			super();
			this.id = id;
			this.maxChunkSize = maxChunkSize;
			this.chunkCount = chunkCount;
			this.compressedPackSize = compressedPackSize;
			this.sha256 = sha256;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(80);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5z=this.encodeString(this.id);
			this.writeVaruint(dhc5z.length);
			this.writeBytes(dhc5z);
			this.writeLittleEndianInt(this.maxChunkSize);
			this.writeLittleEndianInt(this.chunkCount);
			this.writeLittleEndianLong(this.compressedPackSize);
			var dhc5aeny=this.encodeString(this.sha256);
			this.writeVaruint(dhc5aeny.length);
			this.writeBytes(dhc5aeny);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5z=this.readVaruint();
			this.id=this.decodeString(this.readBytes(dhc5z));
			traceDecode('id');
			this.maxChunkSize=this.readLittleEndianInt();
			traceDecode('maxChunkSize');
			this.chunkCount=this.readLittleEndianInt();
			traceDecode('chunkCount');
			this.compressedPackSize=this.readLittleEndianLong();
			traceDecode('compressedPackSize');
			var dhc5aeny=this.readVaruint();
			this.sha256=this.decodeString(this.readBytes(dhc5aeny));
			traceDecode('sha256');
			return this;
		}

	}
	,

	ResourcePackChunkData: class extends Buffer{

		static get ID(){return 81;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(id="",chunkIndex=0,progress=0,data=new Uint8Array(0)){
			super();
			this.id = id;
			this.chunkIndex = chunkIndex;
			this.progress = progress;
			this.data = data;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(81);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5z=this.encodeString(this.id);
			this.writeVaruint(dhc5z.length);
			this.writeBytes(dhc5z);
			this.writeLittleEndianInt(this.chunkIndex);
			this.writeLittleEndianLong(this.progress);
			this.writeVaruint(this.data.length);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5z=this.readVaruint();
			this.id=this.decodeString(this.readBytes(dhc5z));
			traceDecode('id');
			this.chunkIndex=this.readLittleEndianInt();
			traceDecode('chunkIndex');
			this.progress=this.readLittleEndianLong();
			traceDecode('progress');
			var aramzfy=this.readVaruint();
			this.data=this.readBytes(aramzfy);
			traceDecode('data');
			return this;
		}

	}
	,

	ResourcePackChunkRequest: class extends Buffer{

		static get ID(){return 82;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(id="",chunkIndex=0){
			super();
			this.id = id;
			this.chunkIndex = chunkIndex;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(82);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5z=this.encodeString(this.id);
			this.writeVaruint(dhc5z.length);
			this.writeBytes(dhc5z);
			this.writeLittleEndianInt(this.chunkIndex);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5z=this.readVaruint();
			this.id=this.decodeString(this.readBytes(dhc5z));
			traceDecode('id');
			this.chunkIndex=this.readLittleEndianInt();
			traceDecode('chunkIndex');
			return this;
		}

	}
	,

	Transfer: class extends Buffer{

		static get ID(){return 83;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(ip="",port=19132){
			super();
			this.ip = ip;
			this.port = port;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(83);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5c=this.encodeString(this.ip);
			this.writeVaruint(dhc5c.length);
			this.writeBytes(dhc5c);
			this.writeLittleEndianShort(this.port);
			return new Uint8Array(this._buffer);
		}

		decode(_buffer){
			this._buffer=Array.from(_buffer);
			var _id=this.readByte();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5c=this.readVaruint();
			this.ip=this.decodeString(this.readBytes(dhc5c));
			traceDecode('ip');
			this.port=this.readLittleEndianShort();
			traceDecode('port');
			return this;
		}

	}

}