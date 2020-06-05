const request = require('request');

//pass in 1 cat to queury the database as a command line arg
const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, function(error, response, body) {
    let description = null;

    if (error) {
      callback(error, description);
      return;
    }

    const cat = JSON.parse(body);
    if (!cat.length) {
      description = "Breed Not Found";
    } else {
      description = cat[0].description;
    }
    callback(error, description);
  });
  
};

module.exports = fetchBreedDescription;