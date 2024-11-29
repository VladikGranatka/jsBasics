function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('result');
  
    // Фіксовані курси (замініть на актуальні дані)
    const exchangeRates = {
      USD: 1,
      EUR: 0.85,
      UAH: 27
    };
  
    // Розрахунок результату конвертації
    const result = amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  
    resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
  }