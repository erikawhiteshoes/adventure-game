(function() {
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

  p1.mainHand = worldData.weapons[2];
  p2.mainHand = worldData.weapons[1];

//to add items, etc
  //var moldyCheese = new Item ({name: 'moldy cheese', description: 'festering fontina', flag: ['consumable'], health: -8});
  //worldData.items.push(moldyCheese);
  alley.enter(p1);
  
//How do we accumulate and save health?

  console.log(p1.attributes.health);
  console.log(p1.eat(moldyCheese));
  console.log(p1.attributes.health);
  Db().save();
}());

