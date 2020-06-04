const request = require('request');

//pass in 1 cat to queury the database as a command line arg
const breedFetcher = function(catArgs) {
  if ((!catArgs) || (catArgs.length !== 1)) return; //1 cat at a time
  
  request("https://api.thecatapi.com/v1/breeds/search?q=" + catArgs[0], function(error, response, body) {
    if (error) {
      console.error('error:', error); // print the error if one occured
      return;
    }

    // console.log('statusCode:', response && response.statusCode); //print response status
    
    const cat = JSON.parse(body);
    if (!cat.length) {
      console.log("Breed Not Found");
      return;
    }
    
    console.log(cat[0].description);

  });
};

breedFetcher(process.argv.slice(2));
