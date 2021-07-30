const request = require('request');
const args = process.argv.splice(2);

const breedSearch = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
  if (error !== null) {
    console.log("error: ", error);
    return;
  }

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Breed not found");
    return;
  }

  console.log(typeof data);
  console.log(data[0].description);
});