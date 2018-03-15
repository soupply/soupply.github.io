const Types ={

	LoginBody: class extends Buffer{

		constructor(chain=new Uint8Array(0),clientData=new Uint8Array(0)){
			super();
			this.chain = chain;
			this.clientData = clientData;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianInt(this.chain.length);
			this.writeBytes(this.chain);
			this.writeLittleEndianInt(this.clientData.length);
			this.writeBytes(this.clientData);
			var _buffer=this._buffer;
			this.reset();
			this.writeVaruint(_buffer.length);
			this.writeBytes(_buffer);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var _length=this.readVaruint();
			_buffer=this._buffer.slice(_length);
			if(this._buffer.length>_length){
				this._buffer.length=_length;
			}
			var aramyha4=this.readVaruint();
			this.chain=this.readBytes(aramyha4);
			traceDecode('chain');
			var aramyxz5=this.readVaruint();
			this.clientData=this.readBytes(aramyxz5);
			traceDecode('clientData');
			this._buffer=_buffer;
			return this;
		}

	}
	,

	PackWithSize: class extends Buffer{

		constructor(id="",version="",size=0,unknown3="",unknown4=""){
			super();
			this.id = id;
			this.version = version;
			this.size = size;
			this.unknown3 = unknown3;
			this.unknown4 = unknown4;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5z=this.encodeString(this.id);
			this.writeVaruint(dhc5z.length);
			this.writeBytes(dhc5z);
			var dhc5zja9=this.encodeString(this.version);
			this.writeVaruint(dhc5zja9.length);
			this.writeBytes(dhc5zja9);
			this.writeLittleEndianLong(this.size);
			var dhc5btbd=this.encodeString(this.unknown3);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			var dhc5btbd=this.encodeString(this.unknown4);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5z=this.readVaruint();
			this.id=this.decodeString(this.readBytes(dhc5z));
			traceDecode('id');
			var dhc5zja9=this.readVaruint();
			this.version=this.decodeString(this.readBytes(dhc5zja9));
			traceDecode('version');
			this.size=this.readLittleEndianLong();
			traceDecode('size');
			var dhc5btbd=this.readVaruint();
			this.unknown3=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown3');
			var dhc5btbd=this.readVaruint();
			this.unknown4=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown4');
			return this;
		}

	}
	,

	Pack: class extends Buffer{

		constructor(id="",version="",unknown2=""){
			super();
			this.id = id;
			this.version = version;
			this.unknown2 = unknown2;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5z=this.encodeString(this.id);
			this.writeVaruint(dhc5z.length);
			this.writeBytes(dhc5z);
			var dhc5zja9=this.encodeString(this.version);
			this.writeVaruint(dhc5zja9.length);
			this.writeBytes(dhc5zja9);
			var dhc5btbd=this.encodeString(this.unknown2);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5z=this.readVaruint();
			this.id=this.decodeString(this.readBytes(dhc5z));
			traceDecode('id');
			var dhc5zja9=this.readVaruint();
			this.version=this.decodeString(this.readBytes(dhc5zja9));
			traceDecode('version');
			var dhc5btbd=this.readVaruint();
			this.unknown2=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown2');
			return this;
		}

	}
	,

	Slot: class extends Buffer{

		constructor(id=0,metaAndCount=0,nbt=new Uint8Array(0),canPlaceOn=[],canDestroy=[]){
			super();
			this.id = id;
			this.metaAndCount = metaAndCount;
			this.nbt = nbt;
			this.canPlaceOn = canPlaceOn;
			this.canDestroy = canDestroy;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.id);
			if(id>0){
				this.writeVarint(this.metaAndCount);
			}
			if(id>0){
				this.writeLittleEndianShort(this.nbt.length);
				this.writeBytes(this.nbt);
			}
			this.writeVaruint(this.canPlaceOn.length);
			for(var dhc5y5bf in this.canPlaceOn){
				var dhc5y5bf=this.encodeString(this.canPlaceOn[dhc5y5bf]);
				this.writeVaruint(dhc5y5bf.length);
				this.writeBytes(dhc5y5bf);
			}
			this.writeVaruint(this.canDestroy.length);
			for(var dhc5y5zn in this.canDestroy){
				var dhc5y5zn=this.encodeString(this.canDestroy[dhc5y5zn]);
				this.writeVaruint(dhc5y5zn.length);
				this.writeBytes(dhc5y5zn);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.id=this.readVarint();
			traceDecode('id');
			if(id>0){
				this.metaAndCount=this.readVarint();
				traceDecode('metaAndCount');
			}
			if(id>0){
				var arambj=this.readVaruint();
				this.nbt=this.readBytes(arambj);
				traceDecode('nbt');
			}
			var aramyfux=this.readVaruint();
			this.canPlaceOn=[];
			for(var dhc5y5bf=0;dhc5y5bf<aramyfux;dhc5y5bf++){
				var dhc5y5bf=this.readVaruint();
				this.canPlaceOn[dhc5y5bf]=this.decodeString(this.readBytes(dhc5y5bf));
			}
			traceDecode('canPlaceOn');
			var aramyfrv=this.readVaruint();
			this.canDestroy=[];
			for(var dhc5y5zn=0;dhc5y5zn<aramyfrv;dhc5y5zn++){
				var dhc5y5zn=this.readVaruint();
				this.canDestroy[dhc5y5zn]=this.decodeString(this.readBytes(dhc5y5zn));
			}
			traceDecode('canDestroy');
			return this;
		}

	}
	,

	Attribute: class extends Buffer{

		constructor(min=.0,max=.0,value=.0,default_=.0,name=""){
			super();
			this.min = min;
			this.max = max;
			this.value = value;
			this.default_ = default_;
			this.name = name;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianFloat(this.min);
			this.writeLittleEndianFloat(this.max);
			this.writeLittleEndianFloat(this.value);
			this.writeLittleEndianFloat(this.default_);
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.min=this.readLittleEndianFloat();
			traceDecode('min');
			this.max=this.readLittleEndianFloat();
			traceDecode('max');
			this.value=this.readLittleEndianFloat();
			traceDecode('value');
			this.default_=this.readLittleEndianFloat();
			traceDecode('default_');
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			return this;
		}

	}
	,

	BlockPosition: class extends Buffer{

		constructor(x=0,y=0,z=0){
			super();
			this.x = x;
			this.y = y;
			this.z = z;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.x);
			this.writeVaruint(this.y);
			this.writeVarint(this.z);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.x=this.readVarint();
			traceDecode('x');
			this.y=this.readVaruint();
			traceDecode('y');
			this.z=this.readVarint();
			traceDecode('z');
			return this;
		}

	}
	,

	McpeUuid: class extends Buffer{

		constructor(mostSignificantBits=0,leastSignificantBits=0){
			super();
			this.mostSignificantBits = mostSignificantBits;
			this.leastSignificantBits = leastSignificantBits;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeLittleEndianLong(this.mostSignificantBits);
			this.writeLittleEndianLong(this.leastSignificantBits);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.mostSignificantBits=this.readLittleEndianLong();
			traceDecode('mostSignificantBits');
			this.leastSignificantBits=this.readLittleEndianLong();
			traceDecode('leastSignificantBits');
			return this;
		}

	}
	,

	PlayerList: class extends Buffer{

		constructor(uuid=new Types.McpeUuid(),entityId=0,displayName="",skin=new Types.Skin(),unknown4=""){
			super();
			this.uuid = uuid;
			this.entityId = entityId;
			this.displayName = displayName;
			this.skin = skin;
			this.unknown4 = unknown4;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid.encodeBody(true));
			this.writeVarlong(this.entityId);
			var dhc5anbf=this.encodeString(this.displayName);
			this.writeVaruint(dhc5anbf.length);
			this.writeBytes(dhc5anbf);
			this.writeBytes(this.skin.encodeBody(true));
			var dhc5btbd=this.encodeString(this.unknown4);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=new Types.McpeUuid().decodeBody(this._buffer);
			this._buffer=this.uuid._buffer;
			traceDecode('uuid');
			this.entityId=this.readVarlong();
			traceDecode('entityId');
			var dhc5anbf=this.readVaruint();
			this.displayName=this.decodeString(this.readBytes(dhc5anbf));
			traceDecode('displayName');
			this.skin=new Types.Skin().decodeBody(this._buffer);
			this._buffer=this.skin._buffer;
			traceDecode('skin');
			var dhc5btbd=this.readVaruint();
			this.unknown4=this.decodeString(this.readBytes(dhc5btbd));
			traceDecode('unknown4');
			return this;
		}

	}
	,

	Skin: class extends Buffer{

		constructor(name="",data=new Uint8Array(0),capeData=new Uint8Array(0),geometryName="",geometryData=new Uint8Array(0)){
			super();
			this.name = name;
			this.data = data;
			this.capeData = capeData;
			this.geometryName = geometryName;
			this.geometryData = geometryData;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.data.length);
			this.writeBytes(this.data);
			this.writeVaruint(this.capeData.length);
			this.writeBytes(this.capeData);
			var dhc5z9zr=this.encodeString(this.geometryName);
			this.writeVaruint(dhc5z9zr.length);
			this.writeBytes(dhc5z9zr);
			this.writeVaruint(this.geometryData.length);
			this.writeBytes(this.geometryData);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			var aramzfy=this.readVaruint();
			this.data=this.readBytes(aramzfy);
			traceDecode('data');
			var aramyfzr=this.readVaruint();
			this.capeData=this.readBytes(aramyfzr);
			traceDecode('capeData');
			var dhc5z9zr=this.readVaruint();
			this.geometryName=this.decodeString(this.readBytes(dhc5z9zr));
			traceDecode('geometryName');
			var aramzvbv=this.readVaruint();
			this.geometryData=this.readBytes(aramzvbv);
			traceDecode('geometryData');
			return this;
		}

	}
	,

	Link: class extends Buffer{

		constructor(from=0,to=0,action=0,unknown3=0){
			super();
			this.from = from;
			this.to = to;
			this.action = action;
			this.unknown3 = unknown3;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarlong(this.from);
			this.writeVarlong(this.to);
			this.writeByte(this.action);
			this.writeByte(this.unknown3);
			return new Uint8Array(this._buffer);
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
			this.unknown3=this.readByte();
			traceDecode('unknown3');
			return this;
		}

	}
	,

	Recipe: class extends Buffer{

		constructor(type=0,data=new Types.Bytes()){
			super();
			this.type = type;
			this.data = data;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.type);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readVarint();
			traceDecode('type');
			this.data=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('data');
			return this;
		}

	}
	,

	InventoryAction: class extends Buffer{

		constructor(source=0,container=-1,unknown2=0,slot=0,oldItem=new Types.Slot(),newItem=new Types.Slot()){
			super();
			this.source = source;
			this.container = container;
			this.unknown2 = unknown2;
			this.slot = slot;
			this.oldItem = oldItem;
			this.newItem = newItem;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.source);
			if(source==0){
				this.writeVarint(this.container);
			}
			if(source==2){
				this.writeVaruint(this.unknown2);
			}
			this.writeVaruint(this.slot);
			this.writeBytes(this.oldItem.encodeBody(true));
			this.writeBytes(this.newItem.encodeBody(true));
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.source=this.readVaruint();
			traceDecode('source');
			if(source==0){
				this.container=this.readVarint();
				traceDecode('container');
			}
			if(source==2){
				this.unknown2=this.readVaruint();
				traceDecode('unknown2');
			}
			this.slot=this.readVaruint();
			traceDecode('slot');
			this.oldItem=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.oldItem._buffer;
			traceDecode('oldItem');
			this.newItem=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.newItem._buffer;
			traceDecode('newItem');
			return this;
		}

	}
	,

	ChunkData: class extends Buffer{

		constructor(sections=[],heights=new Uint16Array(256),biomes=new Uint8Array(256),borders=new Uint8Array(0),extraData=[],blockEntities=new Types.Bytes()){
			super();
			this.sections = sections;
			this.heights = heights;
			this.biomes = biomes;
			this.borders = borders;
			this.extraData = extraData;
			this.blockEntities = blockEntities;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.sections.length);
			for(var dhc5zna9 in this.sections){
				this.writeBytes(this.sections[dhc5zna9].encodeBody(true));
			}
			for(var dhc5zlar in this.heights){
				this.writeLittleEndianShort(this.heights[dhc5zlar]);
			}
			this.writeBytes(this.biomes);
			this.writeVaruint(this.borders.length);
			this.writeBytes(this.borders);
			this.writeVaruint(this.extraData.length);
			for(var dhc5eryr in this.extraData){
				this.writeBytes(this.extraData[dhc5eryr].encodeBody(true));
			}
			this.writeBytes(this.blockEntities);
			var _buffer=this._buffer;
			this.reset();
			this.writeVaruint(_buffer.length);
			this.writeBytes(_buffer);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var _length=this.readVaruint();
			_buffer=this._buffer.slice(_length);
			if(this._buffer.length>_length){
				this._buffer.length=_length;
			}
			var aramcvdl=this.readVaruint();
			this.sections=[];
			for(var dhc5zna9=0;dhc5zna9<aramcvdl;dhc5zna9++){
				this.sections[dhc5zna9]=new Types.Section().decodeBody(this._buffer);
				this._buffer=this.sections[dhc5zna9]._buffer;
			}
			traceDecode('sections');
			var aramavzh=256;
			this.heights=[];
			for(var dhc5zlar=0;dhc5zlar<aramavzh;dhc5zlar++){
				this.heights[dhc5zlar]=this.readLittleEndianShort();
			}
			traceDecode('heights');
			var aramylbv=256;
			this.biomes=this.readBytes(aramylbv);
			traceDecode('biomes');
			var aramy9zv=this.readVaruint();
			this.borders=this.readBytes(aramy9zv);
			traceDecode('borders');
			var aramzhcf=this.readVaruint();
			this.extraData=[];
			for(var dhc5eryr=0;dhc5eryr<aramzhcf;dhc5eryr++){
				this.extraData[dhc5eryr]=new Types.ExtraData().decodeBody(this._buffer);
				this._buffer=this.extraData[dhc5eryr]._buffer;
			}
			traceDecode('extraData');
			this.blockEntities=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('blockEntities');
			this._buffer=_buffer;
			return this;
		}

	}
	,

	Section: class extends Buffer{

		constructor(storageVersion=0,blockIds=new Uint8Array(4096),blockMetas=new Uint8Array(2048)){
			super();
			this.storageVersion = storageVersion;
			this.blockIds = blockIds;
			this.blockMetas = blockMetas;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.storageVersion);
			this.writeBytes(this.blockIds);
			this.writeBytes(this.blockMetas);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.storageVersion=this.readByte();
			traceDecode('storageVersion');
			var aramyxyt=4096;
			this.blockIds=this.readBytes(aramyxyt);
			traceDecode('blockIds');
			var aramyxyt=2048;
			this.blockMetas=this.readBytes(aramyxyt);
			traceDecode('blockMetas');
			return this;
		}

	}
	,

	ExtraData: class extends Buffer{

		constructor(key=0,value=0){
			super();
			this.key = key;
			this.value = value;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.key);
			this.writeLittleEndianShort(this.value);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.key=this.readVaruint();
			traceDecode('key');
			this.value=this.readLittleEndianShort();
			traceDecode('value');
			return this;
		}

	}
	,

	Decoration: class extends Buffer{

		constructor(rotationAndIcon=0,position={x:0,z:0},label="",color=0){
			super();
			this.rotationAndIcon = rotationAndIcon;
			this.position = position;
			this.label = label;
			this.color = color;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVarint(this.rotationAndIcon);
			this.writeByte(this.position.x);
			this.writeByte(this.position.z);
			var dhc5yjb=this.encodeString(this.label);
			this.writeVaruint(dhc5yjb.length);
			this.writeBytes(dhc5yjb);
			this.writeLittleEndianInt(this.color);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.rotationAndIcon=this.readVarint();
			traceDecode('rotationAndIcon');
			this.position={};
			this.position.x=this.readByte();
			this.position.z=this.readByte();
			traceDecode('position');
			var dhc5yjb=this.readVaruint();
			this.label=this.decodeString(this.readBytes(dhc5yjb));
			traceDecode('label');
			this.color=this.readLittleEndianInt();
			traceDecode('color');
			return this;
		}

	}
	,

	Rule: class extends Buffer{

		constructor(name="",type=0,booleanValue=false,integerValue=0,floatingValue=.0){
			super();
			this.name = name;
			this.type = type;
			this.booleanValue = booleanValue;
			this.integerValue = integerValue;
			this.floatingValue = floatingValue;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeByte(this.type);
			if(type==1){
				this.writeBool(this.booleanValue);
			}
			if(type==2){
				this.writeVaruint(this.integerValue);
			}
			if(type==3){
				this.writeLittleEndianFloat(this.floatingValue);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			this.type=this.readByte();
			traceDecode('type');
			if(type==1){
				this.booleanValue=this.readBool();
				traceDecode('booleanValue');
			}
			if(type==2){
				this.integerValue=this.readVaruint();
				traceDecode('integerValue');
			}
			if(type==3){
				this.floatingValue=this.readLittleEndianFloat();
				traceDecode('floatingValue');
			}
			return this;
		}

	}
	,

	Enum: class extends Buffer{

		constructor(name="",valuesIndexes=new Uint16Array(0)){
			super();
			this.name = name;
			this.valuesIndexes = valuesIndexes;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.valuesIndexes.length);
			for(var dhc5yxzn in this.valuesIndexes){
				this.writeLittleEndianShort(this.valuesIndexes[dhc5yxzn]);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			var aramdfdv=this.readVaruint();
			this.valuesIndexes=[];
			for(var dhc5yxzn=0;dhc5yxzn<aramdfdv;dhc5yxzn++){
				this.valuesIndexes[dhc5yxzn]=this.readLittleEndianShort();
			}
			traceDecode('valuesIndexes');
			return this;
		}

	}
	,

	Command: class extends Buffer{

		constructor(name="",description="",unknown2=0,permissionLevel=0,aliasesEnum=-1,overloads=[]){
			super();
			this.name = name;
			this.description = description;
			this.unknown2 = unknown2;
			this.permissionLevel = permissionLevel;
			this.aliasesEnum = aliasesEnum;
			this.overloads = overloads;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			var dhc5zncl=this.encodeString(this.description);
			this.writeVaruint(dhc5zncl.length);
			this.writeBytes(dhc5zncl);
			this.writeByte(this.unknown2);
			this.writeByte(this.permissionLevel);
			this.writeLittleEndianInt(this.aliasesEnum);
			this.writeVaruint(this.overloads.length);
			for(var dhc5dvb9 in this.overloads){
				this.writeBytes(this.overloads[dhc5dvb9].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			var dhc5zncl=this.readVaruint();
			this.description=this.decodeString(this.readBytes(dhc5zncl));
			traceDecode('description');
			this.unknown2=this.readByte();
			traceDecode('unknown2');
			this.permissionLevel=this.readByte();
			traceDecode('permissionLevel');
			this.aliasesEnum=this.readLittleEndianInt();
			traceDecode('aliasesEnum');
			var arambzcx=this.readVaruint();
			this.overloads=[];
			for(var dhc5dvb9=0;dhc5dvb9<arambzcx;dhc5dvb9++){
				this.overloads[dhc5dvb9]=new Types.Overload().decodeBody(this._buffer);
				this._buffer=this.overloads[dhc5dvb9]._buffer;
			}
			traceDecode('overloads');
			return this;
		}

	}
	,

	Overload: class extends Buffer{

		constructor(parameters=[]){
			super();
			this.parameters = parameters;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.parameters.length);
			for(var dhc5yjbv in this.parameters){
				this.writeBytes(this.parameters[dhc5yjbv].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var aramcfy1=this.readVaruint();
			this.parameters=[];
			for(var dhc5yjbv=0;dhc5yjbv<aramcfy1;dhc5yjbv++){
				this.parameters[dhc5yjbv]=new Types.Parameter().decodeBody(this._buffer);
				this._buffer=this.parameters[dhc5yjbv]._buffer;
			}
			traceDecode('parameters');
			return this;
		}

	}
	,

	Parameter: class extends Buffer{

		constructor(name="",type=0,optional=false){
			super();
			this.name = name;
			this.type = type;
			this.optional = optional;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeLittleEndianInt(this.type);
			this.writeBool(this.optional);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			this.type=this.readLittleEndianInt();
			traceDecode('type');
			this.optional=this.readBool();
			traceDecode('optional');
			return this;
		}

	}

}
