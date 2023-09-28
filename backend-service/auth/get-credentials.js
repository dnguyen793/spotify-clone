import request from 'request';
import secrets from '../secrets.json' assert {type: "json"};
import fs from 'fs';

const { clientId: client_id, secret: client_secret } = secrets;
const writeToFile = async (content) => {
  try {
    await fs.writeFile("./token.json", content);
  } catch (e) {
    console.log(e);
  }
}

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//     console.log(body);
//   }
// });



