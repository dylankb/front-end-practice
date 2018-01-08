// To be able to process multiple invoices, we'll need to have a factory method that we can use to create invoices. The requirements for this factory function are the following:
//
// it returns an invoice object, with phone and internet properties, and a total method
// the default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!)
// the function takes an object argument with attributes to override the default values

// Build a factory function for invoices

function createInvoice(services) {
  var services = services || {};
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },
    addPayment: function(payment) {
      this.payments.push(payment);
    },
    paymentTotal: function() {
      var sum = 0;
      for(var i = 0; i < this.payments.length; i++) {
        sum += this.payments[i].total();
      }
      return sum;
    },
    amountDue: function() {
      return this.total() - this.paymentTotal();
    }
  };
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }
  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({ phone: 1000, internet: 4500 }));

console.log(invoiceTotal(invoices));

function createPayment(services) {
  services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || (this.phone + this.internet);
    }
  };
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }
  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({internet: 6500}));
payments.push(createPayment({phone: 2000}));
payments.push(createPayment({phone: 1000, internet: 4500}));
payments.push(createPayment({amount: 10000}));

// console.log(payments);
// console.log(paymentTotal(payments));

var invoice = createInvoice({phone: 1200, internet: 4000});
var payment1 = createPayment({amount: 2000});
var payment2 = createPayment({phone: 1000, internet: 1200});
var payment3 = createPayment({phone: 1000});

invoice.addPayment(payment1);

console.log(invoice.payments.length);
console.log(invoice.payments[0]);

// this.payments.forEach(function(payment) {
//   this.sum += payment;
// });
// return sum;
