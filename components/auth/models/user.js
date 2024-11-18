const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username: String,
    email: String,
    password: String
});
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;