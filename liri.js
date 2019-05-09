require("dotenv").config();
const fs = require("fs");
const inquirer = require("inquirer");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);


// Load the fs package to read and write
// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
const command = process.argv[2];
const value = process.argv[3];

// USER PROMPT
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "Hi. I'm LiRi --the KOBY equivalent of productivity assistants. What is your name?",
            name: "name"
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: ("OK, " + inquirer.name + ". I currently can handle four tasks for you... \nLike I said, KOBY, not SONY..."),
            choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-is"],
            name: "choices"
        },
        // Here we ask the user to confirm.
        {
            type: "confirm",
            message: "Are you sure you want to ask me about that?",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.hunger) {
            console.log("\nThat's okay " + inquirerResponse.adjective + "\nGet back in line when you are actually hungry.\n");
        }
    })
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your name again??",
            name: "username"
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "Set your password",
            name: "password"
        }
    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse.username);
            console.log("Your " + inquirerResponse.ramen + " is ready to enjoy!\n");
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.adjective + "\nGet back in line when you are actually hungry.\n");
        }
    });

        // if (user.myPassword === "myHouse") {
      
        //   console.log("==============================================");
        //   console.log("");
        //   console.log("Well a deal's a deal " + user.name);
        //   console.log("You can stay as long as you like.");
        //   console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
        //   console.log("");
        //   console.log("==============================================");
        // }
      
      
        // // If the user doesn't guess the password...
        // else {
      
        //   console.log("==============================================");
        //   console.log("");
        //   console.log("Sorry " + user.name);
        //   console.log("I'm calling the cops!");
        //   console.log("");
        //   console.log("==============================================");
      
        // }

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (command) {
case "concert-this":
  concert();
  break;

case "spotify-this-song":
  spotify();
  break;

case "movie-this":
  movie();
  break;

case "do-what-it-says":
  doIt();
  break;
}