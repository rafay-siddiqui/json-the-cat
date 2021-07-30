const request = require('request');

const fetchBreedDescription = function(breedname, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    let desc;
    if (!error && JSON.parse(body)[0]) {
      desc = JSON.parse(body)[0].description;
    } else if (!error && !JSON.parse(body)[0]) {
      error = "Breed not found";
    }

    callback(error, desc);
  });

};

module.exports = {
  fetchBreedDescription
};