Array.prototype.sum = function(sumThis, _start) {
  var start = _start || 0;
  return this.reduce(function(acc, obj) {
    return acc + obj[sumThis];
  }, start);
};

// in order for a reason!
var exchange = {
  gold:   100.00,
  silver: 50.00,
  copper: 10.00
};

var newObj = function(key, val) { 
    var obj = {};
    obj[key] = val;
    return obj;
};

var balanceToCoin = function(total) {
  var balance = parseFloat(total);
  var change = Object.keys(exchange).map(function(key) {
    var coin = exchange[key];
    var remainder = balance % coin;
    var units = balance - remainder;
    balance = remainder;
    return Math.floor(units / coin);
  });
  return Object.keys(exchange).map(function(key, index) {
    return newObj(key, change[index]);
  });
};
console.log(balanceToCoin(890));
//needs to return gold:, silver:, coppers


var LineItem = function(label, qty, price) {
  this.label = label;
  this.qty = qty;
  this.price = price;
};

var purse = function(options) {
  var coinage = options;
  var transactions = [];
  var lastSuccess = false;

  var wasSuccess = function() {
    return lastSuccess;
  };

  var balance = function() {
    //I edited this probably not the right way 
    var startingBalance = 0;
    return startingBalance - transactions.reduce(function(acc, transaction) {
      return transaction.price + acc;
    }, 0);
  };

  var purchase = function(_lineItems) {
    var lineItems;

    if (typeof(lineItems) !== Array) {
      lineItems = [_lineItems];
    }

    if (lineItems.length < 1) { return; }

    if (lineItems.sum('price', 0) > balance()) {
      lastSuccess = false;
      return;
    }

    lineItems.forEach(function(lineItem) {
      //deductFromPurse(lineItem.price);
      transactions.push(lineItem);
    });

    lastSuccess = true;
  };

  return {
    purchase: purchase,
    balance: balance
  };
};

var brett = new purse({
});

