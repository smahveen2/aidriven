// Get the form and result container
const form = document.getElementById("phobias-form");
const resultContainer = document.getElementById("result");
const phobiaResult = document.getElementById("phobia-result");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the form
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    // Calculate the phobia result
    let resultText = "";
    if (score <= 2) {
        resultText = "Your phobia level seems to be low. You may experience some fears, but they don’t interfere with your daily life.";
    } else if (score <= 4) {
        resultText = "You might be experiencing moderate phobias. It’s a good idea to speak with a mental health professional.";
    } else {
        resultText = "Your phobia level appears to be high. We recommend reaching out to a therapist for support.";
    }

    // Show the result
    phobiaResult.textContent = resultText;
    resultContainer.style.display = "block"; // Show the result section
});
