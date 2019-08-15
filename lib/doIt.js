const fs = require("fs");

module.exports = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            console.log(data);

            var randomData = data.split(",");
            liri(randomData[0], randomData[1]);
        }
    });
};