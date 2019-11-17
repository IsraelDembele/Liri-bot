module.exports = function omdbfunction(movies){
    var axios = require ("axios"); 
    axios.get("http:www.omdbapi.com/?i=tt3896198&apikey=4b6a599f").then(
        function(response){ console.log("Title: " + response.data.title);
                           console.log("year:"+ response.data.year); 
                           console.log("IMDB rating:" + response.data.title); 
                           console.log("rotten tomatoes rating:" + response.data.value); 
                           console.log("country:" + response.data.country); 
                           console.log("language:"+response.data.language); 
                           console.log("plot:"+response.data.plot);
                           console.log("actors:"+response.data.actors); 
        }) 
        .catch(function(err){ 
        console.error('Error occurred: ' + err);
           
        });
         
     
}  
