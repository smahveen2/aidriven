// Get the form and result container
const form = document.getElementById("ptsd-form");
const resultContainer = document.getElementById("result");
const ptsdResult = document.getElementById("ptsd-result");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the form
    let score = 0;
    for (let i = 1; i <= 6; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    // Calculate the PTSD result based on the score
    let resultText = "";
    if (score <= 2) {
        resultText = "Your PTSD symptoms seem to be mild. However, it’s important to monitor your emotional health.";
    } else if (score <= 4) {
        resultText = "You may be experiencing moderate PTSD symptoms. Consider reaching out to a mental health professional for further support.";
    } else {
        resultText = "Your PTSD symptoms appear to be severe. We strongly recommend seeking help from a mental health professional.";
    }

    // Show the result
    ptsdResult.textContent = resultText;
    resultContainer.style.display = "block"; // Show the result section
});
