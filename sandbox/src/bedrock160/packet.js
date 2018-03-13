class Packet extends Buffer{

	encode(){
		this.reset();
		this.encodeId();
		this.writeBytes(new Uint8Array(2));
		this.encodeBody(false);
		return this._buffer;
	}

	encodeId(){
		this.writeVaruint(this.getId());
	}

	decode(buffer){
		this._buffer = Array.from(buffer);
		this.decodeId();
		this.readBytes(2);
		this.decodeBody();
	}

	decodeId(){
		var id=this.readVaruint();
	}

}