const inquirer = require('inquirer');
const colors = require('colors');
const concert = require('./concert');
const doIt = require('./doIt');
const movie = require('./movie');
const order = require('./order');
const spotify = require('./spotify');

module.exports = function () {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Hi. I'm LIRI-BOT --the KOBY equivalent of productivity assistants. What is your name?",
                name: "name"
            },
        ])
        .then(function (answers) {
            const username = answers.name;
            inquirer.prompt([
                {
                    type: "list",
                    message: `\nHi. there. ${username}.
                \nI can do just a handful of things!
                \nChoose an example output below or ${colors.yellow.bold("continue with custom request")}`,
                    choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says", "java-break", colors.bold("continue")],
                    name: "tasks"
                },
            ])
                .then(function (answers) {
                    liri(answers.tasks);
                    console.log(answers.tasks);
                })
        });

    // //// LIRI command options

    function liri(userCommand, userValue) {
        switch (userCommand) {
            case "concert-this":
                concert(userValue);
                break;

            case "do-what-it-says":
                doIt();
                break;

            case "movie-this":
                movie(userValue);
                break;

            case "spotify-this-song":
                spotify(userValue);
                break;

            case "java-break":
                order();
                break;

        }

    };
};
