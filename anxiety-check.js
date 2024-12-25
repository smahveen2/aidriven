// Get the form and result container
const form = document.getElementById("anxiety-form");
const resultContainer = document.getElementById("result");
const anxietyResult = document.getElementById("anxiety-result");

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

    // Calculate the anxiety result
    let resultText = "";
    if (score <= 2) {
        resultText = "Your anxiety level seems to be low. Keep practicing self-care and mindfulness.";
    } else if (score <= 4) {
        resultText = "You might be experiencing moderate anxiety. It's a good idea to speak with a mental health professional.";
    } else {
        resultText = "Your anxiety level appears to be high. We recommend reaching out to a therapist for support.";
    }

    // Show the result
    anxietyResult.textContent = resultText;
    resultContainer.style.display = "block"; // Show the result section
});
