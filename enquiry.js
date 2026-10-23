document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('enquiryForm');
    const successMessage = document.getElementById('successMessage');
    const sendAnotherBtn = document.getElementById('sendAnotherBtn');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide the form and show success message
            enquiryForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset the form
            enquiryForm.reset();
        });
    }

    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', function() {
            // Hide success message and show form
            successMessage.style.display = 'none';
            enquiryForm.style.display = 'flex';
        });
    }
});
