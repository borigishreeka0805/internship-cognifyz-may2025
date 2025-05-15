// Color Changing Button
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function () {
  const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightsalmon'];
  const currentColorIndex = colors.indexOf(this.style.backgroundColor);
  const nextColorIndex = (currentColorIndex + 1) % colors.length;
  this.style.backgroundColor = colors[nextColorIndex];
});

// Greeting Based on Time
function displayGreeting() {
  const greetingCard = document.getElementById("greetingCard");
  greetingCard.style.display = "block";
}

// Basic Calculator
function addNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    document.getElementById('result').textContent = 'Result: ' + sum;
  } else {
    document.getElementById('result').textContent = 'Please enter valid numbers.';
  }
}
