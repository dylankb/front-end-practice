var invoices = {
  unpaid : []
};

invoices.add = function(name, amount) {
  this.unpaid.push({
    name : name,
    amount : amount
  });
};

invoices.totalDue = function() {
  var total = 0;
  for (var i=0; i<this.unpaid.length; i++) {
    total += this.unpaid[i].amount;
  }
  return total;
};

invoices.paid = [];

invoices.payInvoice = function(name) {
  var unpaid = [];

  for (var i=0; i<this.unpaid.length; i++) {
    if (name === this.unpaid[i].name) {
      this.paid.push(this.unpaid[i]);
    }
    else {
      unpaid.push(this.unpaid[i]);
    }
  }

  this.unpaid = unpaid;
};

invoices.totalPaid = function() {
  var total = 0;
  for ( i = 0; i < this.paid.length; i++ ) {
    total += this.paid[i].amount;
  }
  return total;
};
