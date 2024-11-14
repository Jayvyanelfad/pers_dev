// src/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Registration form submission logic
    document.getElementById('register-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const registrationData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            });
            const result = await response.text();
            alert(result);
            window.location.href = "success.html";  // Redirect to success page
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Enrollment form submission logic
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
            window.location.href = "success.html";  // Redirect to success page
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
