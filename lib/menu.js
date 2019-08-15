const colors = require('colors');
const { menuOptions } = require('./values');

// export function to list LIRI options menu
module.exports = function () {
    console.log(
        "\n",
        colors.america("|-|-|-|-|-|-|-|-|-|"),
        colors.blue("LIRI OPTIONS"),
        colors.america("|-|-|-|-|-|-|-|-|-|"),
        "\n",
        colors.green(`Type ${colors.italic.white("liri")} then a ${colors.italic.white.bgBlue(" [ c ] ")}${colors.italic.white("ommand")} then a ${colors.italic.grey("detail")}`),
        "\n"
    );

    // list on separate lines
    menuOptions.forEach((option) => {
        console.log('%s %s', colors.bold.bgBlue(" |" + option.commandName + "| "), colors.bold(option.name), colors.bold(" ⇢ "), colors.grey(option.menuItemDescription));
    });
};