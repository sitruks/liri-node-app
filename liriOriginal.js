require("dotenv").config();
const com = require("commander");
const inquirer = require("inquirer");
const mongoose = require("mongoose");
const { generate } = require("randomstring");
const crypto = require("crypto");
const keys = require("./config/keys");
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

const User = require("./models/User");

// //// COMMANDER CLI - APP BEGIN
// com
//     .version("1.0.0")
//     .command("user:add")
//     .action(options => {
//         let _password;
//         const questions = [
//             { type: "input", name: "firstName", message: "What is your first name?" },
//             { type: "input", name: "lastName", message: "What is your last name?" },
//             { type: "input", name: "email", message: "What is your email?" },
//             { type: "input", name: "age", message: "How old are you?" },
//         ];

//         inquirer
//             .prompt(questions)
//             .then(answers => {
//                 return mongoose.connect("mongodb://127.0.0.1:27017/liri-users", { useNewUrlParser: true })
//                     .then(() => {
//                         const { firstName, lastName, age, email } = answers;
//                         const numericAge = parseInt(age);
//                         _password = generate(8);
//                         const hash = crypto.createHash("sha256");
//                         const updatedPassword = hash.update(_password);
//                         const hashedPassword = hash.digest("base64");

//                         return User.create({
//                             firstName, lastName, age, email, hashedPassword, age: numericAge
//                         });
//                     });
//             }).then(result => {
//                 console.log("=================FULL LOGIN=================");
//                 console.log(result);
//                 console.log("=================SECURED LOGIN=================");
//                 console.log(`Username: ${result.email}`);
//                 console.log(`Password: ${_password}`);
//                 process.exit();
//             }).catch(error => {
//                 console.log(error);
//                 process.exit();
//             });
//     });

// com.parse(process.argv);


const command = process.argv[2];
const value = process.argv[3];

// //// MUSIC FUNCTIONS
// ARTIST LOOKUP
const artistNames = function (artist) {
    return artist.name;
};

// SPOTIFY LOOKUP
const spotifyThis = function (songName) {
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
const movie = function (movieName) {
    if (movieName === undefined) {
        movieName = "Spaceballs";
    }

    const urlHit =
        "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(urlHit).then(
        function (response) {
            const jsonData = response.data;

            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        }
    );
};

// LOOKUP FUNCTIONS
var doIt = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);

        var dataArr = data.split(",");

        if (dataArr.length === 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            pick(dataArr[0]);
        }
    });
};

// //// USER PROMPT
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "Hi. I'm LiRi --the KOBY equivalent of productivity assistants. What is your name?",
            name: "name"
        },
    ])
    .then(function (answers) {
        const username = answers.name;
        inquirer.prompt([
            // Here we create a basic text prompt.
            {
                type: "list",
                message: "Hi. there " + username + ". \nI can do four whole things!",
                choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-is"],
                name: "tasks"
            },
        ])
            .then(function (answers) {
                switchFunction(answers.tasks);
                console.log(answers.tasks);
            })
    });

// Here we ask the user to confirm.
// {
//     type: "confirm",
//     message: "Are you sure you want to ask me about that?",
//     name: "confirm",
//     default: true
// }

// //// LIRI OPTIONS
function switchFunction(command) {
    switch (command) {
        case "concert-this":
            concert();
            break;

        case "spotify-this-song":
            spotifyThis();
            break;

        case "movie-this":
            movie();
            break;

        case "do-what-it-says":
            doIt();
            break;
    }
};


