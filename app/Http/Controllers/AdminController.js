const BaseController = require("./Controller");

const responseObj = {
    "status": "",
    "msg": "",
    "body": {
    }
}

class Admincontroller {
    checkApi = (req, res, next) => {
        try {
            responseObj = {
                "status": "success",
                "msg": "Node REST API is working.",
                "body": {}
            }
            res.status(200).send(responseObj);
        } catch (error) {
            console.log('Error', error);
        }
    }
}


module.exports = new Admincontroller();