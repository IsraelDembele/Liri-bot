var fs = require('fs');
var spotify = require('./spotify.js');
var omdb = require('./omdb.js');

module.exports = function doWhatItSays() {
    fs.readFile("./random.txt", 'utf8', function (err, contents) {
        if (err) {
            console.error('Error occurred: ' + err);
        }
        var content = contents.split(",");



        switch (content[0]) {
            case "spotify-this-song":
                spotify(content[1]);
                break;
            case "movie-this":
                omdb(content[1]);
            default:
                text = "No value found";
        }

    });
}


