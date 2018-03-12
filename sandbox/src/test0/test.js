const Test ={

	TestInt: class extends Buffer{

		static get ID(){return 0;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return false;};

		constructor(a=0,b=0,c=0,d=0,e=0){
			super();
			this.a = a;
			this.b = b;
			this.c = c;
			this.d = d;
			this.e = e;
		}

		reset(){
			this._buffer=[];
		}

		encode(){
			this.reset();
			this.writeByte(0);
			return this.encodeBody(false);
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeByte(this.a);
			this.writeBigEndianShort(this.b);
			this.writeLittleEndianLong(this.c);
			this.writeVarshort(this.d);
			this.writeVaruint(this.e);
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
			this.a=this.readByte();
			traceDecode('a');
			this.b=this.readBigEndianShort();
			traceDecode('b');
			this.c=this.readLittleEndianLong();
			traceDecode('c');
			this.d=this.readVarshort();
			traceDecode('d');
			this.e=this.readVaruint();
			traceDecode('e');
			return this;
		}

	}
	,

	TestFloat: class extends Buffer{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return false;};

		constructor(a=.0,b=.0,c=.0){
			super();
			this.a = a;
			this.b = b;
			this.c = c;
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
			this.writeBigEndianFloat(this.a);
			this.writeBigEndianDouble(this.b);
			this.writeLittleEndianFloat(this.c);
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
			this.a=this.readBigEndianFloat();
			traceDecode('a');
			this.b=this.readBigEndianDouble();
			traceDecode('b');
			this.c=this.readLittleEndianFloat();
			traceDecode('c');
			return this;
		}

	}
	,

	TestArray: class extends Buffer{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return false;};

		constructor(a=new Uint8Array(0),b="",c=new Int16Array(0),d=new Uint32Array(0)){
			super();
			this.a = a;
			this.b = b;
			this.c = c;
			this.d = d;
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
			this.writeVaruint(this.a.length);
			this.writeBytes(this.a);
			var dhc5=this.encodeString(this.b);
			this.writeVaruint(dhc5.length);
			this.writeBytes(dhc5);
			this.writeBigEndianInt(this.c.length);
			for(var dhc5 in this.c){
				this.writeBigEndianShort(this.c[dhc5]);
			}
			this.writeVaruint(this.d.length);
			for(var dhc5 in this.d){
				this.writeVaruint(this.d[dhc5]);
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
			var aramy=this.readVaruint();
			this.a=this.readBytes(aramy);
			traceDecode('a');
			var dhc5=this.readVaruint();
			this.b=this.decodeString(this.readBytes(dhc5));
			traceDecode('b');
			var aramy=this.readBigEndianInt();
			this.c=[];
			for(var dhc5=0;dhc5<aramy;dhc5++){
				this.c[dhc5]=this.readBigEndianShort();
			}
			traceDecode('c');
			var aramz=this.readVaruint();
			this.d=[];
			for(var dhc5=0;dhc5<aramz;dhc5++){
				this.d[dhc5]=this.readVaruint();
			}
			traceDecode('d');
			return this;
		}

	}

}