function processNumbers() {
    const input = document.getElementById("phoneInput");
    const inputNumbers = input.value;
  
    // const button = document.querySelector('.button')
    // button.addEventListener('click', processNumbers( {
      
    // }))
    // window.addEventListener('click', ...arguments.)

    const numbers = inputNumbers.split(/\n/).filter(number => number.trim() !== ""); 
  
    const formattedNumbers = [];
    numbers.forEach((number, index) => {
      number = number.replace(/\D/g, "");

      if (number.length === 10 && index !== number.length-1 && number !== '') {
        number = "'" + "7" + number + "'" + ",";
        formattedNumbers.push(number);
      } else {
        formattedNumbers.push('error')
      }
    });
  
    formattedNumbers[0] = "(" + formattedNumbers[0];
    formattedNumbers[formattedNumbers.length - 1] = formattedNumbers[formattedNumbers.length - 1] + ")";
  
    document.getElementById("phoneNumbers").textContent = formattedNumbers.join("\n");
  }

  // .slice(0, -1)

 function copyFormattedNumbers() {
  const phoneNumbers = document.getElementById('phoneNumbers')
  const tempTextarea = document.createElement('textarea')
 }