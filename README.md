# liri-node-app
After taking some time to look back at my old projects, I discovered that I could take this app so much further. In addition to developing a **Node.js** app that can call and take in an API with **Inquirer.js**, I decided to productize it a little but giving it some styling in the terminal. Addtionally, commands for usability, were add with **Commander.js**. 

The end result was a similarly snarky LIRI-BOT, but with a little more piz-zazz.

# demo - screencapture
A live example of good 'ol LIRI in action!

# setup
**To start, do the following:**

        0. clone the repo and cd [project-name] to go to root of project from which:

        1. chmod +x bin/liri.js

        2. npm i

       *3. npm i -g ./ 

        4. npm link

        5. liri

        6. follow the instructions from the CLI 🤓
---
    *if there is an issue you may need to give the app the correct filesystem permissions. see this [article](https://timber.io/blog/creating-a-real-world-cli-app-with-node/) for more details*  

# liri-official-origin-story
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

# sitruks-inspiration-origin-homage
**Basic framework used to help separate concerns and make the commmand line pretty**  
Working principle and other documentation of this kit is available at [Medium](https://medium.com/@thatisuday/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac)  


**Blog article for inquirer inspiration**  
https://alligator.io/nodejs/interactive-command-line-prompts/  

# liri available functions

* concert-this (example)

* spotify-this-song (example)

* movie-this (example)

* do-what-it-says (example)

* java-break

* *custom-user-query*  

    **liri *+* {first letter of each function} *+* 'detail with spaces'**  
    * (i.e. liri c 'Modest Mouse')

# commands and expected outputs

### liri concert-this **or** c 'concert or band name'
This will show the following information about each event to your terminal/bash window:
* Name of the Venue
* Location of the Venue
* Date of the Event

### liri spotify-this-song **or** s 'song name'
This will show the following about the song in your terminal/bash window:
* Artist(s)
* Song Name
* Album of the Song
* Song Preview Link
**If no song is provided then the song "Wake Me Up, Before You Go Go -by WHAM!" will be searched instead**


### liri movie-this **or** m 'movie name'
This will output the following information to your terminal/bash window:
* Title of the Movie
* Year the Movie was Released
* The IMDB Rating
* Country the Movie was made in
* Language the Movie is in
* Plot of the Movie
* Actors in the Movie
* The Rotten Tomatoes Rating
**If no movie is provided then the movie "Spaceballs" will be searched instead**

### liri java-break **or** j
This is a direct import from a tutorial mentioned above. It was hard to resist given our brief exposure with Java at the bootcamp:

    **enjoy your coffee ☕️☕️☕️**


### liri do-what-it-says **or** d
The program will take the text inside of **random.txt** and use it to call the first command with the second part as its parameter.

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It should run spotify-this-song for "Wake Me Up Before You Go-Go," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.
Currently in random.txt, the following text is there:  

###### random.txt
    spotify-this-song, "Wake Me Up Before You Go-Go"

# further customization
**add your own keys to the project**
-> Create a .env file in the same directory as the rest of the files.  


###### .env 

    '# Spotify API keys'

    'SPOTIFY_ID=your-spotify-ID-here'

    'SPOTIFY_SECRET=your-spotify-secret-here'