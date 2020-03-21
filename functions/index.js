const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

const app = dialogflow({
	debug: true
});
/*
Change conv.close to conv.ask

*/
// capture intent 
app.intent('Group members', (conv) => {
	conv.conv("APL class of 2019/2020 semester 2 project done by Rojah, Brittany and Stern")
})

app.intent('What is semantics?', (conv) => {
	conv.close("Semantics is the process a computer follows when executing a program in a specific language. This is shown by describing the relationship between the input and the output of a program and how it will be executed on a certain platform by creating a model of computation. Three types of semantic include denotational, operational and axiomatic semantic.");
})


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
