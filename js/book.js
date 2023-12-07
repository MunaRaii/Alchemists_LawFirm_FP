document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Client-side validation 
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    if (!date || !time) {
        alert('Please select a valid date and time.');
        return;
    }

    // Display a confirmation message on the page
    var confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Appointment booked successfully!';
    confirmationMessage.style.color = 'green';

    var form = document.getElementById('appointmentForm');
    form.parentNode.appendChild(confirmationMessage);

    // You can also reset the form if needed
    form.reset();
});
