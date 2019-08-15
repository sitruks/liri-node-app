require("dotenv").config();
const keys = require("../config/keys");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");

module.exports = function (userValue) {
    if (!userValue) {
        userValue = "Feliz Navidad";
    }
    spotify.search(
        { type: "track", query: userValue }, function (err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
            } else {

                console.log("The following information is about this song:");
                console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name + "\nThe song's name: " + data.tracks.items[0].album.name + "\nA preview link of the song from Spotify: " + data.tracks.items[0].album.href
                    + "\nThe album that the song is from: " + data.tracks.items[0].album.name)
            }
            //Append text into log.txt file
            const logSpotifyThisSong = "\nLog spotify-this-song: " + "\nArtist Name: " + data.tracks.items[0].album.artists[0].name + "\nThe song's name: " + data.tracks.items[0].album.name + "\nA preview link of the song from Spotify: " + data.tracks.items[0].album.href
                + "\nThe album that the song is from: " + data.tracks.items[0].album.name
            fs.appendFile("log.txt", logSpotifyThisSong, function (err) {
                if (err) throw err;
            });
        });
};