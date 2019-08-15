#!/usr/bin/env node

// use commander to define user friendly command names and aliases
const program = require("commander");

// import function to list menu options
const welcomeMenu = require("../lib/welcomeMenu");
const menu = require("../lib/menu");
const userPrompt = require("../lib/userPrompt");
const concert = require("../lib/concert");
const doIt = require("../lib/doIt");
const movie = require("../lib/movie");
const spotify = require("../lib/spotify");
const order = require("../lib/order");

//userCommand for "concert-this, spotify-this-song, movie-this, do-what-it-says"
// const userCommand = process.argv[2];
//userValue for the name of the artist/band, song, movie
const userValue = process.argv.slice(3).join(" ");

// welcome timer variables
const welcomeMenuTimer = () => {
    welcomeMenu();
    function stopMenuTimer() {
        menu();
        userPrompt();
    };
    for (var i = 0; i < 8; i++) {
        setTimeout(function () {
            console.log("|010101010101010101010101010101010101010101010101010101|");
            console.log("|101010101010101010101010101010101010101010101010101010|");
        }, i * 170)
    };
    setTimeout(stopMenuTimer, 1500);
};

/*******************************************/

// Print LIRI menu options
// $ liri { help, menu, option* }
program
    .command("menu") // sub-command name
    .alias("help") // alternative sub-command is `help`
    .alias("option*") // alternative sub-command is `options`
    .description("List LIRI options menu") // command description

    // function to execute when command is uses
    .action(function () {
        menu();
    });

// Find a band or concert
// $ liri { concert-this, c }
program
    .command("concert-this") // sub-command name
    .alias("c") // alternative sub-command is `c`
    .description("Find a band or concert") // command description

    // function to execute when command is uses
    .action(function () {
        concert(userValue);
    });

// Do this thing
// $ liri { do-what-it-says, d }
program
    .command("do-what-it-says") // sub-command name
    .alias("d") // alternative sub-command is `d`
    .description("Do this thing") // command description

    // function to execute when command is uses
    .action(function () {
        doIt();
    });

// Find a movie
// $ liri { movie-this, m }
program
    .command("movie-this") // sub-command name
    .alias("m") // alternative sub-command is `m`
    .description("Find a movie") // command description

    // function to execute when command is uses
    .action(function () {
        movie(userValue);
    });

// Find a song or artist
// $ liri { spotify-this-song, s }
program
    .command("spotify-this-song") // sub-command name
    .alias("s") // alternative sub-command is `s`
    .description("Find a song or artist") // command description

    // function to execute when command is uses
    .action(function () {
        spotify(userValue);
    });

// Order a coffee
// $ liri { java-break, j, order, o }
program
    .command("order") // sub-command name
    .alias("o") // alternative sub-command is `o`
    .alias("java-break") // alternative sub-command is `java-break`
    .alias("j") // alternative sub-command is `j`
    .description("Order a coffee") // command description

    // function to execute when command is uses
    .action(function () {
        order();
    });

// allow commander to parse `process.argv`
program.parse(process.argv);

// slightly hacky solution to invoke just the phrase "liri" with no extra arguement
// no longer working with this example, need to require the whole string "./bin/liri.js"
if (!program.args.length) {
    welcomeMenuTimer();
};