function processNumbers() {
    const input = document.getElementById("phoneInput");
    const inputNumbers = input.value;
  
    const numbers = inputNumbers.split(/\n/).filter(number => number.trim() !== ""); 
  
    const formattedNumbers = [];
    numbers.forEach((number, index) => {
      number = number.replace(/\D/g, "");
      if (number.length === 10) {
        number = "'" + "7" + number + "'" + ",";
        formattedNumbers.push(number);
      }
    });
  
    formattedNumbers[0] = "(" + formattedNumbers[0];
    formattedNumbers[formattedNumbers.length - 1] = formattedNumbers[formattedNumbers.length - 1].slice(0, -1) + ")";
  
    document.getElementById("phoneNumbers").textContent = formattedNumbers.join("\n");
  }