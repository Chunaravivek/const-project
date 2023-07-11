const express = require('express');
const router = express.Router();
const { admin } = require('../app/Http/Controllers/AdminController');
console.log("admin",  admin.checkApi.bind(admin));
class AdminRoute {
    getRouter() {
        try {
            router.route('/register').get(admin.checkApi);
        } catch (error) {
            console.log('Error::', error);
        }
        return router;
    }
}

module.exports = new AdminRoute();