(function() {
  var Player = require('./lib/types/player');
  var Weapon = require('./lib/types/weapon');
  var Db     = require('./lib/db');
  var worldData = Db().load();
  console.log(worldData.players);

  // modify state
  //
  var crowEater = new Weapon({name: 'a crowbar', baseDamage: 24, sidedDie: 12, flags:['broken_teeth']});

  worldData.weapons.push(crowEater);

  Db().save();
}());

