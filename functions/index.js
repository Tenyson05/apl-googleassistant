const functions = require('firebase-functions');
const { dialogflow, SimpleResponse } = require('actions-on-google');
const lamCal = require("lambda-calculus");

const app = dialogflow({
	debug: true
});
/*
Change conv.close to conv.ask

*/
// capture intent 
app.intent('About', (conv) => {
	conv.ask("This is the APL class of 2019/2020 semester 2 project. These are the fabulous group members. ROjah Lewis, ROhan Stern adn Brittaney Anderson. We welcome you!");
})

app.intent('Semantics', (conv) => {
	conv.ask("Semantics in Programming language design is concenred with the detailed study of the meaning of programming languages. The three types of semantics are operational semantics, denotational semantics and axiomatic semantics. Though each type looks at program in a different manner they all describe and extract the deeper meaning from within a computer program.");
})

app.intent('Lambda Calculus', (conv, {num}) => {
	const tet = calcu(num)
	conv.ask(`Your results are,  ${tet}`)
})
app.intent('Quit', (conv) => {
	conv.close('Leaving so soon? Aw, okay, see ya next time!');
})

function calcu(testparams) {
	test1 = lamCal.fromString(testparams);
	output = lamCal.reduce(test1);
	return lamCal.toString(output);
}


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
