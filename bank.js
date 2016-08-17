Array.prototype.sum = function(sumThis, _start) {
  var start = _start || 0;
  return this.reduce(function(acc, obj) {
    return acc + obj[sumThis];
  }, start);
};

var exchange = function() {
  return {
    copper: 10,
    silver: 50,
    gold:   100
  };
};

var balanceToCoin = function(balance) {
  var coins = [],
  total     = 0;
  [100, 50, 10].forEach(function(coin) {
    while (total + coin <= balance) {
      coins.push(coin);
      total += coin;
    }
  });
  return coins.reduce(function(acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  },
  {});
};
console.log(balanceToCoin(23890));
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

