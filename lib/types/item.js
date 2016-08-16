var Item = function(options){
  this.id = options.id;
  this.name = options.name;
  this.description = options.description;
  this.flags = options.flags || [];
  this.effects = options.effects || [];
};
module.exports = Item;
