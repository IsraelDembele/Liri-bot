var spotifyWebApi = require('node-spotify-api');  
require("dotenv").config(); 
var keys = require("./keys");  
var axios = require("axios"); 

module.exports = function spotifyFunction(song){
    var  spotify = new spotifyWebApi(keys.spotify);

    
    spotify.search({type:'track', query: song}).then(function(data){ 
      for (let i = 0; i < data.tracks.items.length; i++) {
        var songData = data.tracks.items[i]; 
        console.log("Artist Name: " + songData.artists[0].name + "\nSong Name: " + songData.name + "\nPreview Song : " + songData.preview_url + "\nAlbum: " + songData.album.name)}; 
      // console.log(data);
       // console.log("name of the venue: " + data.tracks.items[0].name);
       // console.log(data.tracks.items[0].artists[0].name)
        console.log(data.tracks.items[0].name)
       console.log(data.tracks.items[0].preview_url)
         console.log("venue location: " + data.tracks.items[0].location); 
         console.log("date of the even" +  (data.traks.items[0].datetime).format("MM-DD-YYYY"));
    });     
}