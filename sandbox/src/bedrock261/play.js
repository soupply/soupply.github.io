const Play ={

	Login: class extends Packet{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 1;
		}

		constructor(protocol=261,body=new Types.LoginBody()){
			super();
			this.protocol = protocol;
			this.body = body;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.protocol);
			this.writeBytes(this.body.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.protocol=this.readBigEndianInt();
			traceDecode('protocol');
			this.body=new Types.LoginBody().decodeBody(this._buffer);
			this._buffer=this.body._buffer;
			traceDecode('body');
			return this;
		}

	}
	,

	PlayStatus: class extends Packet{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 2;
		}

		constructor(status=0){
			super();
			this.status = status;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.status);
			return new Uint8Array(this._buffer);
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

	ServerToClientHandshake: class extends Packet{

		static get ID(){return 3;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 3;
		}

		constructor(serverPublicKey="",token=new Uint8Array(0)){
			super();
			this.serverPublicKey = serverPublicKey;
			this.token = token;
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

	ClientToServerHandshake: class extends Packet{

		static get ID(){return 4;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 4;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	Disconnect: class extends Packet{

		static get ID(){return 5;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 5;
		}

		constructor(hideDisconnectionScreen=false,message=""){
			super();
			this.hideDisconnectionScreen = hideDisconnectionScreen;
			this.message = message;
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

	ResourcePacksInfo: class extends Packet{

		static get ID(){return 6;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 6;
		}

		constructor(mustAccept=false,behaviourPacks=[],resourcePacks=[]){
			super();
			this.mustAccept = mustAccept;
			this.behaviourPacks = behaviourPacks;
			this.resourcePacks = resourcePacks;
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

	ResourcePacksStackPacket: class extends Packet{

		static get ID(){return 7;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 7;
		}

		constructor(mustAccept=false,behaviourPacks=[],resourcePacks=[]){
			super();
			this.mustAccept = mustAccept;
			this.behaviourPacks = behaviourPacks;
			this.resourcePacks = resourcePacks;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.mustAccept);
			this.writeVaruint(this.behaviourPacks.length);
			for(var dhc5zhdl in this.behaviourPacks){
				this.writeBytes(this.behaviourPacks[dhc5zhdl].encodeBody(true));
			}
			this.writeVaruint(this.resourcePacks.length);
			for(var dhc5zndj in this.resourcePacks){
				this.writeBytes(this.resourcePacks[dhc5zndj].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.mustAccept=this.readBool();
			traceDecode('mustAccept');
			var aramyvyz=this.readVaruint();
			this.behaviourPacks=[];
			for(var dhc5zhdl=0;dhc5zhdl<aramyvyz;dhc5zhdl++){
				this.behaviourPacks[dhc5zhdl]=new Types.Pack().decodeBody(this._buffer);
				this._buffer=this.behaviourPacks[dhc5zhdl]._buffer;
			}
			traceDecode('behaviourPacks');
			var aramcvbv=this.readVaruint();
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

	ResourcePackClientResponse: class extends Packet{

		static get ID(){return 8;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 8;
		}

		constructor(status=0,packIds=[]){
			super();
			this.status = status;
			this.packIds = packIds;
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

	Text: class extends Packet{

		static get ID(){return 9;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 9;
		}

		static get RAW(){return 0;};
		static get CHAT(){return 1;};
		static get TRANSLATION(){return 2;};
		static get POPUP(){return 3;};
		static get JUKEBOX_POPUP(){return 4;};
		static get TIP(){return 5;};
		static get SYSTEM(){return 6;};
		static get WHISPER(){return 7;};
		static get ANNOUNCEMENT(){return 8;};

		constructor(type=0,unknown1=false){
			super();
			this.type = type;
			this.unknown1 = unknown1;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.type);
			this.writeBool(this.unknown1);
			switch(this.type){
				case 0:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 1:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 2:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 3:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 4:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 5:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 6:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 7:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				case 8:
					this.writeByte(this.type);
					this.writeBool(this.unknown3);
					break;
				default: break;
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readByte();
			traceDecode('type');
			this.unknown1=this.readBool();
			traceDecode('unknown1');
			switch(this.type){
				case 0:
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					var dhc5dl=this.readVaruint();
					this.xuid=this.decodeString(this.readBytes(dhc5dl));
					break;
				case 1:
					var dhc5z5zi=this.readVaruint();
					this.sender=this.decodeString(this.readBytes(dhc5z5zi));
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					var dhc5dl=this.readVaruint();
					this.xuid=this.decodeString(this.readBytes(dhc5dl));
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
					var aramcfy1=this.readVaruint();
					this.parameters=[];
					for(var dhc5yjbv=0;dhc5yjbv<aramcfy1;dhc5yjbv++){
						var dhc5yjbv=this.readVaruint();
						this.parameters[dhc5yjbv]=this.decodeString(this.readBytes(dhc5yjbv));
					}
					break;
				case 5:
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				case 6:
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				case 7:
					var dhc5z5zi=this.readVaruint();
					this.sender=this.decodeString(this.readBytes(dhc5z5zi));
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				case 8:
					var dhc5b5d5=this.readVaruint();
					this.announcer=this.decodeString(this.readBytes(dhc5b5d5));
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				default: break;
			}
			return this;
		}

	}
	,

	SetTime: class extends Packet{

		static get ID(){return 10;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 10;
		}

		constructor(time=0){
			super();
			this.time = time;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.time);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.time=this.readVarint();
			traceDecode('time');
			return this;
		}

	}
	,

	StartGame: class extends Packet{

		static get ID(){return 11;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 11;
		}

		constructor(entityId=0,runtimeId=0,gamemode=0,position={x:0,y:0,z:0},yaw=.0,pitch=.0,seed=0,dimension=0,generator=1,worldGamemode=0,difficulty=0,spawnPosition={x:0,y:0,z:0},loadedInCreative=false,time=0,version=0,rainLevel=.0,lightningLevel=.0,multiplayerGame=true,broadcastToLan=false,broadcastToXbl=false,commandsEnabled=false,textureRequired=false,gameRules=[],bonusChestEnabled=false,startWithMapEnabled=false,trustPlayersEnabled=false,defaultPermissionLevel=0,xboxLiveBroadcastMode=0,serverChunkTickRadius=0,levelId="",worldName="",premiumWorldTemplate="",unknown32=false,worldTicks=0,enchantmentSeed=0){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.gamemode = gamemode;
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
			this.version = version;
			this.rainLevel = rainLevel;
			this.lightningLevel = lightningLevel;
			this.multiplayerGame = multiplayerGame;
			this.broadcastToLan = broadcastToLan;
			this.broadcastToXbl = broadcastToXbl;
			this.commandsEnabled = commandsEnabled;
			this.textureRequired = textureRequired;
			this.gameRules = gameRules;
			this.bonusChestEnabled = bonusChestEnabled;
			this.startWithMapEnabled = startWithMapEnabled;
			this.trustPlayersEnabled = trustPlayersEnabled;
			this.defaultPermissionLevel = defaultPermissionLevel;
			this.xboxLiveBroadcastMode = xboxLiveBroadcastMode;
			this.serverChunkTickRadius = serverChunkTickRadius;
			this.levelId = levelId;
			this.worldName = worldName;
			this.premiumWorldTemplate = premiumWorldTemplate;
			this.unknown32 = unknown32;
			this.worldTicks = worldTicks;
			this.enchantmentSeed = enchantmentSeed;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarulong(this.runtimeId);
			this.writeVarint(this.gamemode);
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
			this.writeByte(this.version);
			this.writeLittleEndianFloat(this.rainLevel);
			this.writeLittleEndianFloat(this.lightningLevel);
			this.writeBool(this.multiplayerGame);
			this.writeBool(this.broadcastToLan);
			this.writeBool(this.broadcastToXbl);
			this.writeBool(this.commandsEnabled);
			this.writeBool(this.textureRequired);
			this.writeVaruint(this.gameRules.length);
			for(var dhc5y1uv in this.gameRules){
				this.writeBytes(this.gameRules[dhc5y1uv].encodeBody(true));
			}
			this.writeBool(this.bonusChestEnabled);
			this.writeBool(this.startWithMapEnabled);
			this.writeBool(this.trustPlayersEnabled);
			this.writeVarint(this.defaultPermissionLevel);
			this.writeVarint(this.xboxLiveBroadcastMode);
			this.writeLittleEndianInt(this.serverChunkTickRadius);
			var dhc5zzbl=this.encodeString(this.levelId);
			this.writeVaruint(dhc5zzbl.length);
			this.writeBytes(dhc5zzbl);
			var dhc5bjz5=this.encodeString(this.worldName);
			this.writeVaruint(dhc5bjz5.length);
			this.writeBytes(dhc5bjz5);
			var dhc5cvav=this.encodeString(this.premiumWorldTemplate);
			this.writeVaruint(dhc5cvav.length);
			this.writeBytes(dhc5cvav);
			this.writeBool(this.unknown32);
			this.writeLittleEndianLong(this.worldTicks);
			this.writeVarint(this.enchantmentSeed);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarulong();
			traceDecode('runtimeId');
			this.gamemode=this.readVarint();
			traceDecode('gamemode');
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
			this.version=this.readByte();
			traceDecode('version');
			this.rainLevel=this.readLittleEndianFloat();
			traceDecode('rainLevel');
			this.lightningLevel=this.readLittleEndianFloat();
			traceDecode('lightningLevel');
			this.multiplayerGame=this.readBool();
			traceDecode('multiplayerGame');
			this.broadcastToLan=this.readBool();
			traceDecode('broadcastToLan');
			this.broadcastToXbl=this.readBool();
			traceDecode('broadcastToXbl');
			this.commandsEnabled=this.readBool();
			traceDecode('commandsEnabled');
			this.textureRequired=this.readBool();
			traceDecode('textureRequired');
			var aramzfzj=this.readVaruint();
			this.gameRules=[];
			for(var dhc5y1uv=0;dhc5y1uv<aramzfzj;dhc5y1uv++){
				this.gameRules[dhc5y1uv]=new Types.Rule().decodeBody(this._buffer);
				this._buffer=this.gameRules[dhc5y1uv]._buffer;
			}
			traceDecode('gameRules');
			this.bonusChestEnabled=this.readBool();
			traceDecode('bonusChestEnabled');
			this.startWithMapEnabled=this.readBool();
			traceDecode('startWithMapEnabled');
			this.trustPlayersEnabled=this.readBool();
			traceDecode('trustPlayersEnabled');
			this.defaultPermissionLevel=this.readVarint();
			traceDecode('defaultPermissionLevel');
			this.xboxLiveBroadcastMode=this.readVarint();
			traceDecode('xboxLiveBroadcastMode');
			this.serverChunkTickRadius=this.readLittleEndianInt();
			traceDecode('serverChunkTickRadius');
			var dhc5zzbl=this.readVaruint();
			this.levelId=this.decodeString(this.readBytes(dhc5zzbl));
			traceDecode('levelId');
			var dhc5bjz5=this.readVaruint();
			this.worldName=this.decodeString(this.readBytes(dhc5bjz5));
			traceDecode('worldName');
			var dhc5cvav=this.readVaruint();
			this.premiumWorldTemplate=this.decodeString(this.readBytes(dhc5cvav));
			traceDecode('premiumWorldTemplate');
			this.unknown32=this.readBool();
			traceDecode('unknown32');
			this.worldTicks=this.readLittleEndianLong();
			traceDecode('worldTicks');
			this.enchantmentSeed=this.readVarint();
			traceDecode('enchantmentSeed');
			return this;
		}

	}
	,

	AddPlayer: class extends Packet{

		static get ID(){return 12;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 12;
		}

		constructor(uuid=new Types.McpeUuid(),username="",entityId=0,runtimeId=0,position={x:0,y:0,z:0},motion={x:0,y:0,z:0},pitch=.0,headYaw=.0,yaw=.0,heldItem=new Types.Slot(),metadata=new Metadata(),unknown11=0,unknown12=0,unknown13=0,unknown14=0,unknown15=0,unknown16=0,links=[]){
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
			this.unknown11 = unknown11;
			this.unknown12 = unknown12;
			this.unknown13 = unknown13;
			this.unknown14 = unknown14;
			this.unknown15 = unknown15;
			this.unknown16 = unknown16;
			this.links = links;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid.encodeBody(true));
			var dhc5cvbf=this.encodeString(this.username);
			this.writeVaruint(dhc5cvbf.length);
			this.writeBytes(dhc5cvbf);
			this.writeVarlong(this.entityId);
			this.writeVarulong(this.runtimeId);
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
			this.writeVaruint(this.unknown11);
			this.writeVaruint(this.unknown12);
			this.writeVaruint(this.unknown13);
			this.writeVaruint(this.unknown14);
			this.writeVaruint(this.unknown15);
			this.writeLittleEndianLong(this.unknown16);
			this.writeVaruint(this.links.length);
			for(var dhc5a5c in this.links){
				this.writeBytes(this.links[dhc5a5c].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=new Types.McpeUuid().decodeBody(this._buffer);
			this._buffer=this.uuid._buffer;
			traceDecode('uuid');
			var dhc5cvbf=this.readVaruint();
			this.username=this.decodeString(this.readBytes(dhc5cvbf));
			traceDecode('username');
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarulong();
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
			this.unknown11=this.readVaruint();
			traceDecode('unknown11');
			this.unknown12=this.readVaruint();
			traceDecode('unknown12');
			this.unknown13=this.readVaruint();
			traceDecode('unknown13');
			this.unknown14=this.readVaruint();
			traceDecode('unknown14');
			this.unknown15=this.readVaruint();
			traceDecode('unknown15');
			this.unknown16=this.readLittleEndianLong();
			traceDecode('unknown16');
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

	AddEntity: class extends Packet{

		static get ID(){return 13;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 13;
		}

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

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarulong(this.runtimeId);
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

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarulong();
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

	RemoveEntity: class extends Packet{

		static get ID(){return 14;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 14;
		}

		constructor(entityId=0){
			super();
			this.entityId = entityId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			return new Uint8Array(this._buffer);
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

	AddItemEntity: class extends Packet{

		static get ID(){return 15;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 15;
		}

		constructor(entityId=0,runtimeId=0,item=new Types.Slot(),position={x:0,y:0,z:0},motion={x:0,y:0,z:0},metadata=new Metadata()){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.item = item;
			this.position = position;
			this.motion = motion;
			this.metadata = metadata;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarulong(this.runtimeId);
			this.writeBytes(this.item.encodeBody(true));
			this.writeLittleEndianFloat(this.position.x);
			this.writeLittleEndianFloat(this.position.y);
			this.writeLittleEndianFloat(this.position.z);
			this.writeLittleEndianFloat(this.motion.x);
			this.writeLittleEndianFloat(this.motion.y);
			this.writeLittleEndianFloat(this.motion.z);
			this.writeBytes(this.metadata.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarulong();
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
			this.metadata=new Metadata().decodeBody(this._buffer);
			this._buffer=this.metadata._buffer;
			traceDecode('metadata');
			return this;
		}

	}
	,

	AddHangingEntity: class extends Packet{

		static get ID(){return 16;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 16;
		}

		constructor(entityId=0,runtimeId=0,position=new Types.BlockPosition(),unknown3=0){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.position = position;
			this.unknown3 = unknown3;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarulong(this.runtimeId);
			this.writeBytes(this.position.encodeBody(true));
			this.writeVarint(this.unknown3);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarulong();
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

	TakeItemEntity: class extends Packet{

		static get ID(){return 17;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 17;
		}

		constructor(collected=0,collector=0){
			super();
			this.collected = collected;
			this.collector = collector;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.collected);
			this.writeVarlong(this.collector);
			return new Uint8Array(this._buffer);
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

	MoveEntity: class extends Packet{

		static get ID(){return 18;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 18;
		}

		constructor(entityId=0,position={x:0,y:0,z:0},pitch=0,headYaw=0,yaw=0,onGround=false,teleported=false){
			super();
			this.entityId = entityId;
			this.position = position;
			this.pitch = pitch;
			this.headYaw = headYaw;
			this.yaw = yaw;
			this.onGround = onGround;
			this.teleported = teleported;
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
			this.writeBool(this.onGround);
			this.writeBool(this.teleported);
			return new Uint8Array(this._buffer);
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
			this.onGround=this.readBool();
			traceDecode('onGround');
			this.teleported=this.readBool();
			traceDecode('teleported');
			return this;
		}

	}
	,

	MovePlayer: class extends Packet{

		static get ID(){return 19;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 19;
		}

		constructor(entityId=0,position={x:0,y:0,z:0},pitch=.0,headYaw=.0,yaw=.0,animation=0,onGround=false,unknown7=0,unknown8=0,unknown9=0){
			super();
			this.entityId = entityId;
			this.position = position;
			this.pitch = pitch;
			this.headYaw = headYaw;
			this.yaw = yaw;
			this.animation = animation;
			this.onGround = onGround;
			this.unknown7 = unknown7;
			this.unknown8 = unknown8;
			this.unknown9 = unknown9;
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
			this.writeVarlong(this.unknown7);
			if(animation==3){
				this.writeLittleEndianInt(this.unknown8);
			}
			if(animation==3){
				this.writeLittleEndianInt(this.unknown9);
			}
			return new Uint8Array(this._buffer);
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
			this.unknown7=this.readVarlong();
			traceDecode('unknown7');
			if(animation==3){
				this.unknown8=this.readLittleEndianInt();
				traceDecode('unknown8');
			}
			if(animation==3){
				this.unknown9=this.readLittleEndianInt();
				traceDecode('unknown9');
			}
			return this;
		}

	}
	,

	RiderJump: class extends Packet{

		static get ID(){return 20;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 20;
		}

		constructor(rider=0){
			super();
			this.rider = rider;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.rider);
			return new Uint8Array(this._buffer);
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

	UpdateBlock: class extends Packet{

		static get ID(){return 21;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 21;
		}

		constructor(position=new Types.BlockPosition(),block=0,flagsAndMeta=0){
			super();
			this.position = position;
			this.block = block;
			this.flagsAndMeta = flagsAndMeta;
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

	AddPainting: class extends Packet{

		static get ID(){return 22;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 22;
		}

		constructor(entityId=0,runtimeId=0,position=new Types.BlockPosition(),direction=0,title=""){
			super();
			this.entityId = entityId;
			this.runtimeId = runtimeId;
			this.position = position;
			this.direction = direction;
			this.title = title;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarulong(this.runtimeId);
			this.writeBytes(this.position.encodeBody(true));
			this.writeVarint(this.direction);
			var dhc5arz=this.encodeString(this.title);
			this.writeVaruint(dhc5arz.length);
			this.writeBytes(dhc5arz);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.runtimeId=this.readVarulong();
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

	Explode: class extends Packet{

		static get ID(){return 23;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 23;
		}

		constructor(position={x:0,y:0,z:0},radius=.0,destroyedBlocks=[]){
			super();
			this.position = position;
			this.radius = radius;
			this.destroyedBlocks = destroyedBlocks;
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

	LevelSoundEvent: class extends Packet{

		static get ID(){return 24;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 24;
		}

		constructor(sound=0,position={x:0,y:0,z:0},volume=0,pitch=0,unknown4=false,disableRelativeVolume=false){
			super();
			this.sound = sound;
			this.position = position;
			this.volume = volume;
			this.pitch = pitch;
			this.unknown4 = unknown4;
			this.disableRelativeVolume = disableRelativeVolume;
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
			this.writeBool(this.disableRelativeVolume);
			return new Uint8Array(this._buffer);
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
			this.disableRelativeVolume=this.readBool();
			traceDecode('disableRelativeVolume');
			return this;
		}

	}
	,

	LevelEvent: class extends Packet{

		static get ID(){return 25;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 25;
		}

		constructor(eventId=0,position={x:0,y:0,z:0},data=0){
			super();
			this.eventId = eventId;
			this.position = position;
			this.data = data;
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

	BlockEvent: class extends Packet{

		static get ID(){return 26;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 26;
		}

		constructor(position=new Types.BlockPosition(),data=new Int32Array(2)){
			super();
			this.position = position;
			this.data = data;
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

	EntityEvent: class extends Packet{

		static get ID(){return 27;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 27;
		}

		constructor(entityId=0,eventId=0,data=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
			this.data = data;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeByte(this.eventId);
			this.writeVarint(this.data);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.eventId=this.readByte();
			traceDecode('eventId');
			this.data=this.readVarint();
			traceDecode('data');
			return this;
		}

	}
	,

	MobEffect: class extends Packet{

		static get ID(){return 28;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 28;
		}

		constructor(entityId=0,eventId=0,effect=0,amplifier=0,particles=false,duration=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
			this.effect = effect;
			this.amplifier = amplifier;
			this.particles = particles;
			this.duration = duration;
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

	UpdateAttributes: class extends Packet{

		static get ID(){return 29;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 29;
		}

		constructor(entityId=0,attributes=[]){
			super();
			this.entityId = entityId;
			this.attributes = attributes;
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

	InventoryTransaction: class extends Packet{

		static get ID(){return 30;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 30;
		}

		static get NORMAL_0(){return 0;};
		static get NORMAL_1(){return 1;};
		static get USE_ITEM(){return 2;};
		static get USE_ITEM_ON_ENTITY(){return 3;};
		static get RELEASE_ITEM(){return 4;};

		constructor(type=0,actions=[]){
			super();
			this.type = type;
			this.actions = actions;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.type);
			this.writeVaruint(this.actions.length);
			for(var dhc5yrb5 in this.actions){
				this.writeBytes(this.actions[dhc5yrb5].encodeBody(true));
			}
			switch(this.type){
				case 0:
					this.writeVaruint(this.type);
					this.writeVaruint(this.actions.length);
					for(var dhc5yrb5 in this.actions){
						this.writeBytes(this.actions[dhc5yrb5].encodeBody(true));
					}
					break;
				case 1:
					this.writeVaruint(this.type);
					this.writeVaruint(this.actions.length);
					for(var dhc5yrb5 in this.actions){
						this.writeBytes(this.actions[dhc5yrb5].encodeBody(true));
					}
					break;
				case 2:
					this.writeVaruint(this.type);
					this.writeVaruint(this.actions.length);
					for(var dhc5yrb5 in this.actions){
						this.writeBytes(this.actions[dhc5yrb5].encodeBody(true));
					}
					break;
				case 3:
					this.writeVaruint(this.type);
					this.writeVaruint(this.actions.length);
					for(var dhc5yrb5 in this.actions){
						this.writeBytes(this.actions[dhc5yrb5].encodeBody(true));
					}
					break;
				case 4:
					this.writeVaruint(this.type);
					this.writeVaruint(this.actions.length);
					for(var dhc5yrb5 in this.actions){
						this.writeBytes(this.actions[dhc5yrb5].encodeBody(true));
					}
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
			var aramyna9=this.readVaruint();
			this.actions=[];
			for(var dhc5yrb5=0;dhc5yrb5<aramyna9;dhc5yrb5++){
				this.actions[dhc5yrb5]=new Types.InventoryAction().decodeBody(this._buffer);
				this._buffer=this.actions[dhc5yrb5]._buffer;
			}
			traceDecode('actions');
			switch(this.type){
				case 0:
					break;
				case 1:
					break;
				case 2:
					this.actionType=this.readVaruint();
					this.blockPosition=new Types.BlockPosition().decodeBody(this._buffer);
					this._buffer=this.blockPosition._buffer;
					this.face=this.readVarint();
					this.hotbarSlot=this.readVarint();
					this.item=new Types.Slot().decodeBody(this._buffer);
					this._buffer=this.item._buffer;
					this.playerPosition={};
					this.playerPosition.x=this.readLittleEndianFloat();
					this.playerPosition.y=this.readLittleEndianFloat();
					this.playerPosition.z=this.readLittleEndianFloat();
					this.clickPosition={};
					this.clickPosition.x=this.readLittleEndianFloat();
					this.clickPosition.y=this.readLittleEndianFloat();
					this.clickPosition.z=this.readLittleEndianFloat();
					break;
				case 3:
					this.entityId=this.readVarlong();
					this.actionType=this.readVaruint();
					this.hotbarSlot=this.readVarint();
					this.item=new Types.Slot().decodeBody(this._buffer);
					this._buffer=this.item._buffer;
					this.unknown6={};
					this.unknown6.x=this.readLittleEndianFloat();
					this.unknown6.y=this.readLittleEndianFloat();
					this.unknown6.z=this.readLittleEndianFloat();
					this.unknown7={};
					this.unknown7.x=this.readLittleEndianFloat();
					this.unknown7.y=this.readLittleEndianFloat();
					this.unknown7.z=this.readLittleEndianFloat();
					break;
				case 4:
					this.actionType=this.readVaruint();
					this.hotbarSlot=this.readVarint();
					this.item=new Types.Slot().decodeBody(this._buffer);
					this._buffer=this.item._buffer;
					this.headPosition={};
					this.headPosition.x=this.readLittleEndianFloat();
					this.headPosition.y=this.readLittleEndianFloat();
					this.headPosition.z=this.readLittleEndianFloat();
					break;
				default: break;
			}
			return this;
		}

	}
	,

	MobEquipment: class extends Packet{

		static get ID(){return 31;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 31;
		}

		constructor(entityId=0,item=new Types.Slot(),inventorySlot=0,hotbarSlot=0,unknown4=0){
			super();
			this.entityId = entityId;
			this.item = item;
			this.inventorySlot = inventorySlot;
			this.hotbarSlot = hotbarSlot;
			this.unknown4 = unknown4;
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

	MobArmorEquipment: class extends Packet{

		static get ID(){return 32;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 32;
		}

		constructor(entityId=0,armor=[]){
			super();
			this.entityId = entityId;
			this.armor = armor;
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

	Interact: class extends Packet{

		static get ID(){return 33;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 33;
		}

		constructor(action=0,target=0,targetPosition={x:0,y:0,z:0}){
			super();
			this.action = action;
			this.target = target;
			this.targetPosition = targetPosition;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.action);
			this.writeVarlong(this.target);
			if(action==4){
				this.writeLittleEndianFloat(this.targetPosition.x);
				this.writeLittleEndianFloat(this.targetPosition.y);
				this.writeLittleEndianFloat(this.targetPosition.z);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readByte();
			traceDecode('action');
			this.target=this.readVarlong();
			traceDecode('target');
			if(action==4){
				this.targetPosition={};
				this.targetPosition.x=this.readLittleEndianFloat();
				this.targetPosition.y=this.readLittleEndianFloat();
				this.targetPosition.z=this.readLittleEndianFloat();
				traceDecode('targetPosition');
			}
			return this;
		}

	}
	,

	BlockPickRequest: class extends Packet{

		static get ID(){return 34;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 34;
		}

		constructor(position={x:0,y:0,z:0},unknown1=false,slot=0){
			super();
			this.position = position;
			this.unknown1 = unknown1;
			this.slot = slot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.position.x);
			this.writeVarint(this.position.y);
			this.writeVarint(this.position.z);
			this.writeBool(this.unknown1);
			this.writeByte(this.slot);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.position={};
			this.position.x=this.readVarint();
			this.position.y=this.readVarint();
			this.position.z=this.readVarint();
			traceDecode('position');
			this.unknown1=this.readBool();
			traceDecode('unknown1');
			this.slot=this.readByte();
			traceDecode('slot');
			return this;
		}

	}
	,

	EntityPickRequest: class extends Packet{

		static get ID(){return 35;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 35;
		}

		constructor(entityType=0,slot=0){
			super();
			this.entityType = entityType;
			this.slot = slot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianLong(this.entityType);
			this.writeByte(this.slot);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityType=this.readLittleEndianLong();
			traceDecode('entityType');
			this.slot=this.readByte();
			traceDecode('slot');
			return this;
		}

	}
	,

	PlayerAction: class extends Packet{

		static get ID(){return 36;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 36;
		}

		constructor(entityId=0,action=0,position=new Types.BlockPosition(),face=0){
			super();
			this.entityId = entityId;
			this.action = action;
			this.position = position;
			this.face = face;
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

	EntityFall: class extends Packet{

		static get ID(){return 37;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 37;
		}

		constructor(entityId=0,distance=.0,unknown2=false){
			super();
			this.entityId = entityId;
			this.distance = distance;
			this.unknown2 = unknown2;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeLittleEndianFloat(this.distance);
			this.writeBool(this.unknown2);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.distance=this.readLittleEndianFloat();
			traceDecode('distance');
			this.unknown2=this.readBool();
			traceDecode('unknown2');
			return this;
		}

	}
	,

	HurtArmor: class extends Packet{

		static get ID(){return 38;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 38;
		}

		constructor(unknown0=0){
			super();
			this.unknown0 = unknown0;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.unknown0);
			return new Uint8Array(this._buffer);
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

	SetEntityData: class extends Packet{

		static get ID(){return 39;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 39;
		}

		constructor(entityId=0,metadata=new Metadata()){
			super();
			this.entityId = entityId;
			this.metadata = metadata;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeBytes(this.metadata.encodeBody(true));
			return new Uint8Array(this._buffer);
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

	SetEntityMotion: class extends Packet{

		static get ID(){return 40;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 40;
		}

		constructor(entityId=0,motion={x:0,y:0,z:0}){
			super();
			this.entityId = entityId;
			this.motion = motion;
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

	SetEntityLink: class extends Packet{

		static get ID(){return 41;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 41;
		}

		constructor(vehicle=0,passenger=0,action=0){
			super();
			this.vehicle = vehicle;
			this.passenger = passenger;
			this.action = action;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.vehicle);
			this.writeVarlong(this.passenger);
			this.writeByte(this.action);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.vehicle=this.readVarlong();
			traceDecode('vehicle');
			this.passenger=this.readVarlong();
			traceDecode('passenger');
			this.action=this.readByte();
			traceDecode('action');
			return this;
		}

	}
	,

	SetHealth: class extends Packet{

		static get ID(){return 42;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 42;
		}

		constructor(health=0){
			super();
			this.health = health;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.health);
			return new Uint8Array(this._buffer);
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

	SetSpawnPosition: class extends Packet{

		static get ID(){return 43;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 43;
		}

		constructor(type=0,position=new Types.BlockPosition(),forced=false){
			super();
			this.type = type;
			this.position = position;
			this.forced = forced;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.type);
			this.writeBytes(this.position.encodeBody(true));
			this.writeBool(this.forced);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readVarint();
			traceDecode('type');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.forced=this.readBool();
			traceDecode('forced');
			return this;
		}

	}
	,

	Animate: class extends Packet{

		static get ID(){return 44;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 44;
		}

		constructor(action=0,entityId=0,unknown2=.0){
			super();
			this.action = action;
			this.entityId = entityId;
			this.unknown2 = unknown2;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.action);
			this.writeVarlong(this.entityId);
			if(action>128){
				this.writeLittleEndianFloat(this.unknown2);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readVarint();
			traceDecode('action');
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			if(action>128){
				this.unknown2=this.readLittleEndianFloat();
				traceDecode('unknown2');
			}
			return this;
		}

	}
	,

	Respawn: class extends Packet{

		static get ID(){return 45;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 45;
		}

		constructor(position={x:0,y:0,z:0}){
			super();
			this.position = position;
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

	ContainerOpen: class extends Packet{

		static get ID(){return 46;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 46;
		}

		constructor(window=0,type=0,position=new Types.BlockPosition(),entityId=0){
			super();
			this.window = window;
			this.type = type;
			this.position = position;
			this.entityId = entityId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeByte(this.type);
			this.writeBytes(this.position.encodeBody(true));
			this.writeVarlong(this.entityId);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.type=this.readByte();
			traceDecode('type');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			return this;
		}

	}
	,

	ContainerClose: class extends Packet{

		static get ID(){return 47;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 47;
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

	PlayerHotbar: class extends Packet{

		static get ID(){return 48;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 48;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	InventoryContent: class extends Packet{

		static get ID(){return 49;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 49;
		}

		constructor(window=0,slots=[]){
			super();
			this.window = window;
			this.slots = slots;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.window);
			this.writeVaruint(this.slots.length);
			for(var dhc5b9c in this.slots){
				this.writeBytes(this.slots[dhc5b9c].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readVaruint();
			traceDecode('window');
			var aramcxdm=this.readVaruint();
			this.slots=[];
			for(var dhc5b9c=0;dhc5b9c<aramcxdm;dhc5b9c++){
				this.slots[dhc5b9c]=new Types.Slot().decodeBody(this._buffer);
				this._buffer=this.slots[dhc5b9c]._buffer;
			}
			traceDecode('slots');
			return this;
		}

	}
	,

	InventorySlot: class extends Packet{

		static get ID(){return 50;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 50;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	ContainerSetData: class extends Packet{

		static get ID(){return 51;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 51;
		}

		constructor(window=0,property=0,value=0){
			super();
			this.window = window;
			this.property = property;
			this.value = value;
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

	CraftingData: class extends Packet{

		static get ID(){return 52;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 52;
		}

		constructor(recipes=[]){
			super();
			this.recipes = recipes;
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

	CraftingEvent: class extends Packet{

		static get ID(){return 53;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 53;
		}

		constructor(window=0,type=0,uuid=new Types.McpeUuid(),input=[],output=[]){
			super();
			this.window = window;
			this.type = type;
			this.uuid = uuid;
			this.input = input;
			this.output = output;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeVarint(this.type);
			this.writeBytes(this.uuid.encodeBody(true));
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

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.type=this.readVarint();
			traceDecode('type');
			this.uuid=new Types.McpeUuid().decodeBody(this._buffer);
			this._buffer=this.uuid._buffer;
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

	GuiDataPickItem: class extends Packet{

		static get ID(){return 54;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 54;
		}

		constructor(slot=0){
			super();
			this.slot = slot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianInt(this.slot);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.slot=this.readLittleEndianInt();
			traceDecode('slot');
			return this;
		}

	}
	,

	AdventureSettings: class extends Packet{

		static get ID(){return 55;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 55;
		}

		constructor(flags=0,permissionLevel=0,abilities=0,playerRank=0,customPermissions=0,entityId=0){
			super();
			this.flags = flags;
			this.permissionLevel = permissionLevel;
			this.abilities = abilities;
			this.playerRank = playerRank;
			this.customPermissions = customPermissions;
			this.entityId = entityId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.flags);
			this.writeVaruint(this.permissionLevel);
			this.writeVaruint(this.abilities);
			this.writeVaruint(this.playerRank);
			this.writeVaruint(this.customPermissions);
			this.writeLittleEndianLong(this.entityId);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.flags=this.readVaruint();
			traceDecode('flags');
			this.permissionLevel=this.readVaruint();
			traceDecode('permissionLevel');
			this.abilities=this.readVaruint();
			traceDecode('abilities');
			this.playerRank=this.readVaruint();
			traceDecode('playerRank');
			this.customPermissions=this.readVaruint();
			traceDecode('customPermissions');
			this.entityId=this.readLittleEndianLong();
			traceDecode('entityId');
			return this;
		}

	}
	,

	BlockEntityData: class extends Packet{

		static get ID(){return 56;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 56;
		}

		constructor(position=new Types.BlockPosition(),nbt=new Types.Bytes()){
			super();
			this.position = position;
			this.nbt = nbt;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			this.writeBytes(this.nbt);
			return new Uint8Array(this._buffer);
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

	PlayerInput: class extends Packet{

		static get ID(){return 57;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 57;
		}

		constructor(sideways=.0,forward=.0,unknown2=false,unknown3=false){
			super();
			this.sideways = sideways;
			this.forward = forward;
			this.unknown2 = unknown2;
			this.unknown3 = unknown3;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianFloat(this.sideways);
			this.writeLittleEndianFloat(this.forward);
			this.writeBool(this.unknown2);
			this.writeBool(this.unknown3);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.sideways=this.readLittleEndianFloat();
			traceDecode('sideways');
			this.forward=this.readLittleEndianFloat();
			traceDecode('forward');
			this.unknown2=this.readBool();
			traceDecode('unknown2');
			this.unknown3=this.readBool();
			traceDecode('unknown3');
			return this;
		}

	}
	,

	FullChunkData: class extends Packet{

		static get ID(){return 58;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 58;
		}

		constructor(position={x:0,z:0},data=new Types.ChunkData()){
			super();
			this.position = position;
			this.data = data;
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

	SetCommandsEnabled: class extends Packet{

		static get ID(){return 59;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 59;
		}

		constructor(enabled=false){
			super();
			this.enabled = enabled;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.enabled);
			return new Uint8Array(this._buffer);
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

	SetDifficulty: class extends Packet{

		static get ID(){return 60;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 60;
		}

		constructor(difficulty=0){
			super();
			this.difficulty = difficulty;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.difficulty);
			return new Uint8Array(this._buffer);
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

	ChangeDimension: class extends Packet{

		static get ID(){return 61;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 61;
		}

		constructor(dimension=0,position={x:0,y:0,z:0},unknown2=false){
			super();
			this.dimension = dimension;
			this.position = position;
			this.unknown2 = unknown2;
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

	SetPlayerGameType: class extends Packet{

		static get ID(){return 62;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 62;
		}

		constructor(gamemode=0){
			super();
			this.gamemode = gamemode;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.gamemode);
			return new Uint8Array(this._buffer);
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

	PlayerList: class extends Packet{

		static get ID(){return 63;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 63;
		}

		static get ADD(){return 0;};
		static get REMOVE(){return 1;};

		constructor(action=0){
			super();
			this.action = action;
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
						this.players[dhc5bfzj]=new Types.McpeUuid().decodeBody(this._buffer);
						this._buffer=this.players[dhc5bfzj]._buffer;
					}
					break;
				default: break;
			}
			return this;
		}

	}
	,

	SimpleEvent: class extends Packet{

		static get ID(){return 64;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 64;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	Event: class extends Packet{

		static get ID(){return 65;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 65;
		}

		constructor(entityId=0,eventId=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarint(this.eventId);
			return new Uint8Array(this._buffer);
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

	SpawnExperienceOrb: class extends Packet{

		static get ID(){return 66;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 66;
		}

		constructor(position={x:0,y:0,z:0},count=0){
			super();
			this.position = position;
			this.count = count;
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

	ClientboundMapItemData: class extends Packet{

		static get ID(){return 67;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 67;
		}

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

	MapInfoRequest: class extends Packet{

		static get ID(){return 68;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 68;
		}

		constructor(mapId=0){
			super();
			this.mapId = mapId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.mapId);
			return new Uint8Array(this._buffer);
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

	RequestChunkRadius: class extends Packet{

		static get ID(){return 69;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 69;
		}

		constructor(radius=0){
			super();
			this.radius = radius;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.radius);
			return new Uint8Array(this._buffer);
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

	ChunkRadiusUpdated: class extends Packet{

		static get ID(){return 70;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 70;
		}

		constructor(radius=0){
			super();
			this.radius = radius;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.radius);
			return new Uint8Array(this._buffer);
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

	ItemFrameDropItem: class extends Packet{

		static get ID(){return 71;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 71;
		}

		constructor(position=new Types.BlockPosition(),item=new Types.Slot()){
			super();
			this.position = position;
			this.item = item;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			this.writeBytes(this.item.encodeBody(true));
			return new Uint8Array(this._buffer);
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

	GameRulesChanged: class extends Packet{

		static get ID(){return 72;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 72;
		}

		constructor(rules=[]){
			super();
			this.rules = rules;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.rules.length);
			for(var dhc5dxc in this.rules){
				this.writeBytes(this.rules[dhc5dxc].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var aramcvzm=this.readVaruint();
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

	Camera: class extends Packet{

		static get ID(){return 73;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 73;
		}

		constructor(unknown0=0,unknown1=0){
			super();
			this.unknown0 = unknown0;
			this.unknown1 = unknown1;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.unknown0);
			this.writeVarlong(this.unknown1);
			return new Uint8Array(this._buffer);
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

	BossEvent: class extends Packet{

		static get ID(){return 74;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 74;
		}

		constructor(entityId=0,eventId=0){
			super();
			this.entityId = entityId;
			this.eventId = eventId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVaruint(this.eventId);
			return new Uint8Array(this._buffer);
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

	ShowCredits: class extends Packet{

		static get ID(){return 75;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 75;
		}

		constructor(entityId=0,status=0){
			super();
			this.entityId = entityId;
			this.status = status;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeVarint(this.status);
			return new Uint8Array(this._buffer);
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

	AvailableCommands: class extends Packet{

		static get ID(){return 76;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 76;
		}

		constructor(enumValues=[],unknown1=[],enums=[],commands=[]){
			super();
			this.enumValues = enumValues;
			this.unknown1 = unknown1;
			this.enums = enums;
			this.commands = commands;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.enumValues.length);
			for(var dhc5bvvf in this.enumValues){
				var dhc5bvvf=this.encodeString(this.enumValues[dhc5bvvf]);
				this.writeVaruint(dhc5bvvf.length);
				this.writeBytes(dhc5bvvf);
			}
			this.writeVaruint(this.unknown1.length);
			for(var dhc5btbd in this.unknown1){
				var dhc5btbd=this.encodeString(this.unknown1[dhc5btbd]);
				this.writeVaruint(dhc5btbd.length);
				this.writeBytes(dhc5btbd);
			}
			this.writeVaruint(this.enums.length);
			for(var dhc5bvc in this.enums){
				this.writeBytes(this.enums[dhc5bvc].encodeBody(true));
			}
			this.writeVaruint(this.commands.length);
			for(var dhc5b1y5 in this.commands){
				this.writeBytes(this.commands[dhc5b1y5].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var aramz5bz=this.readVaruint();
			this.enumValues=[];
			for(var dhc5bvvf=0;dhc5bvvf<aramz5bz;dhc5bvvf++){
				var dhc5bvvf=this.readVaruint();
				this.enumValues[dhc5bvvf]=this.decodeString(this.readBytes(dhc5bvvf));
			}
			traceDecode('enumValues');
			var aramd5b9=this.readVaruint();
			this.unknown1=[];
			for(var dhc5btbd=0;dhc5btbd<aramd5b9;dhc5btbd++){
				var dhc5btbd=this.readVaruint();
				this.unknown1[dhc5btbd]=this.decodeString(this.readBytes(dhc5btbd));
			}
			traceDecode('unknown1');
			var aramz5bm=this.readVaruint();
			this.enums=[];
			for(var dhc5bvc=0;dhc5bvc<aramz5bm;dhc5bvc++){
				this.enums[dhc5bvc]=new Types.Enum().decodeBody(this._buffer);
				this._buffer=this.enums[dhc5bvc]._buffer;
			}
			traceDecode('enums');
			var aramy9bf=this.readVaruint();
			this.commands=[];
			for(var dhc5b1y5=0;dhc5b1y5<aramy9bf;dhc5b1y5++){
				this.commands[dhc5b1y5]=new Types.Command().decodeBody(this._buffer);
				this._buffer=this.commands[dhc5b1y5]._buffer;
			}
			traceDecode('commands');
			return this;
		}

	}
	,

	CommandRequest: class extends Packet{

		static get ID(){return 77;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 77;
		}

		constructor(command="",type=0,uuid=new Types.McpeUuid(),requestId="",playerId=0,internal=false){
			super();
			this.command = command;
			this.type = type;
			this.uuid = uuid;
			this.requestId = requestId;
			this.playerId = playerId;
			this.internal = internal;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5b1y5=this.encodeString(this.command);
			this.writeVaruint(dhc5b1y5.length);
			this.writeBytes(dhc5b1y5);
			this.writeVaruint(this.type);
			this.writeBytes(this.uuid.encodeBody(true));
			var dhc5zfzn=this.encodeString(this.requestId);
			this.writeVaruint(dhc5zfzn.length);
			this.writeBytes(dhc5zfzn);
			if(type==3){
				this.writeVarint(this.playerId);
			}
			this.writeBool(this.internal);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5b1y5=this.readVaruint();
			this.command=this.decodeString(this.readBytes(dhc5b1y5));
			traceDecode('command');
			this.type=this.readVaruint();
			traceDecode('type');
			this.uuid=new Types.McpeUuid().decodeBody(this._buffer);
			this._buffer=this.uuid._buffer;
			traceDecode('uuid');
			var dhc5zfzn=this.readVaruint();
			this.requestId=this.decodeString(this.readBytes(dhc5zfzn));
			traceDecode('requestId');
			if(type==3){
				this.playerId=this.readVarint();
				traceDecode('playerId');
			}
			this.internal=this.readBool();
			traceDecode('internal');
			return this;
		}

	}
	,

	CommandBlockUpdate: class extends Packet{

		static get ID(){return 78;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 78;
		}

		constructor(updateBlock=false,position=new Types.BlockPosition(),mode=0,redstoneMode=false,conditional=false,minecart=0,command="",lastOutput="",hover="",trackOutput=false){
			super();
			this.updateBlock = updateBlock;
			this.position = position;
			this.mode = mode;
			this.redstoneMode = redstoneMode;
			this.conditional = conditional;
			this.minecart = minecart;
			this.command = command;
			this.lastOutput = lastOutput;
			this.hover = hover;
			this.trackOutput = trackOutput;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.updateBlock);
			if(updateBlock==true){
				this.writeBytes(this.position.encodeBody(true));
			}
			if(updateBlock==true){
				this.writeVaruint(this.mode);
			}
			if(updateBlock==true){
				this.writeBool(this.redstoneMode);
			}
			if(updateBlock==true){
				this.writeBool(this.conditional);
			}
			if(updateBlock==false){
				this.writeVarlong(this.minecart);
			}
			var dhc5b1y5=this.encodeString(this.command);
			this.writeVaruint(dhc5b1y5.length);
			this.writeBytes(dhc5b1y5);
			var dhc5yntv=this.encodeString(this.lastOutput);
			this.writeVaruint(dhc5yntv.length);
			this.writeBytes(dhc5yntv);
			var dhc5bzc=this.encodeString(this.hover);
			this.writeVaruint(dhc5bzc.length);
			this.writeBytes(dhc5bzc);
			this.writeBool(this.trackOutput);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.updateBlock=this.readBool();
			traceDecode('updateBlock');
			if(updateBlock==true){
				this.position=new Types.BlockPosition().decodeBody(this._buffer);
				this._buffer=this.position._buffer;
				traceDecode('position');
			}
			if(updateBlock==true){
				this.mode=this.readVaruint();
				traceDecode('mode');
			}
			if(updateBlock==true){
				this.redstoneMode=this.readBool();
				traceDecode('redstoneMode');
			}
			if(updateBlock==true){
				this.conditional=this.readBool();
				traceDecode('conditional');
			}
			if(updateBlock==false){
				this.minecart=this.readVarlong();
				traceDecode('minecart');
			}
			var dhc5b1y5=this.readVaruint();
			this.command=this.decodeString(this.readBytes(dhc5b1y5));
			traceDecode('command');
			var dhc5yntv=this.readVaruint();
			this.lastOutput=this.decodeString(this.readBytes(dhc5yntv));
			traceDecode('lastOutput');
			var dhc5bzc=this.readVaruint();
			this.hover=this.decodeString(this.readBytes(dhc5bzc));
			traceDecode('hover');
			this.trackOutput=this.readBool();
			traceDecode('trackOutput');
			return this;
		}

	}
	,

	CommandOutput: class extends Packet{

		static get ID(){return 79;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 79;
		}

		constructor(originData=new Types.CommandOriginData(),outputType=0,successCount=0,messages=[],unknown4=""){
			super();
			this.originData = originData;
			this.outputType = outputType;
			this.successCount = successCount;
			this.messages = messages;
			this.unknown4 = unknown4;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.originData.encodeBody(true));
			this.writeByte(this.outputType);
			this.writeVaruint(this.successCount);
			this.writeVaruint(this.messages.length);
			for(var dhc5znyd in this.messages){
				this.writeBytes(this.messages[dhc5znyd].encodeBody(true));
			}
			if(outputType==4){
				var dhc5btbd=this.encodeString(this.unknown4);
				this.writeVaruint(dhc5btbd.length);
				this.writeBytes(dhc5btbd);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.originData=new Types.CommandOriginData().decodeBody(this._buffer);
			this._buffer=this.originData._buffer;
			traceDecode('originData');
			this.outputType=this.readByte();
			traceDecode('outputType');
			this.successCount=this.readVaruint();
			traceDecode('successCount');
			var arambvcf=this.readVaruint();
			this.messages=[];
			for(var dhc5znyd=0;dhc5znyd<arambvcf;dhc5znyd++){
				this.messages[dhc5znyd]=new Types.CommandMessage().decodeBody(this._buffer);
				this._buffer=this.messages[dhc5znyd]._buffer;
			}
			traceDecode('messages');
			if(outputType==4){
				var dhc5btbd=this.readVaruint();
				this.unknown4=this.decodeString(this.readBytes(dhc5btbd));
				traceDecode('unknown4');
			}
			return this;
		}

	}
	,

	UpdateTrade: class extends Packet{

		static get ID(){return 80;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 80;
		}

		constructor(window=0,windowType=15,unknown2=0,unknown3=0,willing=false,trader=0,player=0,displayName="",offers=new Types.Bytes()){
			super();
			this.window = window;
			this.windowType = windowType;
			this.unknown2 = unknown2;
			this.unknown3 = unknown3;
			this.willing = willing;
			this.trader = trader;
			this.player = player;
			this.displayName = displayName;
			this.offers = offers;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeByte(this.windowType);
			this.writeVarint(this.unknown2);
			this.writeVarint(this.unknown3);
			this.writeBool(this.willing);
			this.writeVarlong(this.trader);
			this.writeVarlong(this.player);
			var dhc5anbf=this.encodeString(this.displayName);
			this.writeVaruint(dhc5anbf.length);
			this.writeBytes(dhc5anbf);
			this.writeBytes(this.offers);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.window=this.readByte();
			traceDecode('window');
			this.windowType=this.readByte();
			traceDecode('windowType');
			this.unknown2=this.readVarint();
			traceDecode('unknown2');
			this.unknown3=this.readVarint();
			traceDecode('unknown3');
			this.willing=this.readBool();
			traceDecode('willing');
			this.trader=this.readVarlong();
			traceDecode('trader');
			this.player=this.readVarlong();
			traceDecode('player');
			var dhc5anbf=this.readVaruint();
			this.displayName=this.decodeString(this.readBytes(dhc5anbf));
			traceDecode('displayName');
			this.offers=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('offers');
			return this;
		}

	}
	,

	UpdateEquip: class extends Packet{

		static get ID(){return 81;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 81;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	ResourcePackDataInfo: class extends Packet{

		static get ID(){return 82;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 82;
		}

		constructor(id="",maxChunkSize=0,chunkCount=0,compressedPackSize=0,sha256=""){
			super();
			this.id = id;
			this.maxChunkSize = maxChunkSize;
			this.chunkCount = chunkCount;
			this.compressedPackSize = compressedPackSize;
			this.sha256 = sha256;
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

	ResourcePackChunkData: class extends Packet{

		static get ID(){return 83;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 83;
		}

		constructor(id="",chunkIndex=0,progress=0,data=new Uint8Array(0)){
			super();
			this.id = id;
			this.chunkIndex = chunkIndex;
			this.progress = progress;
			this.data = data;
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
			this.writeLittleEndianInt(this.data.length);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
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
			var aramzfy=this.readLittleEndianInt();
			this.data=this.readBytes(aramzfy);
			traceDecode('data');
			return this;
		}

	}
	,

	ResourcePackChunkRequest: class extends Packet{

		static get ID(){return 84;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 84;
		}

		constructor(id="",chunkIndex=0){
			super();
			this.id = id;
			this.chunkIndex = chunkIndex;
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

	Transfer: class extends Packet{

		static get ID(){return 85;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 85;
		}

		constructor(ip="",port=19132){
			super();
			this.ip = ip;
			this.port = port;
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
	,

	PlaySound: class extends Packet{

		static get ID(){return 86;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 86;
		}

		constructor(name="",position=new Types.BlockPosition(),volume=.0,pitch=.0){
			super();
			this.name = name;
			this.position = position;
			this.volume = volume;
			this.pitch = pitch;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeBytes(this.position.encodeBody(true));
			this.writeLittleEndianFloat(this.volume);
			this.writeLittleEndianFloat(this.pitch);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.volume=this.readLittleEndianFloat();
			traceDecode('volume');
			this.pitch=this.readLittleEndianFloat();
			traceDecode('pitch');
			return this;
		}

	}
	,

	StopSound: class extends Packet{

		static get ID(){return 87;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 87;
		}

		constructor(name="",stopAll=false){
			super();
			this.name = name;
			this.stopAll = stopAll;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeBool(this.stopAll);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			this.stopAll=this.readBool();
			traceDecode('stopAll');
			return this;
		}

	}
	,

	SetTitle: class extends Packet{

		static get ID(){return 88;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 88;
		}

		constructor(action=0,text="",fadeIn=0,stay=0,fadeOut=0){
			super();
			this.action = action;
			this.text = text;
			this.fadeIn = fadeIn;
			this.stay = stay;
			this.fadeOut = fadeOut;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.action);
			var dhc5zh=this.encodeString(this.text);
			this.writeVaruint(dhc5zh.length);
			this.writeBytes(dhc5zh);
			this.writeVarint(this.fadeIn);
			this.writeVarint(this.stay);
			this.writeVarint(this.fadeOut);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.action=this.readVarint();
			traceDecode('action');
			var dhc5zh=this.readVaruint();
			this.text=this.decodeString(this.readBytes(dhc5zh));
			traceDecode('text');
			this.fadeIn=this.readVarint();
			traceDecode('fadeIn');
			this.stay=this.readVarint();
			traceDecode('stay');
			this.fadeOut=this.readVarint();
			traceDecode('fadeOut');
			return this;
		}

	}
	,

	AddBehaviorTree: class extends Packet{

		static get ID(){return 89;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 89;
		}

		constructor(unknown0=""){
			super();
			this.unknown0 = unknown0;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5btbd=this.encodeString(this.unknown0);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5btbd=this.readVaruint();
			this.unknown0=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown0');
			return this;
		}

	}
	,

	StructureBlockUpdate: class extends Packet{

		static get ID(){return 90;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 90;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	ShowStoreOffer: class extends Packet{

		static get ID(){return 91;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 91;
		}

		constructor(unknown0="",unknown1=false,unknown2=""){
			super();
			this.unknown0 = unknown0;
			this.unknown1 = unknown1;
			this.unknown2 = unknown2;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5btbd=this.encodeString(this.unknown0);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			this.writeBool(this.unknown1);
			var dhc5btbd=this.encodeString(this.unknown2);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5btbd=this.readVaruint();
			this.unknown0=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown0');
			this.unknown1=this.readBool();
			traceDecode('unknown1');
			var dhc5btbd=this.readVaruint();
			this.unknown2=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown2');
			return this;
		}

	}
	,

	PurchaseReceipt: class extends Packet{

		static get ID(){return 92;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 92;
		}

		constructor(unknown0=[]){
			super();
			this.unknown0 = unknown0;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.unknown0.length);
			for(var dhc5btbd in this.unknown0){
				var dhc5btbd=this.encodeString(this.unknown0[dhc5btbd]);
				this.writeVaruint(dhc5btbd.length);
				this.writeBytes(dhc5btbd);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var aramd5b9=this.readVaruint();
			this.unknown0=[];
			for(var dhc5btbd=0;dhc5btbd<aramd5b9;dhc5btbd++){
				var dhc5btbd=this.readVaruint();
				this.unknown0[dhc5btbd]=this.decodeString(this.readBytes(dhc5btbd));
			}
			traceDecode('unknown0');
			return this;
		}

	}
	,

	PlayerSkin: class extends Packet{

		static get ID(){return 93;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 93;
		}

		constructor(uuid=new Types.McpeUuid(),skinId="",skinName="",unknown3="",skinData=new Uint8Array(0),capeData=new Uint8Array(0),geometryModel="",geometryData=new Uint8Array(0)){
			super();
			this.uuid = uuid;
			this.skinId = skinId;
			this.skinName = skinName;
			this.unknown3 = unknown3;
			this.skinData = skinData;
			this.capeData = capeData;
			this.geometryModel = geometryModel;
			this.geometryData = geometryData;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid.encodeBody(true));
			var dhc5alsq=this.encodeString(this.skinId);
			this.writeVaruint(dhc5alsq.length);
			this.writeBytes(dhc5alsq);
			var dhc5altf=this.encodeString(this.skinName);
			this.writeVaruint(dhc5altf.length);
			this.writeBytes(dhc5altf);
			var dhc5btbd=this.encodeString(this.unknown3);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			this.writeVaruint(this.skinData.length);
			this.writeBytes(this.skinData);
			this.writeVaruint(this.capeData.length);
			this.writeBytes(this.capeData);
			var dhc5z9zr=this.encodeString(this.geometryModel);
			this.writeVaruint(dhc5z9zr.length);
			this.writeBytes(dhc5z9zr);
			this.writeVaruint(this.geometryData.length);
			this.writeBytes(this.geometryData);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=new Types.McpeUuid().decodeBody(this._buffer);
			this._buffer=this.uuid._buffer;
			traceDecode('uuid');
			var dhc5alsq=this.readVaruint();
			this.skinId=this.decodeString(this.readBytes(dhc5alsq));
			traceDecode('skinId');
			var dhc5altf=this.readVaruint();
			this.skinName=this.decodeString(this.readBytes(dhc5altf));
			traceDecode('skinName');
			var dhc5btbd=this.readVaruint();
			this.unknown3=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown3');
			var aramctbr=this.readVaruint();
			this.skinData=this.readBytes(aramctbr);
			traceDecode('skinData');
			var aramyfzr=this.readVaruint();
			this.capeData=this.readBytes(aramyfzr);
			traceDecode('capeData');
			var dhc5z9zr=this.readVaruint();
			this.geometryModel=this.decodeString(this.readBytes(dhc5z9zr));
			traceDecode('geometryModel');
			var aramzvbv=this.readVaruint();
			this.geometryData=this.readBytes(aramzvbv);
			traceDecode('geometryData');
			return this;
		}

	}
	,

	SubClientLogin: class extends Packet{

		static get ID(){return 94;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 94;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	WSConnect: class extends Packet{

		static get ID(){return 95;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 95;
		}

		constructor(unknown0=""){
			super();
			this.unknown0 = unknown0;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5btbd=this.encodeString(this.unknown0);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5btbd=this.readVaruint();
			this.unknown0=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown0');
			return this;
		}

	}
	,

	SetLastHurtBy: class extends Packet{

		static get ID(){return 96;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 96;
		}

		constructor(unknown0=0){
			super();
			this.unknown0 = unknown0;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.unknown0);
			return new Uint8Array(this._buffer);
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

	BookEdit: class extends Packet{

		static get ID(){return 97;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 97;
		}

		static get REPLACE_PAGE(){return 0;};
		static get ADD_PAGE(){return 1;};
		static get DELETE_PAGE(){return 2;};
		static get SWAP_PAGES(){return 3;};
		static get SIGN(){return 4;};

		constructor(type=0,slot=0){
			super();
			this.type = type;
			this.slot = slot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.type);
			this.writeByte(this.slot);
			switch(this.type){
				case 0:
					this.writeByte(this.type);
					this.writeByte(this.slot);
					break;
				case 1:
					this.writeByte(this.type);
					this.writeByte(this.slot);
					break;
				case 2:
					this.writeByte(this.type);
					this.writeByte(this.slot);
					break;
				case 3:
					this.writeByte(this.type);
					this.writeByte(this.slot);
					break;
				case 4:
					this.writeByte(this.type);
					this.writeByte(this.slot);
					break;
				default: break;
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readByte();
			traceDecode('type');
			this.slot=this.readByte();
			traceDecode('slot');
			switch(this.type){
				case 0:
					this.pageNumber=this.readByte();
					var dhc5btbd=this.readVaruint();
					this.unknown3=this.decodeString(this.readBytes(dhc5btbd));
					var dhc5btbd=this.readVaruint();
					this.unknown4=this.decodeString(this.readBytes(dhc5btbd));
					break;
				case 1:
					this.pageNumber=this.readByte();
					var dhc5btbd=this.readVaruint();
					this.unknown3=this.decodeString(this.readBytes(dhc5btbd));
					var dhc5btbd=this.readVaruint();
					this.unknown4=this.decodeString(this.readBytes(dhc5btbd));
					break;
				case 2:
					this.pageNumber=this.readByte();
					break;
				case 3:
					this.page1=this.readByte();
					this.page2=this.readByte();
					break;
				case 4:
					var dhc5arz=this.readVaruint();
					this.title=this.decodeString(this.readBytes(dhc5arz));
					var dhc5drbi=this.readVaruint();
					this.author=this.decodeString(this.readBytes(dhc5drbi));
					break;
				default: break;
			}
			return this;
		}

	}
	,

	NpcRequest: class extends Packet{

		static get ID(){return 98;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 98;
		}

		constructor(entityId=0,requestType=0,command="",actionType=0){
			super();
			this.entityId = entityId;
			this.requestType = requestType;
			this.command = command;
			this.actionType = actionType;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.entityId);
			this.writeByte(this.requestType);
			var dhc5b1y5=this.encodeString(this.command);
			this.writeVaruint(dhc5b1y5.length);
			this.writeBytes(dhc5b1y5);
			this.writeByte(this.actionType);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.requestType=this.readByte();
			traceDecode('requestType');
			var dhc5b1y5=this.readVaruint();
			this.command=this.decodeString(this.readBytes(dhc5b1y5));
			traceDecode('command');
			this.actionType=this.readByte();
			traceDecode('actionType');
			return this;
		}

	}
	,

	PhotoTransfer: class extends Packet{

		static get ID(){return 99;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 99;
		}

		constructor(unknown0="",unknown1="",unknown2=""){
			super();
			this.unknown0 = unknown0;
			this.unknown1 = unknown1;
			this.unknown2 = unknown2;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5btbd=this.encodeString(this.unknown0);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			var dhc5btbd=this.encodeString(this.unknown1);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			var dhc5btbd=this.encodeString(this.unknown2);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5btbd=this.readVaruint();
			this.unknown0=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown0');
			var dhc5btbd=this.readVaruint();
			this.unknown1=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown1');
			var dhc5btbd=this.readVaruint();
			this.unknown2=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown2');
			return this;
		}

	}
	,

	ModalFormRequest: class extends Packet{

		static get ID(){return 100;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 100;
		}

		constructor(formId=0,data=""){
			super();
			this.formId = formId;
			this.data = data;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.formId);
			var dhc5yr=this.encodeString(this.data);
			this.writeVaruint(dhc5yr.length);
			this.writeBytes(dhc5yr);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.formId=this.readVaruint();
			traceDecode('formId');
			var dhc5yr=this.readVaruint();
			this.data=this.decodeString(this.readBytes(dhc5yr));
			traceDecode('data');
			return this;
		}

	}
	,

	ModalFormResponse: class extends Packet{

		static get ID(){return 101;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 101;
		}

		constructor(formId=0,data=""){
			super();
			this.formId = formId;
			this.data = data;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.formId);
			var dhc5yr=this.encodeString(this.data);
			this.writeVaruint(dhc5yr.length);
			this.writeBytes(dhc5yr);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.formId=this.readVaruint();
			traceDecode('formId');
			var dhc5yr=this.readVaruint();
			this.data=this.decodeString(this.readBytes(dhc5yr));
			traceDecode('data');
			return this;
		}

	}
	,

	ServerSettingsRequest: class extends Packet{

		static get ID(){return 102;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		getId(){
			return 102;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	ServerSettingsResponse: class extends Packet{

		static get ID(){return 103;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 103;
		}

		constructor(formId=0,data=""){
			super();
			this.formId = formId;
			this.data = data;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.formId);
			var dhc5yr=this.encodeString(this.data);
			this.writeVaruint(dhc5yr.length);
			this.writeBytes(dhc5yr);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.formId=this.readVaruint();
			traceDecode('formId');
			var dhc5yr=this.readVaruint();
			this.data=this.decodeString(this.readBytes(dhc5yr));
			traceDecode('data');
			return this;
		}

	}
	,

	ShowProfile: class extends Packet{

		static get ID(){return 104;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 104;
		}

		constructor(){
			super();
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	SetDefaultGameType: class extends Packet{

		static get ID(){return 105;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 105;
		}

		constructor(gameType=0){
			super();
			this.gameType = gameType;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.gameType);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.gameType=this.readVaruint();
			traceDecode('gameType');
			return this;
		}

	}
	,

	RemoveObject: class extends Packet{

		static get ID(){return 106;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 106;
		}

		constructor(objectName=""){
			super();
			this.objectName = objectName;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5ypyr=this.encodeString(this.objectName);
			this.writeVaruint(dhc5ypyr.length);
			this.writeBytes(dhc5ypyr);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5ypyr=this.readVaruint();
			this.objectName=this.decodeString(this.readBytes(dhc5ypyr));
			traceDecode('objectName');
			return this;
		}

	}
	,

	SetDisplayObjective: class extends Packet{

		static get ID(){return 107;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 107;
		}

		constructor(displaySlot="",objectiveName="",displayName="",criteriaName="",sortOrder=0){
			super();
			this.displaySlot = displaySlot;
			this.objectiveName = objectiveName;
			this.displayName = displayName;
			this.criteriaName = criteriaName;
			this.sortOrder = sortOrder;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5anbf=this.encodeString(this.displaySlot);
			this.writeVaruint(dhc5anbf.length);
			this.writeBytes(dhc5anbf);
			var dhc5ypyr=this.encodeString(this.objectiveName);
			this.writeVaruint(dhc5ypyr.length);
			this.writeBytes(dhc5ypyr);
			var dhc5anbf=this.encodeString(this.displayName);
			this.writeVaruint(dhc5anbf.length);
			this.writeBytes(dhc5anbf);
			var dhc5clzj=this.encodeString(this.criteriaName);
			this.writeVaruint(dhc5clzj.length);
			this.writeBytes(dhc5clzj);
			this.writeVarint(this.sortOrder);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5anbf=this.readVaruint();
			this.displaySlot=this.decodeString(this.readBytes(dhc5anbf));
			traceDecode('displaySlot');
			var dhc5ypyr=this.readVaruint();
			this.objectiveName=this.decodeString(this.readBytes(dhc5ypyr));
			traceDecode('objectiveName');
			var dhc5anbf=this.readVaruint();
			this.displayName=this.decodeString(this.readBytes(dhc5anbf));
			traceDecode('displayName');
			var dhc5clzj=this.readVaruint();
			this.criteriaName=this.decodeString(this.readBytes(dhc5clzj));
			traceDecode('criteriaName');
			this.sortOrder=this.readVarint();
			traceDecode('sortOrder');
			return this;
		}

	}
	,

	SetScore: class extends Packet{

		static get ID(){return 108;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 108;
		}

		constructor(type=0,scores=[]){
			super();
			this.type = type;
			this.scores = scores;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.type);
			this.writeVaruint(this.scores.length);
			for(var dhc5y9zm in this.scores){
				this.writeBytes(this.scores[dhc5y9zm].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readByte();
			traceDecode('type');
			var aramcncv=this.readVaruint();
			this.scores=[];
			for(var dhc5y9zm=0;dhc5y9zm<aramcncv;dhc5y9zm++){
				this.scores[dhc5y9zm]=new Types.Score().decodeBody(this._buffer);
				this._buffer=this.scores[dhc5y9zm]._buffer;
			}
			traceDecode('scores');
			return this;
		}

	}
	,

	LabTable: class extends Packet{

		static get ID(){return 109;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 109;
		}

		constructor(unknown0=0,position=new Types.BlockPosition(),reactionType=0){
			super();
			this.unknown0 = unknown0;
			this.position = position;
			this.reactionType = reactionType;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.unknown0);
			this.writeBytes(this.position.encodeBody(true));
			this.writeByte(this.reactionType);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.unknown0=this.readByte();
			traceDecode('unknown0');
			this.position=new Types.BlockPosition().decodeBody(this._buffer);
			this._buffer=this.position._buffer;
			traceDecode('position');
			this.reactionType=this.readByte();
			traceDecode('reactionType');
			return this;
		}

	}
	,

	UpdateBlockSynced: class extends Packet{

		static get ID(){return 110;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 110;
		}

		constructor(position=new Types.BlockPosition(),block=0,flagsAndMeta=0,entityId=0,unknown4=0){
			super();
			this.position = position;
			this.block = block;
			this.flagsAndMeta = flagsAndMeta;
			this.entityId = entityId;
			this.unknown4 = unknown4;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.position.encodeBody(true));
			this.writeVaruint(this.block);
			this.writeVaruint(this.flagsAndMeta);
			this.writeVarlong(this.entityId);
			this.writeVarulong(this.unknown4);
			return new Uint8Array(this._buffer);
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
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			this.unknown4=this.readVarulong();
			traceDecode('unknown4');
			return this;
		}

	}

}
