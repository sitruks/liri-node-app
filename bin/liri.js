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
// $ menu-options { help, menu, option* }
program
    .command("menu") // sub-command name
    .alias("help") // alternative sub-command is `help`
    .alias("option*") // alternative sub-command is `options`
    .description("List LIRI options menu") // command description

    // function to execute when command is uses
    .action(function () {
        menu();
    });

// Order a coffee
// $ coffee-shop { order }
program
    .command("order") // sub-command name
    .alias("o") // alternative sub-command is `o`
    .description("Order a coffee") // command description

    // function to execute when command is uses
    .action(function () {
        order();
    });



// allow commander to parse `process.argv`
program.parse(process.argv);

// slightly hacky solution to invoke just the phrase "liri" with no extra arguement
if (!program.args.length) {
    welcomeMenuTimer();
};