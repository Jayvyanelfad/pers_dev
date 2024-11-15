// src/enroll.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enrollment-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const enrollmentData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            course: document.getElementById('course').value
        };

        try {
            const response = await fetch('http://localhost:3000/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(enrollmentData)
            });
            const result = await response.text();
            alert(result);
            // Redirect to setup page for username & password
            window.location.href = "setup.html";
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
