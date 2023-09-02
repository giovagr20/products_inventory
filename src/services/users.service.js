const {getUsers, getUserById} = require('../models/users.model');

exports.getUsers = async () => {
    return await getUsers();
}

exports.getUserById = async (id) => {
    return await getUserById(id);
}