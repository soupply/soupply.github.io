/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/pocket101.xml
 */
// module soupply.pocket101.types;

const Types = {

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

		constructor(id=0, metaAndCount=0, nbt=null) {
			super();
			this.id = id;
			this.metaAndCount = metaAndCount;
			this.nbt = nbt;
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
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Slot().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Slot(id: " + this.id + ", meta_and_count: " + this.meta_and_count + ", nbt: " + this.nbt + ")";
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

	Skin: class extends Buffer {

		constructor(name="", data=[]) {
			super();
			this.name = name;
			this.data = data;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeVaruint(this.data.length);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			var aramzfy=this.readVaruint();
			this.data=this.readBytes(aramzfy);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Skin().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Skin(name: " + this.name + ", data: " + this.data + ")";
		}

	}
	,

	PlayerList: class extends Buffer {

		constructor(uuid=new Uint8Array(16), entityId=0, displayName="", skin=null) {
			super();
			this.uuid = uuid;
			this.entityId = entityId;
			this.displayName = displayName;
			this.skin = skin;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBytes(this.uuid);
			this.writeVarlong(this.entity_id);
			var dhc5anbf=this.encodeString(this.display_name);
			this.writeVaruint(dhc5anbf.length);
			this.writeBytes(dhc5anbf);
			this.writeBytes(this.skin.encode());
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.uuid=this.readBytes(16);
			this.entity_id=this.readVarlong();
			var dhc5anbf=this.readVaruint();
			this.display_name=this.decodeString(this.readBytes(dhc5anbf));
			this.skin=Types.Skin.fromBuffer(this._buffer);
			this._buffer=this.skin._buffer;
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.PlayerList().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PlayerList(uuid: " + this.uuid + ", entity_id: " + this.entity_id + ", display_name: " + this.display_name + ", skin: " + this.skin + ")";
		}

	}
	,

	Link: class extends Buffer {

		// action
		static get ADD(){ return 0; };
		static get RIDE(){ return 1; };
		static get REMOVE(){ return 2; };

		constructor(from=0, to=0, action=0) {
			super();
			this.from = from;
			this.to = to;
			this.action = action;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVarlong(this.from);
			this.writeVarlong(this.to);
			this.writeByte(this.action);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			this.from=this.readVarlong();
			this.to=this.readVarlong();
			this.action=this.readByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Link().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Link(from: " + this.from + ", to: " + this.to + ", action: " + this.action + ")";
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
				this.writeBigEndianShort(this.heights[dhc5zlar]);
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
				this.heights[dhc5zlar]=this.readBigEndianShort();
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

		constructor(storageVersion=0, blockIds=new Uint8Array(4096), blockMetas=new Uint8Array(2048), skyLight=new Uint8Array(2048), blockLight=new Uint8Array(2048)) {
			super();
			this.storageVersion = storageVersion;
			this.blockIds = blockIds;
			this.blockMetas = blockMetas;
			this.skyLight = skyLight;
			this.blockLight = blockLight;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeByte(this.storage_version);
			this.writeBytes(this.block_ids);
			this.writeBytes(this.block_metas);
			this.writeBytes(this.sky_light);
			this.writeBytes(this.block_light);
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
			var aramctxx=2048;
			this.sky_light=this.readBytes(aramctxx);
			var aramyxyt=2048;
			this.block_light=this.readBytes(aramyxyt);
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Section().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Section(storage_version: " + this.storage_version + ", block_ids: " + this.block_ids + ", block_metas: " + this.block_metas + ", sky_light: " + this.sky_light + ", block_light: " + this.block_light + ")";
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
		static get DROWNING_DAMAGE(){ return drowningdamage; };
		static get FALL_DAMAGE(){ return falldamage; };
		static get FIRE_DAMAGE(){ return firedamage; };
		static get IMMUTABLE_WORLD(){ return immutableworld; };
		static get PVP(){ return pvp; };

		constructor(name="", value=false, unknown2=false) {
			super();
			this.name = name;
			this.value = value;
			this.unknown2 = unknown2;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			var dhc5y1=this.encodeString(this.name);
			this.writeVaruint(dhc5y1.length);
			this.writeBytes(dhc5y1);
			this.writeBool(this.value);
			this.writeBool(this.unknown2);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var dhc5y1=this.readVaruint();
			this.name=this.decodeString(this.readBytes(dhc5y1));
			this.value=this.readBool();
			this.unknown2=this.readBool();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Types.Rule().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Rule(name: " + this.name + ", value: " + this.value + ", unknown2: " + this.unknown2 + ")";
		}

	}

}