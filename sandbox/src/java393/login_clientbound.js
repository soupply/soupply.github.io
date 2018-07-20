const LoginClientbound ={

	Disconnect: class extends Packet{

		static get ID(){return 0;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 0;
		}

		constructor(reason=""){
			super();
			this.reason = reason;
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

	EncryptionRequest: class extends Packet{

		static get ID(){return 1;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 1;
		}

		constructor(serverId="",publicKey=new Uint8Array(0),verifyToken=new Uint8Array(0)){
			super();
			this.serverId = serverId;
			this.publicKey = publicKey;
			this.verifyToken = verifyToken;
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

	LoginSuccess: class extends Packet{

		static get ID(){return 2;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 2;
		}

		constructor(uuid="",username=""){
			super();
			this.uuid = uuid;
			this.username = username;
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

	SetCompression: class extends Packet{

		static get ID(){return 3;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 3;
		}

		constructor(thresold=0){
			super();
			this.thresold = thresold;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.thresold);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.thresold=this.readVaruint();
			traceDecode('thresold');
			return this;
		}

	}
	,

	PluginRequest: class extends Packet{

		static get ID(){return 4;};

		static get CLIENTBOUND(){return true;};
		static get SERVERBOUND(){return false;};

		getId(){
			return 4;
		}

		constructor(messageId=0,channel="",data=new Types.Bytes()){
			super();
			this.messageId = messageId;
			this.channel = channel;
			this.data = data;
		}

		encodeBody(reset){
			if(reset){
				this.reset();
			}
			this.writeVaruint(this.messageId);
			var dhc5afbv=this.encodeString(this.channel);
			this.writeVaruint(dhc5afbv.length);
			this.writeBytes(dhc5afbv);
			this.writeBytes(this.data);
			return new Uint8Array(this._buffer);
		}

		decodeBody(_buffer){
			this._buffer=Array.from(_buffer);
			initDecode(this);
			this.messageId=this.readVaruint();
			traceDecode('messageId');
			var dhc5afbv=this.readVaruint();
			this.channel=this.decodeString(this.readBytes(dhc5afbv));
			traceDecode('channel');
			this.data=Array.from(this._buffer);
			this._buffer=[];
			traceDecode('data');
			return this;
		}

	}

}
