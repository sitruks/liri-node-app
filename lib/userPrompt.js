const inquirer = require('inquirer');
const colors = require('colors');
const concert = require('./concert');
const doIt = require('./doIt');
const movie = require('./movie');
const spotify = require('./spotify');

const command = process.argv[2];

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
                    message: `Hi. there. ${username}.
                \nI can do just a handful of things!
                \nChoose an example output below or ${colors.bold("continue")}`,
                    choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says", colors.bold("continue")],
                    name: "tasks"
                },
            ])
                .then(function (answers) {
                    switchFunction(answers.tasks);
                    console.log(answers.tasks);
                })
        });
    // //// LIRI OPTIONS
    function switchFunction(command) {
        switch (command) {
            case "concert-this":
                concert.concert();
                break;

            case "spotify-this-song":
                spotify.spotifyThis();
                break;

            case "movie-this":
                movie.movie();
                break;

            case "do-what-it-says":
                doIt.doIt();
                break;

            case "java-break":
                java.java();
                break;

            case "continue":
                break;
        }
    };
};