document.addEventListener("DOMContentLoaded", function() {
  // Get the button and result element
  const generateButton = document.getElementById("generate-button");
  const resultElement = document.getElementById("result");

  // Function to generate a random number from min to max
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to handle button click
  function handleButtonClick() {
    resultElement.innerHTML = ""; // Clear previous results

    // Generate and display 70 random numbers from 1 to 9
    for (let i = 1; i <= 70; i++) {
      const randomNumber = generateRandomNumber(1, 9);
      const listItem = document.createElement("li");
      listItem.textContent = i + ": " + randomNumber;
      resultElement.appendChild(listItem);
    }
  }

  // Attach the click event handler to the button
  generateButton.addEventListener("click", handleButtonClick);
});