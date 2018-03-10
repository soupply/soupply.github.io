/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/bedrock141.xml
 */
// module soupply.bedrock141.types;

const Types = {

	LoginBody: class extends Buffer {

		constructor(chain=null, clientData=null) {
			super();
			this.chain = chain;
			this.clientData = clientData;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeLittleEndianInt(this.chain.length);
			this.writeBytes(this.chain);
			this.writeLittleEndianInt(this.client_data.length);
			this.writeBytes(this.client_data);
			var _length = this._buffer.length;
			this.writeVaruint(_length);
			var _length_array = [];
			while(this._buffer.length > _length) {
				_length_array.push(this._buffer.pop());
			}
			while(_length_array.length > 0) {
				this._buffer.unshift(_length_array.shift());
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _length=this.readVaruint();
			_buffer = this._buffer.slice(_length);
			if(this._buffer.length > _length) {
				this._buffer.length = _length;
			}
			var aramyha4=this.readLittleEndianInt();
			this.chain=this.readBytes(aramyha4);
			var aramyxz5=this.readLittleEndianInt();
			this.client_data=this.readBytes(aramyxz5);
			this._buffer = _buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.LoginBody().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "LoginBody(chain: " + this.chain + ", client_data: " + this.client_data + ")";
		}

	}
	,

	PackWithSize: class extends Buffer {

		constructor(id="", version="", size=0) {
			super();
			this.id = id;
			this.version = version;
			this.size = size;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5z=this.encodeString(this.id);
			this.writeVaruint(dhc5z.length);
			this.writeBytes(dhc5z);
			var dhc5zja9=this.encodeString(this.version);
			this.writeVaruint(dhc5zja9.length);
			this.writeBytes(dhc5zja9);
			this.writeLittleEndianLong(this.size);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5z=this.readVaruint();
			this.id=this.decodeString(this.readBytes(dhc5z));
			var dhc5zja9=this.readVaruint();
			this.version=this.decodeString(this.readBytes(dhc5zja9));
			this.size=this.readLittleEndianLong();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.PackWithSize().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PackWithSize(id: " + this.id + ", version: " + this.version + ", size: " + this.size + ")";
		}

	}
	,

	Pack: class extends Buffer {

		constructor(id="", version="") {
			super();
			this.id = id;
			this.version = version;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5z=this.encodeString(this.id);
			this.writeVaruint(dhc5z.length);
			this.writeBytes(dhc5z);
			var dhc5zja9=this.encodeString(this.version);
			this.writeVaruint(dhc5zja9.length);
			this.writeBytes(dhc5zja9);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5z=this.readVaruint();
			this.id=this.decodeString(this.readBytes(dhc5z));
			var dhc5zja9=this.readVaruint();
			this.version=this.decodeString(this.readBytes(dhc5zja9));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Pack().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Pack(id: " + this.id + ", version: " + this.version + ")";
		}

	}
	,

	Slot: class extends Buffer {

		constructor(id=0, metaAndCount=0, nbt=null, canPlaceOn=[], canDestroy=[]) {
			super();
			this.id = id;
			this.metaAndCount = metaAndCount;
			this.nbt = nbt;
			this.canPlaceOn = canPlaceOn;
			this.canDestroy = canDestroy;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.id);
			if(id>0) {
				this.writeVarint(this.meta_and_count);
			}
			if(id>0) {
				this.writeLittleEndianShort(this.nbt.length);
				this.writeBytes(this.nbt);
			}
			this.writeVaruint(this.can_place_on.length);
			for(var dhc5y5cx in this.can_place_on) {
				var dhc5y5cx=this.encodeString(this.can_place_on[dhc5y5cx]);
				this.writeVaruint(dhc5y5cx.length);
				this.writeBytes(dhc5y5cx);
			}
			this.writeVaruint(this.can_destroy.length);
			for(var dhc5y5zv in this.can_destroy) {
				var dhc5y5zv=this.encodeString(this.can_destroy[dhc5y5zv]);
				this.writeVaruint(dhc5y5zv.length);
				this.writeBytes(dhc5y5zv);
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.id=this.readVarint();
			if(id>0) {
				this.meta_and_count=this.readVarint();
			}
			if(id>0) {
				var arambj=this.readLittleEndianShort();
				this.nbt=this.readBytes(arambj);
			}
			var aramyfxb=this.readVaruint();
			this.can_place_on=[];
			for(var dhc5y5cx=0;dhc5y5cx<aramyfxb;dhc5y5cx++) {
				var dhc5y5cx=this.readVaruint();
				this.can_place_on[dhc5y5cx]=this.decodeString(this.readBytes(dhc5y5cx));
			}
			var aramyfxr=this.readVaruint();
			this.can_destroy=[];
			for(var dhc5y5zv=0;dhc5y5zv<aramyfxr;dhc5y5zv++) {
				var dhc5y5zv=this.readVaruint();
				this.can_destroy[dhc5y5zv]=this.decodeString(this.readBytes(dhc5y5zv));
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Slot().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Slot(id: " + this.id + ", meta_and_count: " + this.meta_and_count + ", nbt: " + this.nbt + ", can_place_on: " + this.can_place_on + ", can_destroy: " + this.can_destroy + ")";
		}

	}
	,

	Attribute: class extends Buffer {

		constructor(min=.0, max=.0, value=.0, def=.0, name="") {
			super();
			this.min = min;
			this.max = max;
			this.value = value;
			this.def = def;
			this.name = name;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeLittleEndianFloat(this.min);
			this.writeLittleEndianFloat(this.max);
			this.writeLittleEndianFloat(this.value);
			this.writeLittleEndianFloat(this.default);
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.min=this.readLittleEndianFloat();
			this.max=this.readLittleEndianFloat();
			this.value=this.readLittleEndianFloat();
			this.default=this.readLittleEndianFloat();
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Attribute().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Attribute(min: " + this.min + ", max: " + this.max + ", value: " + this.value + ", default: " + this.default + ", name: " + this.name + ")";
		}

	}
	,

	BlockPosition: class extends Buffer {

		constructor(x=0, y=0, z=0) {
			super();
			this.x = x;
			this.y = y;
			this.z = z;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.x);
			this.writeVaruint(this.y);
			this.writeVarint(this.z);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.x=this.readVarint();
			this.y=this.readVaruint();
			this.z=this.readVarint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.BlockPosition().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "BlockPosition(x: " + this.x + ", y: " + this.y + ", z: " + this.z + ")";
		}

	}
	,

	McpeUuid: class extends Buffer {

		constructor(mostSignificantBits=0, leastSignificantBits=0) {
			super();
			this.mostSignificantBits = mostSignificantBits;
			this.leastSignificantBits = leastSignificantBits;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeLittleEndianLong(this.most_significant_bits);
			this.writeLittleEndianLong(this.least_significant_bits);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.most_significant_bits=this.readLittleEndianLong();
			this.least_significant_bits=this.readLittleEndianLong();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.McpeUuid().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "McpeUuid(most_significant_bits: " + this.most_significant_bits + ", least_significant_bits: " + this.least_significant_bits + ")";
		}

	}
	,

	PlayerList: class extends Buffer {

		constructor(uuid=null, entityId=0, displayName="", skin=null, unknown4="") {
			super();
			this.uuid = uuid;
			this.entityId = entityId;
			this.displayName = displayName;
			this.skin = skin;
			this.unknown4 = unknown4;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBytes(this.uuid.encode());
			this.writeVarlong(this.entity_id);
			var dhc5anbf=this.encodeString(this.display_name);
			this.writeVaruint(dhc5anbf.length);
			this.writeBytes(dhc5anbf);
			this.writeBytes(this.skin.encode());
			var dhc5btbd=this.encodeString(this.unknown4);
			this.writeVaruint(dhc5btbd.length);
			this.writeBytes(dhc5btbd);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.uuid=Types.McpeUuid.fromBuffer(this._buffer);
			this._buffer=this.uuid._buffer;
			this.entity_id=this.readVarlong();
			var dhc5anbf=this.readVaruint();
			this.display_name=this.decodeString(this.readBytes(dhc5anbf));
			this.skin=Types.Skin.fromBuffer(this._buffer);
			this._buffer=this.skin._buffer;
			var dhc5btbd=this.readVaruint();
			this.unknown4=this.decodeString(this.readBytes(dhc5btbd));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.PlayerList().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerList(uuid: " + this.uuid + ", entity_id: " + this.entity_id + ", display_name: " + this.display_name + ", skin: " + this.skin + ", unknown4: " + this.unknown4 + ")";
		}

	}
	,

	Skin: class extends Buffer {

		constructor(name="", data=[], capeData=[], geometryName="", geometryData=[]) {
			super();
			this.name = name;
			this.data = data;
			this.capeData = capeData;
			this.geometryName = geometryName;
			this.geometryData = geometryData;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.data.length);
			this.writeBytes(this.data);
			this.writeVaruint(this.cape_data.length);
			this.writeBytes(this.cape_data);
			var dhc5z9zr=this.encodeString(this.geometry_name);
			this.writeVaruint(dhc5z9zr.length);
			this.writeBytes(dhc5z9zr);
			this.writeVaruint(this.geometry_data.length);
			this.writeBytes(this.geometry_data);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			var aramzfy=this.readVaruint();
			this.data=this.readBytes(aramzfy);
			var aramyfz9=this.readVaruint();
			this.cape_data=this.readBytes(aramyfz9);
			var dhc5z9zr=this.readVaruint();
			this.geometry_name=this.decodeString(this.readBytes(dhc5z9zr));
			var aramzvbv=this.readVaruint();
			this.geometry_data=this.readBytes(aramzvbv);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Skin().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Skin(name: " + this.name + ", data: " + this.data + ", cape_data: " + this.cape_data + ", geometry_name: " + this.geometry_name + ", geometry_data: " + this.geometry_data + ")";
		}

	}
	,

	Link: class extends Buffer {

		// action
		static get ADD(){ return 0; };
		static get RIDE(){ return 1; };
		static get REMOVE(){ return 2; };

		constructor(from=0, to=0, action=0, unknown3=0) {
			super();
			this.from = from;
			this.to = to;
			this.action = action;
			this.unknown3 = unknown3;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarlong(this.from);
			this.writeVarlong(this.to);
			this.writeByte(this.action);
			this.writeByte(this.unknown3);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.from=this.readVarlong();
			this.to=this.readVarlong();
			this.action=this.readByte();
			this.unknown3=this.readByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Link().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Link(from: " + this.from + ", to: " + this.to + ", action: " + this.action + ", unknown3: " + this.unknown3 + ")";
		}

	}
	,

	Recipe: class extends Buffer {

		// type
		static get SHAPELESS(){ return 0; };
		static get SHAPED(){ return 1; };
		static get FURNACE(){ return 2; };
		static get FURNACE_DATA(){ return 3; };
		static get MULTI(){ return 4; };

		constructor(type=0, data=null) {
			super();
			this.type = type;
			this.data = data;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.type);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.type=this.readVarint();
			this.data=Array.from(this._buffer);
			this._buffer=[];
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Recipe().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Recipe(type: " + this.type + ", data: " + this.data + ")";
		}

	}
	,

	InventoryAction: class extends Buffer {

		// source
		static get CONTAINER(){ return 0; };
		static get WORLD(){ return 2; };
		static get CREATIVE(){ return 3; };

		constructor(source=0, container=-1, unknown2=0, slot=0, oldItem=null, newItem=null) {
			super();
			this.source = source;
			this.container = container;
			this.unknown2 = unknown2;
			this.slot = slot;
			this.oldItem = oldItem;
			this.newItem = newItem;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.source);
			if(source==0) {
				this.writeVarint(this.container);
			}
			if(source==2) {
				this.writeVaruint(this.unknown2);
			}
			this.writeVaruint(this.slot);
			this.writeBytes(this.old_item.encode());
			this.writeBytes(this.new_item.encode());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.source=this.readVaruint();
			if(source==0) {
				this.container=this.readVarint();
			}
			if(source==2) {
				this.unknown2=this.readVaruint();
			}
			this.slot=this.readVaruint();
			this.old_item=Types.Slot.fromBuffer(this._buffer);
			this._buffer=this.old_item._buffer;
			this.new_item=Types.Slot.fromBuffer(this._buffer);
			this._buffer=this.new_item._buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.InventoryAction().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "InventoryAction(source: " + this.source + ", container: " + this.container + ", unknown2: " + this.unknown2 + ", slot: " + this.slot + ", old_item: " + this.old_item + ", new_item: " + this.new_item + ")";
		}

	}
	,

	ChunkData: class extends Buffer {

		constructor(sections=[], heights=new Uint16Array(256), biomes=new Uint8Array(256), borders=[], extraData=[], blockEntities=null) {
			super();
			this.sections = sections;
			this.heights = heights;
			this.biomes = biomes;
			this.borders = borders;
			this.extraData = extraData;
			this.blockEntities = blockEntities;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.sections.length);
			for(var dhc5zna9 in this.sections) {
				this.writeBytes(this.sections[dhc5zna9].encode());
			}
			for(var dhc5zlar in this.heights) {
				this.writeLittleEndianShort(this.heights[dhc5zlar]);
			}
			this.writeBytes(this.biomes);
			this.writeVaruint(this.borders.length);
			this.writeBytes(this.borders);
			this.writeVaruint(this.extra_data.length);
			for(var dhc5ery9 in this.extra_data) {
				this.writeBytes(this.extra_data[dhc5ery9].encode());
			}
			this.writeBytes(this.block_entities);
			var _length = this._buffer.length;
			this.writeVaruint(_length);
			var _length_array = [];
			while(this._buffer.length > _length) {
				_length_array.push(this._buffer.pop());
			}
			while(_length_array.length > 0) {
				this._buffer.unshift(_length_array.shift());
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _length=this.readVaruint();
			_buffer = this._buffer.slice(_length);
			if(this._buffer.length > _length) {
				this._buffer.length = _length;
			}
			var aramcvdl=this.readVaruint();
			this.sections=[];
			for(var dhc5zna9=0;dhc5zna9<aramcvdl;dhc5zna9++) {
				this.sections[dhc5zna9]=Types.Section.fromBuffer(this._buffer);
				this._buffer=this.sections[dhc5zna9]._buffer;
			}
			var aramavzh=256;
			this.heights=[];
			for(var dhc5zlar=0;dhc5zlar<aramavzh;dhc5zlar++) {
				this.heights[dhc5zlar]=this.readLittleEndianShort();
			}
			var aramylbv=256;
			this.biomes=this.readBytes(aramylbv);
			var aramy9zv=this.readVaruint();
			this.borders=this.readBytes(aramy9zv);
			var aramzhcf=this.readVaruint();
			this.extra_data=[];
			for(var dhc5ery9=0;dhc5ery9<aramzhcf;dhc5ery9++) {
				this.extra_data[dhc5ery9]=Types.ExtraData.fromBuffer(this._buffer);
				this._buffer=this.extra_data[dhc5ery9]._buffer;
			}
			this.block_entities=Array.from(this._buffer);
			this._buffer=[];
			this._buffer = _buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.ChunkData().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ChunkData(sections: " + this.sections + ", heights: " + this.heights + ", biomes: " + this.biomes + ", borders: " + this.borders + ", extra_data: " + this.extra_data + ", block_entities: " + this.block_entities + ")";
		}

	}
	,

	Section: class extends Buffer {

		constructor(storageVersion=0, blockIds=new Uint8Array(4096), blockMetas=new Uint8Array(2048)) {
			super();
			this.storageVersion = storageVersion;
			this.blockIds = blockIds;
			this.blockMetas = blockMetas;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeByte(this.storage_version);
			this.writeBytes(this.block_ids);
			this.writeBytes(this.block_metas);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.storage_version=this.readByte();
			var aramyxyt=4096;
			this.block_ids=this.readBytes(aramyxyt);
			var aramyxyt=2048;
			this.block_metas=this.readBytes(aramyxyt);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Section().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Section(storage_version: " + this.storage_version + ", block_ids: " + this.block_ids + ", block_metas: " + this.block_metas + ")";
		}

	}
	,

	ExtraData: class extends Buffer {

		constructor(key=0, value=0) {
			super();
			this.key = key;
			this.value = value;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.key);
			this.writeLittleEndianShort(this.value);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.key=this.readVaruint();
			this.value=this.readLittleEndianShort();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.ExtraData().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ExtraData(key: " + this.key + ", value: " + this.value + ")";
		}

	}
	,

	Decoration: class extends Buffer {

		constructor(rotationAndIcon=0, position={x:0,z:0}, label="", color=0) {
			super();
			this.rotationAndIcon = rotationAndIcon;
			this.position = position;
			this.label = label;
			this.color = color;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarint(this.rotation_and_icon);
			this.writeByte(this.position.x);
			this.writeByte(this.position.z);
			var dhc5yjb=this.encodeString(this.label);
			this.writeVaruint(dhc5yjb.length);
			this.writeBytes(dhc5yjb);
			this.writeLittleEndianInt(this.color);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.rotation_and_icon=this.readVarint();
			this.position={};
			this.position.x=this.readByte();
			this.position.z=this.readByte();
			var dhc5yjb=this.readVaruint();
			this.label=this.decodeString(this.readBytes(dhc5yjb));
			this.color=this.readLittleEndianInt();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Decoration().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Decoration(rotation_and_icon: " + this.rotation_and_icon + ", position: " + this.position + ", label: " + this.label + ", color: " + this.color + ")";
		}

	}
	,

	Rule: class extends Buffer {

		// name
		static get COMMAND_BLOCK_OUTPUT(){ return commandblockoutput; };
		static get DO_DAYLIGHT_CYCLE(){ return dodaylightcycle; };
		static get DO_ENTITY_DROPS(){ return doentitydrops; };
		static get DO_FIRE_TICK(){ return dofiretick; };
		static get DO_MOB_LOOT(){ return domobloot; };
		static get DO_MOB_SPAWNING(){ return domobspawning; };
		static get DO_TILE_DROPS(){ return dotiledrops; };
		static get DO_WEATHER_CYCLE(){ return doweathercycle; };
		static get DROWNING_DAMAGE(){ return drowningdamage; };
		static get FALL_DAMAGE(){ return falldamage; };
		static get FIRE_DAMAGE(){ return firedamage; };
		static get KEEP_INVENTORY(){ return keepinventory; };
		static get MOB_GRIEFING(){ return mobgriefing; };
		static get PVP(){ return pvp; };
		static get SEND_COMMAND_FEEDBACK(){ return sendcommandfeedback; };

		// type
		static get BOOLEAN(){ return 1; };
		static get INTEGER(){ return 2; };
		static get FLOATING(){ return 3; };

		constructor(name="", type=0, booleanValue=false, integerValue=0, floatingValue=.0) {
			super();
			this.name = name;
			this.type = type;
			this.booleanValue = booleanValue;
			this.integerValue = integerValue;
			this.floatingValue = floatingValue;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeByte(this.type);
			if(type==1) {
				this.writeBool(this.boolean_value);
			}
			if(type==2) {
				this.writeVaruint(this.integer_value);
			}
			if(type==3) {
				this.writeLittleEndianFloat(this.floating_value);
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			this.type=this.readByte();
			if(type==1) {
				this.boolean_value=this.readBool();
			}
			if(type==2) {
				this.integer_value=this.readVaruint();
			}
			if(type==3) {
				this.floating_value=this.readLittleEndianFloat();
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Rule().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Rule(name: " + this.name + ", type: " + this.type + ", boolean_value: " + this.boolean_value + ", integer_value: " + this.integer_value + ", floating_value: " + this.floating_value + ")";
		}

	}
	,

	Enum: class extends Buffer {

		constructor(name="", valuesIndexes=[]) {
			super();
			this.name = name;
			this.valuesIndexes = valuesIndexes;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.values_indexes.length);
			for(var dhc5yxzn in this.values_indexes) {
				this.writeLittleEndianShort(this.values_indexes[dhc5yxzn]);
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			var aramdfdv=this.readVaruint();
			this.values_indexes=[];
			for(var dhc5yxzn=0;dhc5yxzn<aramdfdv;dhc5yxzn++) {
				this.values_indexes[dhc5yxzn]=this.readLittleEndianShort();
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Enum().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Enum(name: " + this.name + ", values_indexes: " + this.values_indexes + ")";
		}

	}
	,

	Command: class extends Buffer {

		constructor(name="", description="", unknown2=0, permissionLevel=0, aliasesEnum=-1, overloads=[]) {
			super();
			this.name = name;
			this.description = description;
			this.unknown2 = unknown2;
			this.permissionLevel = permissionLevel;
			this.aliasesEnum = aliasesEnum;
			this.overloads = overloads;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			var dhc5zncl=this.encodeString(this.description);
			this.writeVaruint(dhc5zncl.length);
			this.writeBytes(dhc5zncl);
			this.writeByte(this.unknown2);
			this.writeByte(this.permission_level);
			this.writeLittleEndianInt(this.aliases_enum);
			this.writeVaruint(this.overloads.length);
			for(var dhc5dvb9 in this.overloads) {
				this.writeBytes(this.overloads[dhc5dvb9].encode());
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			var dhc5zncl=this.readVaruint();
			this.description=this.decodeString(this.readBytes(dhc5zncl));
			this.unknown2=this.readByte();
			this.permission_level=this.readByte();
			this.aliases_enum=this.readLittleEndianInt();
			var arambzcx=this.readVaruint();
			this.overloads=[];
			for(var dhc5dvb9=0;dhc5dvb9<arambzcx;dhc5dvb9++) {
				this.overloads[dhc5dvb9]=Types.Overload.fromBuffer(this._buffer);
				this._buffer=this.overloads[dhc5dvb9]._buffer;
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Command().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Command(name: " + this.name + ", description: " + this.description + ", unknown2: " + this.unknown2 + ", permission_level: " + this.permission_level + ", aliases_enum: " + this.aliases_enum + ", overloads: " + this.overloads + ")";
		}

	}
	,

	Overload: class extends Buffer {

		constructor(parameters=[]) {
			super();
			this.parameters = parameters;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(this.parameters.length);
			for(var dhc5yjbv in this.parameters) {
				this.writeBytes(this.parameters[dhc5yjbv].encode());
			}
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var aramcfy1=this.readVaruint();
			this.parameters=[];
			for(var dhc5yjbv=0;dhc5yjbv<aramcfy1;dhc5yjbv++) {
				this.parameters[dhc5yjbv]=Types.Parameter.fromBuffer(this._buffer);
				this._buffer=this.parameters[dhc5yjbv]._buffer;
			}
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Overload().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Overload(parameters: " + this.parameters + ")";
		}

	}
	,

	Parameter: class extends Buffer {

		// type
		static get VALID(){ return 1048576; };
		static get INT(){ return 1; };
		static get FLOAT(){ return 2; };
		static get MIXED(){ return 3; };
		static get TARGET(){ return 4; };
		static get STRING(){ return 13; };
		static get POSITION(){ return 14; };
		static get RAWTEXT(){ return 17; };
		static get TEXT(){ return 19; };
		static get JSON(){ return 22; };
		static get COMMAND(){ return 29; };
		static get ENUM(){ return 2097152; };
		static get TEMPLATE(){ return 16777216; };

		constructor(name="", type=0, optional=false) {
			super();
			this.name = name;
			this.type = type;
			this.optional = optional;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeLittleEndianInt(this.type);
			this.writeBool(this.optional);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			this.type=this.readLittleEndianInt();
			this.optional=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Parameter().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Parameter(name: " + this.name + ", type: " + this.type + ", optional: " + this.optional + ")";
		}

	}

}