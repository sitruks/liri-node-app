const { Schema, model } = require("mongoose");

const UserTemplate = Schema({
    firstName: String,
    lastName: String,
    email: String,
    hashedPassword: String,
    age: Number,
}, {
        versionKey: false
    });

module.exports = model("User", UserTemplate);