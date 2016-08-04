(function() {
  var Player = require('./lib/types/player');
  var Weapon = require('./lib/types/weapon');
  var Db     = require('./lib/db');

  var oph = new Weapon({
    id: 1, 
    name: 'an ophicleide',
    baseDamage: 2,
    sidedDie: 4
  });

  var cannon  = new Weapon({
    id: 2, 
    name: 'a cannon',
    baseDamage: 2,
    sidedDie: 4
  });

  var berlioz = new Player({
    id: 1, 
    name: 'Berlioz the Belligerent',
    mainHand: oph,
    health: 100
  });

  var tchaik = new Player({
    id: 2, 
    name: 'Tchaikovsky the Treacherous',
    mainHand: cannon,
    health: 100
  });

  var market = Db.getRoom(1);
  market.enter(berlioz);
  market.enter(tchaik);
  console.log(berlioz.look());
}());

