
var config = {
	apiKey: "AIzaSyD4Y5YtEbnB4aJuGLZAAWRnB7EomhTOeUI",
	authDomain: "project1-ffd4b.firebaseapp.com",
	databaseURL: "https://project1-ffd4b.firebaseio.com",
	projectId: "project1-ffd4b",
	storageBucket: "project1-ffd4b.appspot.com",
	messagingSenderId: "528726812532"
};
			
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //User is signed in
    $("#explore").show();
    $("#create").hide();
  } else {
    // No user is signed in.
    $("#explore").hide()
    $("#create").show();
  }
});

function login(){
  var username = $("#email").val();
  var password = $("#password").val();

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    alert("Error: "+ errorMessage);

  });
  
  

}

