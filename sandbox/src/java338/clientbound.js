const Clientbound ={

	SpawnObject: class extends Buffer{

		static get ID(){return 0;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,uuid=new Uint8Array(16),type=0,position={x:0,y:0,z:0},pitch=0,yaw=0,data=0,velocity={x:0,y:0,z:0}){
			super();
			this.entityId = entityId;
			this.uuid = uuid;
			this.type = type;
			this.position = position;
			this.pitch = pitch;
			this.yaw = yaw;
			this.data = data;
			this.velocity = velocity;
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
			this.writeVaruint(this.entityId);
			this.writeBytes(this.uuid);
			this.writeByte(this.type);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeByte(this.pitch);
			this.writeByte(this.yaw);
			this.writeBigEndianInt(this.data);
			this.writeBigEndianShort(this.velocity.x);
			this.writeBigEndianShort(this.velocity.y);
			this.writeBigEndianShort(this.velocity.z);
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
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.type=this.readByte();
			traceDecode('type');
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.pitch=this.readByte();
			traceDecode('pitch');
			this.yaw=this.readByte();
			traceDecode('yaw');
			this.data=this.readBigEndianInt();
			traceDecode('data');
			this.velocity={};
			this.velocity.x=this.readBigEndianShort();
			this.velocity.y=this.readBigEndianShort();
			this.velocity.z=this.readBigEndianShort();
			traceDecode('velocity');
			return this;
		}

	}
	,

	SpawnExperienceOrb: class extends Buffer{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,position={x:0,y:0,z:0},count=0){
			super();
			this.entityId = entityId;
			this.position = position;
			this.count = count;
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
			this.writeVaruint(this.entityId);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeBigEndianShort(this.count);
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
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.count=this.readBigEndianShort();
			traceDecode('count');
			return this;
		}

	}
	,

	SpawnGlobalEntity: class extends Buffer{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,type=0,position={x:0,y:0,z:0}){
			super();
			this.entityId = entityId;
			this.type = type;
			this.position = position;
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
			this.writeVaruint(this.entityId);
			this.writeByte(this.type);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
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
			this.type=this.readByte();
			traceDecode('type');
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			return this;
		}

	}
	,

	SpawnMob: class extends Buffer{

		static get ID(){return 3;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,uuid=new Uint8Array(16),type=0,position={x:0,y:0,z:0},yaw=0,pitch=0,headPitch=0,velocity={x:0,y:0,z:0},metadata=new Metadata()){
			super();
			this.entityId = entityId;
			this.uuid = uuid;
			this.type = type;
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
			this.headPitch = headPitch;
			this.velocity = velocity;
			this.metadata = metadata;
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
			this.writeVaruint(this.entityId);
			this.writeBytes(this.uuid);
			this.writeVaruint(this.type);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeByte(this.yaw);
			this.writeByte(this.pitch);
			this.writeByte(this.headPitch);
			this.writeBigEndianShort(this.velocity.x);
			this.writeBigEndianShort(this.velocity.y);
			this.writeBigEndianShort(this.velocity.z);
			this.writeBytes(this.metadata.encodeBody(true));
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
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.type=this.readVaruint();
			traceDecode('type');
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.yaw=this.readByte();
			traceDecode('yaw');
			this.pitch=this.readByte();
			traceDecode('pitch');
			this.headPitch=this.readByte();
			traceDecode('headPitch');
			this.velocity={};
			this.velocity.x=this.readBigEndianShort();
			this.velocity.y=this.readBigEndianShort();
			this.velocity.z=this.readBigEndianShort();
			traceDecode('velocity');
			this.metadata=new Metadata().decodeBody(this._buffer);
			this._buffer=this.metadata._buffer;
			traceDecode('metadata');
			return this;
		}

	}
	,

	SpawnPainting: class extends Buffer{

		static get ID(){return 4;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,uuid=new Uint8Array(16),title="",position=0,direction=0){
			super();
			this.entityId = entityId;
			this.uuid = uuid;
			this.title = title;
			this.position = position;
			this.direction = direction;
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
			this.writeVaruint(this.entityId);
			this.writeBytes(this.uuid);
			var dhc5arz=this.encodeString(this.title);
			this.writeVaruint(dhc5arz.length);
			this.writeBytes(dhc5arz);
			this.writeBigEndianLong(this.position);
			this.writeByte(this.direction);
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
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			var dhc5arz=this.readVaruint();
			this.title=this.decodeString(this.readBytes(dhc5arz));
			traceDecode('title');
			this.position=this.readBigEndianLong();
			traceDecode('position');
			this.direction=this.readByte();
			traceDecode('direction');
			return this;
		}

	}
	,

	SpawnPlayer: class extends Buffer{

		static get ID(){return 5;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,uuid=new Uint8Array(16),position={x:0,y:0,z:0},yaw=0,pitch=0,metadata=new Metadata()){
			super();
			this.entityId = entityId;
			this.uuid = uuid;
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
			this.metadata = metadata;
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
			this.writeVaruint(this.entityId);
			this.writeBytes(this.uuid);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeByte(this.yaw);
			this.writeByte(this.pitch);
			this.writeBytes(this.metadata.encodeBody(true));
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
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.yaw=this.readByte();
			traceDecode('yaw');
			this.pitch=this.readByte();
			traceDecode('pitch');
			this.metadata=new Metadata().decodeBody(this._buffer);
			this._buffer=this.metadata._buffer;
			traceDecode('metadata');
			return this;
		}

	}
	,

	Animation: class extends Buffer{

		static get ID(){return 6;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,animation=0){
			super();
			this.entityId = entityId;
			this.animation = animation;
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
			this.writeVaruint(this.entityId);
			this.writeByte(this.animation);
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
			this.animation=this.readByte();
			traceDecode('animation');
			return this;
		}

	}
	,

	Statistics: class extends Buffer{

		static get ID(){return 7;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(statistics=[]){
			super();
			this.statistics = statistics;
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
			this.writeVaruint(this.statistics.length);
			for(var dhc5dfan in this.statistics){
				this.writeBytes(this.statistics[dhc5dfan].encodeBody(true));
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
			var aramcrdl=this.readVaruint();
			this.statistics=[];
			for(var dhc5dfan=0;dhc5dfan<aramcrdl;dhc5dfan++){
				this.statistics[dhc5dfan]=new Types.Statistic().decodeBody(this._buffer);
				this._buffer=this.statistics[dhc5dfan]._buffer;
			}
			traceDecode('statistics');
			return this;
		}

	}
	,

	BlockBreakAnimation: class extends Buffer{

		static get ID(){return 8;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,position=0,stage=0){
			super();
			this.entityId = entityId;
			this.position = position;
			this.stage = stage;
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
			this.writeVaruint(this.entityId);
			this.writeBigEndianLong(this.position);
			this.writeByte(this.stage);
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
			this.position=this.readBigEndianLong();
			traceDecode('position');
			this.stage=this.readByte();
			traceDecode('stage');
			return this;
		}

	}
	,

	UpdateBlockEntity: class extends Buffer{

		static get ID(){return 9;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=0,action=0,nbt=new Types.Bytes()){
			super();
			this.position = position;
			this.action = action;
			this.nbt = nbt;
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
			this.writeBigEndianLong(this.position);
			this.writeByte(this.action);
			this.writeBytes(this.nbt);
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
			this.action=this.readByte();
			traceDecode('action');
			this.nbt=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('nbt');
			return this;
		}

	}
	,

	BlockAction: class extends Buffer{

		static get ID(){return 10;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=0,action=0,parameter=0,blockType=0){
			super();
			this.position = position;
			this.action = action;
			this.parameter = parameter;
			this.blockType = blockType;
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
			this.writeBigEndianLong(this.position);
			this.writeByte(this.action);
			this.writeByte(this.parameter);
			this.writeVaruint(this.blockType);
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
			this.action=this.readByte();
			traceDecode('action');
			this.parameter=this.readByte();
			traceDecode('parameter');
			this.blockType=this.readVaruint();
			traceDecode('blockType');
			return this;
		}

	}
	,

	BlockChange: class extends Buffer{

		static get ID(){return 11;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=0,block=0){
			super();
			this.position = position;
			this.block = block;
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
			this.writeBigEndianLong(this.position);
			this.writeVaruint(this.block);
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
			this.block=this.readVaruint();
			traceDecode('block');
			return this;
		}

	}
	,

	BossBar: class extends Buffer{

		static get ID(){return 12;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		static get ADD(){return 0;};
		static get REMOVE(){return 1;};
		static get UPDATE_HEALTH(){return 2;};
		static get UPDATE_TITLE(){return 3;};
		static get UPDATE_STYLE(){return 4;};
		static get UPDATE_FLAGS(){return 5;};

		constructor(uuid=new Uint8Array(16),action=0){
			super();
			this.uuid = uuid;
			this.action = action;
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
			this.writeBytes(this.uuid);
			this.writeVaruint(this.action);
			switch(this.action){
				case 0:
					this.writeBytes(this.uuid);
					this.writeVaruint(this.action);
					break;
				case 1:
					this.writeBytes(this.uuid);
					this.writeVaruint(this.action);
					break;
				case 2:
					this.writeBytes(this.uuid);
					this.writeVaruint(this.action);
					break;
				case 3:
					this.writeBytes(this.uuid);
					this.writeVaruint(this.action);
					break;
				case 4:
					this.writeBytes(this.uuid);
					this.writeVaruint(this.action);
					break;
				case 5:
					this.writeBytes(this.uuid);
					this.writeVaruint(this.action);
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
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.action=this.readVaruint();
			traceDecode('action');
			switch(this.action){
				case 0:
					var dhc5arz=this.readVaruint();
					this.title=this.decodeString(this.readBytes(dhc5arz));
					this.health=this.readBigEndianFloat();
					this.color=this.readVaruint();
					this.division=this.readVaruint();
					this.flags=this.readByte();
					break;
				case 1:
					break;
				case 2:
					this.health=this.readBigEndianFloat();
					break;
				case 3:
					var dhc5arz=this.readVaruint();
					this.title=this.decodeString(this.readBytes(dhc5arz));
					break;
				case 4:
					this.color=this.readVaruint();
					this.division=this.readVaruint();
					break;
				case 5:
					this.flags=this.readByte();
					break;
				default: break;
			}
			return this;
		}

	}
	,

	ServerDifficulty: class extends Buffer{

		static get ID(){return 13;};

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
			this.writeVaruint(13);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.difficulty);
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
			this.difficulty=this.readByte();
			traceDecode('difficulty');
			return this;
		}

	}
	,

	TabComplete: class extends Buffer{

		static get ID(){return 14;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(matches=[]){
			super();
			this.matches = matches;
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
			this.writeVaruint(this.matches.length);
			for(var dhc5yrav in this.matches){
				var dhc5yrav=this.encodeString(this.matches[dhc5yrav]);
				this.writeVaruint(dhc5yrav.length);
				this.writeBytes(dhc5yrav);
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
			var arambfyh=this.readVaruint();
			this.matches=[];
			for(var dhc5yrav=0;dhc5yrav<arambfyh;dhc5yrav++){
				var dhc5yrav=this.readVaruint();
				this.matches[dhc5yrav]=this.decodeString(this.readBytes(dhc5yrav));
			}
			traceDecode('matches');
			return this;
		}

	}
	,

	ChatMessage: class extends Buffer{

		static get ID(){return 15;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(message="",position=0){
			super();
			this.message = message;
			this.position = position;
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
			var dhc5znyd=this.encodeString(this.message);
			this.writeVaruint(dhc5znyd.length);
			this.writeBytes(dhc5znyd);
			this.writeByte(this.position);
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
			var dhc5znyd=this.readVaruint();
			this.message=this.decodeString(this.readBytes(dhc5znyd));
			traceDecode('message');
			this.position=this.readByte();
			traceDecode('position');
			return this;
		}

	}
	,

	MultiBlockChange: class extends Buffer{

		static get ID(){return 16;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(chunk={x:0,z:0},changes=[]){
			super();
			this.chunk = chunk;
			this.changes = changes;
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
			this.writeBigEndianInt(this.chunk.x);
			this.writeBigEndianInt(this.chunk.z);
			this.writeVaruint(this.changes.length);
			for(var dhc5afzv in this.changes){
				this.writeBytes(this.changes[dhc5afzv].encodeBody(true));
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
			this.chunk={};
			this.chunk.x=this.readBigEndianInt();
			this.chunk.z=this.readBigEndianInt();
			traceDecode('chunk');
			var aramyhbd=this.readVaruint();
			this.changes=[];
			for(var dhc5afzv=0;dhc5afzv<aramyhbd;dhc5afzv++){
				this.changes[dhc5afzv]=new Types.BlockChange().decodeBody(this._buffer);
				this._buffer=this.changes[dhc5afzv]._buffer;
			}
			traceDecode('changes');
			return this;
		}

	}
	,

	ConfirmTransaction: class extends Buffer{

		static get ID(){return 17;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

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
			this.writeVaruint(17);
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

	CloseWindow: class extends Buffer{

		static get ID(){return 18;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0){
			super();
			this.window = window;
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

	OpenWindow: class extends Buffer{

		static get ID(){return 19;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0,type="",title="",slots=0){
			super();
			this.window = window;
			this.type = type;
			this.title = title;
			this.slots = slots;
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
			this.writeByte(this.window);
			var dhc5eb=this.encodeString(this.type);
			this.writeVaruint(dhc5eb.length);
			this.writeBytes(dhc5eb);
			var dhc5arz=this.encodeString(this.title);
			this.writeVaruint(dhc5arz.length);
			this.writeBytes(dhc5arz);
			this.writeByte(this.slots);
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
			var dhc5eb=this.readVaruint();
			this.type=this.decodeString(this.readBytes(dhc5eb));
			traceDecode('type');
			var dhc5arz=this.readVaruint();
			this.title=this.decodeString(this.readBytes(dhc5arz));
			traceDecode('title');
			this.slots=this.readByte();
			traceDecode('slots');
			return this;
		}

	}
	,

	WindowItems: class extends Buffer{

		static get ID(){return 20;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0,slots=[]){
			super();
			this.window = window;
			this.slots = slots;
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
			this.writeByte(this.window);
			this.writeBigEndianShort(this.slots.length);
			for(var dhc5b9c in this.slots){
				this.writeBytes(this.slots[dhc5b9c].encodeBody(true));
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
			this.window=this.readByte();
			traceDecode('window');
			var aramcxdm=this.readBigEndianShort();
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

	WindowProperty: class extends Buffer{

		static get ID(){return 21;};

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
			this.writeVaruint(21);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeBigEndianShort(this.property);
			this.writeBigEndianShort(this.value);
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
			this.property=this.readBigEndianShort();
			traceDecode('property');
			this.value=this.readBigEndianShort();
			traceDecode('value');
			return this;
		}

	}
	,

	SetSlot: class extends Buffer{

		static get ID(){return 22;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0,slot=0,item=new Types.Slot()){
			super();
			this.window = window;
			this.slot = slot;
			this.item = item;
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
			this.writeByte(this.window);
			this.writeBigEndianShort(this.slot);
			this.writeBytes(this.item.encodeBody(true));
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
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	SetCooldown: class extends Buffer{

		static get ID(){return 23;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(item=0,cooldown=0){
			super();
			this.item = item;
			this.cooldown = cooldown;
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
			this.writeVaruint(this.item);
			this.writeVaruint(this.cooldown);
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
			this.item=this.readVaruint();
			traceDecode('item');
			this.cooldown=this.readVaruint();
			traceDecode('cooldown');
			return this;
		}

	}
	,

	PluginMessage: class extends Buffer{

		static get ID(){return 24;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

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
			this.writeVaruint(24);
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

	NamedSoundEffect: class extends Buffer{

		static get ID(){return 25;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(name="",category=0,position={x:0,y:0,z:0},volume=.0,pitch=.0){
			super();
			this.name = name;
			this.category = category;
			this.position = position;
			this.volume = volume;
			this.pitch = pitch;
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
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.category);
			this.writeBigEndianInt(this.position.x);
			this.writeBigEndianInt(this.position.y);
			this.writeBigEndianInt(this.position.z);
			this.writeBigEndianFloat(this.volume);
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
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			this.category=this.readVaruint();
			traceDecode('category');
			this.position={};
			this.position.x=this.readBigEndianInt();
			this.position.y=this.readBigEndianInt();
			this.position.z=this.readBigEndianInt();
			traceDecode('position');
			this.volume=this.readBigEndianFloat();
			traceDecode('volume');
			this.pitch=this.readBigEndianFloat();
			traceDecode('pitch');
			return this;
		}

	}
	,

	Disconnect: class extends Buffer{

		static get ID(){return 26;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(reason=""){
			super();
			this.reason = reason;
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
			var dhc5zfb4=this.encodeString(this.reason);
			this.writeVaruint(dhc5zfb4.length);
			this.writeBytes(dhc5zfb4);
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
			var dhc5zfb4=this.readVaruint();
			this.reason=this.decodeString(this.readBytes(dhc5zfb4));
			traceDecode('reason');
			return this;
		}

	}
	,

	EntityStatus: class extends Buffer{

		static get ID(){return 27;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

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
			this.writeVaruint(27);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.entityId);
			this.writeByte(this.status);
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
			this.entityId=this.readBigEndianInt();
			traceDecode('entityId');
			this.status=this.readByte();
			traceDecode('status');
			return this;
		}

	}
	,

	Explosion: class extends Buffer{

		static get ID(){return 28;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,y:0,z:0},radius=.0,records=[],motion={x:0,y:0,z:0}){
			super();
			this.position = position;
			this.radius = radius;
			this.records = records;
			this.motion = motion;
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
			this.writeBigEndianFloat(this.position.x);
			this.writeBigEndianFloat(this.position.y);
			this.writeBigEndianFloat(this.position.z);
			this.writeBigEndianFloat(this.radius);
			this.writeBigEndianInt(this.records.length);
			for(var dhc5zncr in this.records){
				this.writeByte(this.records[dhc5zncr].x);
				this.writeByte(this.records[dhc5zncr].y);
				this.writeByte(this.records[dhc5zncr].z);
			}
			this.writeBigEndianFloat(this.motion.x);
			this.writeBigEndianFloat(this.motion.y);
			this.writeBigEndianFloat(this.motion.z);
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
			this.position.x=this.readBigEndianFloat();
			this.position.y=this.readBigEndianFloat();
			this.position.z=this.readBigEndianFloat();
			traceDecode('position');
			this.radius=this.readBigEndianFloat();
			traceDecode('radius');
			var aramcvbj=this.readBigEndianInt();
			this.records=[];
			for(var dhc5zncr=0;dhc5zncr<aramcvbj;dhc5zncr++){
				this.records[dhc5zncr]={};
				this.records[dhc5zncr].x=this.readByte();
				this.records[dhc5zncr].y=this.readByte();
				this.records[dhc5zncr].z=this.readByte();
			}
			traceDecode('records');
			this.motion={};
			this.motion.x=this.readBigEndianFloat();
			this.motion.y=this.readBigEndianFloat();
			this.motion.z=this.readBigEndianFloat();
			traceDecode('motion');
			return this;
		}

	}
	,

	UnloadChunk: class extends Buffer{

		static get ID(){return 29;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,z:0}){
			super();
			this.position = position;
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
			this.writeBigEndianInt(this.position.x);
			this.writeBigEndianInt(this.position.z);
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
			this.position.x=this.readBigEndianInt();
			this.position.z=this.readBigEndianInt();
			traceDecode('position');
			return this;
		}

	}
	,

	ChangeGameState: class extends Buffer{

		static get ID(){return 30;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(reason=0,value=.0){
			super();
			this.reason = reason;
			this.value = value;
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
			this.writeByte(this.reason);
			this.writeBigEndianFloat(this.value);
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
			this.reason=this.readByte();
			traceDecode('reason');
			this.value=this.readBigEndianFloat();
			traceDecode('value');
			return this;
		}

	}
	,

	KeepAlive: class extends Buffer{

		static get ID(){return 31;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(id=0){
			super();
			this.id = id;
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

	ChunkData: class extends Buffer{

		static get ID(){return 32;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,z:0},full=false,sections=0,data=new Uint8Array(0),tilesCount=0,tiles=new Types.Bytes()){
			super();
			this.position = position;
			this.full = full;
			this.sections = sections;
			this.data = data;
			this.tilesCount = tilesCount;
			this.tiles = tiles;
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
			this.writeBigEndianInt(this.position.x);
			this.writeBigEndianInt(this.position.z);
			this.writeBool(this.full);
			this.writeVaruint(this.sections);
			this.writeVaruint(this.data.length);
			this.writeBytes(this.data);
			this.writeVaruint(this.tilesCount);
			this.writeBytes(this.tiles);
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
			this.position.x=this.readBigEndianInt();
			this.position.z=this.readBigEndianInt();
			traceDecode('position');
			this.full=this.readBool();
			traceDecode('full');
			this.sections=this.readVaruint();
			traceDecode('sections');
			var aramzfy=this.readVaruint();
			this.data=this.readBytes(aramzfy);
			traceDecode('data');
			this.tilesCount=this.readVaruint();
			traceDecode('tilesCount');
			this.tiles=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('tiles');
			return this;
		}

	}
	,

	Effect: class extends Buffer{

		static get ID(){return 33;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(effectId=0,position=0,data=0,disableVolume=false){
			super();
			this.effectId = effectId;
			this.position = position;
			this.data = data;
			this.disableVolume = disableVolume;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(33);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.effectId);
			this.writeBigEndianLong(this.position);
			this.writeBigEndianInt(this.data);
			this.writeBool(this.disableVolume);
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
			this.effectId=this.readBigEndianInt();
			traceDecode('effectId');
			this.position=this.readBigEndianLong();
			traceDecode('position');
			this.data=this.readBigEndianInt();
			traceDecode('data');
			this.disableVolume=this.readBool();
			traceDecode('disableVolume');
			return this;
		}

	}
	,

	Particle: class extends Buffer{

		static get ID(){return 34;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(particleId=0,longDistance=false,position={x:0,y:0,z:0},offset={x:0,y:0,z:0},data=.0,count=0,additionalData=new Uint32Array(2)){
			super();
			this.particleId = particleId;
			this.longDistance = longDistance;
			this.position = position;
			this.offset = offset;
			this.data = data;
			this.count = count;
			this.additionalData = additionalData;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(34);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.particleId);
			this.writeBool(this.longDistance);
			this.writeBigEndianFloat(this.position.x);
			this.writeBigEndianFloat(this.position.y);
			this.writeBigEndianFloat(this.position.z);
			this.writeBigEndianFloat(this.offset.x);
			this.writeBigEndianFloat(this.offset.y);
			this.writeBigEndianFloat(this.offset.z);
			this.writeBigEndianFloat(this.data);
			this.writeBigEndianInt(this.count);
			for(var dhc5zrdl in this.additionalData){
				this.writeVaruint(this.additionalData[dhc5zrdl]);
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
			this.particleId=this.readBigEndianInt();
			traceDecode('particleId');
			this.longDistance=this.readBool();
			traceDecode('longDistance');
			this.position={};
			this.position.x=this.readBigEndianFloat();
			this.position.y=this.readBigEndianFloat();
			this.position.z=this.readBigEndianFloat();
			traceDecode('position');
			this.offset={};
			this.offset.x=this.readBigEndianFloat();
			this.offset.y=this.readBigEndianFloat();
			this.offset.z=this.readBigEndianFloat();
			traceDecode('offset');
			this.data=this.readBigEndianFloat();
			traceDecode('data');
			this.count=this.readBigEndianInt();
			traceDecode('count');
			var aramyrar=2;
			this.additionalData=[];
			for(var dhc5zrdl=0;dhc5zrdl<aramyrar;dhc5zrdl++){
				this.additionalData[dhc5zrdl]=this.readVaruint();
			}
			traceDecode('additionalData');
			return this;
		}

	}
	,

	JoinGame: class extends Buffer{

		static get ID(){return 35;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,gamemode=0,dimension=0,difficulty=0,maxPlayers=0,levelType="",reducedDebug=false){
			super();
			this.entityId = entityId;
			this.gamemode = gamemode;
			this.dimension = dimension;
			this.difficulty = difficulty;
			this.maxPlayers = maxPlayers;
			this.levelType = levelType;
			this.reducedDebug = reducedDebug;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(35);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.entityId);
			this.writeByte(this.gamemode);
			this.writeBigEndianInt(this.dimension);
			this.writeByte(this.difficulty);
			this.writeByte(this.maxPlayers);
			var dhc5zzbr=this.encodeString(this.levelType);
			this.writeVaruint(dhc5zzbr.length);
			this.writeBytes(dhc5zzbr);
			this.writeBool(this.reducedDebug);
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
			this.entityId=this.readBigEndianInt();
			traceDecode('entityId');
			this.gamemode=this.readByte();
			traceDecode('gamemode');
			this.dimension=this.readBigEndianInt();
			traceDecode('dimension');
			this.difficulty=this.readByte();
			traceDecode('difficulty');
			this.maxPlayers=this.readByte();
			traceDecode('maxPlayers');
			var dhc5zzbr=this.readVaruint();
			this.levelType=this.decodeString(this.readBytes(dhc5zzbr));
			traceDecode('levelType');
			this.reducedDebug=this.readBool();
			traceDecode('reducedDebug');
			return this;
		}

	}
	,

	Map: class extends Buffer{

		static get ID(){return 36;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(mapId=0,scale=0,showIcons=false,icons=[],colums=0,rows=0,offset={x:0,z:0},data=new Uint8Array(0)){
			super();
			this.mapId = mapId;
			this.scale = scale;
			this.showIcons = showIcons;
			this.icons = icons;
			this.colums = colums;
			this.rows = rows;
			this.offset = offset;
			this.data = data;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(36);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.mapId);
			this.writeByte(this.scale);
			this.writeBool(this.showIcons);
			this.writeVaruint(this.icons.length);
			for(var dhc5y9c in this.icons){
				this.writeBytes(this.icons[dhc5y9c].encodeBody(true));
			}
			this.writeByte(this.colums);
			this.writeByte(this.rows);
			this.writeByte(this.offset.x);
			this.writeByte(this.offset.z);
			this.writeVaruint(this.data.length);
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
			this.mapId=this.readVaruint();
			traceDecode('mapId');
			this.scale=this.readByte();
			traceDecode('scale');
			this.showIcons=this.readBool();
			traceDecode('showIcons');
			var aramanbm=this.readVaruint();
			this.icons=[];
			for(var dhc5y9c=0;dhc5y9c<aramanbm;dhc5y9c++){
				this.icons[dhc5y9c]=new Types.Icon().decodeBody(this._buffer);
				this._buffer=this.icons[dhc5y9c]._buffer;
			}
			traceDecode('icons');
			this.colums=this.readByte();
			traceDecode('colums');
			this.rows=this.readByte();
			traceDecode('rows');
			this.offset={};
			this.offset.x=this.readByte();
			this.offset.z=this.readByte();
			traceDecode('offset');
			var aramzfy=this.readVaruint();
			this.data=this.readBytes(aramzfy);
			traceDecode('data');
			return this;
		}

	}
	,

	Entity: class extends Buffer{

		static get ID(){return 37;};

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
			this.writeVaruint(37);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
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
			return this;
		}

	}
	,

	EntityRelativeMove: class extends Buffer{

		static get ID(){return 38;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,delta={x:0,y:0,z:0},onGround=false){
			super();
			this.entityId = entityId;
			this.delta = delta;
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(38);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeBigEndianShort(this.delta.x);
			this.writeBigEndianShort(this.delta.y);
			this.writeBigEndianShort(this.delta.z);
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
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			this.delta={};
			this.delta.x=this.readBigEndianShort();
			this.delta.y=this.readBigEndianShort();
			this.delta.z=this.readBigEndianShort();
			traceDecode('delta');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	EntityLookAndRelativeMove: class extends Buffer{

		static get ID(){return 39;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,delta={x:0,y:0,z:0},yaw=0,pitch=0,onGround=false){
			super();
			this.entityId = entityId;
			this.delta = delta;
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(39);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeBigEndianShort(this.delta.x);
			this.writeBigEndianShort(this.delta.y);
			this.writeBigEndianShort(this.delta.z);
			this.writeByte(this.yaw);
			this.writeByte(this.pitch);
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
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			this.delta={};
			this.delta.x=this.readBigEndianShort();
			this.delta.y=this.readBigEndianShort();
			this.delta.z=this.readBigEndianShort();
			traceDecode('delta');
			this.yaw=this.readByte();
			traceDecode('yaw');
			this.pitch=this.readByte();
			traceDecode('pitch');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	EntityLook: class extends Buffer{

		static get ID(){return 40;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,yaw=0,pitch=0,onGround=false){
			super();
			this.entityId = entityId;
			this.yaw = yaw;
			this.pitch = pitch;
			this.onGround = onGround;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(40);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeByte(this.yaw);
			this.writeByte(this.pitch);
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
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			this.yaw=this.readByte();
			traceDecode('yaw');
			this.pitch=this.readByte();
			traceDecode('pitch');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	VehicleMove: class extends Buffer{

		static get ID(){return 41;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

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
			this.writeVaruint(41);
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

	OpenSignEditor: class extends Buffer{

		static get ID(){return 42;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=0){
			super();
			this.position = position;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(42);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.position);
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
			return this;
		}

	}
	,

	CraftRecipeResponse: class extends Buffer{

		static get ID(){return 43;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(window=0,recipe=0){
			super();
			this.window = window;
			this.recipe = recipe;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(43);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.window);
			this.writeVaruint(this.recipe);
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
			return this;
		}

	}
	,

	PlayerAbilities: class extends Buffer{

		static get ID(){return 44;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(flags=0,flyingSpeed=.0,fovModifier=.0){
			super();
			this.flags = flags;
			this.flyingSpeed = flyingSpeed;
			this.fovModifier = fovModifier;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(44);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.flags);
			this.writeBigEndianFloat(this.flyingSpeed);
			this.writeBigEndianFloat(this.fovModifier);
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
			this.fovModifier=this.readBigEndianFloat();
			traceDecode('fovModifier');
			return this;
		}

	}
	,

	CombatEvent: class extends Buffer{

		static get ID(){return 45;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		static get ENTER_COMBAT(){return 0;};
		static get END_COMBAT(){return 1;};
		static get ENTITY_DEAD(){return 2;};

		constructor(eventId=0){
			super();
			this.eventId = eventId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(45);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.eventId);
			switch(this.eventId){
				case 0:
					this.writeByte(this.eventId);
					break;
				case 1:
					this.writeByte(this.eventId);
					break;
				case 2:
					this.writeByte(this.eventId);
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
			this.eventId=this.readByte();
			traceDecode('eventId');
			switch(this.eventId){
				case 0:
					break;
				case 1:
					this.duration=this.readVaruint();
					this.entityId=this.readBigEndianInt();
					break;
				case 2:
					this.playerId=this.readVaruint();
					this.entityId=this.readBigEndianInt();
					var dhc5znyd=this.readVaruint();
					this.message=this.decodeString(this.readBytes(dhc5znyd));
					break;
				default: break;
			}
			return this;
		}

	}
	,

	PlayerListItem: class extends Buffer{

		static get ID(){return 46;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		static get ADD_PLAYER(){return 0;};
		static get UPDATE_GAMEMODE(){return 1;};
		static get UPDATE_LATENCY(){return 2;};
		static get UPDATE_DISPLAY_NAME(){return 3;};
		static get REMOVE_PLAYER(){return 4;};

		constructor(action=0){
			super();
			this.action = action;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(46);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.action);
			switch(this.action){
				case 0:
					this.writeVaruint(this.action);
					break;
				case 1:
					this.writeVaruint(this.action);
					break;
				case 2:
					this.writeVaruint(this.action);
					break;
				case 3:
					this.writeVaruint(this.action);
					break;
				case 4:
					this.writeVaruint(this.action);
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
			this.action=this.readVaruint();
			traceDecode('action');
			switch(this.action){
				case 0:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						this.players[dhc5bfzj]=new Types.ListAddPlayer().decodeBody(this._buffer);
						this._buffer=this.players[dhc5bfzj]._buffer;
					}
					break;
				case 1:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						this.players[dhc5bfzj]=new Types.ListUpdateGamemode().decodeBody(this._buffer);
						this._buffer=this.players[dhc5bfzj]._buffer;
					}
					break;
				case 2:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						this.players[dhc5bfzj]=new Types.ListUpdateLatency().decodeBody(this._buffer);
						this._buffer=this.players[dhc5bfzj]._buffer;
					}
					break;
				case 3:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						this.players[dhc5bfzj]=new Types.ListUpdateDisplayName().decodeBody(this._buffer);
						this._buffer=this.players[dhc5bfzj]._buffer;
					}
					break;
				case 4:
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

	PlayerPositionAndLook: class extends Buffer{

		static get ID(){return 47;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position={x:0,y:0,z:0},yaw=.0,pitch=.0,flags=0,teleportId=0){
			super();
			this.position = position;
			this.yaw = yaw;
			this.pitch = pitch;
			this.flags = flags;
			this.teleportId = teleportId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(47);
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
			this.writeByte(this.flags);
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
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.yaw=this.readBigEndianFloat();
			traceDecode('yaw');
			this.pitch=this.readBigEndianFloat();
			traceDecode('pitch');
			this.flags=this.readByte();
			traceDecode('flags');
			this.teleportId=this.readVaruint();
			traceDecode('teleportId');
			return this;
		}

	}
	,

	UseBed: class extends Buffer{

		static get ID(){return 48;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,position=0){
			super();
			this.entityId = entityId;
			this.position = position;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(48);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeBigEndianLong(this.position);
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
			this.position=this.readBigEndianLong();
			traceDecode('position');
			return this;
		}

	}
	,

	UnlockRecipes: class extends Buffer{

		static get ID(){return 49;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(action=0,openBook=false,filtering=false,recipes=new Uint32Array(0),bookRecipes=new Uint32Array(0)){
			super();
			this.action = action;
			this.openBook = openBook;
			this.filtering = filtering;
			this.recipes = recipes;
			this.bookRecipes = bookRecipes;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(49);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.action);
			this.writeBool(this.openBook);
			this.writeBool(this.filtering);
			this.writeVaruint(this.recipes.length);
			for(var dhc5zncv in this.recipes){
				this.writeVaruint(this.recipes[dhc5zncv]);
			}
			if(action==1||action==3){
				this.writeVaruint(this.bookRecipes.length);
				for(var dhc5b9uv in this.bookRecipes){
					this.writeVaruint(this.bookRecipes[dhc5b9uv]);
				}
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
			this.openBook=this.readBool();
			traceDecode('openBook');
			this.filtering=this.readBool();
			traceDecode('filtering');
			var aramcvab=this.readVaruint();
			this.recipes=[];
			for(var dhc5zncv=0;dhc5zncv<aramcvab;dhc5zncv++){
				this.recipes[dhc5zncv]=this.readVaruint();
			}
			traceDecode('recipes');
			if(action==1||action==3){
				var aramy9aj=this.readVaruint();
				this.bookRecipes=[];
				for(var dhc5b9uv=0;dhc5b9uv<aramy9aj;dhc5b9uv++){
					this.bookRecipes[dhc5b9uv]=this.readVaruint();
				}
				traceDecode('bookRecipes');
			}
			return this;
		}

	}
	,

	DestroyEntities: class extends Buffer{

		static get ID(){return 50;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityIds=new Uint32Array(0)){
			super();
			this.entityIds = entityIds;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(50);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityIds.length);
			for(var dhc5brdl in this.entityIds){
				this.writeVaruint(this.entityIds[dhc5brdl]);
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
			var aramz5ar=this.readVaruint();
			this.entityIds=[];
			for(var dhc5brdl=0;dhc5brdl<aramz5ar;dhc5brdl++){
				this.entityIds[dhc5brdl]=this.readVaruint();
			}
			traceDecode('entityIds');
			return this;
		}

	}
	,

	RemoveEntityEffect: class extends Buffer{

		static get ID(){return 51;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,effectId=0){
			super();
			this.entityId = entityId;
			this.effectId = effectId;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(51);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeByte(this.effectId);
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
			this.effectId=this.readByte();
			traceDecode('effectId');
			return this;
		}

	}
	,

	ResourcePackSend: class extends Buffer{

		static get ID(){return 52;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(url="",hash=""){
			super();
			this.url = url;
			this.hash = hash;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(52);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5cw=this.encodeString(this.url);
			this.writeVaruint(dhc5cw.length);
			this.writeBytes(dhc5cw);
			var dhc5yn=this.encodeString(this.hash);
			this.writeVaruint(dhc5yn.length);
			this.writeBytes(dhc5yn);
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
			var dhc5cw=this.readVaruint();
			this.url=this.decodeString(this.readBytes(dhc5cw));
			traceDecode('url');
			var dhc5yn=this.readVaruint();
			this.hash=this.decodeString(this.readBytes(dhc5yn));
			traceDecode('hash');
			return this;
		}

	}
	,

	Respawn: class extends Buffer{

		static get ID(){return 53;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(dimension=0,difficulty=0,gamemode=0,levelType=""){
			super();
			this.dimension = dimension;
			this.difficulty = difficulty;
			this.gamemode = gamemode;
			this.levelType = levelType;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(53);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.dimension);
			this.writeByte(this.difficulty);
			this.writeByte(this.gamemode);
			var dhc5zzbr=this.encodeString(this.levelType);
			this.writeVaruint(dhc5zzbr.length);
			this.writeBytes(dhc5zzbr);
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
			this.dimension=this.readBigEndianInt();
			traceDecode('dimension');
			this.difficulty=this.readByte();
			traceDecode('difficulty');
			this.gamemode=this.readByte();
			traceDecode('gamemode');
			var dhc5zzbr=this.readVaruint();
			this.levelType=this.decodeString(this.readBytes(dhc5zzbr));
			traceDecode('levelType');
			return this;
		}

	}
	,

	EntityHeadLook: class extends Buffer{

		static get ID(){return 54;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,headYaw=0){
			super();
			this.entityId = entityId;
			this.headYaw = headYaw;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(54);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeByte(this.headYaw);
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
			this.headYaw=this.readByte();
			traceDecode('headYaw');
			return this;
		}

	}
	,

	AdvancementProgress: class extends Buffer{

		static get ID(){return 55;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(notEmpty=false,identifier=""){
			super();
			this.notEmpty = notEmpty;
			this.identifier = identifier;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(55);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.notEmpty);
			if(notEmpty==true){
				var dhc5zvdl=this.encodeString(this.identifier);
				this.writeVaruint(dhc5zvdl.length);
				this.writeBytes(dhc5zvdl);
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
			this.notEmpty=this.readBool();
			traceDecode('notEmpty');
			if(notEmpty==true){
				var dhc5zvdl=this.readVaruint();
				this.identifier=this.decodeString(this.readBytes(dhc5zvdl));
				traceDecode('identifier');
			}
			return this;
		}

	}
	,

	WorldBorder: class extends Buffer{

		static get ID(){return 56;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		static get SET_SIZE(){return 0;};
		static get LERP_SIZE(){return 1;};
		static get SET_CENTER(){return 2;};
		static get INITIALIZE(){return 3;};
		static get SET_WARNING_TIME(){return 4;};
		static get SET_WARNING_BLOCKS(){return 5;};

		constructor(action=0){
			super();
			this.action = action;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(56);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.action);
			switch(this.action){
				case 0:
					this.writeVaruint(this.action);
					break;
				case 1:
					this.writeVaruint(this.action);
					break;
				case 2:
					this.writeVaruint(this.action);
					break;
				case 3:
					this.writeVaruint(this.action);
					break;
				case 4:
					this.writeVaruint(this.action);
					break;
				case 5:
					this.writeVaruint(this.action);
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
			this.action=this.readVaruint();
			traceDecode('action');
			switch(this.action){
				case 0:
					this.diameter=this.readBigEndianDouble();
					break;
				case 1:
					this.oldDiameter=this.readBigEndianDouble();
					this.newDiameter=this.readBigEndianDouble();
					this.speed=this.readVarulong();
					break;
				case 2:
					this.center={};
					this.center.x=this.readBigEndianDouble();
					this.center.y=this.readBigEndianDouble();
					this.center.z=this.readBigEndianDouble();
					break;
				case 3:
					this.center={};
					this.center.x=this.readBigEndianDouble();
					this.center.y=this.readBigEndianDouble();
					this.center.z=this.readBigEndianDouble();
					this.oldDiameter=this.readBigEndianDouble();
					this.newDiameter=this.readBigEndianDouble();
					this.speed=this.readVarulong();
					this.portalTeleportBoundary=this.readVaruint();
					this.warningTime=this.readVaruint();
					this.warningBlocks=this.readVaruint();
					break;
				case 4:
					this.warningTime=this.readVaruint();
					break;
				case 5:
					this.warningBlocks=this.readVaruint();
					break;
				default: break;
			}
			return this;
		}

	}
	,

	Camera: class extends Buffer{

		static get ID(){return 57;};

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
			this.writeVaruint(57);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
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
			return this;
		}

	}
	,

	HeldItemChange: class extends Buffer{

		static get ID(){return 58;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(slot=0){
			super();
			this.slot = slot;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(58);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.slot);
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
			this.slot=this.readByte();
			traceDecode('slot');
			return this;
		}

	}
	,

	DisplayScoreboard: class extends Buffer{

		static get ID(){return 59;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=0,scoreName=""){
			super();
			this.position = position;
			this.scoreName = scoreName;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(59);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.position);
			var dhc5y9z5=this.encodeString(this.scoreName);
			this.writeVaruint(dhc5y9z5.length);
			this.writeBytes(dhc5y9z5);
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
			this.position=this.readByte();
			traceDecode('position');
			var dhc5y9z5=this.readVaruint();
			this.scoreName=this.decodeString(this.readBytes(dhc5y9z5));
			traceDecode('scoreName');
			return this;
		}

	}
	,

	EntityMetadata: class extends Buffer{

		static get ID(){return 60;};

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
			this.writeVaruint(60);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeBytes(this.metadata.encodeBody(true));
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
			this.metadata=new Metadata().decodeBody(this._buffer);
			this._buffer=this.metadata._buffer;
			traceDecode('metadata');
			return this;
		}

	}
	,

	AttachEntity: class extends Buffer{

		static get ID(){return 61;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(target=0,holder=0){
			super();
			this.target = target;
			this.holder = holder;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(61);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianInt(this.target);
			this.writeBigEndianInt(this.holder);
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
			this.target=this.readBigEndianInt();
			traceDecode('target');
			this.holder=this.readBigEndianInt();
			traceDecode('holder');
			return this;
		}

	}
	,

	EntityVelocity: class extends Buffer{

		static get ID(){return 62;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,velocity={x:0,y:0,z:0}){
			super();
			this.entityId = entityId;
			this.velocity = velocity;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(62);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeBigEndianShort(this.velocity.x);
			this.writeBigEndianShort(this.velocity.y);
			this.writeBigEndianShort(this.velocity.z);
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
			this.velocity={};
			this.velocity.x=this.readBigEndianShort();
			this.velocity.y=this.readBigEndianShort();
			this.velocity.z=this.readBigEndianShort();
			traceDecode('velocity');
			return this;
		}

	}
	,

	EntityEquipment: class extends Buffer{

		static get ID(){return 63;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,slot=0,item=new Types.Slot()){
			super();
			this.entityId = entityId;
			this.slot = slot;
			this.item = item;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(63);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeVaruint(this.slot);
			this.writeBytes(this.item.encodeBody(true));
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
			this.slot=this.readVaruint();
			traceDecode('slot');
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			return this;
		}

	}
	,

	SetExperience: class extends Buffer{

		static get ID(){return 64;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(experience=.0,level=0,totalExperience=0){
			super();
			this.experience = experience;
			this.level = level;
			this.totalExperience = totalExperience;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(64);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianFloat(this.experience);
			this.writeVaruint(this.level);
			this.writeVaruint(this.totalExperience);
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
			this.experience=this.readBigEndianFloat();
			traceDecode('experience');
			this.level=this.readVaruint();
			traceDecode('level');
			this.totalExperience=this.readVaruint();
			traceDecode('totalExperience');
			return this;
		}

	}
	,

	UpdateHealth: class extends Buffer{

		static get ID(){return 65;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(health=.0,hunger=0,saturation=.0){
			super();
			this.health = health;
			this.hunger = hunger;
			this.saturation = saturation;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(65);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianFloat(this.health);
			this.writeVaruint(this.hunger);
			this.writeBigEndianFloat(this.saturation);
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
			this.health=this.readBigEndianFloat();
			traceDecode('health');
			this.hunger=this.readVaruint();
			traceDecode('hunger');
			this.saturation=this.readBigEndianFloat();
			traceDecode('saturation');
			return this;
		}

	}
	,

	ScoreboardObjective: class extends Buffer{

		static get ID(){return 66;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(name="",mode=0,value="",type=""){
			super();
			this.name = name;
			this.mode = mode;
			this.value = value;
			this.type = type;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(66);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeByte(this.mode);
			if(mode!=1){
				var dhc5yxz=this.encodeString(this.value);
				this.writeVaruint(dhc5yxz.length);
				this.writeBytes(dhc5yxz);
			}
			if(mode!=1){
				var dhc5eb=this.encodeString(this.type);
				this.writeVaruint(dhc5eb.length);
				this.writeBytes(dhc5eb);
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
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			this.mode=this.readByte();
			traceDecode('mode');
			if(mode!=1){
				var dhc5yxz=this.readVaruint();
				this.value=this.decodeString(this.readBytes(dhc5yxz));
				traceDecode('value');
			}
			if(mode!=1){
				var dhc5eb=this.readVaruint();
				this.type=this.decodeString(this.readBytes(dhc5eb));
				traceDecode('type');
			}
			return this;
		}

	}
	,

	SetPassengers: class extends Buffer{

		static get ID(){return 67;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,passengers=new Uint32Array(0)){
			super();
			this.entityId = entityId;
			this.passengers = passengers;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(67);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeVaruint(this.passengers.length);
			for(var dhc5ynz5 in this.passengers){
				this.writeVaruint(this.passengers[dhc5ynz5]);
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
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			var aramcfcv=this.readVaruint();
			this.passengers=[];
			for(var dhc5ynz5=0;dhc5ynz5<aramcfcv;dhc5ynz5++){
				this.passengers[dhc5ynz5]=this.readVaruint();
			}
			traceDecode('passengers');
			return this;
		}

	}
	,

	Teams: class extends Buffer{

		static get ID(){return 68;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		static get CREATE_TEAM(){return 0;};
		static get REMOVE_TEAM(){return 1;};
		static get UPDATE_TEAM_INFO(){return 2;};
		static get ADD_PLAYERS(){return 3;};
		static get REMOVE_PLAYERS(){return 4;};

		constructor(name="",mode=0){
			super();
			this.name = name;
			this.mode = mode;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(68);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeByte(this.mode);
			switch(this.mode){
				case 0:
					var dhc5y1=this.encodeString(this.name);
					this.writeVaruint(dhc5y1.length);
					this.writeBytes(dhc5y1);
					this.writeByte(this.mode);
					break;
				case 1:
					var dhc5y1=this.encodeString(this.name);
					this.writeVaruint(dhc5y1.length);
					this.writeBytes(dhc5y1);
					this.writeByte(this.mode);
					break;
				case 2:
					var dhc5y1=this.encodeString(this.name);
					this.writeVaruint(dhc5y1.length);
					this.writeBytes(dhc5y1);
					this.writeByte(this.mode);
					break;
				case 3:
					var dhc5y1=this.encodeString(this.name);
					this.writeVaruint(dhc5y1.length);
					this.writeBytes(dhc5y1);
					this.writeByte(this.mode);
					break;
				case 4:
					var dhc5y1=this.encodeString(this.name);
					this.writeVaruint(dhc5y1.length);
					this.writeBytes(dhc5y1);
					this.writeByte(this.mode);
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
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			this.mode=this.readByte();
			traceDecode('mode');
			switch(this.mode){
				case 0:
					var dhc5anbf=this.readVaruint();
					this.displayName=this.decodeString(this.readBytes(dhc5anbf));
					var dhc5cvag=this.readVaruint();
					this.prefix=this.decodeString(this.readBytes(dhc5cvag));
					var dhc5dzag=this.readVaruint();
					this.suffix=this.decodeString(this.readBytes(dhc5dzag));
					this.friendlyFlags=this.readByte();
					var dhc5y1df=this.readVaruint();
					this.nametagVisibility=this.decodeString(this.readBytes(dhc5y1df));
					var dhc5bxan=this.readVaruint();
					this.collisionRule=this.decodeString(this.readBytes(dhc5bxan));
					this.color=this.readByte();
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						var dhc5bfzj=this.readVaruint();
						this.players[dhc5bfzj]=this.decodeString(this.readBytes(dhc5bfzj));
					}
					break;
				case 1:
					break;
				case 2:
					var dhc5anbf=this.readVaruint();
					this.displayName=this.decodeString(this.readBytes(dhc5anbf));
					var dhc5cvag=this.readVaruint();
					this.prefix=this.decodeString(this.readBytes(dhc5cvag));
					var dhc5dzag=this.readVaruint();
					this.suffix=this.decodeString(this.readBytes(dhc5dzag));
					this.friendlyFlags=this.readByte();
					var dhc5y1df=this.readVaruint();
					this.nametagVisibility=this.decodeString(this.readBytes(dhc5y1df));
					var dhc5bxan=this.readVaruint();
					this.collisionRule=this.decodeString(this.readBytes(dhc5bxan));
					this.color=this.readByte();
					break;
				case 3:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						var dhc5bfzj=this.readVaruint();
						this.players[dhc5bfzj]=this.decodeString(this.readBytes(dhc5bfzj));
					}
					break;
				case 4:
					var aramcxev=this.readVaruint();
					this.players=[];
					for(var dhc5bfzj=0;dhc5bfzj<aramcxev;dhc5bfzj++){
						var dhc5bfzj=this.readVaruint();
						this.players[dhc5bfzj]=this.decodeString(this.readBytes(dhc5bfzj));
					}
					break;
				default: break;
			}
			return this;
		}

	}
	,

	UpdateScore: class extends Buffer{

		static get ID(){return 69;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(scoreName="",action=0,objectiveName="",value=0){
			super();
			this.scoreName = scoreName;
			this.action = action;
			this.objectiveName = objectiveName;
			this.value = value;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(69);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y9z5=this.encodeString(this.scoreName);
			this.writeVaruint(dhc5y9z5.length);
			this.writeBytes(dhc5y9z5);
			this.writeByte(this.action);
			var dhc5ypyr=this.encodeString(this.objectiveName);
			this.writeVaruint(dhc5ypyr.length);
			this.writeBytes(dhc5ypyr);
			if(action==0){
				this.writeVaruint(this.value);
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
			var dhc5y9z5=this.readVaruint();
			this.scoreName=this.decodeString(this.readBytes(dhc5y9z5));
			traceDecode('scoreName');
			this.action=this.readByte();
			traceDecode('action');
			var dhc5ypyr=this.readVaruint();
			this.objectiveName=this.decodeString(this.readBytes(dhc5ypyr));
			traceDecode('objectiveName');
			if(action==0){
				this.value=this.readVaruint();
				traceDecode('value');
			}
			return this;
		}

	}
	,

	SpawnPosition: class extends Buffer{

		static get ID(){return 70;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(position=0){
			super();
			this.position = position;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(70);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.position);
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
			return this;
		}

	}
	,

	TimeUpdate: class extends Buffer{

		static get ID(){return 71;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(worldAge=0,time=0){
			super();
			this.worldAge = worldAge;
			this.time = time;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(71);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianLong(this.worldAge);
			this.writeBigEndianLong(this.time);
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
			this.worldAge=this.readBigEndianLong();
			traceDecode('worldAge');
			this.time=this.readBigEndianLong();
			traceDecode('time');
			return this;
		}

	}
	,

	Title: class extends Buffer{

		static get ID(){return 72;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		static get SET_TITLE(){return 0;};
		static get SET_SUBTITLE(){return 1;};
		static get SET_ACTION_BAR(){return 2;};
		static get SET_TIMINGS(){return 3;};
		static get HIDE(){return 4;};
		static get RESET(){return 5;};

		constructor(action=0){
			super();
			this.action = action;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(72);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.action);
			switch(this.action){
				case 0:
					this.writeVaruint(this.action);
					break;
				case 1:
					this.writeVaruint(this.action);
					break;
				case 2:
					this.writeVaruint(this.action);
					break;
				case 3:
					this.writeVaruint(this.action);
					break;
				case 4:
					this.writeVaruint(this.action);
					break;
				case 5:
					this.writeVaruint(this.action);
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
			this.action=this.readVaruint();
			traceDecode('action');
			switch(this.action){
				case 0:
					var dhc5zh=this.readVaruint();
					this.text=this.decodeString(this.readBytes(dhc5zh));
					break;
				case 1:
					var dhc5zh=this.readVaruint();
					this.text=this.decodeString(this.readBytes(dhc5zh));
					break;
				case 2:
					var dhc5zh=this.readVaruint();
					this.text=this.decodeString(this.readBytes(dhc5zh));
					break;
				case 3:
					this.fadeIn=this.readBigEndianInt();
					this.stay=this.readBigEndianInt();
					this.fadeOut=this.readBigEndianInt();
					break;
				case 4:
					break;
				case 5:
					break;
				default: break;
			}
			return this;
		}

	}
	,

	SoundEffect: class extends Buffer{

		static get ID(){return 73;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(soundId=0,category=0,position={x:0,y:0,z:0},volume=.0,pitch=.0){
			super();
			this.soundId = soundId;
			this.category = category;
			this.position = position;
			this.volume = volume;
			this.pitch = pitch;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(73);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.soundId);
			this.writeVaruint(this.category);
			this.writeBigEndianInt(this.position.x);
			this.writeBigEndianInt(this.position.y);
			this.writeBigEndianInt(this.position.z);
			this.writeBigEndianFloat(this.volume);
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
			this.soundId=this.readVaruint();
			traceDecode('soundId');
			this.category=this.readVaruint();
			traceDecode('category');
			this.position={};
			this.position.x=this.readBigEndianInt();
			this.position.y=this.readBigEndianInt();
			this.position.z=this.readBigEndianInt();
			traceDecode('position');
			this.volume=this.readBigEndianFloat();
			traceDecode('volume');
			this.pitch=this.readBigEndianFloat();
			traceDecode('pitch');
			return this;
		}

	}
	,

	PlayerListHeaderAndFooter: class extends Buffer{

		static get ID(){return 74;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(header="",footer=""){
			super();
			this.header = header;
			this.footer = footer;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(74);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5zfzi=this.encodeString(this.header);
			this.writeVaruint(dhc5zfzi.length);
			this.writeBytes(dhc5zfzi);
			var dhc5b9zi=this.encodeString(this.footer);
			this.writeVaruint(dhc5b9zi.length);
			this.writeBytes(dhc5b9zi);
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
			var dhc5zfzi=this.readVaruint();
			this.header=this.decodeString(this.readBytes(dhc5zfzi));
			traceDecode('header');
			var dhc5b9zi=this.readVaruint();
			this.footer=this.decodeString(this.readBytes(dhc5b9zi));
			traceDecode('footer');
			return this;
		}

	}
	,

	CollectItem: class extends Buffer{

		static get ID(){return 75;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(collected=0,collector=0,count=0){
			super();
			this.collected = collected;
			this.collector = collector;
			this.count = count;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(75);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.collected);
			this.writeVaruint(this.collector);
			this.writeVaruint(this.count);
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
			this.collected=this.readVaruint();
			traceDecode('collected');
			this.collector=this.readVaruint();
			traceDecode('collector');
			this.count=this.readVaruint();
			traceDecode('count');
			return this;
		}

	}
	,

	EntityTeleport: class extends Buffer{

		static get ID(){return 76;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,position={x:0,y:0,z:0},yaw=0,pitch=0,onGround=false){
			super();
			this.entityId = entityId;
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
			this.writeVaruint(76);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeBigEndianDouble(this.position.x);
			this.writeBigEndianDouble(this.position.y);
			this.writeBigEndianDouble(this.position.z);
			this.writeByte(this.yaw);
			this.writeByte(this.pitch);
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
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			this.position={};
			this.position.x=this.readBigEndianDouble();
			this.position.y=this.readBigEndianDouble();
			this.position.z=this.readBigEndianDouble();
			traceDecode('position');
			this.yaw=this.readByte();
			traceDecode('yaw');
			this.pitch=this.readByte();
			traceDecode('pitch');
			this.onGround=this.readBool();
			traceDecode('onGround');
			return this;
		}

	}
	,

	Advencements: class extends Buffer{

		static get ID(){return 77;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(){
			super();
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(77);
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
			var _id=this.readVaruint();
			return this.decodeBody(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			return this;
		}

	}
	,

	EntityProperties: class extends Buffer{

		static get ID(){return 78;};

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
			this.writeVaruint(78);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeBigEndianInt(this.attributes.length);
			for(var dhc5draj in this.attributes){
				this.writeBytes(this.attributes[dhc5draj].encodeBody(true));
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
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			var aramyrcl=this.readBigEndianInt();
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

	EntityEffect: class extends Buffer{

		static get ID(){return 79;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(entityId=0,effectId=0,amplifier=0,duration=0,flags=0){
			super();
			this.entityId = entityId;
			this.effectId = effectId;
			this.amplifier = amplifier;
			this.duration = duration;
			this.flags = flags;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeVaruint(79);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.entityId);
			this.writeByte(this.effectId);
			this.writeByte(this.amplifier);
			this.writeVaruint(this.duration);
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
			this.entityId=this.readVaruint();
			traceDecode('entityId');
			this.effectId=this.readByte();
			traceDecode('effectId');
			this.amplifier=this.readByte();
			traceDecode('amplifier');
			this.duration=this.readVaruint();
			traceDecode('duration');
			this.flags=this.readByte();
			traceDecode('flags');
			return this;
		}

	}

}