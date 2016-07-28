var Room = function(options) {
  this.name        = options.name;
  this.description = options.description;
  
  this.players = [];

  this.exit = function(player) {
    if (!player.room) {
      return;
    }
    var room = player.room;
    var index = room.players.indexOf(player);
    room.players.splice(index, 1);
  };

  this.enter = function(player) {
    this.exit(player);
    this.players.push(player);
    player.room = this;
  };

  var divider = function(str) {
    return str.split('').map(function(chr){
      return '-';
    }).join('') + '-';
  };

  this.fromPerspective = function(player) {
    return [
      this.name,
      divider(this.name),
      this.description,
      '',
      this.players.filter(function(p) {
        return player != p;
      }),
      '',
      ''
    ].join('\n');
  };

  return this;
};

module.exports = Room;
