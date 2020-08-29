const request = require('request');

const getSpaces = () => {
  const options = {
    url: 'https://api.density.io/v2/spaces',
    headers: {
      'User-Agent': 'request',
      'Authorization': 'Bearer tok_Gj4NFeMxCtg62gZeDvsgygVy6elahJyE2m6owBA9VCA'
    }
  };
  
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const response = JSON.parse(body);
      return response;
    }
  }

  return request(options, callback);
};

export { getSpaces };