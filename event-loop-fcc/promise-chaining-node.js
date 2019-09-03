// The stock of our online store.
const onlineStore = {
  shirt: {
    qty: 10,
    price: 8.99
  },
  pants: {
    qty: 12,
    price: 14.99
  }
}

// purchaseItems function will receive the order and check if:
// 1 - The items are available and within the asked quantity
// 2 - return the order and the total price of the items
const purchaseItems = (order) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const items = order.items;
      let inStock = items.every(item => onlineStore[item[0]].qty >= item[1]);
      if (inStock) {
        let total = 0;
        items.forEach(item => {
          total += item[1] * onlineStore[item[0]].price
        });
        console.log(`Items in stock. Total price is ${total}.`);
        resolve([order, total]);
      } else {
        reject(`Not all of the items are in stock.`);
      }
    }, 1000);
  });
};

// Check balance will get the order and the total price and check the funds
const checkBalance = ((stockResponse) => {
  const order = stockResponse[0];
  const total = stockResponse[1];
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (order.accountBalance >= total) {
        console.log(`Order = ${order.items}. Total = ${total}`);
        resolve([order, total]);
      } else {
        reject('Not enough funds.')
      }
    }, 1000);
  });
});

// Transaction Done runs after the other two functions has already run and resolved.
const transactionDone = ((balanceDone) => {
  const order = balanceDone[0].items;
  const total = balanceDone[1]
  console.log(`Items ordered successfully!
  Your order: ${order}.
  Total price: ${total} `)
});

// Transaction failed will only occur if there is a problem
const transactionFailed = (error) => {
  console.log(error);
}

// Our order and account balance.
const order = {
  items: [['shirt', 1], ['pants', 2]],
  accountBalance: 12.89
};

// Here, we call the purchaseItems function providing our order
// The stock is checked
// then the balance is checked
// If there is an error, we catch it at the end.
purchaseItems(order)
.then((stockChecked) => {
  return checkBalance(stockChecked)
})
.then((success) => {
  return transactionDone(success);
})
.catch((error) => {
  return transactionFailed(error);
});