const functions = require('firebase-functions');
import { dialogflow } from 'actions-on-google';

const app = () => ({
	debug: true
});

// capture intent 
app.intent('APL welcome class', (conv) => {
	conv.close("APL class of 2019/2020 semester 2 project done by Rojah, Brittany and Stern")
})


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
