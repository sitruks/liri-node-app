// LIRI menu options
exports.menuOptions = [
    {commandName: "c", name: 'Concert-This', menuItemDescription: 'Look-up a Band / Artist\'s Next Concert'},
    {commandName: "s", name: 'Spotify-This-Song', menuItemDescription: 'Look-up a song by Name or Artist'},
    {commandName: "m", name: 'Movie-This', menuItemDescription: 'Look-up a Movie by Name'},
    {commandName: "d", name: 'Do-What-It-Says', menuItemDescription: 'Do what i,... LIRI-BOT tells you'},
    {commandName: "j", name: 'Java-Break', menuItemDescription: 'Treat yourself to a cup of joe'},
];

// coffee types
exports.types = [
    {name: 'Espresso', price: '$5.99'},
    {name: 'Latte', price: '$4.50'},
    {name: 'Cappuchino', price: '$3.99'},
    {name: 'Americano', price: '$2.50'},
    {name: 'Macchiato', price: '$3.50'},
];

exports.typesPlain = exports.types.map(function(o) {
    return o.name + ' (' + o.price + ')'; // convert to one line
});

// sugar levels
exports.sugar = [
    {name: 'Low', spoons: '1'},
    {name: 'Medium', spoons: '2'},
    {name: 'High', spoons: '3'},
    {name: 'Very High', spoons: '4'},
];
exports.sugarPlain = exports.sugar.map(function(o) {
    return o.name + ' (' + o.spoons + ' spoons)'; // convert to one line
});

// served in
exports.servedIn = [
    "Mug",
    "Cup",
    "Takeway package"
];