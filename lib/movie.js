const axios = require("axios");
const fs = require("fs");

module.exports = function (userValue) {
    if (!userValue) {
        userValue = "Spaceballs";
    }
    var queryUrlForOMDBAPI = "https://www.omdbapi.com/?t=" + userValue + "&y=&plot=short&apikey=trilogy";
    axios.request(queryUrlForOMDBAPI).then(
        function (response) {
            //console.log(response)
            console.log("The following information is about the movie:");
            console.log("Title of the movie: " + userValue + "\nYear the movie came out: " + response.data.Year + "\nIMDB Rating of the movie: " + response.data.imdbRating
                + "\nRotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value + "\nCountry where the movie was produced: " + response.data.Country + "\nLanguage of the movie: " + response.data.Language + "\nPlot of the movie: " + response.data.Plot
                + "\nActors in the movie: " + response.data.Actors);

            //Append text into log.txt file
            var logMovieThis = "\nLog movie-this: " + "\nTitle of the movie: " + userValue + "\nYear the movie came out: " + response.data.Year + "\nIMDB Rating of the movie: " + response.data.imdbRating
                + "\nRotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value + "\nCountry where the movie was produced: " + response.data.Country + "\nLanguage of the movie: " + response.data.Language + "\nPlot of the movie: " + response.data.Plot
                + "\nActors in the movie: " + response.data.Actors + "\n";

            fs.appendFile("log.txt", logMovieThis, function (err) {
                if (err) throw err;
            });

        }
        );
};