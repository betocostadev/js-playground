const func3 = () => {
  console.log('func3 executed');
}
const func2 = () => {
  func3();
}

const func1 = () => {
  func2();
}

func1();