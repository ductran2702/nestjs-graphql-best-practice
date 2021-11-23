// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log("🚀 ~ file: send_sms.js ~ line 5 ~ accountSid", accountSid)
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log("🚀 ~ file: send_sms.js ~ line 7 ~ authToken", authToken)
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12242689866',
     to: '+84377012386'
   })
  .then(message => console.log(message.sid));
