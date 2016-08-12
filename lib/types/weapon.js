var Weapon = function(options) {
  this.id          = options.id;
  this.name        = options.name;
  this.description = options.description;
  this.baseDamage  = options.baseDamage;
  this.sidedDie    = options.sidedDie;

  this.flags = [];

  this.toString = function() {
      return this.name;
  };

  this.strike = function(target) {
   var roll = Math.floor(Math.random()*this.sidedDie)+1;
   var base = this.baseDamage + roll;
   return target.receiveBlow(base); 
  };

  return this;
};

module.exports = Weapon;
