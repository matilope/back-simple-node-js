const User = require("../models/user");

var controller = {
    saveUser: async (req, res) => {
        console.log(req.body);
        let {
            name,
            age,
            description,
            dateOfBirth
        } = req.body;
        try {
            let userApp = new User();
            userApp.name = name;
            userApp.age = age;
            userApp.description = description;
            userApp.dateOfBirth = dateOfBirth;
            let user = await userApp.save();
            if (user) {
                return res.status(200).send({
                    status: "Success",
                    user
                });
            }
        } catch (err) {
            return res.status(500).send({
                status: "Error",
                message: "Ha ocurrido un error"
            });
        }

    },
    getUsers: async (req, res) => {
        try {
            let query = await User.find({}).sort({
                _id: "desc"
            });
            return res.status(200).send({
                status: "Success",
                query
            });
        } catch (err) {
            return res.status(500).send({
                status: "Error",
                message: "Ha ocurrido un error"
            });
        }
    },
    updateUser: async (req, res) => {
        let userId = req.params.id;
        let {
            name,
            age,
            description,
            dateOfBirth
        } = req.body;
        try {
            let updateUser = await User.findOneAndUpdate({
                _id: userId
            }, {
                name,
                age,
                description,
                dateOfBirth
            });
            return res.status(200).send({
                status: 'Success',
                updateUser
            });
        } catch (err) {
            return res.status(500).send({
                status: "Error",
                message: "Ha ocurrido un error"
            })
        }
    },
    deleteUser: async (req, res) => {
        let userId = req.params.id;
        try {
            let deleteUser = await User.findOneAndDelete({
                _id: userId
            });
            return res.status(200).send({
                status: 'Success',
                deleteUser
            });
        } catch (err) {
            return res.status(500).send({
                status: "Error",
                message: "Ha ocurrido un error"
            })
        }
    },
};

module.exports = controller;