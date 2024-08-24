const allUsers = require("../models/allUsers")

const getUsers = (req, res, next) => {
    res.json(allUsers);
};
const postUsers = (req, res, next) => {
    const newUser = {
        id: allUsers.length+1,
        name:req.body.name,
        email:req.body.email,
    }
    allUsers.push(newUser);
    res.json(allUsers);
};

module.exports = { getUsers, postUsers };
