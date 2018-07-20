const Types ={

	Slot: class extends Buffer{

		constructor(id=0,count=0,nbt=new Types.Bytes()){
			super();
			this.id = id;
			this.count = count;
			this.nbt = nbt;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBigEndianShort(this.id);
			if(id>0){
				this.writeByte(this.count);
			}
			if(id>0){
				this.writeBytes(this.nbt);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.id=this.readBigEndianShort();
			traceDecode('id');
			if(id>0){
				this.count=this.readByte();
				traceDecode('count');
			}
			if(id>0){
				this.nbt=Array.from(this._buffer);
				this._buffer=[];
				traceDecode('nbt');
			}
			return this;
		}

	}
	,

	Particle: class extends Buffer{

		constructor(id=0,dataVaruint=0,dataFloat=.0,dataSlot=new Types.Slot()){
			super();
			this.id = id;
			this.dataVaruint = dataVaruint;
			this.dataFloat = dataFloat;
			this.dataSlot = dataSlot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.id);
			if(id==3||id==20){
				this.writeVaruint(this.dataVaruint);
			}
			if(id==11){
				this.writeBigEndianFloat(this.dataFloat);
			}
			if(id==27){
				this.writeBytes(this.dataSlot.encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.id=this.readVaruint();
			traceDecode('id');
			if(id==3||id==20){
				this.dataVaruint=this.readVaruint();
				traceDecode('dataVaruint');
			}
			if(id==11){
				this.dataFloat=this.readBigEndianFloat();
				traceDecode('dataFloat');
			}
			if(id==27){
				this.dataSlot=new Types.Slot().decodeBody(this._buffer);
				this._buffer=this.dataSlot._buffer;
				traceDecode('dataSlot');
			}
			return this;
		}

	}
	,

	Property: class extends Buffer{

		constructor(name="",value="",signed=false,signature=""){
			super();
			this.name = name;
			this.value = value;
			this.signed = signed;
			this.signature = signature;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			var dhc5yxz=this.encodeString(this.value);
			this.writeVaruint(dhc5yxz.length);
			this.writeBytes(dhc5yxz);
			this.writeBool(this.signed);
			if(signed==true){
				var dhc5adyr=this.encodeString(this.signature);
				this.writeVaruint(dhc5adyr.length);
				this.writeBytes(dhc5adyr);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			var dhc5yxz=this.readVaruint();
			this.value=this.decodeString(this.readBytes(dhc5yxz));
			traceDecode('value');
			this.signed=this.readBool();
			traceDecode('signed');
			if(signed==true){
				var dhc5adyr=this.readVaruint();
				this.signature=this.decodeString(this.readBytes(dhc5adyr));
				traceDecode('signature');
			}
			return this;
		}

	}
	,

	ListAddPlayer: class extends Buffer{

		constructor(uuid=new Uint8Array(16),name="",properties=[],gamemode=0,latency=0,hasDisplayName=false,displayName=""){
			super();
			this.uuid = uuid;
			this.name = name;
			this.properties = properties;
			this.gamemode = gamemode;
			this.latency = latency;
			this.hasDisplayName = hasDisplayName;
			this.displayName = displayName;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid);
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.properties.length);
			for(var dhc5c9zj in this.properties){
				this.writeBytes(this.properties[dhc5c9zj].encodeBody(true));
			}
			this.writeVaruint(this.gamemode);
			this.writeVaruint(this.latency);
			this.writeBool(this.hasDisplayName);
			if(hasDisplayName==true){
				var dhc5anbf=this.encodeString(this.displayName);
				this.writeVaruint(dhc5anbf.length);
				this.writeBytes(dhc5anbf);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			var aramcjcv=this.readVaruint();
			this.properties=[];
			for(var dhc5c9zj=0;dhc5c9zj<aramcjcv;dhc5c9zj++){
				this.properties[dhc5c9zj]=new Types.Property().decodeBody(this._buffer);
				this._buffer=this.properties[dhc5c9zj]._buffer;
			}
			traceDecode('properties');
			this.gamemode=this.readVaruint();
			traceDecode('gamemode');
			this.latency=this.readVaruint();
			traceDecode('latency');
			this.hasDisplayName=this.readBool();
			traceDecode('hasDisplayName');
			if(hasDisplayName==true){
				var dhc5anbf=this.readVaruint();
				this.displayName=this.decodeString(this.readBytes(dhc5anbf));
				traceDecode('displayName');
			}
			return this;
		}

	}
	,

	ListUpdateGamemode: class extends Buffer{

		constructor(uuid=new Uint8Array(16),gamemode=0){
			super();
			this.uuid = uuid;
			this.gamemode = gamemode;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid);
			this.writeVaruint(this.gamemode);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.gamemode=this.readVaruint();
			traceDecode('gamemode');
			return this;
		}

	}
	,

	ListUpdateLatency: class extends Buffer{

		constructor(uuid=new Uint8Array(16),latency=0){
			super();
			this.uuid = uuid;
			this.latency = latency;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid);
			this.writeVaruint(this.latency);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.latency=this.readVaruint();
			traceDecode('latency');
			return this;
		}

	}
	,

	ListUpdateDisplayName: class extends Buffer{

		constructor(uuid=new Uint8Array(16),hasDisplayName=false,displayName=""){
			super();
			this.uuid = uuid;
			this.hasDisplayName = hasDisplayName;
			this.displayName = displayName;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid);
			this.writeBool(this.hasDisplayName);
			if(hasDisplayName==true){
				var dhc5anbf=this.encodeString(this.displayName);
				this.writeVaruint(dhc5anbf.length);
				this.writeBytes(dhc5anbf);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.hasDisplayName=this.readBool();
			traceDecode('hasDisplayName');
			if(hasDisplayName==true){
				var dhc5anbf=this.readVaruint();
				this.displayName=this.decodeString(this.readBytes(dhc5anbf));
				traceDecode('displayName');
			}
			return this;
		}

	}
	,

	Modifier: class extends Buffer{

		constructor(uuid=new Uint8Array(16),amount=.0,operation=0){
			super();
			this.uuid = uuid;
			this.amount = amount;
			this.operation = operation;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.uuid);
			this.writeBigEndianDouble(this.amount);
			this.writeByte(this.operation);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			this.amount=this.readBigEndianDouble();
			traceDecode('amount');
			this.operation=this.readByte();
			traceDecode('operation');
			return this;
		}

	}
	,

	Attribute: class extends Buffer{

		constructor(key="",value=.0,modifiers=[]){
			super();
			this.key = key;
			this.value = value;
			this.modifiers = modifiers;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5zk=this.encodeString(this.key);
			this.writeVaruint(dhc5zk.length);
			this.writeBytes(dhc5zk);
			this.writeBigEndianDouble(this.value);
			this.writeVaruint(this.modifiers.length);
			for(var dhc5brzl in this.modifiers){
				this.writeBytes(this.modifiers[dhc5brzl].encodeBody(true));
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5zk=this.readVaruint();
			this.key=this.decodeString(this.readBytes(dhc5zk));
			traceDecode('key');
			this.value=this.readBigEndianDouble();
			traceDecode('value');
			var aramb9az=this.readVaruint();
			this.modifiers=[];
			for(var dhc5brzl=0;dhc5brzl<aramb9az;dhc5brzl++){
				this.modifiers[dhc5brzl]=new Types.Modifier().decodeBody(this._buffer);
				this._buffer=this.modifiers[dhc5brzl]._buffer;
			}
			traceDecode('modifiers');
			return this;
		}

	}
	,

	Entry: class extends Buffer{

		constructor(item=new Types.Slot(),craftingSlot=0,playerSlot=0){
			super();
			this.item = item;
			this.craftingSlot = craftingSlot;
			this.playerSlot = playerSlot;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBytes(this.item.encodeBody(true));
			this.writeByte(this.craftingSlot);
			this.writeByte(this.playerSlot);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.item=new Types.Slot().decodeBody(this._buffer);
			this._buffer=this.item._buffer;
			traceDecode('item');
			this.craftingSlot=this.readByte();
			traceDecode('craftingSlot');
			this.playerSlot=this.readByte();
			traceDecode('playerSlot');
			return this;
		}

	}
	,

	OptionalPosition: class extends Buffer{

		constructor(hasPosition=false,position=0){
			super();
			this.hasPosition = hasPosition;
			this.position = position;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.hasPosition);
			if(hasPosition==true){
				this.writeBigEndianLong(this.position);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.hasPosition=this.readBool();
			traceDecode('hasPosition');
			if(hasPosition==true){
				this.position=this.readBigEndianLong();
				traceDecode('position');
			}
			return this;
		}

	}
	,

	OptionalUuid: class extends Buffer{

		constructor(hasUuid=false,uuid=new Uint8Array(16)){
			super();
			this.hasUuid = hasUuid;
			this.uuid = uuid;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeBool(this.hasUuid);
			this.writeBytes(this.uuid);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.hasUuid=this.readBool();
			traceDecode('hasUuid');
			this.uuid=this.readBytes(16);
			traceDecode('uuid');
			return this;
		}

	}
	,

	Tag: class extends Buffer{

		constructor(name="",entries=new Uint32Array(0)){
			super();
			this.name = name;
			this.entries = entries;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.entries.length);
			for(var dhc5brav in this.entries){
				this.writeVaruint(this.entries[dhc5brav]);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			traceDecode('name');
			var aramz5cl=this.readVaruint();
			this.entries=[];
			for(var dhc5brav=0;dhc5brav<aramz5cl;dhc5brav++){
				this.entries[dhc5brav]=this.readVaruint();
			}
			traceDecode('entries');
			return this;
		}

	}
	,

	Statistic: class extends Buffer{

		constructor(category=0,statistic=0,value=0){
			super();
			this.category = category;
			this.statistic = statistic;
			this.value = value;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.category);
			this.writeVaruint(this.statistic);
			this.writeVaruint(this.value);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.category=this.readVaruint();
			traceDecode('category');
			this.statistic=this.readVaruint();
			traceDecode('statistic');
			this.value=this.readVaruint();
			traceDecode('value');
			return this;
		}

	}
	,

	BlockChange: class extends Buffer{

		constructor(xz=0,y=0,block=0){
			super();
			this.xz = xz;
			this.y = y;
			this.block = block;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.xz);
			this.writeByte(this.y);
			this.writeVaruint(this.block);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.xz=this.readByte();
			traceDecode('xz');
			this.y=this.readByte();
			traceDecode('y');
			this.block=this.readVaruint();
			traceDecode('block');
			return this;
		}

	}
	,

	Match: class extends Buffer{

		constructor(match="",hasTooltip=false,tooltip=""){
			super();
			this.match = match;
			this.hasTooltip = hasTooltip;
			this.tooltip = tooltip;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			var dhc5yra=this.encodeString(this.match);
			this.writeVaruint(dhc5yra.length);
			this.writeBytes(dhc5yra);
			this.writeBool(this.hasTooltip);
			if(hasTooltip==true){
				var dhc5b9dl=this.encodeString(this.tooltip);
				this.writeVaruint(dhc5b9dl.length);
				this.writeBytes(dhc5b9dl);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			var dhc5yra=this.readVaruint();
			this.match=this.decodeString(this.readBytes(dhc5yra));
			traceDecode('match');
			this.hasTooltip=this.readBool();
			traceDecode('hasTooltip');
			if(hasTooltip==true){
				var dhc5b9dl=this.readVaruint();
				this.tooltip=this.decodeString(this.readBytes(dhc5b9dl));
				traceDecode('tooltip');
			}
			return this;
		}

	}
	,

	Node: class extends Buffer{

		constructor(flags=0,children=new Uint32Array(0),redirectNode=0,name="",parser="",properties=new Types.Bytes()){
			super();
			this.flags = flags;
			this.children = children;
			this.redirectNode = redirectNode;
			this.name = name;
			this.parser = parser;
			this.properties = properties;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.flags);
			this.writeVaruint(this.children.length);
			for(var dhc5alzj in this.children){
				this.writeVaruint(this.children[dhc5alzj]);
			}
			if(flags&8){
				this.writeVaruint(this.redirectNode);
			}
			if(flags&1||flags&2){
				var dhc5y1=this.encodeString(this.name);
				this.writeVaruint(dhc5y1.length);
				this.writeBytes(dhc5y1);
			}
			if(flags&2){
				var dhc5yjzi=this.encodeString(this.parser);
				this.writeVaruint(dhc5yjzi.length);
				this.writeBytes(dhc5yjzi);
			}
			if(flags&2){
				this.writeBytes(this.properties);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.flags=this.readByte();
			traceDecode('flags');
			var aramyhbr=this.readVaruint();
			this.children=[];
			for(var dhc5alzj=0;dhc5alzj<aramyhbr;dhc5alzj++){
				this.children[dhc5alzj]=this.readVaruint();
			}
			traceDecode('children');
			if(flags&8){
				this.redirectNode=this.readVaruint();
				traceDecode('redirectNode');
			}
			if(flags&1||flags&2){
				var dhc5y1=this.readVaruint();
				this.name=this.decodeString(this.readBytes(dhc5y1));
				traceDecode('name');
			}
			if(flags&2){
				var dhc5yjzi=this.readVaruint();
				this.parser=this.decodeString(this.readBytes(dhc5yjzi));
				traceDecode('parser');
			}
			if(flags&2){
				this.properties=Array.from(this._buffer);
				this._buffer=[];
				traceDecode('properties');
			}
			return this;
		}

	}
	,

	Icon: class extends Buffer{

		constructor(type=0,x=0,z=0,direction=0,hasDisplayName=false,displayName=""){
			super();
			this.type = type;
			this.x = x;
			this.z = z;
			this.direction = direction;
			this.hasDisplayName = hasDisplayName;
			this.displayName = displayName;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.type);
			this.writeByte(this.x);
			this.writeByte(this.z);
			this.writeByte(this.direction);
			this.writeBool(this.hasDisplayName);
			if(hasDisplayName==true){
				var dhc5anbf=this.encodeString(this.displayName);
				this.writeVaruint(dhc5anbf.length);
				this.writeBytes(dhc5anbf);
			}
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.type=this.readVaruint();
			traceDecode('type');
			this.x=this.readByte();
			traceDecode('x');
			this.z=this.readByte();
			traceDecode('z');
			this.direction=this.readByte();
			traceDecode('direction');
			this.hasDisplayName=this.readBool();
			traceDecode('hasDisplayName');
			if(hasDisplayName==true){
				var dhc5anbf=this.readVaruint();
				this.displayName=this.decodeString(this.readBytes(dhc5anbf));
				traceDecode('displayName');
			}
			return this;
		}

	}
	,

	Recipe: class extends Buffer{

		constructor(recipeId=0){
			super();
			this.recipeId = recipeId;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.recipeId);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.recipeId=this.readVaruint();
			traceDecode('recipeId');
			return this;
		}

	}

}
