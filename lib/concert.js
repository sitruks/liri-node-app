const axios = require("axios");
const moment = require("moment");
const fs = require("fs");

module.exports = function (userValue) {
    if (!userValue) {
        userValue = "Muse";
    }
    const queryURLForBandsInTownAPI = "https://rest.bandsintown.com/artists/" + userValue + "/events?app_id=codingbootcamp"

    axios.get(queryURLForBandsInTownAPI)
        .then(function (response) {
            console.log("The following information is about the band/artist:");
            // console.log(response);
            console.log("Name of the artist/band: " + userValue + "\nName of the venue: " + response.data[0].venue.name + "\nVenue location: " + response.data[0].venue.city + "\nDate of the Even: " + moment(response.data[0].datetime).format("MM-DD-YYYY"));

            //Append text into log.txt file
            const logConcertThis = "\nLog concert-this: " + "\nName of the artist/band: " + userValue + "\nName of the venue: " + response.data[0].venue.name + "\nVenue location: " + response.data[0].venue.city + "\nDate of the Event: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n";
            fs.appendFile("log.txt", logConcertThis, function (err) {
                if (err) throw err;
            });
        });
};

