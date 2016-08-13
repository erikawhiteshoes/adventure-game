(function() {
  var Player = require('./lib/types/player');
  var Weapon = require('./lib/types/weapon');
  var Item = require('./lib/types/item');
  var Db     = require('./lib/db');
  var worldData = Db().load();
  
  var p1 = worldData.players[0];
  var p2 = worldData.players[1];

  p1.mainHand = worldData.weapons[2];
  p2.mainHand = worldData.weapons[1];


  Db().save();
}());

