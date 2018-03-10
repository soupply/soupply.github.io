const Types ={LoginBody: class extends Buffer{constructor(chain=null,clientData=null){super();this.chain = chain;this.clientData = clientData;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeLittleEndianInt(this.chain.length);this.writeBytes(this.chain);this.writeLittleEndianInt(this.clientData.length);this.writeBytes(this.clientData);var _buffer=this._buffer;this.reset();this.writeVaruint(_buffer.length);this.writeBytes(_buffer);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);var _length=this.readVaruint();_buffer=this._buffer.slice(_length);if(this._buffer.length>_length){this._buffer.length=_length;}var aramyha4=this.readLittleEndianInt();this.chain=this.readBytes(aramyha4);var aramyxz5=this.readLittleEndianInt();this.clientData=this.readBytes(aramyxz5);this._buffer=_buffer;return this;}},PackWithSize: class extends Buffer{constructor(id="",version="",size=0){super();this.id = id;this.version = version;this.size = size;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}var dhc5z=this.encodeString(this.id);this.writeVaruint(dhc5z.length);this.writeBytes(dhc5z);var dhc5zja9=this.encodeString(this.version);this.writeVaruint(dhc5zja9.length);this.writeBytes(dhc5zja9);this.writeLittleEndianLong(this.size);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);var dhc5z=this.readVaruint();this.id=this.decodeString(this.readBytes(dhc5z));var dhc5zja9=this.readVaruint();this.version=this.decodeString(this.readBytes(dhc5zja9));this.size=this.readLittleEndianLong();return this;}},Pack: class extends Buffer{constructor(id="",version=""){super();this.id = id;this.version = version;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}var dhc5z=this.encodeString(this.id);this.writeVaruint(dhc5z.length);this.writeBytes(dhc5z);var dhc5zja9=this.encodeString(this.version);this.writeVaruint(dhc5zja9.length);this.writeBytes(dhc5zja9);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);var dhc5z=this.readVaruint();this.id=this.decodeString(this.readBytes(dhc5z));var dhc5zja9=this.readVaruint();this.version=this.decodeString(this.readBytes(dhc5zja9));return this;}},Slot: class extends Buffer{constructor(id=0,metaAndCount=0,nbt=null,canPlaceOn=[],canDestroy=[]){super();this.id = id;this.metaAndCount = metaAndCount;this.nbt = nbt;this.canPlaceOn = canPlaceOn;this.canDestroy = canDestroy;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeVarint(this.id);if(id>0){this.writeVarint(this.metaAndCount);}if(id>0){this.writeLittleEndianShort(this.nbt.length);this.writeBytes(this.nbt);}this.writeVaruint(this.canPlaceOn.length);for(var dhc5y5bf in this.canPlaceOn){var dhc5y5bf=this.encodeString(this.canPlaceOn[dhc5y5bf]);this.writeVaruint(dhc5y5bf.length);this.writeBytes(dhc5y5bf);}this.writeVaruint(this.canDestroy.length);for(var dhc5y5zn in this.canDestroy){var dhc5y5zn=this.encodeString(this.canDestroy[dhc5y5zn]);this.writeVaruint(dhc5y5zn.length);this.writeBytes(dhc5y5zn);}return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.id=this.readVarint();if(id>0){this.metaAndCount=this.readVarint();}if(id>0){var arambj=this.readLittleEndianShort();this.nbt=this.readBytes(arambj);}var aramyfux=this.readVaruint();this.canPlaceOn=[];for(var dhc5y5bf=0;dhc5y5bf<aramyfux;dhc5y5bf++){var dhc5y5bf=this.readVaruint();this.canPlaceOn[dhc5y5bf]=this.decodeString(this.readBytes(dhc5y5bf));}var aramyfrv=this.readVaruint();this.canDestroy=[];for(var dhc5y5zn=0;dhc5y5zn<aramyfrv;dhc5y5zn++){var dhc5y5zn=this.readVaruint();this.canDestroy[dhc5y5zn]=this.decodeString(this.readBytes(dhc5y5zn));}return this;}},Attribute: class extends Buffer{constructor(min=.0,max=.0,value=.0,default_=.0,name=""){super();this.min = min;this.max = max;this.value = value;this.default_ = default_;this.name = name;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeLittleEndianFloat(this.min);this.writeLittleEndianFloat(this.max);this.writeLittleEndianFloat(this.value);this.writeLittleEndianFloat(this.default_);var dhc5y1=this.encodeString(this.name);this.writeVaruint(dhc5y1.length);this.writeBytes(dhc5y1);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.min=this.readLittleEndianFloat();this.max=this.readLittleEndianFloat();this.value=this.readLittleEndianFloat();this.default_=this.readLittleEndianFloat();var dhc5y1=this.readVaruint();this.name=this.decodeString(this.readBytes(dhc5y1));return this;}},BlockPosition: class extends Buffer{constructor(x=0,y=0,z=0){super();this.x = x;this.y = y;this.z = z;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeVarint(this.x);this.writeVaruint(this.y);this.writeVarint(this.z);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.x=this.readVarint();this.y=this.readVaruint();this.z=this.readVarint();return this;}},McpeUuid: class extends Buffer{constructor(mostSignificantBits=0,leastSignificantBits=0){super();this.mostSignificantBits = mostSignificantBits;this.leastSignificantBits = leastSignificantBits;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeLittleEndianLong(this.mostSignificantBits);this.writeLittleEndianLong(this.leastSignificantBits);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.mostSignificantBits=this.readLittleEndianLong();this.leastSignificantBits=this.readLittleEndianLong();return this;}},Skin: class extends Buffer{constructor(name="",data=[]){super();this.name = name;this.data = data;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}var dhc5y1=this.encodeString(this.name);this.writeVaruint(dhc5y1.length);this.writeBytes(dhc5y1);this.writeVaruint(this.data.length);this.writeBytes(this.data);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);var dhc5y1=this.readVaruint();this.name=this.decodeString(this.readBytes(dhc5y1));var aramzfy=this.readVaruint();this.data=this.readBytes(aramzfy);return this;}},PlayerList: class extends Buffer{constructor(uuid=null,entityId=0,displayName="",skin=null){super();this.uuid = uuid;this.entityId = entityId;this.displayName = displayName;this.skin = skin;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeBytes(this.uuid.encodeBody(true));this.writeVarlong(this.entityId);var dhc5anbf=this.encodeString(this.displayName);this.writeVaruint(dhc5anbf.length);this.writeBytes(dhc5anbf);this.writeBytes(this.skin.encodeBody(true));return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.uuid=new Types.McpeUuid().decodeBody(this._buffer);this._buffer=this.uuid._buffer;this.entityId=this.readVarlong();var dhc5anbf=this.readVaruint();this.displayName=this.decodeString(this.readBytes(dhc5anbf));this.skin=new Types.Skin().decodeBody(this._buffer);this._buffer=this.skin._buffer;return this;}},Link: class extends Buffer{constructor(from=0,to=0,action=0){super();this.from = from;this.to = to;this.action = action;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeVarlong(this.from);this.writeVarlong(this.to);this.writeByte(this.action);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.from=this.readVarlong();this.to=this.readVarlong();this.action=this.readByte();return this;}},Recipe: class extends Buffer{constructor(type=0,data=null){super();this.type = type;this.data = data;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeVarint(this.type);this.writeBytes(this.data);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.type=this.readVarint();this.data=Array.from(this._buffer);this._buffer=[];return this;}},ChunkData: class extends Buffer{constructor(sections=[],heights=new Uint16Array(256),biomes=new Uint8Array(256),borders=[],extraData=[],blockEntities=null){super();this.sections = sections;this.heights = heights;this.biomes = biomes;this.borders = borders;this.extraData = extraData;this.blockEntities = blockEntities;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeVaruint(this.sections.length);for(var dhc5zna9 in this.sections){this.writeBytes(this.sections[dhc5zna9].encodeBody(true));}for(var dhc5zlar in this.heights){this.writeBigEndianShort(this.heights[dhc5zlar]);}this.writeBytes(this.biomes);this.writeVaruint(this.borders.length);this.writeBytes(this.borders);this.writeVaruint(this.extraData.length);for(var dhc5eryr in this.extraData){this.writeBytes(this.extraData[dhc5eryr].encodeBody(true));}this.writeBytes(this.blockEntities);var _buffer=this._buffer;this.reset();this.writeVaruint(_buffer.length);this.writeBytes(_buffer);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);var _length=this.readVaruint();_buffer=this._buffer.slice(_length);if(this._buffer.length>_length){this._buffer.length=_length;}var aramcvdl=this.readVaruint();this.sections=[];for(var dhc5zna9=0;dhc5zna9<aramcvdl;dhc5zna9++){this.sections[dhc5zna9]=new Types.Section().decodeBody(this._buffer);this._buffer=this.sections[dhc5zna9]._buffer;}var aramavzh=256;this.heights=[];for(var dhc5zlar=0;dhc5zlar<aramavzh;dhc5zlar++){this.heights[dhc5zlar]=this.readBigEndianShort();}var aramylbv=256;this.biomes=this.readBytes(aramylbv);var aramy9zv=this.readVaruint();this.borders=this.readBytes(aramy9zv);var aramzhcf=this.readVaruint();this.extraData=[];for(var dhc5eryr=0;dhc5eryr<aramzhcf;dhc5eryr++){this.extraData[dhc5eryr]=new Types.ExtraData().decodeBody(this._buffer);this._buffer=this.extraData[dhc5eryr]._buffer;}this.blockEntities=Array.from(this._buffer);this._buffer=[];this._buffer=_buffer;return this;}},Section: class extends Buffer{constructor(storageVersion=0,blockIds=new Uint8Array(4096),blockMetas=new Uint8Array(2048),skyLight=new Uint8Array(2048),blockLight=new Uint8Array(2048)){super();this.storageVersion = storageVersion;this.blockIds = blockIds;this.blockMetas = blockMetas;this.skyLight = skyLight;this.blockLight = blockLight;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeByte(this.storageVersion);this.writeBytes(this.blockIds);this.writeBytes(this.blockMetas);this.writeBytes(this.skyLight);this.writeBytes(this.blockLight);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.storageVersion=this.readByte();var aramyxyt=4096;this.blockIds=this.readBytes(aramyxyt);var aramyxyt=2048;this.blockMetas=this.readBytes(aramyxyt);var aramcttl=2048;this.skyLight=this.readBytes(aramcttl);var aramyxyt=2048;this.blockLight=this.readBytes(aramyxyt);return this;}},ExtraData: class extends Buffer{constructor(key=0,value=0){super();this.key = key;this.value = value;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeVaruint(this.key);this.writeLittleEndianShort(this.value);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.key=this.readVaruint();this.value=this.readLittleEndianShort();return this;}},Decoration: class extends Buffer{constructor(rotationAndIcon=0,position={x:0,z:0},label="",color=0){super();this.rotationAndIcon = rotationAndIcon;this.position = position;this.label = label;this.color = color;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}this.writeVarint(this.rotationAndIcon);this.writeByte(this.position.x);this.writeByte(this.position.z);var dhc5yjb=this.encodeString(this.label);this.writeVaruint(dhc5yjb.length);this.writeBytes(dhc5yjb);this.writeLittleEndianInt(this.color);return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);this.rotationAndIcon=this.readVarint();this.position={};this.position.x=this.readByte();this.position.z=this.readByte();var dhc5yjb=this.readVaruint();this.label=this.decodeString(this.readBytes(dhc5yjb));this.color=this.readLittleEndianInt();return this;}},Rule: class extends Buffer{constructor(name="",type=0,booleanValue=false,integerValue=0,floatingValue=.0){super();this.name = name;this.type = type;this.booleanValue = booleanValue;this.integerValue = integerValue;this.floatingValue = floatingValue;}reset(){this._buffer=[];}encodeBody(reset){if(reset){this.reset();}var dhc5y1=this.encodeString(this.name);this.writeVaruint(dhc5y1.length);this.writeBytes(dhc5y1);this.writeByte(this.type);if(type==1){this.writeBool(this.booleanValue);}if(type==2){this.writeBigEndianInt(this.integerValue);}if(type==3){this.writeLittleEndianFloat(this.floatingValue);}return new Uint8Array(this._buffer);}decodeBody(_buffer){this._buffer=Array.from(_buffer);var dhc5y1=this.readVaruint();this.name=this.decodeString(this.readBytes(dhc5y1));this.type=this.readByte();if(type==1){this.booleanValue=this.readBool();}if(type==2){this.integerValue=this.readBigEndianInt();}if(type==3){this.floatingValue=this.readLittleEndianFloat();}return this;}}}