var Player = function(options) {
  this.name     = options.name;
  this.room     = options.room;
  this.mainHand = options.mainHand;
  this.health   = options.health;

  this.hitsTaken = [];

  this.toString = function() {
    return [
      this.name,
      'is here.'
        ].join(' ');
  };

  this.details = function() {
    return [
      this.name,
      'has',
      this.mainHand,
      'and isn\'t afraid to use it!'
    ].join(' ');
  };

  this.lookRoom = function() {
    if (!this.room) {
      return;
    }
    return this.room.fromPerspective(this);
  };

  this.look = function(target) {
    if (!target) {
      return this.lookRoom();
    }

    return target.details();
  };

  this.wield = function(weapon) {
    this.mainHand = weapon;
  };

  this.attack = function(target) {
    if (!this.mainHand) {
      return;
    };

    var damage = this.mainHand.strike(target);

    return damage;
  };

  this.receiveBlow = function(damage) {
    this.hitsTaken.push(damage);
    
    if (this.currentHealth() < (this.health*0.2)) {
      console.log('Oh, shit');
    }

    if (this.currentHealth() < 1) {
      console.log(this.name + ' is DEAD!');
    }

    return damage;
  };

  this.currentHealth = function() {
    return this.health - this.hitsTaken.reduce(function(acc, hit) {
      return acc + hit;
    }, 0);
  };

  return this;
};

module.exports = Player;
