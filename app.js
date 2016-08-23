(function() {
  var Db        = require('./lib/db');
  var worldData = Db().load();

  console.log("Game starting up");

  // Get the user input
  // execute the users command
  // stdin read line
  // n
  // commands = cardinalDirections + combatCmds
  // cardinalDirections 'n ne e se s sw w nw u d'.split(' ')
  // combatCmds = 'con kill flee'.split(' ')
  // found = false
  // for each cmd in commands
  //   if cmd === playerCmd
  //     found == true
  //     break
  // return found


  //Db().save();
}());

