#!/usr/bin/node
/**A script that prints all characters of a Star Wars movie*/

const request = require('request');
const myArguments = process.argv.slice(2);
const url = 'https://swapi-api.hbtn.io/api/films/' + myArguments[0];

request(url, async function (error, response, body) {
  if (!error) {
    const json = JSON.parse(body);
    const endpoints = json.characters;
    for (const endpoint of endpoints) {
      await new Promise(function (resolve, reject) {
        request(endpoint, function (error, response, body) {
          if (!error) {
            console.log(JSON.parse(body).name);
            resolve();
          }
        });
      });
    }
  }
});
