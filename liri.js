require("dotenv").config(); 
var spotifyFunction = require("./spotify"); 
var omdb = require("./omdb"); 
var keys = require("./keys"); 
var arg = process.argv; 

if(arg[2] == "spotify-this"){
    var songs = arg[3];
    spotifyFunction(songs);
}
 else if(arg[2] == "omdb"){ 
     omdb(arg[3]);
 } 
 else{
     console.log("Sorry this is an invalid command. You say 'node liri omdb' or 'node liri spotify-this'");
 } 
