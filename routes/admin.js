const express = require('express');
const router = express.Router();
const AdminController = require('../app/Http/Controllers/AdminController');

const admCtrl = new AdminController();

console.log("admin", admCtrl);
router.route('/register')
.get(admCtrl.create);

module.exports = router;