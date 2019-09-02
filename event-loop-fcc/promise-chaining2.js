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

const transactionDone = ((balanceDone) => {
  const order = balanceDone[0].items;
  const total = balanceDone[1]
  console.log(`Items ordered successfully!
  Your order: ${order}.
  Total price: ${total} `)
});

const transactionFailed = (error) => {
  console.log(error);
}

const order = {
  items: [['shirt', 1], ['pants', 2]],
  accountBalance: 12.89
};

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