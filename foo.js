var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://hlsummerblog.firebaseIO.com");


// myFirebaseRef.set({
// 	words: "Hello World",
// 	name: "Hanah"
// });


myFirebaseRef.child("words").on("value", function(snapshot) {
	console.log(snapshot.val());
});