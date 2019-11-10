var spotifyWebApi = require('node-spotify-api');  
require("dotenv").config(); 
var keys = require("./keys");  
var axios = require("axios"); 

module.exports = function spotifyFunction(song){
    var  spotify = new spotifyWebApi(keys.spotify);

    spotify.search({type:'track', query: song}).then(function(data){
        
        console.log(Object.keys(data.tracks.items[0]));

        console.log("Artiste Name: " + data.tracks.items[0].artists[0].name);
        console.log("Track: " + data.tracks.items[0].name);
    });    
}