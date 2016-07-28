(function() {
  var Player = require('./lib/types/player');
  var Room   = require('./lib/types/room');
  var Weapon = require('./lib/types/weapon');

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

  var alley = new Room({
    name: 'A dark alley',
    description: 'The sunlight barely penetrates here.  The walls are covered with a dark substance.'
  });

  var market = new Room({
    name: 'A busy marketplace',
    description: 'There are people all around you, bustling about attending to their daily business.  You can hear the sounds of metal being hammered and smell food being cooked.'
  });


market.enter(tchaik);

alley.enter(berlioz);
console.log(berlioz.look());

market.enter(berlioz);
console.log(berlioz.look());

console.log(tchaik.look(berlioz));
console.log(berlioz.look(tchaik));

  while (
    berlioz.currentHealth() > 0 && 
    tchaik.currentHealth() > 0) {
    tchaik.attack(berlioz);
    berlioz.attack(tchaik);
    console.log(tchaik.attack(berlioz));
    console.log(berlioz.attack(tchaik));
  }

}());

