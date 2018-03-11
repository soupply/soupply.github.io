const Test ={

	Test0: class extends Buffer{

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

}