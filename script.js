// Handle form submission for the contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the form data (this is just an alert for demo purposes)
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Basic validation: Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return; // Exit the function if the form is incomplete
    }

    // For demo purposes, we will just show an alert with the form data
    alert(`Thank you for reaching out, ${name}!\nWe will get back to you shortly.\n\nEmail: ${email}\nMessage: ${message}`);
    
    // Optionally, clear the form after submission
    document.getElementById("contact-form").reset();
});
