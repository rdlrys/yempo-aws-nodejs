'use strict';

const fetchLastNames = async (event) => {

  const lastNames = {"last_names" : ["Smith", "Taylor", "Resco", "Reyes"]};

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "http://localhost:3000"
    },
    body: JSON.stringify(lastNames),
  };
};

module.exports = {
  handler: fetchLastNames
}