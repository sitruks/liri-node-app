require("dotenv").config();
const inquirer = require("inquirer");
const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

const command = process.argv[2];
const value = process.argv[3];

// //// MUSIC FUNCTIONS

// ARTIST LOOKUP
const artistNames = function (artist) {
    return artist.name;
};

// SPOTIFY LOOKUP
const spotify = function (songName) {
    if (songName === undefined) {
        songName = "Feliz Navidad";
    }
    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            const songs = data.tracks.items;

            for (let i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists.map(artistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

// ARTIST LOOKUP
const concert = function (artist) {
    const queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function (response) {
            const jsonData = response.data;

            if (!jsonData.length) {
                console.log("Hate to be the bearer of bad news, but I just wasn't able to locate any results for " + artist);
                return;
            }

            console.log("Oh now that I know!! \n(^^)/\nUpcoming concerts for " + artist + ":");

            for (let i = 0; i < jsonData.length; i++) {
                const show = jsonData[i];

                // CONCERT DATA WITH FALLBACK CASE OF COUNTRY
                // FORMAT WITH moment.js
                console.log(
                    show.venue.city +
                    "," +
                    (show.venue.region || show.venue.country) +
                    " at " +
                    show.venue.name +
                    " " +
                    moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};


// //// MOVIE FUNCTIONS

// //// LOOKUP FUNCTIONS

// //// USER PROMPT
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


