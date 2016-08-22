(function() {
  var Room      = require('./lib/types/room');
  var Player    = require('./lib/types/player');
  var Weapon    = require('./lib/types/weapon');
  var Item      = require('./lib/types/item');
  var Db        = require('./lib/db');
  var worldData = Db().load();
  
  var p1          = worldData.players[0];
  var p2          = worldData.players[1];
  var alley       = worldData.rooms[1];
  var apple       = worldData.items[0];
  var moldyCheese = worldData.items[1];

//var docks  = new Room ({name: 'docks', description: 'a massive shipyard with battleships and trading vessels', players:[], exits: [{'s':4, 'n':1}]});
//var ship  = new Room({name:'ship', description:'The Tri-tone, a scary looking vessle, with old cannons and a little dingy', players:[], exits:[{'s':5,'n':3}]});
//var orcSea  = new Room({name:'The Orchestral Sea', description:'A turbulent sea that seems to go on forever', players:[], exits:[{'e':6,'n':4}]});
//var orcSea2  = new Room({name:'The Orchestral Sea', description:'A turbulent sea that seems to go on forever', players:[], exits:[{'e':7,'w':5}]});
//var orcSea3  = new Room({name:'The Orchestral Sea', description:'A turbulent sea that seems to go on forever', players:[], exits:[{'e':8,'w':6}]});
//var SymBay  = new Room({name:'Symphony Bay', description:'A calm bay, near what seems to be a deserted island',  players:[],exits:[{'w':9,'s':7}]});
//var mooring  = new Room({name:'Mooring', description:'An old mooring, what the hell is that doing here?', players:[], exits:[{'s':10,'e':8}]});
//var beach  = new Room({name:'beach', description:'a white sand beach, with an old beaten path that leads into the tropical forest', players:[], exits:[{'w':11,'n':9}]});
//var waterfall  = new Room({name:'waterfall', description:'a massive gleaming waterfall that seems to fall form the heavens!', players:[], exits:[{'s':12,'e':10}]});
//var orcPit  = new Room({name:'Orchestral Pit', description:'You walk through the waterfall, the earth gives way and you fall into the ORCHESTRAL PIT OF DISPAIR, where you are confronted by the egomaniac Wagner!', players:[], exits:[{'n':10}]});

//worldData.rooms.push(docks);
worldData.rooms.push(ship);

  p1.mainHand = worldData.weapons[2];
  p2.mainHand = worldData.weapons[1];

//to add items, etc
  //var moldyCheese = new Item ({name: 'moldy cheese', description: 'festering fontina', flag: ['consumable'], health: -8});
  //worldData.items.push(moldyCheese);

  Db().save();
}());

