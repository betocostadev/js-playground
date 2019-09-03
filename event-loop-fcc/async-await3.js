// Generate a random delay to simulate server response delay
const generateDelay = () => Math.floor(Math.random() * 2000);

const addDiscount = (preDiscount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(preDiscount - 5.00);
    }, generateDelay());
  });
}

const addTax = (preTax) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(preTax += preTax * 0.2);
    }, generateDelay());
  });
}

const addTip = (preTip) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(preTip += preTip * 0.1);
    }, generateDelay());
  });
}

const payBill = async (bill) => {
  // Here we send the bill to get the discount first:
  const billWithDiscount = await addDiscount(bill);
  // Then we send the bill with the discount applied and wait for the price with taxes
  const billWithTax = await addTax(billWithDiscount);
  // Then we send the bill with discount and taxes to add a tip
  const finalPrice = await addTip(billWithTax);
  // And then we return the final value
  return console.log(finalPrice.toFixed(2));
}

payBill(29.90) // 32.87