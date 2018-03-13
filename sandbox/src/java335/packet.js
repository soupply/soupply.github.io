class Packet extends Buffer{

	encode(){
		this.reset();
		this.encodeId();
		this.encodeBody(false);
		return this._buffer;
	}

	encodeId(){
		this.writeVaruint(this.getId());
	}

	decode(buffer){
		this._buffer = Array.from(buffer);
		this.decodeId();
		this.decodeBody();
	}

	decodeId(){
		var id=this.readVaruint();
	}

}