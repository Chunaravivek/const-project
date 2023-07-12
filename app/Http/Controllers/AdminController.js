const BaseController = require("./Controller");

const responseObj = {
    "status": "",
    "msg": "",
    "body": {
    }
}

class Admincontroller {
    create(req, res, next) {
		return res.status(200).json('i have been overridden');
	}
}

module.exports = Admincontroller;