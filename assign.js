document.getElementById('assign-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get selected values
    const member = document.getElementById('memberSelect').value;
    const trainer = document.getElementById('trainerSelect').value;

    // Show confirmation
    const confirmationDiv = document.getElementById('confirmation');
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <strong>Member:</strong> ${member} <br>
        <strong>Trainer:</strong> ${trainer}
    `;
    confirmationDiv.style.display = 'block'; // Show confirmation section

    // Hide form after confirmation
    document.getElementById('assign-form').style.display = 'none'; // Hide form
});

// Function to reset the form and hide the confirmation
function resetForm() {
    document.getElementById('assign-form').style.display = 'block'; // Show the form
    document.getElementById('confirmation').style.display = 'none'; // Hide confirmation
    document.getElementById('assign-form').reset(); // Reset form fields
}
