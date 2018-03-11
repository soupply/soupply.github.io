const Login ={

	Disconnect: class extends Buffer{

		static get ID(){return 0;};

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
			this.writeVaruint(0);
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

	LoginStart: class extends Buffer{

		static get ID(){return 0;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(username=""){
			super();
			this.username = username;
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
			var dhc5cvbf=this.encodeString(this.username);
			this.writeVaruint(dhc5cvbf.length);
			this.writeBytes(dhc5cvbf);
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
			var dhc5cvbf=this.readVaruint();
			this.username=this.decodeString(this.readBytes(dhc5cvbf));
			traceDecode('username');
			return this;
		}

	}
	,

	EncryptionRequest: class extends Buffer{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(serverId="",publicKey=new Uint8Array(0),verifyToken=new Uint8Array(0)){
			super();
			this.serverId = serverId;
			this.publicKey = publicKey;
			this.verifyToken = verifyToken;
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
			var dhc5zjzj=this.encodeString(this.serverId);
			this.writeVaruint(dhc5zjzj.length);
			this.writeBytes(dhc5zjzj);
			this.writeVaruint(this.publicKey.length);
			this.writeBytes(this.publicKey);
			this.writeVaruint(this.verifyToken.length);
			this.writeBytes(this.verifyToken);
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
			var dhc5zjzj=this.readVaruint();
			this.serverId=this.decodeString(this.readBytes(dhc5zjzj));
			traceDecode('serverId');
			var aramcvbl=this.readVaruint();
			this.publicKey=this.readBytes(aramcvbl);
			traceDecode('publicKey');
			var aramdvaz=this.readVaruint();
			this.verifyToken=this.readBytes(aramdvaz);
			traceDecode('verifyToken');
			return this;
		}

	}
	,

	EncryptionResponse: class extends Buffer{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return false;};
		static get SERVERBOUND(){return true;};

		constructor(sharedSecret=new Uint8Array(0),verifyToken=new Uint8Array(0)){
			super();
			this.sharedSecret = sharedSecret;
			this.verifyToken = verifyToken;
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
			this.writeVaruint(this.sharedSecret.length);
			this.writeBytes(this.sharedSecret);
			this.writeVaruint(this.verifyToken.length);
			this.writeBytes(this.verifyToken);
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
			var aramchcv=this.readVaruint();
			this.sharedSecret=this.readBytes(aramchcv);
			traceDecode('sharedSecret');
			var aramdvaz=this.readVaruint();
			this.verifyToken=this.readBytes(aramdvaz);
			traceDecode('verifyToken');
			return this;
		}

	}
	,

	LoginSuccess: class extends Buffer{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(uuid="",username=""){
			super();
			this.uuid = uuid;
			this.username = username;
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
			var dhc5dl=this.encodeString(this.uuid);
			this.writeVaruint(dhc5dl.length);
			this.writeBytes(dhc5dl);
			var dhc5cvbf=this.encodeString(this.username);
			this.writeVaruint(dhc5cvbf.length);
			this.writeBytes(dhc5cvbf);
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
			var dhc5dl=this.readVaruint();
			this.uuid=this.decodeString(this.readBytes(dhc5dl));
			traceDecode('uuid');
			var dhc5cvbf=this.readVaruint();
			this.username=this.decodeString(this.readBytes(dhc5cvbf));
			traceDecode('username');
			return this;
		}

	}
	,

	SetCompression: class extends Buffer{

		static get ID(){return 3;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		constructor(thresold=0){
			super();
			this.thresold = thresold;
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
			this.writeVaruint(this.thresold);
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
			this.thresold=this.readVaruint();
			traceDecode('thresold');
			return this;
		}

	}

}