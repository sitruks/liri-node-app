const fs = require("fs");
const concert = require('./concert');
const doIt = require('./doIt');
const movie = require('./movie');
const order = require('./order');
const spotify = require('./spotify');

module.exports = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            console.log(data);

            const randomData = data.split(",");
            spotify(randomData[1]);
        }
    });
};