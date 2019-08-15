const colors = require('colors');
const { options } = require('./values');

// export function to list LIRI options menu
module.exports = function () {
    console.log(
        "\n",
        colors.bold("|-|-|-|-----------------||||||-----------------|-|-|-|"), 
        "\n",
        colors.bold("|-|-|-|---------- WELCOME TO LIRI-BOT ---------|-|-|-|"), 
        "\n",
        colors.bold("|-|-|-|-----------------||||||-----------------|-|-|-|"),
    );
};