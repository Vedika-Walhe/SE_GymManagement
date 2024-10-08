document.getElementById('trainer-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents form from submitting normally

    // Get form data
    const name = document.getElementById('trainerName').value;
    const email = document.getElementById('trainerEmail').value;
    const phone = document.getElementById('trainerPhone').value;
    const specialty = document.getElementById('trainerSpecialty').value;

    // Show confirmation
    const confirmationDiv = document.getElementById('confirmation');
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone Number:</strong> ${phone} <br>
        <strong>Specialty:</strong> ${specialty}
    `;
    confirmationDiv.style.display = 'block';

    // Hide form after confirmation
    document.getElementById('trainer-form').style.display = 'none';
});

function resetForm() {
    document.getElementById('trainer-form').style.display = 'block';
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('trainer-form').reset();
}
