document.getElementById('member-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById('memberName').value;
    const email = document.getElementById('memberEmail').value;
    const phone = document.getElementById('memberPhone').value;
    const dob = document.getElementById('memberDOB').value;

    // Show confirmation
    const confirmationDiv = document.getElementById('confirmation');
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone Number:</strong> ${phone} <br>
        <strong>Date of Birth:</strong> ${dob}
    `;
    confirmationDiv.style.display = 'block'; // Show confirmation section

    // Hide form after confirmation
    document.getElementById('member-form').style.display = 'none'; // Hide form
});

// Function to reset the form and hide the confirmation
function resetForm() {
    document.getElementById('member-form').style.display = 'block'; // Show the form
    document.getElementById('confirmation').style.display = 'none'; // Hide confirmation
    document.getElementById('member-form').reset(); // Reset form fields
}
