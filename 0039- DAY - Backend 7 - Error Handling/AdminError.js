class AdminError extends Error {
	constructor(status, msg) {
		super();
		this.message = msg;
		this.status = status;
	}
}

module.exports = AdminError;
