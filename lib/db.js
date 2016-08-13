var Db = function() {
  var self = this;
  var glob = require('glob-fs');
  var fs = require('fs');
  var cJSON = require('circular-json');
  var strings = require('./strings');
  var capitalize = strings().capitalize;
  var singularize = strings().singularize;

  var Player = require('./types/player');
  var Weapon = require('./types/weapon');
  var Room   = require('./types/room');

  var asObj = function(pluralString) {
    return eval(singularize(capitalize(pluralString)));
  };

  var nextId = function(collection) {
    var items = collection
      .filter(function(item) {
        return item.id !== undefined;
      })
      .map(function(item) {
        return item.id;
      })
      .sort(function(a,b) {
        return parseInt(b) - parseInt(a);
      });

    var _nextId = items[items.length-1];

    return parseInt(_nextId)+1;
  };

  self.loadPlayersIntoRooms = function() {
    self.players.forEach(function(player) {
      var index = self.rooms.map(function(room) {
        return room.id;
      }).indexOf(player.room);

      if(self.rooms[index]) {
        player.room = self.rooms[index];
        self.rooms[index].players.push(player);
      }
    });
  };

  self.loadResource = function(path, object) {
    return glob()
      .readdirSync("./data/"+path+"/*.json", {})
      .map(function(file) {
        attrs = JSON.parse(fs.readFileSync(file, 'utf8'));
        return new object(attrs);
      });
  };

  self.filename = function(path, item) {
    var hyphenate = function(string) {
      return string.replace(/ /g, '-');
    };

    var pad = function(num) {
      var zeros = "00000";
      return zeros.substring(0, zeros.length - num.length) + num;
    };

    return [
      "./data/" + path + "/",
      pad(item.id || nextId(this[path])),
      ".json"
    ].join('');
  };

  self.saveResource = function(path, collection) {
    var writeData = function(path, item) {
      if (!item.id) {
        item.id = nextId(this[path]).toString();
      }
      var json = cJSON.stringify(item);
      var file = this.filename(path, item);
      fs.writeFileSync(file, json);
    };

    collection.forEach(function(item) {
      writeData(path, item);
    });
  };

  self.dbTypes = function() {
    return glob()
      .readdirSync("./data/*", {})
      .map(function(dir) {
        return dir.split('data/')[1];
      });
  };

  self.load = function() {
    self.dbTypes().forEach(function(type) {
      self[type] = self.loadResource(type, asObj(type));
    });

    self.loadPlayersIntoRooms();

    return self;
  };

  self.save = function() {
    self.dbTypes().forEach(function(type) {
      self.saveResource(type, self[type]);
    });

  };

  return this;
};

module.exports = Db;
