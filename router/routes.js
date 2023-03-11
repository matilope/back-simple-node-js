const express = require("express");
const router = express.Router();
const UserController = require("../controllers/controller");

router.post('/user', UserController.saveUser);

router.get('/users/?', UserController.getUsers);

router.put('/user/:id', UserController.updateUser);

router.delete('/user/:id', UserController.deleteUser);

module.exports = router;