function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
      handleEven();
    } else {
      handleOdd();
    }
  }
  
  // Колбек-функції
  function handleEven() {
    console.log("Число парне");
  }
  
  function handleOdd() {
    console.log("Число непарне");
  }
  
  // Виклик функції handleNum
  handleNum(5, handleEven, handleOdd); // Виведе "Число непарне"
  handleNum(4, handleEven, handleOdd); // Виведе "Число парне"