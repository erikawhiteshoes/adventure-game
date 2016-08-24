(function() {
  var Room      = require('./lib/types/room');
  var Player    = require('./lib/types/player');
  var Weapon    = require('./lib/types/weapon');
  var Item      = require('./lib/types/item');
  var Db        = require('./lib/db');
  var worldData = Db().load();


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

var rooms = [
  new Room({id:1, name:'A dark alley', description: 'The sunlight barely penetrates here.  The walls are covered with a dark substance.', players:[], exits:[{'e':2}]}),
  new Room({name:'A busy marketplace', description: 'There are people all around you, bustling about attending to their daily business.  You can hear the sounds of metal being hammered and smell food being cooked.', players: [], exits: [{'w':1,'s':3}]}),
  new Room({name:'docks', description: 'a massive shipyard with battleships and trading vessels', players:[], exits: [{'s':4, 'n':2}]}),
  new Room({name:'ship', description:'The Tri-tone, a scary looking vessle, with old cannons and a little dingy', players:[], exits:[{'s':5,'n':3}]}),
  new Room({name:'The Orchestral Sea', description:'A turbulent sea that seems to go on forever', players:[], exits:[{'e':6,'n':4}]}),
  new Room({name:'The Orchestral Sea', description:'A turbulent sea that seems to go on forever and ever', players:[], exits:[{'e':7,'w':5}]}),
  new Room({name:'The Orchestral Sea', description:'A turbulent sea that seems to go on forever and ever and ever', players:[], exits:[{'e':8,'w':6}]}),
  new Room({name:'Symphony Bay', description:'A calm bay, near what seems to be a deserted island',  players:[],exits:[{'w':9,'s':7}]}),
  new Room({name:'Mooring', description:'An old mooring, what the hell is that doing here?', players:[], exits:[{'s':10,'e':8}]}),
  new Room({name:'beach', description:'a white sand beach, with an old beaten path that leads into the tropical forest', players:[], exits:[{'w':11,'n':9}]}),
  new Room({name:'waterfall', description:'a massive gleaming waterfall that seems to fall form the heavens!', players:[], exits:[{'s':12,'e':10}]}),
  new Room({name:'Orchestral Pit', description:'You walk through the waterfall, the earth gives way and you fall into the ORCHESTRAL PIT OF DISPAIR, where you are confronted by the egomaniac Wagner!', players:[], exits:[{'n':10}]}),
];

rooms.forEach(function(room) {
  worldData.rooms.push(room);
  console.log(room);
});

  Db().save();
}());
