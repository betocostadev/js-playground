// Using Try and Catch to handle errors.
// Generate a random delay to simulate server response delay
const generateDelay = () => Math.floor(Math.random() * 2000);

// Our failure callback that will be executed by the catch statement
failureCallback = (error) => {
  const failureMessage = `Sorry, got an error! ${error}`
  return console.log(failureMessage);
}

const addDiscount = (preDiscount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // If the bill is less than 15. We will reject the promise and throw an error.
      preDiscount >=15
      ? resolve(preDiscount - 5.00)
      : reject(Error(`Cannot add a discount if the bill is less than 15.00`));
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
  try {
    const billWithDiscount = await addDiscount(bill);
    const billWithTax = await addTax(billWithDiscount);
    const finalPrice = await addTip(billWithTax);
    return console.log(finalPrice.toFixed(2));
  } catch (error) {
    failureCallback(error);
  }
}

payBill(13.90) // Sorry, got an error! Error: Cannot add a discount if the bill is less than 15.00