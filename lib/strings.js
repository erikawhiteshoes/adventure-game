var strings = function() {
  var singularize = function(str) {
    return str.slice(0, str.length-1)
  };

  var capitalize = function(str) {
    return [
      str.charAt(0).toUpperCase(),
      str.slice(1, str.length)
    ].join('');
  };

  return {
    capitalize: capitalize,
    singularize: singularize
  };
};

module.exports = strings;
