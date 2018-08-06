const Alexa = require("alexa-sdk");
var currentLocation;
var gotoLocation;
var handlers = {
 'LaunchRequest': function() {
  this.response.speak("Hello, Welcome to SRM. I am here to help you. Where are you right now?").listen();
  this.emit(':responseReady');
 },
 'campusDirectIntent': function() {
  this.response.speak("Hello, Welcome to SRM. I am here to help you. Where are you right now?").listen();
  this.emit(':responseReady');
 },
 'currentLocationIntent': function() {
  currentLocation = this.event.request.intent.slots.currentLocation.value;
  this.response.speak("Ok, So you are at " + currentLocation + " and where are you headed").listen();
  this.emit(':responseReady');
 },

 'gotoLocationIntent': function() {
  gotoLocation = this.event.request.intent.slots.gotolocation.value;
  if ((currentLocation == "university building" || currentLocation == "UB" || currentLocation == "ub" || currentLocation == "University Building") && (gotoLocation == "tech park" || gotoLocation == "TP" || gotoLocation == "tp" || gotoLocation == "Tech Park")) {
   this.emit(':tell', "Assuming you are at University Building entrance Turn left and proceed 20 metres. Then turn right onto the Tech Park Avenue and walk another 80 metres and you will be in front of the Tech Park entrance");
  } else if (currentLocation == "library" && (gotoLocation == "tech park" || gotoLocation == "TP" || gotoLocation == "tp" || gotoLocation == "Tech Park")) {
   this.emit(':tell', "Assuming you are at Library entrance Turn left and proceed 20 metres. Then turn right onto the Tech Park Avenue and walk another 80 metres and you will be in front of the Tech Park entrance");
  } else if (currentLocation == "boys hostel" && (gotoLocation == "tech park" || gotoLocation == "TP" || gotoLocation == "tp" || gotoLocation == "Tech Park")) {
   this.emit(':tell', "Assuming you are at Boys Hostel Main gate Turn right and proceed 100 metres. Then turn left onto the Java Lane and walk another 60 metres and you will be in front of the Tech Park entrance");
   this.emit(':responseReady');
  } else if (currentLocation == "girls hostel" && (gotoLocation == "tech park" || gotoLocation == "TP" || gotoLocation == "tp" || gotoLocation == "Tech Park")) {
   this.emit(':tell', "Assuming you are at Girls Hostel Main gate proceed straight for about 100 metres. And you should be in front of the Tech Park entrance");
   this.emit(':responseReady');

  } else if ((currentLocation == "java" || currentLocation == "food court" || currentLocation == "canteen") && (gotoLocation == "tech park" || gotoLocation == "TP" || gotoLocation == "tp" || gotoLocation == "Tech Park")) {
   this.emit(':tell', "Assuming you are at Java entrance take a sharp left and proceed 60 metres             you will be in front of the Tech Park entrance");
  } else if ((currentLocation == "tech park" || currentLocation == "TP" || currentLocation == "tp" || currentLocation == "Tech Park") && (gotoLocation == "tech park" || gotoLocation == "TP" || gotoLocation == "tp" || gotoLocation == "Tech Park")) {
   this.emit(':tell', "Just turn around You already there");
  } else if ((currentLocation == "tech park" || currentLocation == "TP" || currentLocation == "tp" || currentLocation == "Tech Park") && (gotoLocation == "university building" || gotoLocation == "UB" || gotoLocation == "ub" || gotoLocation == "University Building")) {
   this.emit(':tell', "Assuming you are at Tech Park entrance Turn right and proceed 80 metres onto the Tech park avenue. Then turn left and walk another 20 metres and you will be in front of the University Building entrance");
  } else if (currentLocation == "boys hostel" && (gotoLocation == "university building" || gotoLocation == "UB" || gotoLocation == "ub" || gotoLocation == "University Building")) {
   this.emit(':tell', "Assuming you are at Boys Hostel Main gate Turn left and proceed 30 metres. You will be in front of the University Building entrance. Take caution while crossing the road");

  } else if (currentLocation == "girls hostel" && (gotoLocation == "university building" || gotoLocation == "UB" || gotoLocation == "ub" || gotoLocation == "University Building")) {
   this.emit(':tell', "Assuming you are at Girl Hostel Main gate Turn left and proceed 80 metres. You will be in front of the University Building entrance. Take caution while crossing the road");
  } else if ((currentLocation == "java" || currentLocation == "food court" || currentLocation == "canteen") && (gotoLocation == "university building" || gotoLocation == "UB" || gotoLocation == "ub" || gotoLocation == "University Building")) {
   this.emit(':tell', "Assuming you are at Java entrance Turn right and proceed 80 metres. You will be in front of the University Building entrance. Keep right and make use of the pedestrian path");
  } else if ((currentLocation == "university building" || currentLocation == "UB" || currentLocation == "ub" || currentLocation == "University Building") && (gotoLocation == "university building" || gotoLocation == "UB" || gotoLocation == "ub" || gotoLocation == "University Building")) {
   this.emit(':tell', "Just turn around You already there");
  } else if ((currentLocation == "tech park" || currentLocation == "TP" || currentLocation == "tp" || currentLocation == "Tech Park") && (gotoLocation == "library")) {
   this.emit(':tell', "Assuming you are at Tech Park entrance Turn right and proceed 80 metres onto the Tech park avenue. Then turn left and walk another 20 metres and you will be in front of the Library entrance");
  } else if (currentLocation == "library" && (gotoLocation == "library")) {
   this.emit(':tell', "Just turn around You already there");
  } else if (currentLocation == "boys hostel" && (gotoLocation == "library")) {
   this.emit(':tell', "Assuming you are at Boys Hostel Main gate Turn left and proceed 30 metres. You will be in front of the Library entrance. Take caution while crossing the road");
  } else if (currentLocation == "girls hostel" && (gotoLocation == "library")) {
   this.emit(':tell', "Assuming you are at Girl Hostel Main gate Turn left and proceed 80 metres. You will be in front of the Library entrance. Take caution while crossing the road");
  } else if ((currentLocation == "java" || currentLocation == "food court" || currentLocation == "canteen") && (gotoLocation == "library")) {
   this.emit(':tell', "Assuming you are at Java entrance Turn right and proceed 80 metres. You will be in front of the Library entrance. Keep right and make use of the pedestrian path");
  } else if ((currentLocation == "university building" || currentLocation == "UB" || currentLocation == "ub" || currentLocation == "University Building") && (gotoLocation == "library")) {
   this.emit(':tell', "Library entrance is on the ground floor of University Building");
  } else if ((currentLocation == "tech park" || currentLocation == "TP" || currentLocation == "tp" || currentLocation == "Tech Park") && (gotoLocation == "boys hostel")) {
   this.emit(':tell', "Assuming you are at Tech Park entrance Take a slight right and proceed 60 metres onto the java lane. Then turn right and walk for another 60 metres. You will be in front of the Boys Hostel Main Gate");

  } else if (currentLocation == "library" && (gotoLocation == "boys hostel")) {
   this.emit(':tell', "Assuming you are at Library entrance Take a slight right and proceed 10 metres. Then turn left and walk for another 10 metres. You will be in front of the Boys Hostel Main Gate");
  } else if (currentLocation == "boys hostel" && (gotoLocation == "boys hostel")) {
   this.emit(':tell', "Just turn around You already there");
  } else if (currentLocation == "girls hostel" && (gotoLocation == "boys hostel")) {
   this.emit(':tell', "Assuming you are at Girls Hostel Main Gate Take your left and proceed 30 metres. You will be in front of the Boys Hostel Main Gate");
  } else if ((currentLocation == "java" || currentLocation == "food court" || currentLocation == "canteen") && (gotoLocation == "boys hostel")) {
   this.emit(':tell', "Assuming you are at Java entrance Take your right and proceed 30 metres. You will be in front of the Boys Hostel Main Gate");
  } else if ((currentLocation == "university building" || currentLocation == "UB" || currentLocation == "ub" || currentLocation == "University Building") && (gotoLocation == "boys hostel")) {
   this.emit(':tell', "Assuming you are at University Building entrance Take a slight right and proceed 10 metres. Then turn left and walk for another 10 metres. You will be in front of the Boys Hostel Main Gate");
  } else if ((currentLocation == "tech park" || currentLocation == "TP" || currentLocation == "tp" || currentLocation == "Tech Park") && (gotoLocation == "girls hostel")) {
   this.emit(':tell', "Assuming you are at Tech Park entrance Take a slight right and proceed 60 metres onto the java lane. Then turn right and walk for another 60 metres. You will be in front of the Boys Hostel Main Gate");
  } else if (currentLocation == "library" && (gotoLocation == "boys hostel")) {
   this.emit(':tell', "Assuming you are at Library entrance Take a slight right and proceed 10 metres. Then turn left and walk for another 60 metres. You will be in front of the Girls Hostel Main Gate");
  } else if (currentLocation == "girls hostel" && (gotoLocation == "girls hostel")) {
   this.emit(':tell', "Just turn around You already there");

  } else if (currentLocation == "boys hostel" && (gotoLocation == "girls hostel")) {

   this.emit(':tell', "Assuming you are at Boys Hostel Main Gate Take your right and proceed 30 metres. You will be in front of the Girls Hostel Main Gate");

  } else if ((currentLocation == "java" || currentLocation == "food court" || currentLocation == "canteen") && (gotoLocation == "girls hostel")) {

   this.emit(':tell', "Assuming you are at Java entrance proceed straight 10 metres             you will be in front of the Girls Hostel Main Gate");

  } else if ((currentLocation == "university building" || currentLocation == "UB" || currentLocation == "ub" || currentLocation == "University Building") && (gotoLocation == "girls hostel")) {
   this.emit(':tell', "Assuming you are at University Building entrance Take a slight right and proceed 10 metres. Then turn left and walk for another 60 metres. You will be in front of the Girls Hostel Main Gate");
  } else if ((currentLocation == "tech park" || currentLocation == "TP" || currentLocation == "tp" || currentLocation == "Tech Park") && (gotoLocation == "java" || gotoLocation == "food court" || gotoLocation == "canteen")) {

   this.emit(':tell', "Assuming you are at Tech Park entrance Take a slight right and proceed 60 metres onto the java lane. Java entrance is just around the corner");

  } else if (currentLocation == "library" && (gotoLocation == "java" || gotoLocation == "food court" || gotoLocation == "canteen")) {

   this.emit(':tell', "Assuming you are at Library entrance Take a right and proceed 10 metres. Then turn left and walk for another 60 metres. You will be in front of the Java entrance. Keep right and make use of the pedestrian path");

  } else if (currentLocation == "girls hostel" && (gotoLocation == "java" || gotoLocation == "food court" || gotoLocation == "canteen")) {

   this.emit(':tell', "Assuming you are at Girls Hostel Main Gate proceed straight 10 metres             you will be in front of the Java entrance");

  } else if (currentLocation == "boys hostel" && (gotoLocation == "java" || gotoLocation == "food court" || gotoLocation == "canteen")) {

   this.emit(':tell', "Assuming you are at Boys Hostel Main Gate Take your right and proceed 30 metres. You will be in front of the Java entrance");

  } else if ((currentLocation == "java" || currentLocation == "food court" || currentLocation == "canteen") && (gotoLocation == "java" || gotoLocation == "food court" || gotoLocation == "canteen")) {

   this.emit(':tell', "Just turn around You already there");

  } else if ((currentLocation == "university building" || currentLocation == "UB" || currentLocation == "ub" || currentLocation == "University Building") && (gotoLocation == "java" || gotoLocation == "food court" || gotoLocation == "canteen")) {

   this.emit(':tell', "Assuming you are at University Building entrance Take a slight right and proceed 10 metres. Then turn left and walk for another 60 metres. You will be in front of the Java entrance");

  } else {

   this.emit(':tell', "Nobody told me that");

  }

 }

};


exports.handler = function(event, context, callback) {
 const alexa = Alexa.handler(event, context);
 alexa.registerHandlers(handlers);
 alexa.execute();
}