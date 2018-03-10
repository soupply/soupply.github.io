/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/java315.xml
 */
// module soupply.java315.status;

const Status = {

	Handshake: class extends Buffer {

		static get ID(){ return 0; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		// next
		static get STATUS(){ return 1; };
		static get LOGIN(){ return 2; };

		constructor(protocol=0, serverAddress="", serverPort=0, next=0) {
			super();
			this.protocol = protocol;
			this.serverAddress = serverAddress;
			this.serverPort = serverPort;
			this.next = next;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(0);
			this.writeVaruint(this.protocol);
			var dhc5zjzj=this.encodeString(this.server_address);
			this.writeVaruint(dhc5zjzj.length);
			this.writeBytes(dhc5zjzj);
			this.writeBigEndianShort(this.server_port);
			this.writeVaruint(this.next);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.protocol=this.readVaruint();
			var dhc5zjzj=this.readVaruint();
			this.server_address=this.decodeString(this.readBytes(dhc5zjzj));
			this.server_port=this.readBigEndianShort();
			this.next=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Status.Handshake().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Handshake(protocol: " + this.protocol + ", server_address: " + this.server_address + ", server_port: " + this.server_port + ", next: " + this.next + ")";
		}

	}
	,

	Request: class extends Buffer {

		static get ID(){ return 0; };

		static get CLIENTBOUND(){ return false; };
		static get SERVERBOUND(){ return true; };

		constructor() {
			super();
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(0);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Status.Request().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Request()";
		}

	}
	,

	Response: class extends Buffer {

		static get ID(){ return 0; };

		static get CLIENTBOUND(){ return true; };
		static get SERVERBOUND(){ return false; };

		constructor(json="") {
			super();
			this.json = json;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(0);
			var dhc5c9=this.encodeString(this.json);
			this.writeVaruint(dhc5c9.length);
			this.writeBytes(dhc5c9);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			var dhc5c9=this.readVaruint();
			this.json=this.decodeString(this.readBytes(dhc5c9));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Status.Response().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Response(json: " + this.json + ")";
		}

	}
	,

	Latency: class extends Buffer {

		static get ID(){ return 1; };

		static get CLIENTBOUND(){ return true; };
		static get SERVERBOUND(){ return true; };

		constructor(id=0) {
			super();
			this.id = id;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeVaruint(1);
			this.writeBigEndianLong(this.id);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readVaruint();
			this.id=this.readBigEndianLong();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Status.Latency().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Latency(id: " + this.id + ")";
		}

	}

}